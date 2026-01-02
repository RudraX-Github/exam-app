import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { 
  Play, CheckCircle, XCircle, AlertCircle, 
  ChevronRight, ChevronLeft, Clock, HelpCircle, 
  LayoutGrid, Award, Home, Terminal, 
  Cpu, Database, Code, LogOut, Save, BarChart2,
  Loader2, User, UserPlus, LogIn, CheckSquare, Square,
  ShieldAlert, Eye, Lock, History
} from 'lucide-react';

/**
 * 🚀 ENTERPRISE-GRADE REACT EXAM PLATFORM (v8.0 - Dynamic Question Engine)
 * * Key Update: 
 * - Implemented advanced randomization engine.
 * - Pools 30+ questions per subject.
 * - Selects exactly 5 random questions per selected topic for the exam session.
 */

// ==========================================
// 1. DATA LAYER (30+ Questions Per Subject)
// ==========================================

const QUESTIONS_DB = {
  python: [
    // --- FUNDAMENTALS ---
    { id: 101, topic: "Fundamentals", type: "mcq", marks: 3, question: "What is the output of print(type([]) is list)?", options: ["True", "False", "Error", "None"], correct: 0, hint: "Checks type.", explanation: "[] creates a list." },
    { id: 102, topic: "Fundamentals", type: "mcq", marks: 4, question: "Which operator performs floor division?", options: ["/", "//", "%", "**"], correct: 1, hint: "Double slash.", explanation: "// truncates decimal." },
    { id: 103, topic: "Fundamentals", type: "mcq", marks: 3, question: "What is the result of 2 ** 3?", options: ["6", "8", "9", "5"], correct: 1, hint: "Power.", explanation: "2 to the power of 3." },
    { id: 104, topic: "Fundamentals", type: "mcq", marks: 3, question: "Which is not a core datatype?", options: ["List", "Tuple", "Class", "Dictionary"], correct: 2, hint: "User defined.", explanation: "Class is a blueprint." },
    { id: 105, topic: "Fundamentals", type: "mcq", marks: 4, question: "Output of bool('False')?", options: ["True", "False", "Error", "None"], correct: 0, hint: "Non-empty string.", explanation: "Non-empty strings are Truthy." },

    // --- COLLECTIONS ---
    { id: 106, topic: "Collections", type: "mcq", marks: 3, question: "Which is immutable?", options: ["List", "Set", "Dictionary", "Tuple"], correct: 3, hint: "Parentheses.", explanation: "Tuples are immutable." },
    { id: 107, topic: "Collections", type: "mcq", marks: 5, question: "Select correct dictionary syntax.", options: ["d = {'a': 1}", "d = ('a', 1)", "d = ['a': 1]", "d = {a = 1}"], correct: 0, hint: "Curly braces.", explanation: "Dictionaries use {}." },
    { id: 108, topic: "Collections", type: "mcq", marks: 4, question: "Add element to end of list?", options: ["push()", "add()", "append()", "insert()"], correct: 2, hint: "Append.", explanation: "list.append()." },
    { id: 109, topic: "Collections", type: "mcq", marks: 4, question: "Symmetric difference operator?", options: ["&", "|", "^", "-"], correct: 2, hint: "XOR.", explanation: "^ operator." },
    { id: 110, topic: "Collections", type: "mcq", marks: 5, question: "Slice last 3 elements?", options: ["L[-3:]", "L[:-3]", "L[3:]", "L[-3]"], correct: 0, hint: "Negative slicing.", explanation: "L[-3:]." },
    { id: 111, topic: "Collections", type: "mcq", marks: 4, question: "Remove item from set?", options: ["remove()", "del()", "delete()", "pop(index)"], correct: 0, hint: "Remove.", explanation: "set.remove()." },

    // --- CONTROL FLOW ---
    { id: 112, topic: "Control Flow", type: "mcq", marks: 5, question: "List comprehension for even squares?", options: ["[x**2 for x in range(10) if x%2==0]", "[x^2 for x in range(10) where x%2==0]", "(x**2 for x in range(10) if x%2==0)", "[x*2 for x in range(10)]"], correct: 0, hint: "Standard syntax.", explanation: "Correct comprehension." },
    { id: 113, topic: "Control Flow", type: "mcq", marks: 3, question: "What does 'break' do?", options: ["Skip iteration", "Exit loop", "Restart", "Exit program"], correct: 1, hint: "Stop loop.", explanation: "Terminates loop." },
    { id: 114, topic: "Control Flow", type: "mcq", marks: 3, question: "Short hand if-else?", options: ["Ternary Operator", "Binary Switch", "Lambda", "Short Circuit"], correct: 0, hint: "Three parts.", explanation: "Ternary." },
    { id: 115, topic: "Control Flow", type: "mcq", marks: 3, question: "Skip current iteration?", options: ["continue", "break", "pass", "skip"], correct: 0, hint: "Continue.", explanation: "continue statement." },
    { id: 116, topic: "Control Flow", type: "mcq", marks: 4, question: "Output of range(3)?", options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "1, 2"], correct: 0, hint: "Starts at 0.", explanation: "0, 1, 2." },

    // --- FUNCTIONS ---
    { id: 117, topic: "Functions", type: "mcq", marks: 3, question: "Return multiple values?", options: ["return a, b", "return [a, b]", "return {a, b}", "return a + b"], correct: 0, hint: "Tuple.", explanation: "Returns a tuple." },
    { id: 118, topic: "Functions", type: "mcq", marks: 4, question: "Arbitrary keyword args?", options: ["*args", "**kwargs", "args[]", "kw[]"], correct: 1, hint: "Double star.", explanation: "**kwargs." },
    { id: 119, topic: "Functions", type: "mcq", marks: 5, question: "Lambda to square?", options: ["lambda x: x**2", "lambda x -> x^2", "def x: x**2", "x => x**2"], correct: 0, hint: "lambda.", explanation: "lambda x: x**2." },
    { id: 120, topic: "Functions", type: "mcq", marks: 4, question: "Global variable keyword?", options: ["global", "nonlocal", "static", "extern"], correct: 0, hint: "Global.", explanation: "global." },
    { id: 121, topic: "Functions", type: "mcq", marks: 3, question: "Define a function?", options: ["def func():", "function func():", "func():", "define func():"], correct: 0, hint: "Def.", explanation: "def keyword." },

    // --- OOP ---
    { id: 122, topic: "OOP", type: "mcq", marks: 4, question: "Constructor name?", options: ["__init__", "__const__", "__new__", "init"], correct: 0, hint: "Dunder init.", explanation: "__init__." },
    { id: 123, topic: "OOP", type: "mcq", marks: 5, question: "What is super()?", options: ["Access parent methods", "Create new object", "Delete parent", "Init var"], correct: 0, hint: "Parent.", explanation: "Access parent." },
    { id: 124, topic: "OOP", type: "mcq", marks: 4, question: "Inheritance syntax?", options: ["class Child(Parent):", "class Child extends Parent:", "class Child inherits Parent:", "def Child(Parent):"], correct: 0, hint: "Parens.", explanation: "class Child(Parent):" },
    { id: 125, topic: "OOP", type: "mcq", marks: 4, question: "String rep method?", options: ["__str__", "toString()", "__repr__", "string()"], correct: 0, hint: "Str.", explanation: "__str__." },
    { id: 126, topic: "OOP", type: "mcq", marks: 4, question: "Check instance type?", options: ["isinstance()", "typeof()", "check()", "type()"], correct: 0, hint: "is instance.", explanation: "isinstance()." },

    // --- MODULES / ADVANCED ---
    { id: 127, topic: "Exception Handling", type: "mcq", marks: 5, question: "Catch specific error?", options: ["except ZeroDivisionError:", "catch ZeroDivisionError:", "if Error:", "try Error:"], correct: 0, hint: "except.", explanation: "except ErrorName." },
    { id: 128, topic: "File Handling", type: "mcq", marks: 3, question: "Append mode?", options: ["'a'", "'w'", "'r'", "'x'"], correct: 0, hint: "Append.", explanation: "'a'." },
    { id: 129, topic: "RegEx", type: "mcq", marks: 6, question: "One or more digits?", options: ["\\d+", "\\d*", "\\D+", "[0-9]"], correct: 0, hint: "Plus.", explanation: "\\d+." },
    { id: 130, topic: "Web Scraping", type: "mcq", marks: 5, question: "Browser automation?", options: ["Selenium", "Requests", "BS4", "Scrapy"], correct: 0, hint: "Driver.", explanation: "Selenium." },
    { id: 135, topic: "Modules", type: "mcq", marks: 3, question: "Math module?", options: ["math", "calc", "num", "sys"], correct: 0, hint: "Math.", explanation: "math." },
    { id: 136, topic: "Exception Handling", type: "mcq", marks: 5, question: "Raise error manually?", options: ["raise ValueError()", "throw ValueError()", "error()", "trigger()"], correct: 0, hint: "Raise.", explanation: "raise." },
    { id: 137, topic: "File Handling", type: "mcq", marks: 4, question: "Auto close file?", options: ["with open(...) as f:", "f = open(...)", "file.open()", "open().close()"], correct: 0, hint: "With.", explanation: "with statement." },
    { id: 138, topic: "Scripting", type: "mcq", marks: 3, question: "Command line args?", options: ["sys.argv", "os.args", "cmd.list", "args"], correct: 0, hint: "sys.", explanation: "sys.argv." },
    { id: 139, topic: "OS Module", type: "mcq", marks: 4, question: "Get CWD?", options: ["os.getcwd()", "os.pwd()", "os.dir()", "os.path()"], correct: 0, hint: "Get CWD.", explanation: "os.getcwd()." },
    { id: 140, topic: "Exception Handling", type: "mcq", marks: 3, question: "Always executed block?", options: ["finally", "else", "except", "done"], correct: 0, hint: "Finally.", explanation: "finally." }
  ],
  cpp: [
    // --- BASICS ---
    { id: 201, topic: "Basics", type: "mcq", marks: 3, question: "Standard output object?", options: ["cout", "print", "System.out", "cin"], correct: 0, hint: "c-out.", explanation: "cout." },
    { id: 202, topic: "Basics", type: "mcq", marks: 3, question: "Invalid loop?", options: ["repeat-until", "for", "while", "do-while"], correct: 0, hint: "Pascal.", explanation: "repeat-until." },
    { id: 203, topic: "Basics", type: "mcq", marks: 3, question: "Standard namespace?", options: ["std", "standard", "stl", "cpp"], correct: 0, hint: "std.", explanation: "std." },
    { id: 204, topic: "Basics", type: "mcq", marks: 4, question: "Reference variable syntax?", options: ["int &ref = x;", "int ref = &x;", "int *ref = x;", "ref int = x;"], correct: 0, hint: "&.", explanation: "int &ref = x;" },
    { id: 205, topic: "Basics", type: "mcq", marks: 3, question: "Entry point?", options: ["main", "start", "run", "init"], correct: 0, hint: "main.", explanation: "main()." },

    // --- OOP ---
    { id: 206, topic: "OOP", type: "mcq", marks: 3, question: "Default class access?", options: ["private", "public", "protected", "friend"], correct: 0, hint: "Hidden.", explanation: "private." },
    { id: 207, topic: "OOP", type: "mcq", marks: 5, question: "Correct class def?", options: ["class Box { public: int w; };", "class Box: public int w;", "def class Box { int w };", "struct Box ( int w )"], correct: 0, hint: "Semi-colon.", explanation: "class Box { ... };" },
    { id: 208, topic: "Encapsulation", type: "mcq", marks: 4, question: "Destructor symbol?", options: ["~", "#", "!", "-"], correct: 0, hint: "Tilde.", explanation: "~." },
    { id: 209, topic: "Encapsulation", type: "mcq", marks: 3, question: "Current object pointer?", options: ["this", "self", "me", "obj"], correct: 0, hint: "this.", explanation: "this." },
    { id: 210, topic: "OOP", type: "mcq", marks: 5, question: "Destructor syntax?", options: ["~ClassName() {}", "ClassName() {}", "!ClassName()", "deinit()"], correct: 0, hint: "~Name.", explanation: "~ClassName() {}" },

    // --- INHERITANCE ---
    { id: 211, topic: "Inheritance", type: "mcq", marks: 5, question: "Scope resolution?", options: ["::", "->", ".", ":"], correct: 0, hint: "Double colon.", explanation: "::" },
    { id: 212, topic: "Inheritance", type: "mcq", marks: 4, question: "Multiple parents?", options: ["Multiple", "Multilevel", "Hierarchical", "Single"], correct: 0, hint: "Multiple.", explanation: "Multiple Inheritance." },
    { id: 213, topic: "Inheritance", type: "mcq", marks: 4, question: "Diamond problem solution?", options: ["Virtual Inheritance", "Friend", "Static", "Abstract"], correct: 0, hint: "Virtual base.", explanation: "Virtual Inheritance." },
    { id: 214, topic: "Inheritance", type: "mcq", marks: 4, question: "Child only access?", options: ["protected", "private", "public", "friend"], correct: 0, hint: "Protected.", explanation: "protected." },
    { id: 215, topic: "Inheritance", type: "mcq", marks: 4, question: "Safe downcasting?", options: ["dynamic_cast", "static_cast", "const_cast", "reinterpret_cast"], correct: 0, hint: "Dynamic.", explanation: "dynamic_cast." },

    // --- POINTERS & POLYMORPHISM ---
    { id: 216, topic: "Pointers", type: "mcq", marks: 5, question: "Alloc int on heap?", options: ["int* p = new int;", "int p = new int;", "int* p = malloc(int);", "new int p;"], correct: 0, hint: "new.", explanation: "int* p = new int;" },
    { id: 217, topic: "Pointers", type: "mcq", marks: 4, question: "Address-of?", options: ["&", "*", "->", "."], correct: 0, hint: "&.", explanation: "&." },
    { id: 218, topic: "Pointers", type: "mcq", marks: 5, question: "Delete array?", options: ["delete[] ptr;", "delete ptr;", "free(ptr);", "remove ptr;"], correct: 0, hint: "[]", explanation: "delete[] ptr;" },
    { id: 219, topic: "Polymorphism", type: "mcq", marks: 5, question: "Runtime poly keyword?", options: ["virtual", "override", "dynamic", "abstract"], correct: 0, hint: "Virtual.", explanation: "virtual." },
    { id: 220, topic: "Polymorphism", type: "mcq", marks: 4, question: "Compile-time poly?", options: ["Overloading", "Overriding", "Virtual", "Abstract"], correct: 0, hint: "Overloading.", explanation: "Overloading." },
    { id: 221, topic: "Polymorphism", type: "mcq", marks: 4, question: "Overriding is?", options: ["Runtime", "Compile-time", "Static", "None"], correct: 0, hint: "Runtime.", explanation: "Runtime." },

    // --- ADVANCED ---
    { id: 222, topic: "Abstraction", type: "mcq", marks: 5, question: "Pure virtual syntax?", options: ["= 0", "= null", "abstract", "virtual"], correct: 0, hint: "= 0.", explanation: "= 0." },
    { id: 223, topic: "Abstraction", type: "mcq", marks: 4, question: "Class with pure virtual?", options: ["Abstract Class", "Virtual Class", "Interface", "Static Class"], correct: 0, hint: "Abstract.", explanation: "Abstract Class." },
    { id: 224, topic: "Exception Handling", type: "mcq", marks: 5, question: "Catch-all?", options: ["catch (...)", "catch (Exception e)", "catch (ALL)", "except:"], correct: 0, hint: "...", explanation: "catch(...) {}" },
    { id: 225, topic: "Exception Handling", type: "mcq", marks: 4, question: "Raise exception?", options: ["throw", "raise", "error", "catch"], correct: 0, hint: "Throw.", explanation: "throw." },
    { id: 226, topic: "Templates", type: "mcq", marks: 6, question: "Template decl?", options: ["template <typename T>", "template class T", "generic <T>", "class <T>"], correct: 0, hint: "typename.", explanation: "template <typename T>." },
    { id: 227, topic: "Advanced", type: "mcq", marks: 5, question: "Access private ext?", options: ["friend", "public", "static", "extern"], correct: 0, hint: "Friend.", explanation: "friend." },
    { id: 228, topic: "Advanced", type: "mcq", marks: 5, question: "Operator overload?", options: ["operator+", "func+", "add()", "plus()"], correct: 0, hint: "operator.", explanation: "operator+." },
    { id: 229, topic: "Advanced", type: "mcq", marks: 5, question: "Static member?", options: ["static int x;", "const int x;", "final int x;", "shared int x;"], correct: 0, hint: "static.", explanation: "static int x;" },
    { id: 230, topic: "Advanced", type: "mcq", marks: 4, question: "Constant keyword?", options: ["const", "final", "static", "let"], correct: 0, hint: "const.", explanation: "const." }
  ],
  ds: [
    // --- NUMPY ---
    { id: 301, topic: "NumPy", type: "mcq", marks: 3, question: "Advantage over List?", options: ["Memory Efficient", "Slower", "Dynamic Size", "None"], correct: 0, hint: "Memory.", explanation: "Memory efficient." },
    { id: 302, topic: "NumPy", type: "mcq", marks: 4, question: "Dimensions attr?", options: [".shape", ".size", ".dim", ".len"], correct: 0, hint: "Shape.", explanation: ".shape" },
    { id: 303, topic: "NumPy", type: "mcq", marks: 5, question: "3x3 zeros?", options: ["np.zeros((3,3))", "np.zeros(3,3)", "np.array(0, 3, 3)", "np.empty(3,3)"], correct: 0, hint: "Tuple.", explanation: "np.zeros((3,3))." },
    { id: 304, topic: "NumPy", type: "mcq", marks: 4, question: "Range func?", options: ["np.arange()", "np.range()", "np.seq()", "np.list()"], correct: 0, hint: "arange.", explanation: "np.arange()." },
    { id: 305, topic: "NumPy", type: "mcq", marks: 5, question: "Reshape array?", options: ["arr.reshape(2, 5)", "arr.shape(2, 5)", "arr.resize(2, 5)", "arr.change(2, 5)"], correct: 0, hint: "reshape.", explanation: "arr.reshape()." },
    { id: 306, topic: "NumPy", type: "mcq", marks: 5, question: "Dot product?", options: ["np.dot(a, b)", "np.mult(a, b)", "np.prod(a, b)", "a.dot.b"], correct: 0, hint: "dot.", explanation: "np.dot()." },
    { id: 307, topic: "NumPy", type: "mcq", marks: 4, question: "Plotting lib?", options: ["Matplotlib", "Seaborn", "Plotly", "All"], correct: 3, hint: "All.", explanation: "All are valid." },
    { id: 308, topic: "NumPy", type: "mcq", marks: 5, question: "Mean func?", options: ["np.mean()", "np.avg()", "np.average()", "np.median()"], correct: 0, hint: "mean.", explanation: "np.mean()." },
    { id: 309, topic: "NumPy", type: "mcq", marks: 4, question: "Array type?", options: ["ndarray", "array", "list", "tensor"], correct: 0, hint: "n-dim.", explanation: "ndarray." },

    // --- PANDAS ---
    { id: 310, topic: "Pandas", type: "mcq", marks: 3, question: "2D structure?", options: ["DataFrame", "Series", "Panel", "Table"], correct: 0, hint: "DF.", explanation: "DataFrame." },
    { id: 311, topic: "Pandas", type: "mcq", marks: 4, question: "Read CSV?", options: ["read_csv", "load_csv", "open_csv", "get_csv"], correct: 0, hint: "read_csv.", explanation: "read_csv()." },
    { id: 312, topic: "Pandas", type: "mcq", marks: 5, question: "Group by 'dept' mean?", options: ["df.groupby('dept').mean()", "df.group('dept').avg()", "df.sort('dept').mean()", "df.mean('dept')"], correct: 0, hint: "groupby.", explanation: "df.groupby().mean()." },
    { id: 313, topic: "Pandas", type: "mcq", marks: 4, question: "Check nulls?", options: ["isnull()", "checknull()", "null()", "isnan()"], correct: 0, hint: "isnull.", explanation: "isnull()." },
    { id: 314, topic: "Pandas", type: "mcq", marks: 4, question: "Drop missing?", options: ["dropna()", "fillna()", "delna()", "removena()"], correct: 0, hint: "drop.", explanation: "dropna()." },
    { id: 315, topic: "Pandas", type: "mcq", marks: 4, question: "Summary stats?", options: ["describe()", "summary()", "stats()", "info()"], correct: 0, hint: "describe.", explanation: "describe()." },
    { id: 316, topic: "Pandas", type: "mcq", marks: 5, question: "Select col 'A'?", options: ["df['A']", "df(A)", "df.select('A')", "df.get('A')"], correct: 0, hint: "Brackets.", explanation: "df['A']." },
    { id: 317, topic: "Pandas", type: "mcq", marks: 6, question: "Merge inner?", options: ["pd.merge(d1, d2, how='inner')", "d1.join(d2)", "pd.concat([d1,d2])", "d1.merge(d2, inner=True)"], correct: 0, hint: "pd.merge.", explanation: "pd.merge(..., how='inner')." },
    { id: 318, topic: "Pandas", type: "mcq", marks: 4, question: "Fill NaN?", options: ["fillna()", "replacena()", "fill()", "add()"], correct: 0, hint: "fillna.", explanation: "fillna()." },
    { id: 319, topic: "Pandas", type: "mcq", marks: 4, question: "Head default?", options: ["5", "10", "1", "20"], correct: 0, hint: "5.", explanation: "5." },

    // --- SQL ---
    { id: 320, topic: "SQL", type: "mcq", marks: 3, question: "DDL Command?", options: ["CREATE", "SELECT", "INSERT", "DELETE"], correct: 0, hint: "Create.", explanation: "CREATE." },
    { id: 321, topic: "SQL", type: "mcq", marks: 6, question: "Select > 25 order name?", options: ["SELECT * FROM U WHERE age > 25 ORDER BY name", "SELECT * FROM U ORDER BY name WHERE age > 25", "GET U WHERE age > 25", "FETCH * FROM U SORT name"], correct: 0, hint: "Order.", explanation: "Standard SQL." },
    { id: 322, topic: "SQL", type: "mcq", marks: 4, question: "Filter groups?", options: ["HAVING", "WHERE", "GROUP", "FILTER"], correct: 0, hint: "Having.", explanation: "HAVING." },
    { id: 323, topic: "SQL", type: "mcq", marks: 4, question: "Join all records?", options: ["FULL OUTER JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"], correct: 0, hint: "Full.", explanation: "FULL OUTER." },
    { id: 324, topic: "SQL", type: "mcq", marks: 5, question: "Insert syntax?", options: ["INSERT INTO T VALUES (...)", "ADD TO T VALUES (...)", "PUT INTO T (...)", "UPDATE T ADD (...)"], correct: 0, hint: "Insert Into.", explanation: "INSERT INTO." },
    { id: 325, topic: "SQL", type: "mcq", marks: 3, question: "Delete table?", options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"], correct: 0, hint: "Drop.", explanation: "DROP TABLE." },
    { id: 326, topic: "SQL", type: "mcq", marks: 3, question: "Unique constraint?", options: ["UNIQUE", "DISTINCT", "SINGLE", "PRIMARY"], correct: 0, hint: "Unique.", explanation: "UNIQUE." },
    { id: 327, topic: "SQL", type: "mcq", marks: 4, question: "Remove dupes?", options: ["DISTINCT", "UNIQUE", "DIFFERENT", "SINGLE"], correct: 0, hint: "Distinct.", explanation: "SELECT DISTINCT." },
    { id: 328, topic: "SQL", type: "mcq", marks: 3, question: "Modify data?", options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"], correct: 0, hint: "Update.", explanation: "UPDATE." },
    { id: 329, topic: "SQL", type: "mcq", marks: 5, question: "Count rows?", options: ["COUNT(*)", "SUM(*)", "TOTAL(*)", "NUM(*)"], correct: 0, hint: "Count.", explanation: "COUNT(*)." },
    { id: 330, topic: "SQL", type: "mcq", marks: 4, question: "Pattern match?", options: ["LIKE", "MATCH", "SIMILAR", "SAME"], correct: 0, hint: "Like.", explanation: "LIKE." }
  ]
};

const SUBJECTS_METADATA = {
  python: { title: "Python Masterclass", icon: "Terminal", color: "blue", topics: ["Fundamentals", "Collections", "Control Flow", "Functions", "OOP", "Exception Handling", "File Handling", "RegEx", "Web Scraping", "Modules"] },
  cpp: { title: "C++ Architect", icon: "Cpu", color: "indigo", topics: ["Basics", "OOP", "Encapsulation", "Inheritance", "Pointers", "Polymorphism", "Abstraction", "Exception Handling", "Templates", "Advanced"] },
  ds: { title: "Data Science Pro", icon: "Database", color: "emerald", topics: ["NumPy", "Pandas", "SQL"] }
};

// --- SIMULATED USER DATABASE (Hidden Admin) ---
const USERS_DB = [
  { id: "u_admin", name: "Master Admin", email: "admin", password: "admin", role: "admin" }
];

// --- SIMULATED EXAM HISTORY ---
const USER_HISTORY = {
  // 'user_id': [ { sessionId, subject, score, date } ]
};

class MockBackendService {
  static async delay(ms = 500) { return new Promise(r => setTimeout(r, ms)); }

  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  static async register(name, email, password) {
    await this.delay(800);
    const existing = USERS_DB.find(u => u.email === email);
    if (existing) throw new Error("Email already registered. Please login.");
    const newUser = { id: `u_${Date.now()}`, name, email, password, role: "candidate" };
    USERS_DB.push(newUser);
    return { user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role } };
  }

  static async login(email, password) {
    await this.delay(800);
    const user = USERS_DB.find(u => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid credentials.");
    return { user: { id: user.id, name: user.name, email: user.email, role: user.role } };
  }

  // --- ENGINE: Topic Filter & Random Selection ---
  static async startExamSession(subjectId, selectedTopics) {
    await this.delay(600);
    const allQuestions = QUESTIONS_DB[subjectId];
    if (!allQuestions) throw new Error("Subject not found");
    
    // 1. Filter by Topic
    let topicPool = selectedTopics.includes("ALL") 
      ? allQuestions 
      : allQuestions.filter(q => selectedTopics.includes(q.topic));

    if (topicPool.length === 0) throw new Error("No questions found for selected topics.");

    // 2. Group by Topic
    const grouped = {};
    topicPool.forEach(q => {
        if (!grouped[q.topic]) grouped[q.topic] = [];
        grouped[q.topic].push(q);
    });

    // 3. Select 5 random questions per topic
    let finalQuestions = [];
    Object.keys(grouped).forEach(topic => {
        const questions = this.shuffleArray(grouped[topic]);
        // If >5 questions exist, take 5. Else take all available.
        const selection = questions.slice(0, 5); 
        finalQuestions = [...finalQuestions, ...selection];
    });

    // 4. Shuffle final set for exam
    finalQuestions = this.shuffleArray(finalQuestions);

    return {
      sessionId: `sess_${Date.now()}`,
      subjectId,
      questions: finalQuestions,
      startTime: Date.now()
    };
  }

  static async submitExam(userId, sessionId, answers, questions, subjectId) {
    await this.delay(1000);
    let score = 0;
    let maxMarks = 0;
    
    questions.forEach((q, idx) => {
      maxMarks += q.marks;
      const ans = answers[idx];
      // ROBUST GRADING: Simple Integer Comparison
      if (ans !== undefined && ans === q.correct) {
        score += q.marks;
      }
    });

    const result = { 
      sessionId, 
      score, 
      maxMarks, 
      percentage: (score / maxMarks) * 100, 
      passed: (score / maxMarks) >= 0.65,
      subjectId,
      date: new Date().toISOString()
    };

    if (!USER_HISTORY[userId]) USER_HISTORY[userId] = [];
    USER_HISTORY[userId].push(result);

    return result;
  }

  static async getHistory(userId) {
    await this.delay(400);
    return USER_HISTORY[userId] || [];
  }
}

// ==========================================
// 2. CONTEXTS & HOOKS
// ==========================================

const ToastContext = createContext();
const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const addToast = (msg, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };
  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map(t => (
          <div key={t.id} className={`p-4 rounded-lg shadow-lg flex items-center gap-3 text-white animate-slide-up ${t.type === 'error' ? 'bg-red-500' : 'bg-slate-800'}`}>
            {t.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
            <span className="font-medium text-sm">{t.msg}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
const useToast = () => useContext(ToastContext);

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const login = async (e, p) => {
    setLoading(true);
    try {
      const data = await MockBackendService.login(e, p);
      setUser(data.user);
      toast(`Welcome, ${data.user.name}`);
    } catch (err) { toast(err.message, 'error'); } 
    finally { setLoading(false); }
  };

  const register = async (n, e, p) => {
    setLoading(true);
    try {
      const data = await MockBackendService.register(n, e, p);
      setUser(data.user);
      toast(`Welcome, ${data.user.name}`);
    } catch (err) { toast(err.message, 'error'); } 
    finally { setLoading(false); }
  };

  return <AuthContext.Provider value={{ user, login, register, logout: () => setUser(null), loading }}>{children}</AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);

// --- ANTI-CHEATING HOOK ---
const useAntiCheat = (isActive, isAdmin) => {
  const toast = useToast();
  useEffect(() => {
    if (!isActive || isAdmin) return;

    const handleBlock = (e) => {
      e.preventDefault();
      toast("Action disabled during exam!", "error");
    };

    const handleVisibility = () => {
      if (document.hidden) {
        toast("Tab switching detected!", "error");
      }
    };

    document.addEventListener('copy', handleBlock);
    document.addEventListener('cut', handleBlock);
    document.addEventListener('paste', handleBlock);
    document.addEventListener('contextmenu', handleBlock);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('copy', handleBlock);
      document.removeEventListener('cut', handleBlock);
      document.removeEventListener('paste', handleBlock);
      document.removeEventListener('contextmenu', handleBlock);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isActive, isAdmin, toast]);
};

// ==========================================
// 3. UI COMPONENTS
// ==========================================

const Button = ({ children, variant='primary', className, loading, ...props }) => (
  <button 
    className={`px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 
    ${variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50'} ${className}`}
    disabled={loading} {...props}
  >
    {loading && <Loader2 className="animate-spin w-4 h-4" />} {children}
  </button>
);

const Card = ({ children, className }) => <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm ${className}`}>{children}</div>;

// ==========================================
// 4. VIEWS
// ==========================================

const AuthView = () => {
  const { login, register, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', pass: '' });

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-xl shadow-blue-200"><Award className="text-white w-8 h-8" /></div>
          <h1 className="text-2xl font-bold text-slate-800">Exam Portal</h1>
          <p className="text-slate-500">Secure Enterprise Assessment</p>
        </div>
        <div className="space-y-4">
          {!isLogin && <input type="text" placeholder="Full Name" className="w-full p-3 border-2 border-slate-200 rounded-xl outline-none focus:border-blue-500" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />}
          <input type="text" placeholder="Email Address" className="w-full p-3 border-2 border-slate-200 rounded-xl outline-none focus:border-blue-500" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input type="password" placeholder="Password" className="w-full p-3 border-2 border-slate-200 rounded-xl outline-none focus:border-blue-500" value={form.pass} onChange={e => setForm({...form, pass: e.target.value})} />
          <Button loading={loading} onClick={() => isLogin ? login(form.email, form.pass) : register(form.name, form.email, form.pass)} className="w-full">{isLogin ? "Sign In" : "Create Account"}</Button>
          <button onClick={() => setIsLogin(!isLogin)} className="w-full text-sm text-blue-600 font-bold hover:underline">{isLogin ? "Need an account? Sign up" : "Have an account? Sign in"}</button>
        </div>
      </Card>
    </div>
  );
};

const TopicSelectionView = ({ subjectKey, onBack, onStart }) => {
  const subject = SUBJECTS_METADATA[subjectKey];
  const [selected, setSelected] = useState([]);

  const toggleTopic = (t) => setSelected(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const toggleAll = () => setSelected(selected.length === subject.topics.length ? [] : [...subject.topics]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center">
      <Card className="w-full max-w-3xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full"><ChevronLeft /></button>
          <h2 className="text-2xl font-bold text-slate-800">Select Topics: {subject.title}</h2>
        </div>
        
        <div className="mb-6 flex justify-between items-center bg-slate-50 p-4 rounded-xl">
          <span className="font-bold text-slate-600">{selected.length} Selected</span>
          <button onClick={toggleAll} className="text-blue-600 font-bold text-sm hover:underline">
            {selected.length === subject.topics.length ? "Deselect All" : "Select All"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {subject.topics.map(topic => (
            <button key={topic} onClick={() => toggleTopic(topic)} className={`p-4 rounded-xl border-2 text-left flex items-center justify-between transition-all ${selected.includes(topic) ? `border-${subject.color}-500 bg-${subject.color}-50` : 'border-slate-200 hover:border-slate-300'}`}>
              <span className={`font-medium ${selected.includes(topic) ? `text-${subject.color}-700` : 'text-slate-600'}`}>{topic}</span>
              {selected.includes(topic) ? <CheckSquare className={`text-${subject.color}-600`} size={20} /> : <Square className="text-slate-300" size={20} />}
            </button>
          ))}
        </div>

        <Button disabled={selected.length === 0} onClick={() => onStart(selected.length === subject.topics.length ? ["ALL"] : selected)} className="w-full">Start Assessment</Button>
      </Card>
    </div>
  );
};

const HistoryView = ({ onBack }) => {
  const { user } = useAuth();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MockBackendService.getHistory(user.id).then(data => {
      setHistory(data.reverse()); 
      setLoading(false);
    });
  }, [user.id]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center">
      <Card className="w-full max-w-4xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full"><ChevronLeft /></button>
          <h2 className="text-2xl font-bold text-slate-800">Exam History</h2>
        </div>

        {loading ? <div className="flex justify-center p-10"><Loader2 className="animate-spin" /></div> : (
          history.length === 0 ? <p className="text-slate-500 text-center py-10">No exams taken yet.</p> : (
            <div className="space-y-4">
              {history.map((record, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border rounded-xl bg-slate-50">
                  <div>
                    <div className="font-bold text-lg text-slate-800">{SUBJECTS_METADATA[record.subjectId]?.title || record.subjectId}</div>
                    <div className="text-sm text-slate-500">{new Date(record.date).toLocaleDateString()} at {new Date(record.date).toLocaleTimeString()}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold text-xl ${record.passed ? 'text-green-600' : 'text-red-600'}`}>
                      {record.score} / {record.maxMarks}
                    </div>
                    <div className="text-xs font-bold uppercase text-slate-400">{record.passed ? 'PASS' : 'FAIL'}</div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </Card>
    </div>
  );
};

const DashboardView = ({ onSelectSubject, onViewHistory }) => {
  const { user, logout } = useAuth();
  
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white px-6 py-4 border-b border-slate-200 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Award className="text-blue-600" /> ExamHub</div>
        <div className="flex items-center gap-4">
          <button onClick={onViewHistory} className="text-slate-500 hover:text-blue-600 flex items-center gap-2 text-sm font-medium"><History size={18} /> History</button>
          <span className="text-sm font-medium bg-slate-100 px-3 py-1 rounded-full flex items-center gap-2"><User size={16}/> {user.name} {user.role === 'admin' && <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded">ADMIN</span>}</span>
          <button onClick={logout} className="text-slate-400 hover:text-red-500"><LogOut size={20} /></button>
        </div>
      </nav>
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Certifications</h1>
        <p className="text-slate-500 mb-8">Select a track to verify your skills.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(SUBJECTS_METADATA).map(([key, sub]) => {
            const IconComp = { Terminal, Cpu, Database }[sub.icon] || Code;
            return (
              <Card key={key} className="p-6 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-${sub.color}-50 text-${sub.color}-600 flex items-center justify-center mb-4`}>
                  <IconComp size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{sub.title}</h3>
                <p className="text-sm text-slate-500 mt-2 flex-grow">{sub.topics.length} Topics Available</p>
                <Button onClick={() => onSelectSubject(key)} variant="secondary" className="mt-6 w-full">Select Track</Button>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

const ExamInterface = ({ session, user, onFinish }) => {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600);
  const [view, setView] = useState('quiz'); // quiz | summary
  const q = session.questions[idx];
  
  useAntiCheat(true, user.role === 'admin'); 

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(t => t > 0 ? t - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async () => {
    const res = await MockBackendService.submitExam(user.id, session.sessionId, answers, session.questions, session.subjectId);
    onFinish(res, session.questions, answers);
  };

  if (view === 'summary') {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center select-none" onContextMenu={e => e.preventDefault()}>
        <Card className="w-full max-w-4xl p-8">
          <h2 className="text-2xl font-bold mb-6">Exam Summary</h2>
          <p className="text-slate-500 mb-6 bg-yellow-50 p-4 rounded border border-yellow-200 text-sm">
            <Lock className="inline w-4 h-4 mr-2" />
            Review your progress. Correct answers are hidden until final submission.
          </p>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-3 mb-8">
            {session.questions.map((qItem, i) => {
                const isAnswered = answers[i] !== undefined;
                return (
                    <button key={i} onClick={() => { setIdx(i); setView('quiz'); }} className={`h-10 rounded font-bold border transition-colors ${isAnswered ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                        {i+1}
                    </button>
                );
            })}
          </div>
          <div className="flex justify-between border-t pt-6">
            <Button variant="secondary" onClick={() => setView('quiz')}>Back to Quiz</Button>
            <Button onClick={handleSubmit}>Submit Exam</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col select-none" onContextMenu={(e) => { if(user.role !== 'admin') e.preventDefault(); }}>
      <div className="bg-slate-900 text-white p-4 flex justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <span className="bg-white/10 px-3 py-1 rounded font-mono">Q{idx + 1}</span>
          <span className="text-sm text-slate-400 hidden sm:inline">{q.topic}</span>
        </div>
        <div className="flex items-center gap-4">
          <ShieldAlert className="text-orange-400 animate-pulse" size={20} />
          <span className="font-mono text-xl font-bold text-blue-400">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>
      <main className="flex-grow p-4 max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-xl shadow-sm border p-8 min-h-[60vh] flex flex-col">
          <div className="flex justify-between mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Marks: {q.marks}</span>
            <div className="group relative">
              <HelpCircle className="text-orange-400 cursor-pointer" size={20} />
              <div className="absolute right-0 w-64 bg-orange-50 border border-orange-200 p-3 rounded shadow-lg hidden group-hover:block text-sm text-orange-800 z-10">{q.hint}</div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{q.question}</h2>
          
          <div className="flex-grow space-y-4">
            {q.options.map((opt, i) => (
              <button key={i} onClick={() => setAnswers({...answers, [idx]: i})} className={`w-full text-left p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${answers[idx] === i ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:bg-slate-50'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${answers[idx] === i ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-400 text-slate-400'}`}>{String.fromCharCode(65+i)}</div>
                <div className="font-mono text-sm">{opt}</div>
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button variant="secondary" disabled={idx === 0} onClick={() => setIdx(i => i - 1)}>Prev</Button>
            {idx === session.questions.length - 1 ? <Button onClick={() => setView('summary')}>Review</Button> : <Button onClick={() => setIdx(i => i + 1)}>Next</Button>}
          </div>
        </div>
      </main>
    </div>
  );
};

// --- RESULTS DASHBOARD (Post-Submission Review) ---
const ResultsDashboard = ({ results, questions, answers, onHome }) => {
  const [showReview, setShowReview] = useState(false);

  if (showReview) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Detailed Review</h2>
            <Button variant="secondary" onClick={() => setShowReview(false)}>Back to Results</Button>
          </div>
          <div className="space-y-6">
            {questions.map((q, idx) => {
              const ans = answers[idx];
              const isCorrect = ans === q.correct;

              return (
                <Card key={idx} className={`p-6 border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                  <div className="flex justify-between mb-4">
                    <span className={`font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>Question {idx+1}</span>
                    <span className="text-sm text-slate-400">{q.marks} Marks</span>
                  </div>
                  <h3 className="font-bold text-lg mb-4">{q.question}</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-50 p-3 rounded">
                      <div className="text-xs text-slate-400 uppercase mb-1">Your Answer</div>
                      <div className="font-mono text-sm">{q.options[ans] || "Skipped"}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                        <div className="text-xs text-green-600 uppercase mb-1">Correct Answer</div>
                        <div className="font-mono text-sm text-green-800">
                          {q.options[q.correct]}
                        </div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600 italic border-t pt-2">{q.explanation}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-lg text-center p-12">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${results.passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {results.passed ? <Award size={40} /> : <XCircle size={40} />}
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{results.passed ? "Certified!" : "Failed"}</h1>
        <p className="text-slate-500 mb-8">Score: {results.score} / {results.maxMarks} ({results.percentage.toFixed(1)}%)</p>
        
        <div className="flex gap-4">
          <Button onClick={() => setShowReview(true)} className="flex-1" variant="secondary"><Eye size={18} /> Review Answers</Button>
          <Button onClick={onHome} className="flex-1">Back to Dashboard</Button>
        </div>
      </Card>
    </div>
  );
};

// --- CONTROLLER ---
const MainController = () => {
  const { user } = useAuth();
  const [view, setView] = useState('dash');
  const [activeSubject, setActiveSubject] = useState(null);
  const [session, setSession] = useState(null);
  const [results, setResults] = useState(null);
  const [examData, setExamData] = useState({ questions: [], answers: {} }); 
  const toast = useToast();

  if (!user) return <AuthView />;

  const handleStartExam = async (topics) => {
    try {
      const sess = await MockBackendService.startExamSession(activeSubject, topics);
      setSession(sess);
      setView('exam');
    } catch (e) { toast(e.message, 'error'); }
  };

  const handleFinish = (res, questions, answers) => {
    setResults(res);
    setExamData({ questions, answers });
    setView('results');
  };

  if (view === 'exam' && session) return <ExamInterface session={session} user={user} onFinish={handleFinish} />;
  if (view === 'results' && results) return <ResultsDashboard results={results} questions={examData.questions} answers={examData.answers} onHome={() => setView('dash')} />;
  if (view === 'topics') return <TopicSelectionView subjectKey={activeSubject} onBack={() => setView('dash')} onStart={handleStartExam} />;
  if (view === 'history') return <HistoryView onBack={() => setView('dash')} />;
  
  return <DashboardView onSelectSubject={(key) => { setActiveSubject(key); setView('topics'); }} onViewHistory={() => setView('history')} />;
};

const App = () => (
  <ToastProvider><AuthProvider><MainController /></AuthProvider></ToastProvider>
);

export default App;