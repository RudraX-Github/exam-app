import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, XCircle, AlertCircle, RefreshCw, ChevronRight, BookOpen, Code, Terminal, Globe, Award, Cpu, Layers, Database, ArrowRight, Keyboard, Lightbulb, LayoutGrid, Timer } from 'lucide-react';

// --- HELPER FOR GRADING ---
const checkAnswer = (question, userAnswer) => {
  if (!userAnswer) return false;
  
  if (question.type === 'mcq') {
    return userAnswer === question.correct;
  }
  
  if (question.type === 'text') {
    const normalizedUser = String(userAnswer).trim().toLowerCase();
    return question.acceptableAnswers.some(ans => normalizedUser === ans.toLowerCase());
  }

  if (question.type === 'code') {
    const normalizedCode = String(userAnswer).toLowerCase();
    return question.requiredKeywords.every(keyword => normalizedCode.includes(keyword.toLowerCase()));
  }

  return false;
};

// --- PYTHON DATA ---
const PYTHON_QUESTIONS = [
  {
    id: 1,
    section: "Fundamentals",
    type: "mcq",
    marks: 3,
    question: "What is the primary difference between a List and a Tuple in Python?",
    options: ["Lists are immutable, Tuples are mutable.", "Lists are mutable, Tuples are immutable.", "Lists can only hold integers.", "No difference."],
    correct: 1,
    hint: "Think about which one uses brackets [] (changeable) vs parentheses () (fixed).",
    explanation: "Lists [] are mutable (changeable). Tuples () are immutable (unchangeable)."
  },
  {
    id: 2,
    section: "Fundamentals",
    type: "text",
    marks: 4,
    question: "What is the output of the following code? print(int(3.99))",
    acceptableAnswers: ["3"],
    hint: "Integer conversion does not round to the nearest whole number; it simply cuts off the decimal.",
    explanation: "int() truncates the decimal part towards zero. It does not round up."
  },
  {
    id: 3,
    section: "Control Structures",
    type: "code",
    marks: 5,
    question: "Write a Python one-liner (Ternary) to assign 10 to 'x' if 'y' is True, otherwise 5.",
    requiredKeywords: ["10", "if", "y", "else", "5"],
    hint: "The pattern is: `variable = value_if_true if condition else value_if_false`.",
    explanation: "Correct syntax: x = 10 if y else 5"
  },
  {
    id: 4,
    section: "Operators",
    type: "text",
    marks: 3,
    question: "Type the symbol used for Floor Division in Python.",
    acceptableAnswers: ["//"],
    hint: "It looks like the standard division symbol, but doubled.",
    explanation: "// is the floor division operator."
  },
  {
    id: 5,
    section: "Functions",
    type: "mcq",
    marks: 3,
    question: "How to define a function accepting arbitrary keyword arguments?",
    options: ["def func(*args):", "def func(**kwargs):", "def func(args[]):", "def func(key=val):"],
    correct: 1,
    hint: "Keyword arguments are stored as a Dictionary (Key-Value pairs).",
    explanation: "**kwargs collects keyword arguments into a dictionary."
  },
  {
    id: 6,
    section: "Memory",
    type: "text",
    marks: 3,
    question: "Which built-in function returns the unique memory address of an object?",
    acceptableAnswers: ["id", "id()"],
    hint: "It is a 2-letter function name representing 'identity'.",
    explanation: "id() returns the identity (memory address) of an object."
  },
  {
    id: 7,
    section: "Loops",
    type: "code",
    marks: 5,
    question: "Write a 'for' loop using range() to print numbers 0 to 4.",
    requiredKeywords: ["for", "in", "range", "print"],
    hint: "range(n) generates numbers from 0 up to (but not including) n.",
    explanation: "for i in range(5): print(i)"
  },
  {
    id: 8,
    section: "Strings",
    type: "text",
    marks: 4,
    question: "Type the output of: print('Python'[::-1])",
    acceptableAnswers: ["nohtyp"],
    hint: "A negative step in slicing reads the string backwards.",
    explanation: "The slice [::-1] reverses the string."
  },
  {
    id: 9,
    section: "Exceptions",
    type: "mcq",
    marks: 3,
    question: "When does the 'else' block in try...except run?",
    options: ["Always", "When exception occurs", "When NO exception occurs", "Only if finally fails"],
    correct: 2,
    hint: "It's the opposite of the 'except' block.",
    explanation: "Else runs only if the try block completes without errors."
  },
  {
    id: 10,
    section: "File Handling",
    type: "text",
    marks: 3,
    question: "Which file mode ('r', 'w', 'a') opens a file for appending?",
    acceptableAnswers: ["a", "'a'", "\"a\""],
    hint: "Think of the word 'Append'.",
    explanation: "'a' appends to the end of the file."
  },
  {
    id: 11,
    section: "List Comprehension",
    type: "code",
    marks: 6,
    question: "Write a list comprehension to create a list of squares for numbers 1, 2, 3. Expected: [1, 4, 9]",
    requiredKeywords: ["[", "]", "for", "**", "2"], 
    hint: "Format: `[expression for item in list]`. Use `**` for power.",
    explanation: "[x**2 for x in [1,2,3]]"
  },
  {
    id: 12,
    section: "OOP",
    type: "text",
    marks: 4,
    question: "What is the name of the constructor method in a Python class?",
    acceptableAnswers: ["__init__", "__init__", "init"],
    hint: "It starts and ends with double underscores.",
    explanation: "__init__ is the initializer method."
  },
  {
    id: 13,
    section: "Modules",
    type: "text",
    marks: 5,
    question: "Complete the check: if __name__ == '________':",
    acceptableAnswers: ["__main__", "\"__main__\"", "'__main__'"],
    hint: "This string indicates the script is being run as the main program.",
    explanation: "if __name__ == '__main__': checks if the script is running directly."
  },
  {
    id: 14,
    section: "Higher Order",
    type: "mcq",
    marks: 6,
    question: "Output: list(map(lambda x: x + 1, [1, 2, 3]))",
    options: ["[1, 2, 3]", "[2, 3, 4]", "[1, 2, 3, 1]", "Error"],
    correct: 1,
    hint: "Map applies the function (x + 1) to every item in the list.",
    explanation: "Adds 1 to every element."
  },
  {
    id: 15,
    section: "Web Scraping",
    type: "mcq",
    marks: 8,
    question: "Best library for parsing HTML tree?",
    options: ["Requests", "BeautifulSoup", "NumPy", "PyGame"],
    correct: 1,
    hint: "Named after 'Alice in Wonderland' soup.",
    explanation: "BeautifulSoup parses HTML/XML documents."
  },
  {
    id: 16,
    section: "RegEx",
    type: "code",
    marks: 6,
    question: "Use re.findall to find all digits in text 'User99'. (Hint: use \\d)",
    requiredKeywords: ["re.findall", "\\d"],
    hint: "The function takes a pattern and a string: `re.findall(pattern, string)`",
    explanation: "re.findall(r'\\d+', 'User99')"
  }
];

// --- C++ DATA ---
const CPP_QUESTIONS = [
  {
    id: 1,
    section: "Basics",
    type: "text",
    marks: 3,
    question: "Which object is used for standard output in C++? (Do not include std::)",
    acceptableAnswers: ["cout"],
    hint: "Console OUTput.",
    explanation: "cout is the standard output stream."
  },
  {
    id: 2,
    section: "Basics",
    type: "code",
    marks: 4,
    question: "Write the line of code to include the Input/Output stream library.",
    requiredKeywords: ["#include", "<iostream>"],
    hint: "It stands for Input Output Stream.",
    explanation: "#include <iostream>"
  },
  {
    id: 3,
    section: "Encapsulation",
    type: "mcq",
    marks: 3,
    question: "Which keyword acts as a pointer to the current object instance?",
    options: ["self", "me", "this", "current"],
    correct: 2,
    hint: "Refers to 'this' specific object.",
    explanation: "'this' is a pointer to the object itself."
  },
  {
    id: 4,
    section: "OOP",
    type: "text",
    marks: 3,
    question: "By default, are members of a 'class' public or private?",
    acceptableAnswers: ["private"],
    hint: "Unlike Structs, Classes hide their data by default.",
    explanation: "Class members are private by default in C++."
  },
  {
    id: 5,
    section: "Constructors",
    type: "text",
    marks: 3,
    question: "What symbol is placed before the class name to define a Destructor?",
    acceptableAnswers: ["~", "tilde"],
    hint: "A squiggly line character.",
    explanation: "The tilde (~) defines the destructor."
  },
  {
    id: 6,
    section: "Inheritance",
    type: "code",
    marks: 5,
    question: "Write the syntax to define class 'Car' inheriting Publicly from class 'Vehicle'.",
    requiredKeywords: ["class", "Car", ":", "public", "Vehicle"],
    hint: "Use a colon `:` to indicate inheritance.",
    explanation: "class Car : public Vehicle { ... };"
  },
  {
    id: 7,
    section: "Memory",
    type: "text",
    marks: 4,
    question: "Which keyword allocates memory on the heap?",
    acceptableAnswers: ["new"],
    hint: "Opposite of 'delete'.",
    explanation: "'new' allocates memory dynamically."
  },
  {
    id: 8,
    section: "Polymorphism",
    type: "mcq",
    marks: 3,
    question: "What is Method Overloading?",
    options: ["Same name, different parameters", "Same name, different return type only", "Same name, same parameters in child class", "Hiding a function"],
    correct: 0,
    hint: "Loading the same method name with different tasks based on inputs.",
    explanation: "Overloading allows multiple functions with the same name but different signatures."
  },
  {
    id: 9,
    section: "Exception Handling",
    type: "code",
    marks: 5,
    question: "Write a catch block that catches ALL exceptions.",
    requiredKeywords: ["catch", "(...)"],
    hint: "Use three dots (ellipsis) inside the parenthesis.",
    explanation: "catch(...) { // handle all }"
  },
  {
    id: 10,
    section: "Inheritance",
    type: "text",
    marks: 5,
    question: "To call a static member 'count' from class 'User', what operator do you use? (User__count)",
    acceptableAnswers: ["::"],
    hint: "Scope Resolution Operator.",
    explanation: "The scope resolution operator :: is used (User::count)."
  }
];

// --- DATA SCIENCE DATA ---
const DATASCIENCE_QUESTIONS = [
  {
    id: 1,
    section: "Numpy",
    type: "mcq",
    marks: 3,
    question: "What is the key difference between a NumPy array and a Python List?",
    options: ["NumPy arrays are slower", "NumPy arrays are homogeneous and fixed-size", "NumPy arrays can hold mixed types", "Lists cannot be resized"],
    correct: 1,
    hint: "NumPy arrays are optimized for math, so they require all elements to be the same type.",
    explanation: "NumPy arrays are homogeneous and densely packed."
  },
  {
    id: 2,
    section: "Pandas",
    type: "text",
    marks: 3,
    question: "Which Pandas data structure represents a 2D labeled array? (Type the name)",
    acceptableAnswers: ["dataframe", "pd.dataframe"],
    hint: "It's like an Excel sheet or SQL table.",
    explanation: "DataFrame."
  },
  {
    id: 3,
    section: "SQL",
    type: "code",
    marks: 5,
    question: "Write a SQL query to select all columns from table 'Users'.",
    requiredKeywords: ["SELECT", "*", "FROM", "Users"],
    hint: "Use the asterisk * wildcard.",
    explanation: "SELECT * FROM Users;"
  },
  {
    id: 4,
    section: "Numpy Attributes",
    type: "text",
    marks: 4,
    question: "Which array attribute returns a tuple of dimensions (rows, cols)?",
    acceptableAnswers: [".shape", "shape"],
    hint: "Describes the 'shape' of the matrix.",
    explanation: ".shape returns the dimensions."
  },
  {
    id: 5,
    section: "SQL Filters",
    type: "mcq",
    marks: 3,
    question: "Which SQL clause is used to filter records?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
    correct: 2,
    hint: "It specifies 'where' to look for data meeting a condition.",
    explanation: "WHERE filters rows."
  },
  {
    id: 6,
    section: "Pandas IO",
    type: "code",
    marks: 4,
    question: "Write the Pandas function to read a file named 'data.csv'.",
    requiredKeywords: ["pd.read_csv", "data.csv"],
    hint: "pd.read_...",
    explanation: "pd.read_csv('data.csv')"
  },
  {
    id: 7,
    section: "Pandas",
    type: "text",
    marks: 3,
    question: "What method fills missing NaN values in a DataFrame?",
    acceptableAnswers: ["fillna", "fillna()", ".fillna"],
    hint: "Literally 'fill NA'.",
    explanation: "fillna() fills NA/NaN values."
  },
  {
    id: 8,
    section: "Numpy",
    type: "code",
    marks: 5,
    question: "Write code to import numpy as 'np'.",
    requiredKeywords: ["import", "numpy", "as", "np"],
    hint: "Standard Python import alias syntax.",
    explanation: "import numpy as np"
  },
  {
    id: 9,
    section: "SQL Joins",
    type: "text",
    marks: 5,
    question: "Which JOIN returns matched records from the Left table even if no match in Right?",
    acceptableAnswers: ["left", "left join"],
    hint: "It keeps everything on the 'Left'.",
    explanation: "LEFT JOIN."
  },
  {
    id: 10,
    section: "Pandas Slicing",
    type: "mcq",
    marks: 5,
    question: "Difference between .loc and .iloc?",
    options: [".loc is integer-based, .iloc is label-based", ".loc is label-based, .iloc is integer-based", "Both are same", ".loc is for rows, .iloc for columns"],
    correct: 1,
    hint: "iLoc stands for Integer LOCation.",
    explanation: ".loc is label-based, .iloc is integer-based."
  }
];

const SUBJECTS = {
  python: {
    id: 'python',
    title: 'Python Masterclass',
    description: 'Coding, Text Inputs & Logic',
    icon: <Terminal className="w-6 h-6" />,
    color: 'blue',
    questions: PYTHON_QUESTIONS
  },
  cpp: {
    id: 'cpp',
    title: 'C++ Architect',
    description: 'OOP Syntax & Memory',
    icon: <Cpu className="w-6 h-6" />,
    color: 'indigo',
    questions: CPP_QUESTIONS
  },
  datascience: {
    id: 'datascience',
    title: 'Data & SQL Pro',
    description: 'Queries, Pandas & Numpy',
    icon: <Database className="w-6 h-6" />,
    color: 'emerald',
    questions: DATASCIENCE_QUESTIONS
  }
};

const App = () => {
  const [gameState, setGameState] = useState('select'); 
  const [currentSubject, setCurrentSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes
  const [isHintVisible, setIsHintVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (gameState === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'quiz') {
      setGameState('summary'); // Auto-submit to summary when time ends
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const selectSubject = (subjectId) => {
    setCurrentSubject(SUBJECTS[subjectId]);
    setGameState('start');
  };

  const startExam = () => {
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setTimeLeft(60 * 60); // Reset to 60 mins
    setIsHintVisible(false);
  };

  const handleAnswerChange = (value) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: value
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentSubject.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsHintVisible(false);
    } else {
      setGameState('summary');
    }
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    setIsHintVisible(false);
    setGameState('quiz');
  };

  const calculateResult = () => {
    let totalScore = 0;
    currentSubject.questions.forEach((q, index) => {
      const isCorrect = checkAnswer(q, userAnswers[index]);
      if (isCorrect) {
        totalScore += q.marks;
      }
    });
    setScore(totalScore);
    setGameState('result');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // --- UI COMPONENTS ---

  const SubjectSelectionScreen = () => (
    <div className="max-w-5xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Tech Certification Hub</h1>
        <p className="text-slate-500 text-lg">Select your track. Comprehensive 60-Minute Exams.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-4">
        {Object.values(SUBJECTS).map((sub) => (
          <button
            key={sub.id}
            onClick={() => selectSubject(sub.id)}
            className={`bg-white rounded-xl shadow-lg p-8 border-2 border-transparent transition-all hover:-translate-y-1 hover:shadow-xl group
              ${sub.id === 'python' ? 'hover:border-blue-400' : ''}
              ${sub.id === 'cpp' ? 'hover:border-indigo-400' : ''}
              ${sub.id === 'datascience' ? 'hover:border-emerald-400' : ''}
            `}
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors
              ${sub.id === 'python' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : ''}
              ${sub.id === 'cpp' ? 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' : ''}
              ${sub.id === 'datascience' ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' : ''}
            `}>
              {sub.icon}
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{sub.title}</h2>
            <p className="text-slate-500 mb-6">{sub.description}</p>
            <div className="flex items-center text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-800 transition-colors">
              Start Exam <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const StartScreen = () => {
    const bgColor = currentSubject.color === 'blue' ? 'bg-blue-600' : currentSubject.color === 'indigo' ? 'bg-indigo-600' : 'bg-emerald-600';
    
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className={`p-8 text-center ${bgColor}`}>
          <div className="mx-auto w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{currentSubject.title}</h1>
          <p className="text-white/80">60-Minute Interactive Examination</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-700 flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4" /> Exam Features
            </h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-orange-500" /> 60 Minute Time Limit
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-500" /> Hints available for every question
              </li>
              <li className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-blue-500" /> Review all answers before submitting
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
              <button onClick={() => setGameState('select')} className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-4 rounded-lg">
                Back
              </button>
              <button onClick={startExam} className={`flex-[2] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 ${bgColor} brightness-110 hover:brightness-125`}>
                <Play className="w-5 h-5" /> Start Examination
              </button>
          </div>
        </div>
      </div>
    );
  };

  const QuizScreen = () => {
    const question = currentSubject.questions[currentQuestionIndex];
    const answer = userAnswers[currentQuestionIndex];
    const isAnswered = answer !== undefined && answer !== "";

    const headerColor = currentSubject.color === 'blue' ? 'bg-slate-800' : currentSubject.color === 'indigo' ? 'bg-indigo-900' : 'bg-emerald-900';
    const accentColor = currentSubject.color === 'blue' ? 'text-blue-600' : currentSubject.color === 'indigo' ? 'text-indigo-600' : 'text-emerald-600';
    const ringColor = currentSubject.color === 'blue' ? 'ring-blue-500' : currentSubject.color === 'indigo' ? 'ring-indigo-500' : 'ring-emerald-500';

    return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
        {/* Header */}
        <div className={`p-4 text-white flex justify-between items-center ${headerColor}`}>
          <div className="flex items-center gap-3">
            <span className="font-mono bg-white/20 px-3 py-1 rounded text-sm">
              Q{currentQuestionIndex + 1}/{currentSubject.questions.length}
            </span>
            <span className="text-slate-300 text-sm flex items-center gap-2 uppercase tracking-wide">
               {question.type} QUESTION
            </span>
          </div>
          <div className="font-mono text-xl font-bold text-white/80">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress */}
        <div className="w-full bg-slate-200 h-2">
          <div className={`h-2 transition-all duration-300 bg-${currentSubject.color}-600`}
            style={{ width: `${((currentQuestionIndex + 1) / currentSubject.questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Content */}
        <div className="p-8 flex-grow">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Marks: {question.marks}</span>
            <div className="flex gap-2">
               <button 
                  onClick={() => setIsHintVisible(!isHintVisible)}
                  className="flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-orange-600 bg-orange-50 px-3 py-1 rounded-full transition-colors"
                >
                  <Lightbulb className="w-3 h-3" /> {isHintVisible ? "Hide Hint" : "Show Hint"}
                </button>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-800 mb-4 leading-relaxed">
            {question.question}
          </h2>

          {isHintVisible && (
            <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm text-yellow-800 italic animate-fadeIn">
                <strong>Hint:</strong> {question.hint}
            </div>
          )}

          {/* DYNAMIC INPUT AREA */}
          <div className="mt-2">
            
            {/* 1. MCQ INPUT */}
            {question.type === 'mcq' && (
              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerChange(idx)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between group
                      ${answer === idx 
                        ? `border-${currentSubject.color}-600 bg-${currentSubject.color}-50 text-${currentSubject.color}-900` 
                        : `border-slate-200 hover:border-${currentSubject.color}-300 hover:bg-slate-50 text-slate-700`
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border
                        ${answer === idx ? `bg-${currentSubject.color}-600 text-white border-${currentSubject.color}-600` : 'bg-white text-slate-500 border-slate-300'}
                      `}>{String.fromCharCode(65 + idx)}</span>
                      {option}
                    </span>
                    {answer === idx && <CheckCircle className={`w-5 h-5 text-${currentSubject.color}-600`} />}
                  </button>
                ))}
              </div>
            )}

            {/* 2. TEXT INPUT */}
            {question.type === 'text' && (
              <div>
                <textarea 
                  value={answer || ''}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  placeholder="Type your answer here..."
                  className={`w-full min-h-[120px] p-4 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 ${ringColor} border-slate-300 resize-y`}
                />
                <p className="text-sm text-slate-400 mt-2">Answer is case insensitive.</p>
              </div>
            )}

            {/* 3. CODE INPUT */}
            {question.type === 'code' && (
              <div>
                <textarea
                  value={answer || ''}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  placeholder="// Write your code here..."
                  spellCheck="false"
                  className={`w-full min-h-[300px] p-4 font-mono text-base bg-slate-900 text-green-400 rounded-lg focus:outline-none focus:ring-2 ${ringColor} resize-y`}
                />
                <p className="text-sm text-slate-400 mt-2">Make sure to include required keywords.</p>
              </div>
            )}

          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <button 
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            className="text-slate-500 font-medium px-4 py-2 hover:bg-slate-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          
          <button
            onClick={nextQuestion}
            className={`px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all
               ${isAnswered ? `bg-${currentSubject.color}-600 text-white shadow-lg` : 'bg-slate-200 text-slate-500'}
            `}
          >
            {currentQuestionIndex === currentSubject.questions.length - 1 ? 'Review & Submit' : 'Next Question'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  const SummaryScreen = () => {
    const answeredCount = Object.keys(userAnswers).length;
    const totalCount = currentSubject.questions.length;
    const btnColor = currentSubject.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : currentSubject.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-emerald-600 hover:bg-emerald-700';

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Exam Summary</h2>
            <p className="text-slate-500 mb-8">Review your answers before final submission. Click a number to modify your answer.</p>

            <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-8">
                {currentSubject.questions.map((q, idx) => {
                    const isAnswered = userAnswers[idx] !== undefined && userAnswers[idx] !== "";
                    return (
                        <button
                            key={idx}
                            onClick={() => jumpToQuestion(idx)}
                            className={`h-12 w-12 rounded-lg font-bold text-sm transition-all border-2
                                ${isAnswered 
                                    ? `bg-${currentSubject.color}-100 border-${currentSubject.color}-500 text-${currentSubject.color}-700` 
                                    : 'bg-slate-100 border-slate-300 text-slate-400 hover:border-slate-400'}
                            `}
                        >
                            {idx + 1}
                        </button>
                    )
                })}
            </div>

            <div className="flex justify-between items-center border-t pt-6">
                <div className="text-sm text-slate-500">
                    <strong>{answeredCount}</strong> of <strong>{totalCount}</strong> questions answered
                </div>
                <button 
                    onClick={calculateResult}
                    className={`${btnColor} text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg transform transition-all hover:scale-105`}
                >
                    Submit Final Exam
                </button>
            </div>
        </div>
    )
  }

  const ResultScreen = () => {
    let maxMarks = 0;
    currentSubject.questions.forEach(q => maxMarks += q.marks);
    const passed = (score / maxMarks) >= 0.65;
    const colorClass = passed ? 'green' : 'red';

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden text-center p-10">
          <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 border-4
            ${passed ? 'bg-green-100 border-green-500 text-green-600' : 'bg-red-100 border-red-500 text-red-600'}
          `}>
            {passed ? <Award className="w-12 h-12" /> : <AlertCircle className="w-12 h-12" />}
          </div>
          
          <h2 className="text-4xl font-bold text-slate-800 mb-2">
            {passed ? "Certification Granted!" : "Certification Failed"}
          </h2>
          <p className="text-slate-500 mb-6">
            You scored <span className={`font-bold text-2xl text-${colorClass}-600`}>{score}</span> / {maxMarks}
          </p>
          
          <div className="flex justify-center gap-4">
             <button onClick={() => setGameState('review')} className={`bg-${currentSubject.color}-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg`}>
                Review Answers
            </button>
            <button onClick={() => setGameState('select')} className="text-slate-500 font-medium px-6 py-3 hover:bg-slate-100 rounded-lg">
                Home
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ReviewScreen = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Answer Key & Explanations</h2>
          <button onClick={() => setGameState('select')} className="text-slate-600 px-4 py-2 hover:bg-slate-200 rounded-lg">Home</button>
        </div>

        <div className="space-y-6">
          {currentSubject.questions.map((q, idx) => {
            const userAnswer = userAnswers[idx];
            const isCorrect = checkAnswer(q, userAnswer);
            
            return (
              <div key={idx} className={`bg-white rounded-lg shadow p-6 border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                <div className="flex justify-between mb-4">
                  <span className="font-mono text-sm text-slate-400">Q{idx + 1} ({q.marks} Marks) • {q.type.toUpperCase()}</span>
                  {isCorrect 
                    ? <span className="text-green-600 font-bold flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Correct</span>
                    : <span className="text-red-500 font-bold flex items-center gap-1"><XCircle className="w-4 h-4" /> Incorrect</span>
                  }
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3">{q.question}</h3>
                
                {/* USER ANSWER DISPLAY */}
                <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase">Your Answer:</span>
                    {q.type === 'mcq' ? (
                        <div className={`p-2 rounded mt-1 ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                            {q.options[userAnswer] || "Skipped"}
                        </div>
                    ) : (
                        <div className={`p-2 rounded mt-1 font-mono text-sm border ${isCorrect ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                            {String(userAnswer || "Skipped")}
                        </div>
                    )}
                </div>

                {/* CORRECT ANSWER DISPLAY */}
                {!isCorrect && (
                   <div className="mb-4">
                     <span className="text-xs font-bold text-slate-400 uppercase">Correct Answer:</span>
                     {q.type === 'mcq' ? (
                        <div className="p-2 bg-slate-100 text-slate-700 rounded mt-1">{q.options[q.correct]}</div>
                     ) : (
                        <div className="p-2 bg-slate-100 text-slate-700 rounded mt-1 font-mono text-sm">
                            {q.type === 'text' ? q.acceptableAnswers[0] : `Contains: ${q.requiredKeywords.join(', ')}`}
                        </div>
                     )}
                   </div>
                )}

                <div className={`p-4 rounded text-sm bg-${currentSubject.color}-50 text-${currentSubject.color}-900`}>
                  <span className="font-bold block mb-1">Explanation:</span>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 font-sans">
      {gameState === 'select' && <SubjectSelectionScreen />}
      {gameState === 'start' && <StartScreen />}
      {gameState === 'quiz' && <QuizScreen />}
      {gameState === 'summary' && <SummaryScreen />}
      {gameState === 'result' && <ResultScreen />}
      {gameState === 'review' && <ReviewScreen />}
    </div>
  );
};

export default App;