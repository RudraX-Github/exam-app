import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Play, CheckCircle, XCircle, AlertCircle, 
  ChevronRight, ChevronLeft, Clock, HelpCircle, 
  LayoutGrid, Award, Terminal, 
  Cpu, Database, Code, LogOut, BarChart2,
  Loader2, User, CheckSquare, Square,
  ShieldAlert, Eye, Lock, History, Brain, Globe, Sigma, Network, MessageSquare, Mail, UserPlus, LogIn
} from 'lucide-react';

/**
 * 🚀 ENTERPRISE EXAM PLATFORM v9.7 - "Randomization Engine"
 * Features:
 * - Fisher-Yates Shuffle for Questions AND Options
 * - Secure Login (Email/Password)
 * - User Registration Flow
 * - Master Admin Access (Hidden)
 * - Full 300+ Question Database Active
 * - Glassmorphism UI
 */

// ==========================================
// 1. DATA LAYER (FULL DATABASE)
// ==========================================

const QUESTIONS_DB = {
  python: [
    // --- FUNDAMENTALS (8 Questions) ---
    { id: 101, topic: "Fundamentals", type: "mcq", marks: 3, question: "What is the output of print(type([]) is list)?", options: ["True", "False", "Error", "None"], correct: 0, hint: "Checks type.", explanation: "[] creates a list." },
    { id: 102, topic: "Fundamentals", type: "mcq", marks: 4, question: "Which operator performs floor division?", options: ["/", "//", "%", "**"], correct: 1, hint: "Double slash.", explanation: "// truncates decimal." },
    { id: 103, topic: "Fundamentals", type: "mcq", marks: 3, question: "What is the result of 2 ** 3?", options: ["6", "8", "9", "5"], correct: 1, hint: "Power.", explanation: "2 to the power of 3." },
    { id: 104, topic: "Fundamentals", type: "mcq", marks: 3, question: "Which is not a core datatype?", options: ["List", "Tuple", "Class", "Dictionary"], correct: 2, hint: "User defined.", explanation: "Class is a blueprint." },
    { id: 105, topic: "Fundamentals", type: "mcq", marks: 4, question: "Output of bool('False')?", options: ["True", "False", "Error", "None"], correct: 0, hint: "Non-empty string.", explanation: "Non-empty strings are Truthy." },
    { id: 106, topic: "Fundamentals", type: "mcq", marks: 3, question: "Function to get memory address?", options: ["id()", "type()", "get()", "mem()"], correct: 0, hint: "Identity.", explanation: "id() returns the object's identity." },
    { id: 107, topic: "Fundamentals", type: "mcq", marks: 3, question: "Correct way to create a single item tuple?", options: ["(1)", "(1,)", "[1]", "1,"], correct: 1, hint: "Comma.", explanation: "A comma is required: (1,)." },
    { id: 108, topic: "Fundamentals", type: "mcq", marks: 4, question: "Which key word deletes a reference?", options: ["remove", "del", "erase", "clear"], correct: 1, hint: "Delete.", explanation: "del keyword removes references." },

    // --- COLLECTIONS (8 Questions) ---
    { id: 109, topic: "Collections", type: "mcq", marks: 3, question: "Which is immutable?", options: ["List", "Set", "Dictionary", "Tuple"], correct: 3, hint: "Parentheses.", explanation: "Tuples are immutable." },
    { id: 110, topic: "Collections", type: "mcq", marks: 5, question: "Select correct dictionary syntax.", options: ["d = {'a': 1}", "d = ('a', 1)", "d = ['a': 1]", "d = {a = 1}"], correct: 0, hint: "Curly braces.", explanation: "Dictionaries use {}." },
    { id: 111, topic: "Collections", type: "mcq", marks: 4, question: "Add element to end of list?", options: ["push()", "add()", "append()", "insert()"], correct: 2, hint: "Append.", explanation: "list.append()." },
    { id: 112, topic: "Collections", type: "mcq", marks: 4, question: "Symmetric difference operator?", options: ["&", "|", "^", "-"], correct: 2, hint: "XOR.", explanation: "^ operator." },
    { id: 113, topic: "Collections", type: "mcq", marks: 5, question: "Slice last 3 elements?", options: ["L[-3:]", "L[:-3]", "L[3:]", "L[-3]"], correct: 0, hint: "Negative slicing.", explanation: "L[-3:]." },
    { id: 114, topic: "Collections", type: "mcq", marks: 4, question: "Remove item from set?", options: ["remove()", "del()", "delete()", "pop(index)"], correct: 0, hint: "Remove.", explanation: "set.remove()." },
    { id: 115, topic: "Collections", type: "mcq", marks: 4, question: "Merge two dictionaries d1 and d2?", options: ["d1.update(d2)", "d1.add(d2)", "d1 + d2", "d1.append(d2)"], correct: 0, hint: "Update.", explanation: "d1.update(d2)." },
    { id: 116, topic: "Collections", type: "mcq", marks: 3, question: "Sort a list in place?", options: ["sorted(L)", "L.sort()", "L.order()", "sort(L)"], correct: 1, hint: "Method.", explanation: "L.sort() modifies the list." },

    // --- CONTROL FLOW (8 Questions) ---
    { id: 117, topic: "Control Flow", type: "mcq", marks: 5, question: "List comprehension for even squares?", options: ["[x**2 for x in range(10) if x%2==0]", "[x^2 for x in range(10) where x%2==0]", "(x**2 for x in range(10) if x%2==0)", "[x*2 for x in range(10)]"], correct: 0, hint: "Standard syntax.", explanation: "Correct comprehension." },
    { id: 118, topic: "Control Flow", type: "mcq", marks: 3, question: "What does 'break' do?", options: ["Skip iteration", "Exit loop", "Restart", "Exit program"], correct: 1, hint: "Stop loop.", explanation: "Terminates loop." },
    { id: 119, topic: "Control Flow", type: "mcq", marks: 3, question: "Short hand if-else?", options: ["Ternary Operator", "Binary Switch", "Lambda", "Short Circuit"], correct: 0, hint: "Three parts.", explanation: "Ternary." },
    { id: 120, topic: "Control Flow", type: "mcq", marks: 3, question: "Skip current iteration?", options: ["continue", "break", "pass", "skip"], correct: 0, hint: "Continue.", explanation: "continue statement." },
    { id: 121, topic: "Control Flow", type: "mcq", marks: 4, question: "Output of range(3)?", options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "1, 2"], correct: 0, hint: "Starts at 0.", explanation: "0, 1, 2." },
    { id: 122, topic: "Control Flow", type: "mcq", marks: 4, question: "Else block in loop executes when?", options: ["Loop finishes naturally", "Always", "Loop breaks", "Never"], correct: 0, hint: "No break.", explanation: "When loop is not interrupted by break." },
    { id: 123, topic: "Control Flow", type: "mcq", marks: 3, question: "Placeholder statement?", options: ["pass", "null", "none", "skip"], correct: 0, hint: "Pass.", explanation: "pass does nothing." },
    { id: 124, topic: "Control Flow", type: "mcq", marks: 4, question: "Iterate with index?", options: ["enumerate()", "range()", "zip()", "index()"], correct: 0, hint: "Enumerate.", explanation: "enumerate() yields index and value." },

    // --- FUNCTIONS (8 Questions) ---
    { id: 125, topic: "Functions", type: "mcq", marks: 3, question: "Return multiple values?", options: ["return a, b", "return [a, b]", "return {a, b}", "return a + b"], correct: 0, hint: "Tuple.", explanation: "Returns a tuple." },
    { id: 126, topic: "Functions", type: "mcq", marks: 4, question: "Arbitrary keyword args?", options: ["*args", "**kwargs", "args[]", "kw[]"], correct: 1, hint: "Double star.", explanation: "**kwargs." },
    { id: 127, topic: "Functions", type: "mcq", marks: 5, question: "Lambda to square?", options: ["lambda x: x**2", "lambda x -> x^2", "def x: x**2", "x => x**2"], correct: 0, hint: "lambda.", explanation: "lambda x: x**2." },
    { id: 128, topic: "Functions", type: "mcq", marks: 4, question: "Global variable keyword?", options: ["global", "nonlocal", "static", "extern"], correct: 0, hint: "Global.", explanation: "global." },
    { id: 129, topic: "Functions", type: "mcq", marks: 3, question: "Define a function?", options: ["def func():", "function func():", "func():", "define func():"], correct: 0, hint: "Def.", explanation: "def keyword." },
    { id: 130, topic: "Functions", type: "mcq", marks: 4, question: "Documentation string?", options: ["__doc__", "__init__", "__str__", "__help__"], correct: 0, hint: "Doc.", explanation: "__doc__ holds the docstring." },
    { id: 131, topic: "Functions", type: "mcq", marks: 5, question: "Map function purpose?", options: ["Apply func to all items", "Filter items", "Reduce items", "Sort items"], correct: 0, hint: "Mapping.", explanation: "Applies function to iterable." },
    { id: 132, topic: "Functions", type: "mcq", marks: 5, question: "Function calling itself?", options: ["Recursion", "Looping", "Nesting", "Callback"], correct: 0, hint: "Recurse.", explanation: "Recursion." },

    // --- OOP (8 Questions) ---
    { id: 133, topic: "OOP", type: "mcq", marks: 4, question: "Constructor name?", options: ["__init__", "__const__", "__new__", "init"], correct: 0, hint: "Dunder init.", explanation: "__init__." },
    { id: 134, topic: "OOP", type: "mcq", marks: 5, question: "What is super()?", options: ["Access parent methods", "Create new object", "Delete parent", "Init var"], correct: 0, hint: "Parent.", explanation: "Access parent." },
    { id: 135, topic: "OOP", type: "mcq", marks: 4, question: "Inheritance syntax?", options: ["class Child(Parent):", "class Child extends Parent:", "class Child inherits Parent:", "def Child(Parent):"], correct: 0, hint: "Parens.", explanation: "class Child(Parent):" },
    { id: 136, topic: "OOP", type: "mcq", marks: 4, question: "String rep method?", options: ["__str__", "toString()", "__repr__", "string()"], correct: 0, hint: "Str.", explanation: "__str__." },
    { id: 137, topic: "OOP", type: "mcq", marks: 4, question: "Check instance type?", options: ["isinstance()", "typeof()", "check()", "type()"], correct: 0, hint: "is instance.", explanation: "isinstance()." },
    { id: 138, topic: "OOP", type: "mcq", marks: 4, question: "Method overriding is?", options: ["Same method, child class", "Same method, same class", "Different method", "None"], correct: 0, hint: "Child class.", explanation: "Redefining parent method in child." },
    { id: 139, topic: "OOP", type: "mcq", marks: 5, question: "Operator overloading method for +?", options: ["__add__", "__plus__", "__sum__", "__op__"], correct: 0, hint: "Add.", explanation: "__add__." },
    { id: 140, topic: "OOP", type: "mcq", marks: 4, question: "Class variable access?", options: ["Class.var", "Class::var", "Class->var", "var"], correct: 0, hint: "Dot.", explanation: "Class.var." },

    // --- MODULES & ADVANCED (Existing) ---
    { id: 141, topic: "Exception Handling", type: "mcq", marks: 5, question: "Catch specific error?", options: ["except ZeroDivisionError:", "catch ZeroDivisionError:", "if Error:", "try Error:"], correct: 0, hint: "except.", explanation: "except ErrorName." },
    { id: 142, topic: "File Handling", type: "mcq", marks: 3, question: "Append mode?", options: ["'a'", "'w'", "'r'", "'x'"], correct: 0, hint: "Append.", explanation: "'a'." },
    { id: 143, topic: "RegEx", type: "mcq", marks: 6, question: "One or more digits?", options: ["\\d+", "\\d*", "\\D+", "[0-9]"], correct: 0, hint: "Plus.", explanation: "\\d+." },
    { id: 144, topic: "Web Scraping", type: "mcq", marks: 5, question: "Browser automation?", options: ["Selenium", "Requests", "BS4", "Scrapy"], correct: 0, hint: "Driver.", explanation: "Selenium." },
    { id: 145, topic: "Modules", type: "mcq", marks: 3, question: "Math module?", options: ["math", "calc", "num", "sys"], correct: 0, hint: "Math.", explanation: "math." },
    { id: 146, topic: "Exception Handling", type: "mcq", marks: 5, question: "Raise error manually?", options: ["raise ValueError()", "throw ValueError()", "error()", "trigger()"], correct: 0, hint: "Raise.", explanation: "raise." },
    { id: 147, topic: "File Handling", type: "mcq", marks: 4, question: "Auto close file?", options: ["with open(...) as f:", "f = open(...)", "file.open()", "open().close()"], correct: 0, hint: "With.", explanation: "with statement." },
    { id: 148, topic: "Scripting", type: "mcq", marks: 3, question: "Command line args?", options: ["sys.argv", "os.args", "cmd.list", "args"], correct: 0, hint: "sys.", explanation: "sys.argv." },
    { id: 149, topic: "OS Module", type: "mcq", marks: 4, question: "Get CWD?", options: ["os.getcwd()", "os.pwd()", "os.dir()", "os.path()"], correct: 0, hint: "Get CWD.", explanation: "os.getcwd()." },
    { id: 150, topic: "Exception Handling", type: "mcq", marks: 3, question: "Always executed block?", options: ["finally", "else", "except", "done"], correct: 0, hint: "Finally.", explanation: "finally." },

    // --- NEW: ADVANCED MODULES & AUTOMATION (20 Questions) ---
    { id: 151, topic: "Modules", type: "mcq", marks: 3, question: "Current date and time?", options: ["datetime.datetime.now()", "time.now()", "date.current()", "datetime.now()"], correct: 0, hint: "Nested datetime.", explanation: "datetime module has a datetime class." },
    { id: 152, topic: "Modules", type: "mcq", marks: 3, question: "Pick random element?", options: ["random.choice(L)", "random.pick(L)", "random.select(L)", "L.random()"], correct: 0, hint: "Choice.", explanation: "random.choice()." },
    { id: 153, topic: "Modules", type: "mcq", marks: 4, question: "Generate unique ID?", options: ["uuid.uuid4()", "random.id()", "os.id()", "sys.uid()"], correct: 0, hint: "UUID.", explanation: "uuid.uuid4() creates random UUID." },
    { id: 154, topic: "Scripting", type: "mcq", marks: 5, question: "Execute external command?", options: ["subprocess.run()", "os.execute()", "sys.run()", "cmd.exec()"], correct: 0, hint: "Subprocess.", explanation: "subprocess.run() is recommended." },
    { id: 155, topic: "Database", type: "mcq", marks: 5, question: "Connect to MySQL?", options: ["mysql.connector.connect()", "db.connect()", "sql.open()", "mysql.open()"], correct: 0, hint: "Connector.", explanation: "mysql.connector.connect()." },
    { id: 156, topic: "Database", type: "mcq", marks: 4, question: "Execute SQL query in Python?", options: ["cursor.execute()", "db.run()", "query.run()", "sql.exec()"], correct: 0, hint: "Cursor.", explanation: "Using a cursor object." },
    { id: 157, topic: "Database", type: "mcq", marks: 4, question: "Fetch all results?", options: ["cursor.fetchall()", "cursor.getall()", "cursor.read()", "db.fetch()"], correct: 0, hint: "Fetch all.", explanation: "fetchall()." },
    { id: 158, topic: "Web Scraping", type: "mcq", marks: 4, question: "Find element by ID (BS4)?", options: ["soup.find(id='x')", "soup.get_id('x')", "soup.select('#x')", "Both A and C"], correct: 3, hint: "Find or Select.", explanation: "Both find() and select() work." },
    { id: 159, topic: "Web Automation", type: "mcq", marks: 5, question: "Selenium locate element?", options: ["driver.find_element()", "driver.locate()", "driver.get()", "driver.search()"], correct: 0, hint: "Find element.", explanation: "driver.find_element(By...)." },
    { id: 160, topic: "Web Automation", type: "mcq", marks: 4, question: "Selenium: type text?", options: ["element.send_keys()", "element.type()", "element.text()", "element.input()"], correct: 0, hint: "Keys.", explanation: "send_keys()." },
    { id: 161, topic: "Functions", type: "mcq", marks: 5, question: "Reduce function module?", options: ["functools", "math", "collections", "itertools"], correct: 0, hint: "Func tools.", explanation: "from functools import reduce." },
    { id: 162, topic: "Functions", type: "mcq", marks: 4, question: "Filter function returns?", options: ["Iterator", "List", "Tuple", "None"], correct: 0, hint: "Lazy.", explanation: "Returns an iterator." },
    { id: 163, topic: "Modules", type: "mcq", marks: 3, question: "Wait for 2 seconds?", options: ["time.sleep(2)", "os.wait(2)", "sys.pause(2)", "sleep(2)"], correct: 0, hint: "Sleep.", explanation: "time.sleep()." },
    { id: 164, topic: "RegEx", type: "mcq", marks: 4, question: "Match start of string?", options: ["^", "$", "*", "?"], correct: 0, hint: "Carrot.", explanation: "^ matches start." },
    { id: 165, topic: "RegEx", type: "mcq", marks: 4, question: "Match end of string?", options: ["$", "^", "#", "!"], correct: 0, hint: "Dollar.", explanation: "$ matches end." },
    { id: 166, topic: "OS Module", type: "mcq", marks: 4, question: "List files in dir?", options: ["os.listdir()", "os.show()", "os.files()", "os.dir()"], correct: 0, hint: "List dir.", explanation: "os.listdir()." },
    { id: 167, topic: "Modules", type: "mcq", marks: 3, question: "Check main execution?", options: ["if __name__ == '__main__':", "if main():", "if __init__:", "run main"], correct: 0, hint: "Dunder name.", explanation: "Standard entry point check." },
    { id: 168, topic: "Modules", type: "mcq", marks: 4, question: "Package requirement?", options: ["__init__.py", "__main__.py", "package.py", "setup.py"], correct: 0, hint: "Init.", explanation: "__init__.py makes a folder a package." },
    { id: 169, topic: "Web Scraping", type: "mcq", marks: 3, question: "HTTP Get request?", options: ["requests.get()", "http.get()", "urllib.get()", "fetch()"], correct: 0, hint: "Requests lib.", explanation: "requests.get()." },
    { id: 170, topic: "Web Scraping", type: "mcq", marks: 3, question: "Check status code?", options: ["resp.status_code", "resp.code", "resp.status", "resp.check"], correct: 0, hint: "Status code.", explanation: "status_code attribute." },
    { id: 171, topic: "Fundamentals", type: "mcq", marks: 4, question: "f-string syntax?", options: ["f'Val: {x}'", "'Val: {x}'", "f('Val: ', x)", "str(x)"], correct: 0, hint: "Prefix f.", explanation: "f-strings introduced in 3.6." },
    { id: 172, topic: "OOP", type: "mcq", marks: 4, question: "Delete object property?", options: ["del obj.prop", "delete obj.prop", "obj.prop.remove()", "remove(obj.prop)"], correct: 0, hint: "Del.", explanation: "del keyword." },
    { id: 173, topic: "Collections", type: "mcq", marks: 4, question: "Set intersection?", options: ["&", "|", "^", "+"], correct: 0, hint: "Ampersand.", explanation: "& operator." },
    { id: 174, topic: "Control Flow", type: "mcq", marks: 4, question: "Zip two lists?", options: ["zip(a, b)", "combine(a, b)", "merge(a, b)", "map(a, b)"], correct: 0, hint: "Zip.", explanation: "zip() returns iterator of tuples." },
    { id: 175, topic: "Exception Handling", type: "mcq", marks: 4, question: "Ensure cleanup?", options: ["finally", "catch", "except", "else"], correct: 0, hint: "Finally.", explanation: "finally block runs regardless of errors." }
  ],

  cpp: [
    // --- BASICS (5 Questions) ---
    { id: 201, topic: "Basics", type: "mcq", marks: 3, question: "Standard output object?", options: ["cout", "print", "System.out", "cin"], correct: 0, hint: "c-out.", explanation: "cout." },
    { id: 202, topic: "Basics", type: "mcq", marks: 3, question: "Invalid loop?", options: ["repeat-until", "for", "while", "do-while"], correct: 0, hint: "Pascal.", explanation: "repeat-until." },
    { id: 203, topic: "Basics", type: "mcq", marks: 3, question: "Standard namespace?", options: ["std", "standard", "stl", "cpp"], correct: 0, hint: "std.", explanation: "std." },
    { id: 204, topic: "Basics", type: "mcq", marks: 4, question: "Reference variable syntax?", options: ["int &ref = x;", "int ref = &x;", "int *ref = x;", "ref int = x;"], correct: 0, hint: "&.", explanation: "int &ref = x;" },
    { id: 205, topic: "Basics", type: "mcq", marks: 3, question: "Entry point?", options: ["main", "start", "run", "init"], correct: 0, hint: "main.", explanation: "main()." },

    // --- OOP BASICS (8 Questions) ---
    { id: 206, topic: "OOP", type: "mcq", marks: 3, question: "Default class access?", options: ["private", "public", "protected", "friend"], correct: 0, hint: "Hidden.", explanation: "private." },
    { id: 207, topic: "OOP", type: "mcq", marks: 5, question: "Correct class def?", options: ["class Box { public: int w; };", "class Box: public int w;", "def class Box { int w };", "struct Box ( int w )"], correct: 0, hint: "Semi-colon.", explanation: "class Box { ... };" },
    { id: 208, topic: "OOP", type: "mcq", marks: 4, question: "Constructors have return type?", options: ["No", "Yes", "Void", "Int"], correct: 0, hint: "No return.", explanation: "No return type." },
    { id: 209, topic: "OOP", type: "mcq", marks: 4, question: "Copy constructor arg?", options: ["const ClassName &obj", "ClassName obj", "ClassName *obj", "None"], correct: 0, hint: "Reference.", explanation: "const reference." },
    { id: 210, topic: "OOP", type: "mcq", marks: 5, question: "Destructor syntax?", options: ["~ClassName() {}", "ClassName() {}", "!ClassName()", "deinit()"], correct: 0, hint: "~Name.", explanation: "~ClassName() {}" },
    { id: 211, topic: "OOP", type: "mcq", marks: 4, question: "Object creation on stack?", options: ["Box b;", "Box b = new Box();", "new Box;", "Box* b;"], correct: 0, hint: "Direct.", explanation: "Box b;" },
    { id: 212, topic: "OOP", type: "mcq", marks: 4, question: "Access public member?", options: ["obj.member", "obj->member", "obj::member", "obj:member"], correct: 0, hint: "Dot.", explanation: "obj.member" },
    { id: 213, topic: "OOP", type: "mcq", marks: 5, question: "Static member shared?", options: ["Yes, by all objects", "No, unique to object", "Only by child classes", "None"], correct: 0, hint: "Shared.", explanation: "Shared by all instances." },

    // --- ENCAPSULATION (7 Questions) ---
    { id: 214, topic: "Encapsulation", type: "mcq", marks: 4, question: "Destructor symbol?", options: ["~", "#", "!", "-"], correct: 0, hint: "Tilde.", explanation: "~." },
    { id: 215, topic: "Encapsulation", type: "mcq", marks: 3, question: "Current object pointer?", options: ["this", "self", "me", "obj"], correct: 0, hint: "this.", explanation: "this." },
    { id: 216, topic: "Encapsulation", type: "mcq", marks: 4, question: "Access private data?", options: ["Getters/Setters", "Directly", "Inheritance", "Global"], correct: 0, hint: "Methods.", explanation: "Getters/Setters." },
    { id: 217, topic: "Encapsulation", type: "mcq", marks: 5, question: "Scope resolution operator?", options: ["::", "->", ".", ":"], correct: 0, hint: "Double colon.", explanation: "::" },
    { id: 218, topic: "Encapsulation", type: "mcq", marks: 4, question: "Static function accesses?", options: ["Only static members", "All members", "Only public members", "None"], correct: 0, hint: "Static.", explanation: "Only static members." },
    { id: 219, topic: "Encapsulation", type: "mcq", marks: 4, question: "Initialize const member?", options: ["Initializer list", "Constructor body", "Setter", "Directly"], correct: 0, hint: "List.", explanation: "Initializer list." },
    { id: 220, topic: "Encapsulation", type: "mcq", marks: 4, question: "Friend function?", options: ["Access private members", "Member of class", "Inherits class", "Is static"], correct: 0, hint: "Access.", explanation: "Can access private members." },

    // --- INHERITANCE (8 Questions) ---
    { id: 221, topic: "Inheritance", type: "mcq", marks: 4, question: "Inheritance syntax?", options: ["class B : public A", "class B extends A", "class B inherits A", "class B(A)"], correct: 0, hint: "Colon.", explanation: "class B : public A" },
    { id: 222, topic: "Inheritance", type: "mcq", marks: 4, question: "Multiple parents?", options: ["Multiple", "Multilevel", "Hierarchical", "Single"], correct: 0, hint: "Multiple.", explanation: "Multiple Inheritance." },
    { id: 223, topic: "Inheritance", type: "mcq", marks: 4, question: "Diamond problem solution?", options: ["Virtual Inheritance", "Friend", "Static", "Abstract"], correct: 0, hint: "Virtual base.", explanation: "Virtual Inheritance." },
    { id: 224, topic: "Inheritance", type: "mcq", marks: 4, question: "Child only access?", options: ["protected", "private", "public", "friend"], correct: 0, hint: "Protected.", explanation: "protected." },
    { id: 225, topic: "Inheritance", type: "mcq", marks: 4, question: "Constructor call order?", options: ["Base then Derived", "Derived then Base", "Random", "Simultaneous"], correct: 0, hint: "Parent first.", explanation: "Base then Derived." },
    { id: 226, topic: "Inheritance", type: "mcq", marks: 5, question: "Ambiguity resolution?", options: ["Scope resolution ::", "Virtual", "Static", "Override"], correct: 0, hint: "::", explanation: "Scope resolution operator." },
    { id: 227, topic: "Inheritance", type: "mcq", marks: 4, question: "Private inheritance means?", options: ["Public becomes Private", "Public becomes Protected", "No change", "Error"], correct: 0, hint: "Private.", explanation: "Public members become private." },
    { id: 228, topic: "Inheritance", type: "mcq", marks: 4, question: "Destructor in inheritance?", options: ["Virtual destructor", "Static destructor", "Private destructor", "None"], correct: 0, hint: "Virtual.", explanation: "Should be virtual." },

    // --- POLYMORPHISM (8 Questions) ---
    { id: 229, topic: "Pointers", type: "mcq", marks: 5, question: "Alloc int on heap?", options: ["int* p = new int;", "int p = new int;", "int* p = malloc(int);", "new int p;"], correct: 0, hint: "new.", explanation: "int* p = new int;" },
    { id: 230, topic: "Pointers", type: "mcq", marks: 4, question: "Address-of?", options: ["&", "*", "->", "."], correct: 0, hint: "&.", explanation: "&." },
    { id: 231, topic: "Pointers", type: "mcq", marks: 5, question: "Delete array?", options: ["delete[] ptr;", "delete ptr;", "free(ptr);", "remove ptr;"], correct: 0, hint: "[]", explanation: "delete[] ptr;" },
    { id: 232, topic: "Polymorphism", type: "mcq", marks: 5, question: "Runtime poly keyword?", options: ["virtual", "override", "dynamic", "abstract"], correct: 0, hint: "Virtual.", explanation: "virtual." },
    { id: 233, topic: "Polymorphism", type: "mcq", marks: 4, question: "Compile-time poly?", options: ["Overloading", "Overriding", "Virtual", "Abstract"], correct: 0, hint: "Overloading.", explanation: "Overloading." },
    { id: 234, topic: "Polymorphism", type: "mcq", marks: 4, question: "Overriding is?", options: ["Runtime", "Compile-time", "Static", "None"], correct: 0, hint: "Runtime.", explanation: "Runtime." },
    { id: 235, topic: "Polymorphism", type: "mcq", marks: 5, question: "Operator overloading?", options: ["operator+", "func+", "add()", "plus()"], correct: 0, hint: "operator.", explanation: "operator+." },
    { id: 236, topic: "Polymorphism", type: "mcq", marks: 4, question: "Safe downcasting?", options: ["dynamic_cast", "static_cast", "const_cast", "reinterpret_cast"], correct: 0, hint: "Dynamic.", explanation: "dynamic_cast." },

    // --- ABSTRACTION & EXCEPTIONS (Existing) ---
    { id: 237, topic: "Abstraction", type: "mcq", marks: 5, question: "Pure virtual syntax?", options: ["= 0", "= null", "abstract", "virtual"], correct: 0, hint: "= 0.", explanation: "= 0." },
    { id: 238, topic: "Abstraction", type: "mcq", marks: 4, question: "Class with pure virtual?", options: ["Abstract Class", "Virtual Class", "Interface", "Static Class"], correct: 0, hint: "Abstract.", explanation: "Abstract Class." },
    { id: 239, topic: "Exception Handling", type: "mcq", marks: 5, question: "Catch-all?", options: ["catch (...)", "catch (Exception e)", "catch (ALL)", "except:"], correct: 0, hint: "...", explanation: "catch(...) {}" },
    { id: 240, topic: "Exception Handling", type: "mcq", marks: 4, question: "Raise exception?", options: ["throw", "raise", "error", "catch"], correct: 0, hint: "Throw.", explanation: "throw." },
    { id: 241, topic: "Templates", type: "mcq", marks: 6, question: "Template decl?", options: ["template <typename T>", "template class T", "generic <T>", "class <T>"], correct: 0, hint: "typename.", explanation: "template <typename T>." },
    { id: 242, topic: "Advanced", type: "mcq", marks: 5, question: "Access private ext?", options: ["friend", "public", "static", "extern"], correct: 0, hint: "Friend.", explanation: "friend." },
    { id: 243, topic: "Advanced", type: "mcq", marks: 5, question: "Stdlib vector add?", options: ["push_back()", "add()", "append()", "insert()"], correct: 0, hint: "Push.", explanation: "push_back()." },
    { id: 244, topic: "Advanced", type: "mcq", marks: 4, question: "Constant keyword?", options: ["const", "final", "static", "let"], correct: 0, hint: "const.", explanation: "const." },
    { id: 245, topic: "Basics", type: "mcq", marks: 4, question: "Pointer size (64-bit)?", options: ["8 bytes", "4 bytes", "2 bytes", "16 bytes"], correct: 0, hint: "64 bits.", explanation: "8 bytes." },
    { id: 246, topic: "Basics", type: "mcq", marks: 3, question: "Logical OR?", options: ["||", "OR", "|", "&&"], correct: 0, hint: "Pipes.", explanation: "||" },
    { id: 247, topic: "Basics", type: "mcq", marks: 3, question: "Increment operator?", options: ["++", "+=", "inc", "add"], correct: 0, hint: "Plus plus.", explanation: "++" },
    { id: 248, topic: "OOP", type: "mcq", marks: 4, question: "Member pointer?", options: ["->", ".", "::", "*"], correct: 0, hint: "Arrow.", explanation: "Arrow -> for pointers." },
    { id: 249, topic: "OOP", type: "mcq", marks: 4, question: "Shallow vs Deep?", options: ["Copying", "Inheritance", "Polymorphism", "None"], correct: 0, hint: "Copy.", explanation: "Copy Constructor." },
    { id: 250, topic: "Basics", type: "mcq", marks: 3, question: "Terminator?", options: [";", ".", ":", "}"], correct: 0, hint: "Semi-colon.", explanation: ";" },

    // --- NEW: ADVANCED OOP & DETAILS (20 Questions) ---
    { id: 251, topic: "Encapsulation", type: "mcq", marks: 4, question: "Init static member?", options: ["Outside class", "In constructor", "Inside class", "Not possible"], correct: 0, hint: "Scope.", explanation: "Type Class::var = val;" },
    { id: 252, topic: "Encapsulation", type: "mcq", marks: 4, question: "Friend class can?", options: ["Access all members", "Access public only", "Inherit", "Override"], correct: 0, hint: "All.", explanation: "Friends access private/protected." },
    { id: 253, topic: "Inheritance", type: "mcq", marks: 5, question: "Virtual Base Class used for?", options: ["Diamond Problem", "Polymorphism", "Abstraction", "Encapsulation"], correct: 0, hint: "Ambiguity.", explanation: "Solves ambiguity in multiple inheritance." },
    { id: 254, topic: "Pointers", type: "mcq", marks: 4, question: "Void pointer?", options: ["Generic pointer", "Null pointer", "Zero pointer", "Empty"], correct: 0, hint: "Generic.", explanation: "Can hold address of any type." },
    { id: 255, topic: "Polymorphism", type: "mcq", marks: 4, question: "Abstract class object?", options: ["Cannot create", "Can create", "Only pointer", "Both A and C"], correct: 3, hint: "Instance.", explanation: "Cannot instantiate, but pointers allowed." },
    { id: 256, topic: "Exceptions", type: "mcq", marks: 3, question: "Rethrow exception?", options: ["throw;", "throw e;", "return;", "exit;"], correct: 0, hint: "Empty throw.", explanation: "throw; inside catch rethrows." },
    { id: 257, topic: "Basics", type: "mcq", marks: 4, question: "Inline function?", options: ["Replaced at call site", "Faster compile", "Smaller code", "Virtual"], correct: 0, hint: "Expand.", explanation: "Compiler optimization." },
    { id: 258, topic: "OOP", type: "mcq", marks: 5, question: "Deep copy needed when?", options: ["Dynamic memory used", "Static members", "Large objects", "Inheritance"], correct: 0, hint: "Pointers.", explanation: "To avoid double free errors." },
    { id: 259, topic: "Encapsulation", type: "mcq", marks: 4, question: "Setter function?", options: ["Mutator", "Accessor", "Constructor", "Destructor"], correct: 0, hint: "Mutate.", explanation: "Modifies private data." },
    { id: 260, topic: "Encapsulation", type: "mcq", marks: 4, question: "Getter function?", options: ["Accessor", "Mutator", "Constructor", "Destructor"], correct: 0, hint: "Access.", explanation: "Returns private data." },
    { id: 261, topic: "Inheritance", type: "mcq", marks: 5, question: "Order of destruction?", options: ["Derived then Base", "Base then Derived", "Random", "Parallel"], correct: 0, hint: "Reverse.", explanation: "Reverse of construction." },
    { id: 262, topic: "Pointers", type: "mcq", marks: 5, question: "Array of pointers?", options: ["int *arr[10]", "int arr[10]*", "int (*arr)[10]", "int arr*"], correct: 0, hint: "* before [].", explanation: "Array of 10 integer pointers." },
    { id: 263, topic: "Basics", type: "mcq", marks: 3, question: "New line char?", options: ["\\n", "\\l", "\\r", "\\t"], correct: 0, hint: "n.", explanation: "New line." },
    { id: 264, topic: "Basics", type: "mcq", marks: 3, question: "Manipulator for newline?", options: ["endl", "newl", "end", "nl"], correct: 0, hint: "end line.", explanation: "std::endl." },
    { id: 265, topic: "OOP", type: "mcq", marks: 4, question: "Function overloading?", options: ["Same name, diff args", "Same name, diff return", "Diff name", "Virtual"], correct: 0, hint: "Signature.", explanation: "Compile-time polymorphism." },
    { id: 266, topic: "Templates", type: "mcq", marks: 5, question: "Template specialization?", options: ["Custom logic for type", "Inheritance", "Overloading", "Error"], correct: 0, hint: "Special.", explanation: "Specific implementation for a type." },
    { id: 267, topic: "Pointers", type: "mcq", marks: 4, question: "Dereference operator?", options: ["*", "&", "->", "::"], correct: 0, hint: "Star.", explanation: "* gets value at address." },
    { id: 268, topic: "Inheritance", type: "mcq", marks: 4, question: "Hybrid inheritance?", options: ["Combination of types", "Single only", "Interface", "None"], correct: 0, hint: "Mix.", explanation: "Mixing multiple types (e.g. multiple + multilevel)." },
    { id: 269, topic: "OOP", type: "mcq", marks: 4, question: "Object slicing?", options: ["Derived assigned to Base", "Base assigned to Derived", "Cut object", "Delete"], correct: 0, hint: "Slice off.", explanation: "Derived parts lost when assigned to Base by value." },
    { id: 270, topic: "Basics", type: "mcq", marks: 3, question: "Ternary operator?", options: ["?:", "if-else", "switch", "->"], correct: 0, hint: "Question.", explanation: "Condition ? True : False." },
    { id: 271, topic: "Abstraction", type: "mcq", marks: 5, question: "Interface in C++?", options: ["Pure abstract class", "keyword interface", "struct", "header"], correct: 0, hint: "Abstract.", explanation: "Class with only pure virtual functions." },
    { id: 272, topic: "Exceptions", type: "mcq", marks: 4, question: "Standard exception class?", options: ["std::exception", "std::error", "Exception", "Error"], correct: 0, hint: "std.", explanation: "Base class for exceptions." },
    { id: 273, topic: "OOP", type: "mcq", marks: 4, question: "Default constructor?", options: ["No args", "1 arg", "All args", "None"], correct: 0, hint: "Empty.", explanation: "Constructor with no parameters." },
    { id: 274, topic: "Pointers", type: "mcq", marks: 5, question: "Memory leak cause?", options: ["No delete after new", "No new", "Null pointer", "Stack var"], correct: 0, hint: "Clean up.", explanation: "Failing to free dynamic memory." },
    { id: 275, topic: "Basics", type: "mcq", marks: 3, question: "Global scope operator?", options: ["::", "global", "extern", "."], correct: 0, hint: "Unary ::", explanation: "::x accesses global x." }
  ],

  ds: [
    // --- NUMPY (15 Questions) ---
    { id: 301, topic: "NumPy", type: "mcq", marks: 3, question: "Advantage over List?", options: ["Memory Efficient", "Slower", "Dynamic Size", "None"], correct: 0, hint: "Memory.", explanation: "Memory efficient." },
    { id: 302, topic: "NumPy", type: "mcq", marks: 4, question: "Dimensions attr?", options: [".shape", ".size", ".dim", ".len"], correct: 0, hint: "Shape.", explanation: ".shape" },
    { id: 303, topic: "NumPy", type: "mcq", marks: 5, question: "3x3 zeros?", options: ["np.zeros((3,3))", "np.zeros(3,3)", "np.array(0, 3, 3)", "np.empty(3,3)"], correct: 0, hint: "Tuple.", explanation: "np.zeros((3,3))." },
    { id: 304, topic: "NumPy", type: "mcq", marks: 4, question: "Range func?", options: ["np.arange()", "np.range()", "np.seq()", "np.list()"], correct: 0, hint: "arange.", explanation: "np.arange()." },
    { id: 305, topic: "NumPy", type: "mcq", marks: 5, question: "Reshape array?", options: ["arr.reshape(2, 5)", "arr.shape(2, 5)", "arr.resize(2, 5)", "arr.change(2, 5)"], correct: 0, hint: "reshape.", explanation: "arr.reshape()." },
    { id: 306, topic: "NumPy", type: "mcq", marks: 5, question: "Dot product?", options: ["np.dot(a, b)", "np.mult(a, b)", "np.prod(a, b)", "a.dot.b"], correct: 0, hint: "dot.", explanation: "np.dot()." },
    { id: 307, topic: "NumPy", type: "mcq", marks: 4, question: "Plotting lib?", options: ["Matplotlib", "Seaborn", "Plotly", "All"], correct: 3, hint: "All.", explanation: "All are valid." },
    { id: 308, topic: "NumPy", type: "mcq", marks: 5, question: "Mean func?", options: ["np.mean()", "np.avg()", "np.average()", "np.median()"], correct: 0, hint: "mean.", explanation: "np.mean()." },
    { id: 309, topic: "NumPy", type: "mcq", marks: 4, question: "Array type?", options: ["ndarray", "array", "list", "tensor"], correct: 0, hint: "n-dim.", explanation: "ndarray." },
    { id: 310, topic: "NumPy", type: "mcq", marks: 4, question: "Total elements?", options: [".size", ".count", ".length", ".num"], correct: 0, hint: "Size.", explanation: ".size" },
    { id: 311, topic: "NumPy", type: "mcq", marks: 4, question: "Square root?", options: ["np.sqrt()", "np.root()", "np.sq()", "math.sqrt()"], correct: 0, hint: "sqrt.", explanation: "np.sqrt()." },
    { id: 312, topic: "NumPy", type: "mcq", marks: 5, question: "Stack vertically?", options: ["np.vstack()", "np.hstack()", "np.stack_v()", "np.vert()"], correct: 0, hint: "v-stack.", explanation: "np.vstack()." },
    { id: 313, topic: "NumPy", type: "mcq", marks: 5, question: "Random 0-1?", options: ["np.random.rand()", "np.rand()", "np.random()", "random()"], correct: 0, hint: "random.", explanation: "np.random.rand()." },
    { id: 314, topic: "NumPy", type: "mcq", marks: 4, question: "Get max index?", options: ["np.argmax()", "np.max()", "np.idx()", "np.top()"], correct: 0, hint: "Arg.", explanation: "np.argmax()." },
    { id: 315, topic: "NumPy", type: "mcq", marks: 4, question: "Identity matrix?", options: ["np.eye()", "np.identity()", "np.one()", "np.id()"], correct: 0, hint: "Eye.", explanation: "np.eye()." },

    // --- PANDAS (15 Questions) ---
    { id: 316, topic: "Pandas", type: "mcq", marks: 3, question: "2D structure?", options: ["DataFrame", "Series", "Panel", "Table"], correct: 0, hint: "DF.", explanation: "DataFrame." },
    { id: 317, topic: "Pandas", type: "mcq", marks: 4, question: "Read CSV?", options: ["read_csv", "load_csv", "open_csv", "get_csv"], correct: 0, hint: "read_csv.", explanation: "read_csv()." },
    { id: 318, topic: "Pandas", type: "mcq", marks: 5, question: "Group by 'dept' mean?", options: ["df.groupby('dept').mean()", "df.group('dept').avg()", "df.sort('dept').mean()", "df.mean('dept')"], correct: 0, hint: "groupby.", explanation: "df.groupby().mean()." },
    { id: 319, topic: "Pandas", type: "mcq", marks: 4, question: "Check nulls?", options: ["isnull()", "checknull()", "null()", "isnan()"], correct: 0, hint: "isnull.", explanation: "isnull()." },
    { id: 320, topic: "Pandas", type: "mcq", marks: 4, question: "Drop missing?", options: ["dropna()", "fillna()", "delna()", "removena()"], correct: 0, hint: "drop.", explanation: "dropna()." },
    { id: 321, topic: "Pandas", type: "mcq", marks: 4, question: "Summary stats?", options: ["describe()", "summary()", "stats()", "info()"], correct: 0, hint: "describe.", explanation: "describe()." },
    { id: 322, topic: "Pandas", type: "mcq", marks: 5, question: "Select col 'A'?", options: ["df['A']", "df(A)", "df.select('A')", "df.get('A')"], correct: 0, hint: "Brackets.", explanation: "df['A']." },
    { id: 323, topic: "Pandas", type: "mcq", marks: 6, question: "Merge inner?", options: ["pd.merge(d1, d2, how='inner')", "d1.join(d2)", "pd.concat([d1,d2])", "d1.merge(d2, inner=True)"], correct: 0, hint: "pd.merge.", explanation: "pd.merge(..., how='inner')." },
    { id: 324, topic: "Pandas", type: "mcq", marks: 4, question: "Fill NaN?", options: ["fillna()", "replacena()", "fill()", "add()"], correct: 0, hint: "fillna.", explanation: "fillna()." },
    { id: 325, topic: "Pandas", type: "mcq", marks: 4, question: "Head default?", options: ["5", "10", "1", "20"], correct: 0, hint: "5.", explanation: "5." },
    { id: 326, topic: "Pandas", type: "mcq", marks: 4, question: "Get info?", options: ["df.info()", "df.meta()", "df.type()", "df.dtypes()"], correct: 0, hint: "Info.", explanation: "df.info()." },
    { id: 327, topic: "Pandas", type: "mcq", marks: 4, question: "Unique values?", options: ["unique()", "distinct()", "uniq()", "single()"], correct: 0, hint: "Unique.", explanation: "Series.unique()." },
    { id: 328, topic: "Pandas", type: "mcq", marks: 4, question: "Access row by label?", options: ["loc", "iloc", "ix", "at"], correct: 0, hint: "Location.", explanation: "loc." },
    { id: 329, topic: "Pandas", type: "mcq", marks: 4, question: "Access row by index?", options: ["iloc", "loc", "idx", "at"], correct: 0, hint: "Integer loc.", explanation: "iloc." },
    { id: 330, topic: "Pandas", type: "mcq", marks: 5, question: "Apply func to col?", options: ["apply()", "map()", "run()", "exec()"], correct: 0, hint: "Apply.", explanation: "apply()." },

    // --- SQL (20 Questions) ---
    { id: 331, topic: "SQL", type: "mcq", marks: 3, question: "DDL Command?", options: ["CREATE", "SELECT", "INSERT", "DELETE"], correct: 0, hint: "Create.", explanation: "CREATE." },
    { id: 332, topic: "SQL", type: "mcq", marks: 6, question: "Select > 25 order name?", options: ["SELECT * FROM U WHERE age > 25 ORDER BY name", "SELECT * FROM U ORDER BY name WHERE age > 25", "GET U WHERE age > 25", "FETCH * FROM U SORT name"], correct: 0, hint: "Order.", explanation: "Standard SQL." },
    { id: 333, topic: "SQL", type: "mcq", marks: 4, question: "Filter groups?", options: ["HAVING", "WHERE", "GROUP", "FILTER"], correct: 0, hint: "Having.", explanation: "HAVING." },
    { id: 334, topic: "SQL", type: "mcq", marks: 4, question: "Join all records?", options: ["FULL OUTER JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"], correct: 0, hint: "Full.", explanation: "FULL OUTER." },
    { id: 335, topic: "SQL", type: "mcq", marks: 5, question: "Insert syntax?", options: ["INSERT INTO T VALUES (...)", "ADD TO T VALUES (...)", "PUT INTO T (...)", "UPDATE T ADD (...)"], correct: 0, hint: "Insert Into.", explanation: "INSERT INTO." },
    { id: 336, topic: "SQL", type: "mcq", marks: 3, question: "Delete table?", options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"], correct: 0, hint: "Drop.", explanation: "DROP TABLE." },
    { id: 337, topic: "SQL", type: "mcq", marks: 3, question: "Unique constraint?", options: ["UNIQUE", "DISTINCT", "SINGLE", "PRIMARY"], correct: 0, hint: "Unique.", explanation: "UNIQUE." },
    { id: 338, topic: "SQL", type: "mcq", marks: 4, question: "Remove dupes?", options: ["DISTINCT", "UNIQUE", "DIFFERENT", "SINGLE"], correct: 0, hint: "Distinct.", explanation: "SELECT DISTINCT." },
    { id: 339, topic: "SQL", type: "mcq", marks: 3, question: "Modify data?", options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"], correct: 0, hint: "Update.", explanation: "UPDATE." },
    { id: 340, topic: "SQL", type: "mcq", marks: 5, question: "Count rows?", options: ["COUNT(*)", "SUM(*)", "TOTAL(*)", "NUM(*)"], correct: 0, hint: "Count.", explanation: "COUNT(*)." },
    { id: 341, topic: "SQL", type: "mcq", marks: 4, question: "Pattern match?", options: ["LIKE", "MATCH", "SIMILAR", "SAME"], correct: 0, hint: "Like.", explanation: "LIKE." },
    { id: 342, topic: "SQL", type: "mcq", marks: 4, question: "Primary Key null?", options: ["No", "Yes", "Sometimes", "Depends"], correct: 0, hint: "Never.", explanation: "Cannot be NULL." },
    { id: 343, topic: "SQL", type: "mcq", marks: 3, question: "DML Command?", options: ["INSERT", "CREATE", "ALTER", "DROP"], correct: 0, hint: "Data Manip.", explanation: "INSERT." },
    { id: 344, topic: "SQL", type: "mcq", marks: 4, question: "Wildcard char?", options: ["%", "*", "?", "#"], correct: 0, hint: "Percent.", explanation: "% in LIKE." },
    { id: 345, topic: "SQL", type: "mcq", marks: 4, question: "Sort descending?", options: ["DESC", "ASC", "DOWN", "REV"], correct: 0, hint: "Desc.", explanation: "DESC." },
    { id: 346, topic: "SQL", type: "mcq", marks: 5, question: "Combine queries?", options: ["UNION", "JOIN", "ADD", "MERGE"], correct: 0, hint: "Union.", explanation: "UNION." },
    { id: 347, topic: "SQL", type: "mcq", marks: 4, question: "Table alias?", options: ["AS", "IS", "BY", "TO"], correct: 0, hint: "As.", explanation: "AS." },
    { id: 348, topic: "SQL", type: "mcq", marks: 5, question: "Select top 5?", options: ["LIMIT 5", "TOP 5", "HEAD 5", "FIRST 5"], correct: 0, hint: "Limit.", explanation: "LIMIT 5 (MySQL)." },
    { id: 349, topic: "SQL", type: "mcq", marks: 3, question: "DCL Command?", options: ["GRANT", "SELECT", "INSERT", "CREATE"], correct: 0, hint: "Control.", explanation: "GRANT." },
    { id: 350, topic: "SQL", type: "mcq", marks: 5, question: "Between range?", options: ["BETWEEN", "RANGE", "WITHIN", "INSIDE"], correct: 0, hint: "Between.", explanation: "BETWEEN." },

    // --- NEW: ADVANCED DATA SCIENCE & SQL (25 Questions) ---
    { id: 351, topic: "Pandas", type: "mcq", marks: 5, question: "Reshape: wide to long?", options: ["melt()", "pivot()", "stack()", "flatten()"], correct: 0, hint: "Melting.", explanation: "pd.melt() unpivots a DataFrame." },
    { id: 352, topic: "Pandas", type: "mcq", marks: 5, question: "Reshape: long to wide?", options: ["pivot()", "melt()", "unstack()", "expand()"], correct: 0, hint: "Pivot.", explanation: "df.pivot() spreads rows to columns." },
    { id: 353, topic: "NumPy", type: "mcq", marks: 5, question: "Evenly spaced numbers?", options: ["np.linspace()", "np.range()", "np.space()", "np.even()"], correct: 0, hint: "Linear space.", explanation: "np.linspace(start, stop, num)." },
    { id: 354, topic: "SQL", type: "mcq", marks: 4, question: "Match single char wildcard?", options: ["_", "%", "?", "."], correct: 0, hint: "Underscore.", explanation: "_ matches exactly one char." },
    { id: 355, topic: "SQL", type: "mcq", marks: 4, question: "Trim whitespace?", options: ["TRIM()", "STRIP()", "CUT()", "CLEAN()"], correct: 0, hint: "Trim.", explanation: "TRIM() removes spaces." },
    { id: 356, topic: "Pandas", type: "mcq", marks: 4, question: "Delete column?", options: ["df.drop(col, axis=1)", "df.remove(col)", "del df[col]", "Both A and C"], correct: 3, hint: "Drop/Del.", explanation: "Both work." },
    { id: 357, topic: "NumPy", type: "mcq", marks: 4, question: "Matrix multiplication?", options: ["@", "*", "dot()", "Both A and C"], correct: 3, hint: "At or dot.", explanation: "@ operator or .dot()." },
    { id: 358, topic: "SQL", type: "mcq", marks: 5, question: "Filter after Group By?", options: ["HAVING", "WHERE", "FILTER", "WHEN"], correct: 0, hint: "Having.", explanation: "HAVING filters aggregates." },
    { id: 359, topic: "SQL", type: "mcq", marks: 4, question: "Current date SQL?", options: ["CURDATE()", "NOW()", "TODAY()", "DATE()"], correct: 0, hint: "Current.", explanation: "CURDATE() or CURRENT_DATE." },
    { id: 360, topic: "Pandas", type: "mcq", marks: 4, question: "Rename columns?", options: ["df.rename()", "df.columns()", "df.name()", "df.set_names()"], correct: 0, hint: "Rename.", explanation: "df.rename(columns={...})." },
    { id: 361, topic: "NumPy", type: "mcq", marks: 5, question: "Flatten array?", options: ["arr.flatten()", "arr.flat()", "arr.1d()", "arr.ravel()"], correct: 0, hint: "Flat.", explanation: "flatten() returns copy." },
    { id: 362, topic: "SQL", type: "mcq", marks: 5, question: "Outer Join support?", options: ["FULL JOIN", "OUTER JOIN", "Both A and B", "None"], correct: 2, hint: "Full.", explanation: "Syntax varies, both common." },
    { id: 363, topic: "Pandas", type: "mcq", marks: 4, question: "Sort by index?", options: ["sort_index()", "sort_values()", "order_index()", "index_sort()"], correct: 0, hint: "Index.", explanation: "sort_index()." },
    { id: 364, topic: "SQL", type: "mcq", marks: 3, question: "To upper case?", options: ["UPPER()", "UCASE()", "CAPS()", "Both A and B"], correct: 3, hint: "Upper.", explanation: "UPPER() is standard." },
    { id: 365, topic: "NumPy", type: "mcq", marks: 4, question: "Standard deviation?", options: ["np.std()", "np.dev()", "np.var()", "np.sigma()"], correct: 0, hint: "Std.", explanation: "np.std()." },
    { id: 366, topic: "Pandas", type: "mcq", marks: 5, question: "Frequency of values?", options: ["value_counts()", "count_values()", "freq()", "unique_counts()"], correct: 0, hint: "Value counts.", explanation: "Series.value_counts()." },
    { id: 367, topic: "SQL", type: "mcq", marks: 5, question: "Get year from date?", options: ["YEAR()", "GETYEAR()", "EXTRACT(YEAR FROM...)", "Both A and C"], correct: 3, hint: "Extract.", explanation: "YEAR() or EXTRACT()." },
    { id: 368, topic: "SQL", type: "mcq", marks: 4, question: "Concatenate strings?", options: ["CONCAT()", "JOIN()", "MERGE()", "ADD()"], correct: 0, hint: "Concat.", explanation: "CONCAT(str1, str2)." },
    { id: 369, topic: "Pandas", type: "mcq", marks: 4, question: "Datatypes of DF?", options: ["df.dtypes", "df.types", "df.type", "df.info"], correct: 0, hint: "Dtypes.", explanation: "dtypes property." },
    { id: 370, topic: "NumPy", type: "mcq", marks: 4, question: "Get specific indices?", options: ["np.where()", "np.index()", "np.find()", "np.loc()"], correct: 0, hint: "Where.", explanation: "np.where(condition)." },
    { id: 371, topic: "SQL", type: "mcq", marks: 5, question: "Limit with offset?", options: ["LIMIT 5 OFFSET 10", "LIMIT 10, 5", "SKIP 10 TAKE 5", "Both A and B"], correct: 3, hint: "Offset.", explanation: "MySQL supports both syntax." },
    { id: 372, topic: "Pandas", type: "mcq", marks: 4, question: "Save to Excel?", options: ["to_excel()", "save_excel()", "write_excel()", "export_excel()"], correct: 0, hint: "To.", explanation: "to_excel()." },
    { id: 373, topic: "SQL", type: "mcq", marks: 3, question: "Cartesian product?", options: ["CROSS JOIN", "INNER JOIN", "OUTER JOIN", "SELF JOIN"], correct: 0, hint: "Cross.", explanation: "CROSS JOIN." },
    { id: 374, topic: "NumPy", type: "mcq", marks: 4, question: "Identity matrix (int)?", options: ["np.eye(3, dtype=int)", "np.eye(3)", "np.identity(3)", "np.int_eye(3)"], correct: 0, hint: "Dtype.", explanation: "Specify dtype." },
    { id: 375, topic: "SQL", type: "mcq", marks: 4, question: "Not equal operator?", options: ["<>", "!=", "Both A and B", "=="], correct: 2, hint: "Standard.", explanation: "<> is standard, != often supported." }
  ],

  ml: [
    // --- MACHINE LEARNING: SUPERVISED ---
    { id: 401, topic: "ML Fundamentals", type: "mcq", marks: 3, question: "Difference between AI, ML, and DL?", options: ["DL is subset of ML is subset of AI", "ML is subset of DL is subset of AI", "AI, ML, DL are same", "No relation"], correct: 0, hint: "Hierarchy.", explanation: "Deep Learning is a subset of Machine Learning, which is a subset of Artificial Intelligence." },
    { id: 402, topic: "Regression", type: "mcq", marks: 4, question: "Metric to penalize large errors?", options: ["MSE", "MAE", "R2", "Accuracy"], correct: 0, hint: "Square.", explanation: "Mean Squared Error penalizes large errors by squaring differences." },
    { id: 403, topic: "Model Evaluation", type: "mcq", marks: 4, question: "Bias-Variance Tradeoff: High Bias leads to?", options: ["Underfitting", "Overfitting", "Perfect Fit", "Noise"], correct: 0, hint: "Simple model.", explanation: "High bias implies the model is too simple (underfitting)." },
    { id: 404, topic: "Classification", type: "mcq", marks: 5, question: "Logistic Regression Output?", options: ["Probability (0 to 1)", "Continuous Value", "Integer Class", "Text"], correct: 0, hint: "Sigmoid.", explanation: "Sigmoid function outputs a probability between 0 and 1." },
    { id: 405, topic: "Algorithms", type: "mcq", marks: 4, question: "K-NN: What does 'K' stand for?", options: ["Number of neighbors", "Number of clusters", "Number of features", "Kernel size"], correct: 0, hint: "Neighbors.", explanation: "K Nearest Neighbors." },
    { id: 406, topic: "Tree Models", type: "mcq", marks: 5, question: "Decision Tree split criteria?", options: ["Gini Impurity / Entropy", "MSE / MAE", "Log Loss", "Accuracy"], correct: 0, hint: "Purity.", explanation: "Used to measure the quality of a split." },
    { id: 407, topic: "Ensemble", type: "mcq", marks: 5, question: "Random Forest is an example of?", options: ["Bagging", "Boosting", "Stacking", "Clustering"], correct: 0, hint: "Bootstrap Agg.", explanation: "Bootstrap Aggregating (Bagging)." },
    { id: 408, topic: "Regularization", type: "mcq", marks: 5, question: "Lasso Regression adds penalty?", options: ["L1 (Absolute value)", "L2 (Square value)", "L1 + L2", "None"], correct: 0, hint: "L1.", explanation: "Adds L1 penalty (absolute value of magnitude)." },
    { id: 409, topic: "SVM", type: "mcq", marks: 4, question: "SVM Kernel Trick purpose?", options: ["Map low-dim to high-dim", "Reduce dimensions", "Normalize data", "Clustering"], correct: 0, hint: "High dim.", explanation: "Makes non-linear separation possible in higher dimensions." },
    
    // --- MACHINE LEARNING: UNSUPERVISED & DIM REDUCTION ---
    { id: 410, topic: "Clustering", type: "mcq", marks: 4, question: "K-Means: How to choose K?", options: ["Elbow Method", "Cross Validation", "Gradient Descent", "Random"], correct: 0, hint: "Elbow.", explanation: "Plot WCSS vs K to find the elbow point." },
    { id: 411, topic: "Clustering", type: "mcq", marks: 5, question: "DBSCAN main parameter?", options: ["Epsilon & MinPts", "K & Centroids", "Depth & Leaves", "Learning Rate"], correct: 0, hint: "Density.", explanation: "Radius (Epsilon) and minimum points." },
    { id: 412, topic: "Dim Reduction", type: "mcq", marks: 5, question: "PCA goal?", options: ["Maximize Variance", "Minimize Bias", "Maximize Accuracy", "Clustering"], correct: 0, hint: "Variance.", explanation: "Projects data to directions of maximum variance." },
    { id: 413, topic: "Association Rule", type: "mcq", marks: 5, question: "Apriori Algorithm usage?", options: ["Market Basket Analysis", "Image Rec", "Regression", "NLP"], correct: 0, hint: "Basket.", explanation: "Finds frequent itemsets (Association Rules)." },
    { id: 414, topic: "Linear Regression", type: "mcq", marks: 4, question: "Assumption of Linear Reg?", options: ["Homoscedasticity", "Multicollinearity", "Non-linearity", "Outliers"], correct: 0, hint: "Variance.", explanation: "Constant variance of error terms (Homoscedasticity) is a key assumption." },
    { id: 415, topic: "Metrics", type: "mcq", marks: 4, question: "Precision calculation?", options: ["TP / (TP + FP)", "TP / (TP + FN)", "TP / TN", "TP / All"], correct: 0, hint: "Positive pred.", explanation: "Accuracy of positive predictions." }
  ],

  dl: [
    // --- DEEP LEARNING: CV & ANN ---
    { id: 501, topic: "OpenCV", type: "mcq", marks: 3, question: "Read image in grayscale?", options: ["cv2.imread(img, 0)", "cv2.read(img, gray)", "cv2.load(img)", "cv2.gray(img)"], correct: 0, hint: "Flag 0.", explanation: "Flag 0 or cv2.IMREAD_GRAYSCALE." },
    { id: 502, topic: "OpenCV", type: "mcq", marks: 4, question: "Edge detection algo?", options: ["Canny", "Sobel", "Laplacian", "All of above"], correct: 3, hint: "All.", explanation: "All are edge detection methods." },
    { id: 503, topic: "ANN", type: "mcq", marks: 4, question: "Activation function for hidden layers?", options: ["ReLU", "Sigmoid", "Softmax", "Linear"], correct: 0, hint: "Non-linear.", explanation: "ReLU is standard to avoid vanishing gradients." },
    { id: 504, topic: "ANN", type: "mcq", marks: 5, question: "Problem with Sigmoid?", options: ["Vanishing Gradient", "Exploding Gradient", "Dead Neurons", "None"], correct: 0, hint: "Small deriv.", explanation: "Gradients become very small during backprop." },
    { id: 505, topic: "Optimization", type: "mcq", marks: 4, question: "Popular optimizer?", options: ["Adam", "SGD", "RMSProp", "All"], correct: 3, hint: "Adaptive.", explanation: "Adam is widely used, but all are valid." },
    { id: 506, topic: "Regularization", type: "mcq", marks: 4, question: "Dropout layer purpose?", options: ["Prevent Overfitting", "Speed up training", "Normalize inputs", "Increase accuracy"], correct: 0, hint: "Drop nodes.", explanation: "Randomly disables neurons to improve generalization." },

    // --- DEEP LEARNING: CNN, RNN, TRANSFORMERS ---
    { id: 507, topic: "CNN", type: "mcq", marks: 5, question: "Convolution operation purpose?", options: ["Feature Extraction", "Classification", "Reduction", "Normalization"], correct: 0, hint: "Filters.", explanation: "Extracts features like edges, textures." },
    { id: 508, topic: "CNN", type: "mcq", marks: 4, question: "Pooling layer purpose?", options: ["Reduce dimensions", "Increase params", "Activation", "None"], correct: 0, hint: "Downsample.", explanation: "Reduces spatial dimensions and computation." },
    { id: 509, topic: "CNN", type: "mcq", marks: 5, question: "Pretrained Model usage?", options: ["Transfer Learning", "Unsupervised Learning", "Reinforcement Learning", "None"], correct: 0, hint: "Transfer.", explanation: "Using learned weights on new tasks." },
    { id: 510, topic: "RNN", type: "mcq", marks: 4, question: "RNN main issue?", options: ["Vanishing Gradient", "High Bias", "Low Variance", "Overfitting"], correct: 0, hint: "Long term.", explanation: "Difficulty learning long-term dependencies." },
    { id: 511, topic: "RNN", type: "mcq", marks: 5, question: "LSTM component?", options: ["Gates (Input, Forget, Output)", "Convolution", "Pooling", "Attention"], correct: 0, hint: "Control flow.", explanation: "Gates control information flow." },
    { id: 512, topic: "Transformers", type: "mcq", marks: 5, question: "Key Transformer mechanism?", options: ["Self-Attention", "Convolution", "Recurrence", "Pooling"], correct: 0, hint: "Attention.", explanation: "Allows model to weigh importance of different words." },
    { id: 513, topic: "Transformers", type: "mcq", marks: 5, question: "BERT architecture?", options: ["Encoder only", "Decoder only", "Encoder-Decoder", "RNN"], correct: 0, hint: "Bidirectional.", explanation: "Encoder stack of Transformer." },
    { id: 514, topic: "Deep Learning", type: "mcq", marks: 4, question: "Softmax output sum?", options: ["1.0", "0.0", "100", "Variable"], correct: 0, hint: "Prob dist.", explanation: "Outputs a probability distribution summing to 1." },
    { id: 515, topic: "OpenCV", type: "mcq", marks: 4, question: "Morphological Ops: Erosion?", options: ["Shrinks bright regions", "Expands bright regions", "Blurs", "Sharpens"], correct: 0, hint: "Erode.", explanation: "Removes pixels at boundaries." }
  ],

  nlp: [
    // --- NLP FUNDAMENTALS & TECHNIQUES ---
    { id: 601, topic: "Preprocessing", type: "mcq", marks: 3, question: "Tokenization is?", options: ["Splitting text into units", "Removing stopwords", "Finding root word", "Vectorization"], correct: 0, hint: "Tokens.", explanation: "Breaking text into words/sentences." },
    { id: 602, topic: "Preprocessing", type: "mcq", marks: 4, question: "Stemming vs Lemmatization?", options: ["Stemming chops, Lemma uses dict", "Lemma chops, Stemming uses dict", "Same", "None"], correct: 0, hint: "Root.", explanation: "Lemmatization returns actual dictionary root word." },
    { id: 603, topic: "Feature Extraction", type: "mcq", marks: 5, question: "TF-IDF stands for?", options: ["Term Frequency-Inverse Document Frequency", "Total Frequency-Inverse Data Frequency", "Text Frequency-Index Data Frequency", "None"], correct: 0, hint: "Importance.", explanation: "Measures word importance in document vs corpus." },
    { id: 604, topic: "Embeddings", type: "mcq", marks: 5, question: "Word2Vec goal?", options: ["Capture semantic meaning", "Count words", "Sort words", "Spell check"], correct: 0, hint: "Context.", explanation: "Maps words to vectors where similar words are close." },
    { id: 605, topic: "Embeddings", type: "mcq", marks: 5, question: "CBOW model predicts?", options: ["Target word from context", "Context from target", "Next sentence", "Sentiment"], correct: 0, hint: "Bag of words.", explanation: "Continuous Bag of Words predicts target from context." },
    { id: 606, topic: "Tasks", type: "mcq", marks: 4, question: "POS Tagging identifies?", options: ["Parts of Speech", "Position of Sentence", "Positive Sentiment", "Possible Options"], correct: 0, hint: "Grammar.", explanation: "Noun, Verb, Adjective, etc." },
    { id: 607, topic: "Techniques", type: "mcq", marks: 4, question: "N-gram with N=2?", options: ["Bigram", "Unigram", "Trigram", "Quadgram"], correct: 0, hint: "Bi.", explanation: "Sequence of 2 items." },
    { id: 608, topic: "Preprocessing", type: "mcq", marks: 3, question: "Stop words example?", options: ["'the', 'is', 'at'", "'apple', 'run'", "'good', 'bad'", "None"], correct: 0, hint: "Common.", explanation: "High frequency words with little meaning." },
    { id: 609, topic: "Feature Extraction", type: "mcq", marks: 4, question: "Bag of Words ignores?", options: ["Word order", "Word frequency", "Word presence", "None"], correct: 0, hint: "Bag.", explanation: "Only counts frequency, loses context/order." },
    { id: 610, topic: "Pipeline", type: "mcq", marks: 4, question: "First step in NLP pipeline?", options: ["Data Acquisition/Cleaning", "Modelling", "Deployment", "Feature Engineering"], correct: 0, hint: "Start.", explanation: "Getting and cleaning data." }
  ],

  math: [
    // --- MATHEMATICS & STATISTICS ---
    { id: 701, topic: "Stats", type: "mcq", marks: 3, question: "Measure robust to outliers?", options: ["Median", "Mean", "Range", "Variance"], correct: 0, hint: "Middle.", explanation: "Median is not skewed by extreme values." },
    { id: 702, topic: "Probability", type: "mcq", marks: 5, question: "Bayes Theorem calculates?", options: ["Conditional Probability", "Joint Probability", "Marginal Probability", "Independent Probability"], correct: 0, hint: "Posterior.", explanation: "P(A|B) = P(B|A) * P(A) / P(B)." },
    { id: 703, topic: "Hypothesis Testing", type: "mcq", marks: 4, question: "P-value < 0.05 implies?", options: ["Reject Null Hypothesis", "Accept Null Hypothesis", "Test Failed", "No relation"], correct: 0, hint: "Significant.", explanation: "Statistically significant result." },
    { id: 704, topic: "Hypothesis Testing", type: "mcq", marks: 5, question: "Type I Error?", options: ["False Positive", "False Negative", "True Positive", "True Negative"], correct: 0, hint: "False Alarm.", explanation: "Rejecting a true null hypothesis." },
    { id: 705, topic: "Linear Algebra", type: "mcq", marks: 4, question: "Dot product of orthogonal vectors?", options: ["0", "1", "-1", "Infinity"], correct: 0, hint: "Perpendicular.", explanation: "Vectors at 90 degrees have 0 dot product." },
    { id: 706, topic: "Linear Algebra", type: "mcq", marks: 5, question: "Eigenvalues associated with?", options: ["Eigenvectors", "Matrix Inverse", "Determinant", "Trace"], correct: 0, hint: "Scale.", explanation: "Scalars scaling the eigenvectors." },
    { id: 707, topic: "Distributions", type: "mcq", marks: 4, question: "Normal Distribution shape?", options: ["Bell curve", "Uniform", "Exponential", "Skewed"], correct: 0, hint: "Gaussian.", explanation: "Symmetric bell curve." },
    { id: 708, topic: "Stats", type: "mcq", marks: 4, question: "Correlation coefficient range?", options: ["-1 to 1", "0 to 1", "-inf to inf", "0 to 100"], correct: 0, hint: "Pearson.", explanation: "-1 (neg) to 1 (pos)." },
    { id: 709, topic: "Advanced Stats", type: "mcq", marks: 5, question: "Central Limit Theorem?", options: ["Sampling dist approaches Normal", "Data is always Normal", "Mean equals Median", "None"], correct: 0, hint: "Large N.", explanation: "Regardless of population dist, sample means approximate Normal." },
    { id: 710, topic: "Probability", type: "mcq", marks: 4, question: "Mutually Exclusive events?", options: ["Cannot happen together", "Independent", "Dependent", "Sequential"], correct: 0, hint: "Disjoint.", explanation: "P(A and B) = 0." }
  ]
};

// Metadata expanded with gradients and icons
const SUBJECTS_METADATA = {
  python: { title: "Python Master", icon: "Terminal", color: "from-blue-500 to-cyan-400", bg: "bg-blue-900/20", topics: ["Fundamentals", "Collections", "Functions", "OOP", "Data Science", "Automation"] },
  cpp: { title: "C++ Architect", icon: "Cpu", color: "from-indigo-500 to-purple-400", bg: "bg-indigo-900/20", topics: ["Basics", "Pointers", "OOP", "Advanced", "Templates", "Polymorphism"] },
  ds: { title: "Data Science", icon: "Database", color: "from-emerald-500 to-teal-400", bg: "bg-emerald-900/20", topics: ["NumPy", "Pandas", "SQL"] },
  ml: { title: "Machine Learning", icon: "Brain", color: "from-orange-500 to-amber-400", bg: "bg-orange-900/20", topics: ["ML Fundamentals", "Algorithms", "Metrics", "Clustering"] },
  dl: { title: "Deep Learning", icon: "Network", color: "from-rose-500 to-pink-400", bg: "bg-rose-900/20", topics: ["CNN", "Optimization", "ANN", "OpenCV", "Transformers"] },
  nlp: { title: "NLP Specialist", icon: "MessageSquare", color: "from-violet-500 to-fuchsia-400", bg: "bg-violet-900/20", topics: ["Preprocessing", "Embeddings", "Feature Extraction"] },
  math: { title: "Mathematics", icon: "Sigma", color: "from-slate-500 to-gray-400", bg: "bg-slate-900/20", topics: ["Linear Algebra", "Stats", "Probability"] }
};

// --- BACKEND SIMULATION ---
const INITIAL_USERS = [
  { id: "admin", name: "Master Admin", email: "admin", password: "admin", role: "admin" }
];
let USERS_DB = [...INITIAL_USERS]; // mutable db for session
const USER_HISTORY = {};

class MockBackendService {
  static async delay(ms = 400) { return new Promise(r => setTimeout(r, ms)); }
  
  // Fisher-Yates Shuffle Algorithm for better randomness
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  static async login(email, password) {
    await this.delay(800);
    const user = USERS_DB.find(u => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid credentials. Please register if you are new.");
    return { user };
  }

  static async register(name, email, password) {
    await this.delay(800);
    if (USERS_DB.find(u => u.email === email)) throw new Error("User already exists.");
    const newUser = { id: `u_${Date.now()}`, name, email, password, role: 'candidate' };
    USERS_DB.push(newUser);
    return { user: newUser };
  }

  static async startExamSession(subjectId, selectedTopics) {
    await this.delay(600);
    const allQuestions = QUESTIONS_DB[subjectId] || [];
    let pool = selectedTopics.includes("ALL") ? allQuestions : allQuestions.filter(q => selectedTopics.includes(q.topic));
    if(pool.length === 0) pool = allQuestions; 
    
    // 1. Shuffle the question pool first
    const shuffledPool = this.shuffleArray([...pool]);
    
    // 2. Select top 5 questions
    const selectedQuestions = shuffledPool.slice(0, 5);

    // 3. Shuffle options for each selected question
    const questions = selectedQuestions.map(q => {
        // Create objects to track original correct answer position
        const optionsWithIndex = q.options.map((opt, index) => ({
            text: opt,
            isCorrect: index === q.correct
        }));

        // Shuffle these option objects
        const shuffledOptions = this.shuffleArray(optionsWithIndex);

        // Map back to simple string array and find new correct index
        return {
            ...q,
            options: shuffledOptions.map(o => o.text),
            correct: shuffledOptions.findIndex(o => o.isCorrect)
        };
    });

    return { sessionId: `sess_${Date.now()}`, subjectId, questions, startTime: Date.now() };
  }

  static async submitExam(userId, sessionId, answers, questions, subjectId) {
    await this.delay(800);
    let score = 0;
    let maxMarks = 0;
    questions.forEach((q, idx) => {
      maxMarks += q.marks;
      if (answers[idx] === q.correct) score += q.marks;
    });
    const result = { sessionId, score, maxMarks, percentage: (score/maxMarks)*100, passed: (score/maxMarks) >= 0.65, subjectId, date: new Date().toISOString() };
    if (!USER_HISTORY[userId]) USER_HISTORY[userId] = [];
    USER_HISTORY[userId].push(result);
    return result;
  }
}

// ==========================================
// 2. CONTEXTS & HOOKS
// ==========================================

const ToastContext = createContext();
const useToast = () => useContext(ToastContext);

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

// ==========================================
// 3. UI COMPONENTS (GLASSMORPHISM)
// ==========================================

const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-2xl ${className}`}>
    {children}
  </div>
);

const NeonButton = ({ children, onClick, variant = 'primary', className = "", disabled }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden group";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    danger: "bg-gradient-to-r from-red-500 to-pink-600 text-white"
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />}
    </button>
  );
};

const CodeBlock = ({ text }) => {
  if (typeof text !== 'string') return null; 
  if (!text.includes('`')) return <span className="font-sans">{text}</span>;
  const parts = text.split('`');
  return (
    <span>
      {parts.map((part, i) => i % 2 === 1 
        ? <span key={i} className="font-mono text-blue-400 bg-blue-900/30 px-1.5 py-0.5 rounded text-sm border border-blue-500/30">{part}</span> 
        : part
      )}
    </span>
  );
};

// ==========================================
// 4. VIEWS
// ==========================================

const AuthView = () => {
  const { login, register, loading, error, clearError } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) return;
    if (!isLogin && !formData.name) return;
    
    if (isLogin) {
      await login(formData.email, formData.password);
    } else {
      await register(formData.name, formData.email, formData.password);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    clearError();
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px]" />

      <GlassCard className="w-full max-w-md p-10 relative z-10 transition-all duration-300">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-blue-500/40">
            <Award className="text-white w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">SkillMatrix</h1>
          <p className="text-slate-400 mt-2">{isLogin ? "Secure Enterprise Login" : "Create New Account"}</p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 p-4 rounded-xl mb-6 flex items-center gap-3 text-red-200 text-sm">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <div className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase ml-1 mb-2 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-4 text-slate-500" size={20} />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                />
              </div>
            </div>
          )}
          
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase ml-1 mb-2 block">Email or Username</label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-500" size={20} />
              <input 
                type="text" 
                placeholder="user@example.com" 
                className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" 
                value={formData.email} 
                onChange={e => setFormData({...formData, email: e.target.value})} 
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 uppercase ml-1 mb-2 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-500" size={20} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" 
                value={formData.password} 
                onChange={e => setFormData({...formData, password: e.target.value})} 
              />
            </div>
          </div>

          <NeonButton 
            loading={loading} 
            onClick={handleSubmit} 
            disabled={!formData.email || !formData.password || (!isLogin && !formData.name)} 
            className="w-full py-4 text-lg mt-6"
          >
            {loading ? <Loader2 className="animate-spin" /> : (isLogin ? "Access Portal" : "Create Account")} 
            {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
          </NeonButton>

          <div className="text-center mt-6">
            <button onClick={toggleMode} className="text-slate-400 hover:text-white text-sm transition-colors">
              {isLogin ? "New user? Register here" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

const DashboardView = ({ onSelectSubject, user, logout }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 relative">
       {/* Ambient Background */}
       <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <nav className="flex justify-between items-center mb-10 relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Award className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">SkillMatrix<span className="text-blue-400">Exam</span></span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-sm font-bold">
              {(user.name?.[0] || 'U').toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-300 leading-none">{user.name || "Unknown User"}</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{user.role}</span>
            </div>
          </div>
          <button onClick={logout} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-red-400" title="Logout">
            <LogOut size={20} />
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-2">Certification Tracks</h2>
        <p className="text-slate-400 mb-8 text-lg">Select a domain to prove your expertise.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SUBJECTS_METADATA).map(([key, sub]) => {
            // Dynamic Icon Component
            const IconComp = { Terminal, Cpu, Database, Brain, Network: LayoutGrid, MessageSquare: Code, Sigma, Globe }[sub.icon] || Code;
            
            return (
              <GlassCard key={key} className="p-6 group hover:-translate-y-2 transition-transform duration-300 cursor-pointer border-t-4 border-t-transparent hover:border-t-white/30">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sub.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComp className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{sub.topics.length} Modules Available</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-slate-800" />)}
                  </div>
                  <NeonButton onClick={() => onSelectSubject(key)} variant="secondary" className="!py-2 !px-4 text-sm">
                    Start <ChevronRight size={14} />
                  </NeonButton>
                </div>
              </GlassCard>
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
  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
  
  // Safe navigation for questions
  const q = session.questions && session.questions.length > 0 ? session.questions[idx] : null;

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(prev => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const handleFinish = async () => {
    const res = await MockBackendService.submitExam(user.id, session.sessionId, answers, session.questions, session.subjectId);
    onFinish(res, session.questions, answers);
  };

  if (!q) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <GlassCard className="p-10 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Questions Available</h2>
          <p className="text-slate-400">Could not load questions for this module.</p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col relative overflow-hidden">
       {/* Timer Bar */}
       <div className={`h-1.5 transition-all duration-1000 ease-linear ${timeLeft < 300 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${(timeLeft/1800)*100}%` }} />

       <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full p-6 relative z-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
             <div className="flex items-center gap-4">
                <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/20 font-mono text-cyan-400">Q{idx + 1}/{session.questions.length}</span>
                <span className="text-slate-400 font-medium">{q.topic}</span>
             </div>
             <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-white/10">
                <Clock size={18} className={timeLeft < 300 ? "text-red-400 animate-pulse" : "text-blue-400"} />
                <span className="font-mono font-bold text-lg">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
             </div>
          </div>

          {/* Question Card */}
          <GlassCard className="flex-1 p-8 md:p-12 relative flex flex-col animate-slide-up">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold bg-slate-700/50 text-slate-300 px-2 py-1 rounded uppercase tracking-wider">{q.marks} Points</span>
                {/* Visual Progress Dots */}
                <div className="flex gap-1">
                   {session.questions.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-blue-500 scale-125' : answers[i] !== undefined ? 'bg-blue-500/50' : 'bg-slate-700'}`} />
                   ))}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                 <CodeBlock text={q.question} />
              </h2>

              <div className="grid gap-4 mb-8">
                 {q.options.map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => setAnswers({...answers, [idx]: i})}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-200 group flex items-center gap-4
                      ${answers[idx] === i 
                        ? 'bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'}`}
                    >
                       <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors
                          ${answers[idx] === i ? 'border-blue-400 bg-blue-500 text-white' : 'border-slate-500 text-slate-500 group-hover:border-slate-300 group-hover:text-slate-300'}`}>
                          {String.fromCharCode(65+i)}
                       </div>
                       <span className={`text-lg ${answers[idx] === i ? 'text-white' : 'text-slate-300'}`}>{opt}</span>
                    </button>
                 ))}
              </div>

              <div className="mt-auto flex justify-between pt-8 border-t border-white/10">
                 <NeonButton variant="secondary" disabled={idx === 0} onClick={() => setIdx(i => i-1)}>
                    <ChevronLeft size={18} /> Previous
                 </NeonButton>
                 
                 {idx === session.questions.length - 1 ? (
                    <NeonButton onClick={handleFinish} className="bg-gradient-to-r from-green-500 to-emerald-600">
                       Submit Exam <CheckCircle size={18} />
                    </NeonButton>
                 ) : (
                    <NeonButton onClick={() => setIdx(i => i+1)}>
                       Next Question <ChevronRight size={18} />
                    </NeonButton>
                 )}
              </div>
          </GlassCard>
       </div>
    </div>
  );
};

// --- SVG Gauge for Results ---
const ResultGauge = ({ percentage }) => {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const color = percentage >= 65 ? "#10b981" : "#ef4444"; // Emerald or Red

  return (
    <div className="relative flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
        <circle stroke="#334155" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} fill="transparent" />
        <circle 
          stroke={color} 
          fill="transparent" 
          strokeWidth={stroke} 
          strokeDasharray={circumference + ' ' + circumference} 
          style={{ strokeDashoffset, transition: "stroke-dashoffset 1.5s ease-in-out" }} 
          strokeLinecap="round" 
          r={normalizedRadius} 
          cx={radius} 
          cy={radius} 
        />
      </svg>
      <div className="absolute text-center">
        <span className="text-3xl font-bold text-white">{percentage.toFixed(0)}%</span>
      </div>
    </div>
  );
};

const ResultsView = ({ results, questions, answers, onHome }) => {
  const subject = SUBJECTS_METADATA[results.subjectId] || { title: "Unknown Subject" };
  
  return (
    <div className="min-h-screen bg-[#0f172a] p-6 flex items-center justify-center relative overflow-hidden">
       {/* Fireworks / Glow effect based on result */}
       <div className={`absolute inset-0 opacity-20 ${results.passed ? 'bg-green-500/20' : 'bg-red-500/20'}`} />

       <GlassCard className="w-full max-w-2xl p-10 relative z-10 text-center">
          <div className="mb-8">
             <ResultGauge percentage={results.percentage} />
          </div>

          <h1 className="text-4xl font-bold text-white mb-2">
             {results.passed ? "Certification Granted" : "Assessment Failed"}
          </h1>
          <p className="text-slate-400 mb-8 text-lg">
             {results.passed 
               ? `You have successfully demonstrated competency in ${subject.title}.` 
               : "You did not meet the passing criteria. Keep practicing!"}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
             <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                <div className="text-slate-400 text-xs uppercase font-bold">Score</div>
                <div className="text-2xl font-bold text-white">{results.score}</div>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                <div className="text-slate-400 text-xs uppercase font-bold">Questions</div>
                <div className="text-2xl font-bold text-white">{questions.length}</div>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                <div className="text-slate-400 text-xs uppercase font-bold">Correct</div>
                <div className="text-2xl font-bold text-green-400">
                   {Object.keys(answers).filter(k => answers[k] === questions[k].correct).length}
                </div>
             </div>
          </div>

          <NeonButton onClick={onHome} className="w-full">Return to Dashboard</NeonButton>
       </GlassCard>
    </div>
  );
};

// ==========================================
// 5. MAIN CONTROLLER
// ==========================================

const MainController = () => {
  const { user, login, logout } = useAuth();
  const [view, setView] = useState('auth'); 
  const [activeSubject, setActiveSubject] = useState(null);
  const [session, setSession] = useState(null);
  const [results, setResults] = useState(null);
  const [examData, setExamData] = useState(null);

  // Simple Router Logic
  useEffect(() => {
    if(user && view === 'auth') setView('dash');
    if(!user) setView('auth');
  }, [user]);

  const startSession = async (subjectId) => {
     // FIXED: Pass subjectId directly instead of relying on async state 'activeSubject'
     const sess = await MockBackendService.startExamSession(subjectId, ["ALL"]);
     setSession(sess);
     setView('exam');
  };

  const finishExam = (res, q, a) => {
    setResults(res);
    setExamData({q, a});
    setView('results');
  };

  if (!user) return <AuthView />;
  if (view === 'exam' && session) return <ExamInterface session={session} user={user} onFinish={finishExam} />;
  if (view === 'results') return <ResultsView results={results} questions={examData.q} answers={examData.a} onHome={() => setView('dash')} />;
  
  return <DashboardView user={user} logout={logout} onSelectSubject={(id) => { setActiveSubject(id); startSession(id); }} />;
};

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await MockBackendService.login(email, password);
      setUser(res.user);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await MockBackendService.register(name, email, password);
      setUser(res.user);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout: () => setUser(null), loading, error, clearError: () => setError(null) }}>
      <ToastContext.Provider value={() => {}}>
        <style>{`
          @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
        `}</style>
        <MainController />
      </ToastContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;