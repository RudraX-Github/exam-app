import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import { 
  Play, CheckCircle, XCircle, AlertCircle, 
  ChevronRight, ChevronLeft, Clock, HelpCircle, 
  LayoutGrid, Award, Terminal, 
  Cpu, Database, Code, LogOut, BarChart2,
  Loader2, User, CheckSquare, Square,
  ShieldAlert, Eye, Lock, History, Brain, Globe, Sigma, Network, MessageSquare, Mail, UserPlus, LogIn, ArrowLeft, Filter, Layers, ListFilter,
  Users, EyeOff, FileText, TrendingUp, Shield, Trash2, Edit3, Save, X, KeyRound, Cloud,
  UploadCloud, BookOpen, RefreshCcw, Tag
} from 'lucide-react';

/**
 * 🚀 ENTERPRISE EXAM PLATFORM v10.2 - "Admin Controls & GenAI Update"
 * Updates:
 * - Module: Added brand new 'GenAI & LLM' module parsed from CSV.
 * - Admin: Admin capability to DELETE users & UPDATE user passwords
 * - UI: Added edit modes and confirmation modals
 * - Data: Restored Full Enterprise Database while retaining updates
 */

// ==========================================
// 1. DATA LAYER (FULL DATABASE)
// ==========================================

const QUESTIONS_DB = {
  // ==========================================
  // 1. PYTHON
  // ==========================================
  python: [
    { id: 1001, topic: "Fundamentals", type: "mcq", marks: 3, question: "What does print(type([]) is list) output?", options: ["True", "False", "Error", "None"], correct: 0, hint: "Check type.", explanation: "[] creates a list, so type([]) is list." },
    { id: 1002, topic: "Operators", type: "mcq", marks: 3, question: "Result of 3 // 2?", options: ["1.5", "1", "2", "3"], correct: 1, hint: "Floor.", explanation: "// is floor division." },
    { id: 1003, topic: "Operators", type: "mcq", marks: 3, question: "Result of 2 ** 3?", options: ["6", "8", "9", "5"], correct: 1, hint: "Power.", explanation: "2 to the power of 3 is 8." },
    { id: 1004, topic: "Datatypes", type: "mcq", marks: 3, question: "Which is immutable?", options: ["List", "Dictionary", "Set", "Tuple"], correct: 3, hint: "Parentheses.", explanation: "Tuples cannot be changed once created." },
    { id: 1005, topic: "Booleans", type: "mcq", marks: 3, question: "bool('False') evaluates to?", options: ["True", "False", "Error", "None"], correct: 0, hint: "Non-empty string.", explanation: "Any non-empty string is Truthy." },
    { id: 1006, topic: "Memory", type: "mcq", marks: 4, question: "Function to get object memory address?", options: ["id()", "addr()", "mem()", "loc()"], correct: 0, hint: "Identity.", explanation: "id() returns the unique identifier." },
    { id: 1007, topic: "Strings", type: "mcq", marks: 4, question: "f-string syntax for variable x?", options: ["f'{x}'", "f(x)", "'{x}'", "%x"], correct: 0, hint: "Curly braces.", explanation: "Prefixed with f, variables inside {}." },
    { id: 1020, topic: "List", type: "mcq", marks: 4, question: "Add element to end of list?", options: ["push()", "add()", "append()", "insert()"], correct: 2, hint: "Append.", explanation: "list.append(x)." },
    { id: 1021, topic: "List", type: "mcq", marks: 4, question: "Remove item by index?", options: ["pop()", "remove()", "del()", "discard()"], correct: 0, hint: "Pop.", explanation: "pop(index) removes at index." },
    { id: 1022, topic: "Set", type: "mcq", marks: 4, question: "Set intersection operator?", options: ["&", "|", "^", "-"], correct: 0, hint: "And.", explanation: "& operator or intersection()." },
    { id: 1023, topic: "Dictionary", type: "mcq", marks: 4, question: "Get value with default fallback?", options: ["d.get(k, default)", "d[k]", "d.fetch(k)", "d.val(k)"], correct: 0, hint: "Get.", explanation: "get() prevents KeyError." },
    { id: 1024, topic: "Loops", type: "mcq", marks: 3, question: "Skip current iteration?", options: ["continue", "break", "pass", "skip"], correct: 0, hint: "Next.", explanation: "continue jumps to next loop cycle." },
    { id: 1025, topic: "Comprehension", type: "mcq", marks: 5, question: "List comp for squares of evens?", options: ["[x**2 for x in L if x%2==0]", "[x^2 where x%2==0]", "L.square().even()", "None"], correct: 0, hint: "Standard syntax.", explanation: "[expr for var in iter if cond]." },
    { id: 1040, topic: "Functions", type: "mcq", marks: 4, question: "Arbitrary keyword arguments?", options: ["*args", "**kwargs", "args[]", "kw[]"], correct: 1, hint: "Double star.", explanation: "**kwargs collects named args." },
    { id: 1041, topic: "Lambda", type: "mcq", marks: 4, question: "Anonymous function keyword?", options: ["lambda", "def", "anon", "func"], correct: 0, hint: "Lambda.", explanation: "Creates small anonymous functions." },
    { id: 1042, topic: "Scope", type: "mcq", marks: 4, question: "Modify global variable inside func?", options: ["global x", "extern x", "var x", "nonlocal x"], correct: 0, hint: "Global.", explanation: "Declares variable as global scope." },
    { id: 1043, topic: "Modules", type: "mcq", marks: 3, question: "Import module as alias?", options: ["import math as m", "import m from math", "alias math m", "using math"], correct: 0, hint: "As.", explanation: "import ... as ..." },
    { id: 1044, topic: "Scripting", type: "mcq", marks: 4, question: "Main execution check?", options: ["if __name__ == '__main__':", "if main():", "void main()", "start()"], correct: 0, hint: "Dunder name.", explanation: "Standard entry point guard." },
    { id: 1060, topic: "OOP", type: "mcq", marks: 4, question: "Constructor method?", options: ["__init__", "__new__", "constructor", "main"], correct: 0, hint: "Init.", explanation: "Initializes the object." },
    { id: 1061, topic: "OOP", type: "mcq", marks: 4, question: "Reference to current instance?", options: ["self", "this", "me", "obj"], correct: 0, hint: "Self.", explanation: "First parameter of instance methods." },
    { id: 1062, topic: "Inheritance", type: "mcq", marks: 4, question: "Check if class is subclass?", options: ["issubclass()", "isinstance()", "check()", "type()"], correct: 0, hint: "Sub.", explanation: "issubclass(Child, Parent)." },
    { id: 1063, topic: "Exceptions", type: "mcq", marks: 4, question: "Block always executed?", options: ["finally", "else", "except", "catch"], correct: 0, hint: "Final.", explanation: "Runs regardless of errors." },
    { id: 1064, topic: "Exceptions", type: "mcq", marks: 4, question: "Manually trigger error?", options: ["raise", "throw", "trigger", "error"], correct: 0, hint: "Raise.", explanation: "raise ValueError()." },
    { id: 1080, topic: "Web Scraping", type: "mcq", marks: 4, question: "BS4: Find first tag?", options: ["find()", "find_all()", "search()", "first()"], correct: 0, hint: "Single.", explanation: "Returns first match." },
    { id: 1081, topic: "Selenium", type: "mcq", marks: 5, question: "Locate by CSS Selector?", options: ["By.CSS_SELECTOR", "By.CSS", "By.STYLE", "By.QUERY"], correct: 0, hint: "Selector.", explanation: "driver.find_element(By.CSS_SELECTOR, ...)" },
    { id: 1082, topic: "Requests", type: "mcq", marks: 3, question: "HTTP Get?", options: ["requests.get()", "http.get()", "fetch()", "get()"], correct: 0, hint: "Library name.", explanation: "requests.get(url)." },
    { id: 1083, topic: "File I/O", type: "mcq", marks: 4, question: "Safe file opening?", options: ["with open(...) as f", "open(...)", "file.open()", "f = open"], correct: 0, hint: "Context manager.", explanation: "Ensures file closing." },
    { id: 1400, topic: "Web Scraping", type: "mcq", marks: 4, question: "BS4: Find all tags?", options: ["find_all()", "get_all()", "search()", "query()"], correct: 0, hint: "Find list.", explanation: "Returns a ResultSet of elements." },
    { id: 1401, topic: "Selenium", type: "mcq", marks: 5, question: "WebDriverWait is used for?", options: ["Explicit Waits", "Implicit Waits", "Pausing", "Clicking"], correct: 0, hint: "Specific condition.", explanation: "Waits for a certain condition to be true." },
    { id: 1402, topic: "Selenium", type: "mcq", marks: 4, question: "Locate element by ID?", options: ["By.ID", "By.TAG", "By.NAME", "By.CLASS"], correct: 0, hint: "Unique.", explanation: "driver.find_element(By.ID, 'id')." },
    { id: 1403, topic: "Requests", type: "mcq", marks: 3, question: "Check response success?", options: ["status_code == 200", "status == OK", "code == 1", "success()"], correct: 0, hint: "HTTP 200.", explanation: "Standard success code." },
    { id: 1404, topic: "File I/O", type: "mcq", marks: 4, question: "Context Manager keyword?", options: ["with", "using", "open", "context"], correct: 0, hint: "Auto close.", explanation: "Ensures file is closed." },
    { id: 1405, topic: "Decorators", type: "mcq", marks: 5, question: "Decorator syntax?", options: ["@func", "#func", "$func", "&func"], correct: 0, hint: "At.", explanation: "Syntactic sugar for func = decorator(func)." },
    { id: 1406, topic: "Generators", type: "mcq", marks: 4, question: "Generator uses which keyword?", options: ["yield", "return", "break", "continue"], correct: 0, hint: "Produce.", explanation: "Yields value and pauses state." },
    { id: 1407, topic: "OOP", type: "mcq", marks: 5, question: "MRO stands for?", options: ["Method Resolution Order", "Method Return Object", "Main Runtime Object", "None"], correct: 0, hint: "Hierarchy.", explanation: "Order in which classes are searched for methods." },
    { id: 1408, topic: "Modules", type: "mcq", marks: 3, question: "Entry point check?", options: ["if __name__ == '__main__':", "if main():", "start()", "init()"], correct: 0, hint: "Script execution.", explanation: "Prevents code from running on import." },
    { id: 1100, topic: "RegEx", type: "mcq", marks: 4, question: "Module used for Regular Expressions?", options: ["regex", "re", "pyre", "reg"], correct: 1, hint: "Standard lib.", explanation: "The 're' module provides RegEx support." },
    { id: 1101, topic: "RegEx", type: "mcq", marks: 4, question: "Function to match pattern at start of string?", options: ["re.match()", "re.search()", "re.findall()", "re.split()"], correct: 0, hint: "Beginning only.", explanation: "re.match() checks for a match only at the beginning of the string." },
    { id: 1102, topic: "OS Module", type: "mcq", marks: 4, question: "List files in directory?", options: ["os.list()", "os.listdir()", "os.files()", "os.get()"], correct: 1, hint: "List Dir.", explanation: "os.listdir() returns a list of entries in the directory." },
    { id: 1103, topic: "Sys Module", type: "mcq", marks: 4, question: "Access command line arguments?", options: ["sys.args", "sys.argv", "sys.cla", "sys.input"], correct: 1, hint: "Arg Vector.", explanation: "sys.argv is the list of command line arguments." },
    { id: 1104, topic: "File Handling", type: "mcq", marks: 3, question: "Mode to read binary file?", options: ["'rb'", "'r'", "'wb'", "'rw'"], correct: 0, hint: "Read Binary.", explanation: "'rb' opens a file for reading in binary format." },
    { id: 1105, topic: "OOP", type: "mcq", marks: 5, question: "Dunder method for string representation?", options: ["__str__", "__init__", "__repr__", "__string__"], correct: 0, hint: "User friendly.", explanation: "__str__ returns the informal string representation of an object." },
    { id: 1106, topic: "JSON", type: "mcq", marks: 4, question: "Convert Python dict to JSON string?", options: ["json.dump()", "json.dumps()", "json.load()", "json.parse()"], correct: 1, hint: "Dump String.", explanation: "json.dumps() serializes obj to a JSON formatted str." }
  ],

  // ==================================================================================
  // 2. C++ PROGRAMMING
  // ==================================================================================
  cpp: [
    { id: 2001, topic: "Basics", type: "mcq", marks: 3, question: "Standard Output Stream?", options: ["cout", "cin", "cerr", "print"], correct: 0, hint: "Console Out.", explanation: "std::cout." },
    { id: 2002, topic: "Basics", type: "mcq", marks: 3, question: "Input Operator?", options: [">>", "<<", "::", "->"], correct: 0, hint: "Extraction.", explanation: "cin >> var." },
    { id: 2003, topic: "OOP", type: "mcq", marks: 4, question: "Access modifier for internal use only?", options: ["private", "public", "protected", "friend"], correct: 0, hint: "Hidden.", explanation: "Not accessible from outside." },
    { id: 2004, topic: "Encapsulation", type: "mcq", marks: 4, question: "Role of Setter?", options: ["Set private attribute value", "Print value", "Delete value", "Init class"], correct: 0, hint: "Mutator.", explanation: "Controlled modification of data." },
    { id: 2005, topic: "Encapsulation", type: "mcq", marks: 4, question: "Static member characteristic?", options: ["Shared by all objects", "Unique to object", "Constant", "Private"], correct: 0, hint: "Shared.", explanation: "Belongs to class, not instance." },
    { id: 2010, topic: "Inheritance", type: "mcq", marks: 5, question: "Avoid Diamond Problem?", options: ["Virtual Inheritance", "Multiple Inheritance", "Static", "Abstract"], correct: 0, hint: "Virtual.", explanation: "class B : virtual public A." },
    { id: 2011, topic: "Inheritance", type: "mcq", marks: 4, question: "Order of Constructor call?", options: ["Base -> Derived", "Derived -> Base", "Random", "Simultaneous"], correct: 0, hint: "Parent first.", explanation: "Base class constructed first." },
    { id: 2012, topic: "Inheritance", type: "mcq", marks: 4, question: "Scope Resolution Operator?", options: ["::", "->", ".", ":"], correct: 0, hint: "Double colon.", explanation: "Used to access global/static members." },
    { id: 2020, topic: "Polymorphism", type: "mcq", marks: 5, question: "Virtual Function syntax?", options: ["virtual void f();", "void virtual f();", "abstract void f();", "virtual f()"], correct: 0, hint: "Prefix.", explanation: "Enables runtime polymorphism." },
    { id: 2021, topic: "Polymorphism", type: "mcq", marks: 5, question: "Pure Virtual Function?", options: ["= 0", "= null", "abstract", "empty"], correct: 0, hint: "Zero.", explanation: "virtual void f() = 0;" },
    { id: 2022, topic: "Memory", type: "mcq", marks: 4, question: "Dynamic allocation?", options: ["new", "malloc", "alloc", "create"], correct: 0, hint: "New.", explanation: "C++ style allocation." },
    { id: 2023, topic: "Memory", type: "mcq", marks: 4, question: "Free dynamic memory?", options: ["delete", "free", "remove", "clear"], correct: 0, hint: "Delete.", explanation: "Partner to new." },
    { id: 2030, topic: "Abstraction", type: "mcq", marks: 4, question: "Abstract Class must have?", options: ["At least one pure virtual function", "No methods", "No variables", "Static methods"], correct: 0, hint: "Pure.", explanation: "Cannot be instantiated." },
    { id: 2031, topic: "Exception", type: "mcq", marks: 4, question: "Keyword to trigger exception?", options: ["throw", "raise", "error", "catch"], correct: 0, hint: "Throw.", explanation: "throw e;" },
    { id: 1600, topic: "OOP", type: "mcq", marks: 4, question: "Destructor is called when?", options: ["Object goes out of scope", "Object created", "Manually", "Never"], correct: 0, hint: "End of life.", explanation: "Automatically called to clean up." },
    { id: 1601, topic: "Polymorphism", type: "mcq", marks: 5, question: "Virtual Function enables?", options: ["Runtime Polymorphism", "Compile time Poly", "Encapsulation", "None"], correct: 0, hint: "Late binding.", explanation: "Allows overriding in derived classes." },
    { id: 1602, topic: "Inheritance", type: "mcq", marks: 5, question: "Diamond Problem solved by?", options: ["Virtual Inheritance", "Static", "Friend", "Abstract"], correct: 0, hint: "Virtual base.", explanation: "Prevents duplicate base class instances." },
    { id: 1603, topic: "Pointers", type: "mcq", marks: 4, question: "Symbol for Address-of?", options: ["&", "*", "->", "."], correct: 0, hint: "Ampersand.", explanation: "Returns memory address." },
    { id: 1604, topic: "Pointers", type: "mcq", marks: 4, question: "Symbol for Dereference?", options: ["*", "&", "->", "::"], correct: 0, hint: "Star.", explanation: "Accesses value at address." },
    { id: 1605, topic: "Memory", type: "mcq", marks: 4, question: "Allocate heap memory?", options: ["new", "malloc", "alloc", "create"], correct: 0, hint: "New.", explanation: "C++ operator for dynamic allocation." },
    { id: 1606, topic: "Memory", type: "mcq", marks: 4, question: "Deallocate heap memory?", options: ["delete", "free", "remove", "clear"], correct: 0, hint: "Delete.", explanation: "Frees memory allocated by new." },
    { id: 2100, topic: "Templates", type: "mcq", marks: 5, question: "Purpose of Templates?", options: ["Generic Programming", "Memory Management", "Multithreading", "File I/O"], correct: 0, hint: "Code reuse.", explanation: "Templates allow writing generic code that works with any data type." },
    { id: 2101, topic: "STL", type: "mcq", marks: 4, question: "Dynamic array in STL?", options: ["std::vector", "std::array", "std::list", "std::deque"], correct: 0, hint: "Resizable.", explanation: "Vectors are sequence containers representing arrays that can change in size." },
    { id: 2102, topic: "Friends", type: "mcq", marks: 4, question: "Friend function capability?", options: ["Access private members", "Inherit class", "Delete class", "None"], correct: 0, hint: "Special access.", explanation: "A friend function can access private and protected data of a class." },
    { id: 2103, topic: "File I/O", type: "mcq", marks: 4, question: "Library for File I/O?", options: ["<fstream>", "<iostream>", "<stdio>", "<file>"], correct: 0, hint: "File Stream.", explanation: "fstream provides facilities for file input/output." },
    { id: 2104, topic: "Constructors", type: "mcq", marks: 4, question: "Copy Constructor is called when?", options: ["Object initialized with another object", "Object created", "Object destroyed", "Never"], correct: 0, hint: "Clone.", explanation: "Initializes a new object as a copy of an existing object." },
    { id: 2105, topic: "Polymorphism", type: "mcq", marks: 4, question: "Operator overloading is?", options: ["Compile-time Polymorphism", "Runtime Polymorphism", "Encapsulation", "Inheritance"], correct: 0, hint: "Static binding.", explanation: "Resolved at compile time." }
  ],

  // ==================================================================================
  // 3. DATA SCIENCE (NumPy, Pandas, SQL)
  // ==================================================================================
  ds: [
    { id: 3001, topic: "NumPy", type: "mcq", marks: 3, question: "Array attribute for dimensions?", options: [".shape", ".size", ".ndim", ".len"], correct: 0, hint: "Rows, Cols.", explanation: "Returns tuple (rows, cols)." },
    { id: 3002, topic: "NumPy", type: "mcq", marks: 4, question: "Create range of numbers?", options: ["np.arange()", "np.range()", "np.seq()", "np.list()"], correct: 0, hint: "Like range.", explanation: "Array version of range." },
    { id: 3003, topic: "NumPy", type: "mcq", marks: 5, question: "Broadcasting rule?", options: ["Dims equal or one is 1", "Dims identical", "No rule", "Both 1D"], correct: 0, hint: "Stretch.", explanation: "Allows ops on different shaped arrays." },
    { id: 3004, topic: "NumPy", type: "mcq", marks: 4, question: "Matrix Multiplication?", options: ["@", "*", "dot()", "x"], correct: 0, hint: "At.", explanation: "Infix operator for matmul." },
    { id: 3005, topic: "NumPy", type: "mcq", marks: 4, question: "Reshape array?", options: ["reshape()", "shape()", "resize()", "change()"], correct: 0, hint: "Re.", explanation: "Returns new array with specified shape." },
    { id: 3020, topic: "Pandas", type: "mcq", marks: 3, question: "Function to read CSV?", options: ["pd.read_csv()", "pd.import_csv()", "pd.open()", "pd.load()"], correct: 0, hint: "Read.", explanation: "Standard loader." },
    { id: 3021, topic: "Pandas", type: "mcq", marks: 4, question: "Select column by name?", options: ["df['col']", "df.get('col')", "df.select('col')", "df.col()"], correct: 0, hint: "Brackets.", explanation: "Dict-like access." },
    { id: 3022, topic: "Pandas", type: "mcq", marks: 4, question: "Select by integer position?", options: ["iloc", "loc", "ix", "at"], correct: 0, hint: "Index.", explanation: "Integer-location based indexing." },
    { id: 3023, topic: "Pandas", type: "mcq", marks: 4, question: "Handle missing values?", options: ["fillna()", "replacena()", "add()", "fix()"], correct: 0, hint: "Fill.", explanation: "Fills NaN with value." },
    { id: 3024, topic: "Pandas", type: "mcq", marks: 5, question: "Group by aggregation?", options: ["df.groupby().mean()", "df.group().avg()", "df.cluster()", "df.agg()"], correct: 0, hint: "Group.", explanation: "Split-Apply-Combine." },
    { id: 3025, topic: "Pandas", type: "mcq", marks: 5, question: "Pivot table function?", options: ["pivot_table()", "crosstab()", "transpose()", "reshape()"], correct: 0, hint: "Excel style.", explanation: "Creates spreadsheet-style pivot table." },
    { id: 3040, topic: "SQL", type: "mcq", marks: 3, question: "DDL Command?", options: ["CREATE", "SELECT", "INSERT", "UPDATE"], correct: 0, hint: "Definition.", explanation: "Defines structure." },
    { id: 3041, topic: "SQL", type: "mcq", marks: 4, question: "Join returning all left rows?", options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "OUTER JOIN"], correct: 0, hint: "Left.", explanation: "All from left, matching from right." },
    { id: 3042, topic: "SQL", type: "mcq", marks: 4, question: "Remove duplicates?", options: ["DISTINCT", "UNIQUE", "DIFFERENT", "SINGLE"], correct: 0, hint: "Distinct.", explanation: "SELECT DISTINCT." },
    { id: 3043, topic: "SQL", type: "mcq", marks: 5, question: "Pattern matching?", options: ["LIKE", "MATCH", "SAME", "IS"], correct: 0, hint: "Like.", explanation: "Used with wildcards % and _." },
    { id: 3044, topic: "SQL", type: "mcq", marks: 5, question: "Filter Group By results?", options: ["HAVING", "WHERE", "FILTER", "WHEN"], correct: 0, hint: "Have.", explanation: "HAVING applies to aggregated groups." },
    { id: 3045, topic: "SQL", type: "mcq", marks: 4, question: "Sort Order?", options: ["ORDER BY", "SORT BY", "ALIGN", "GROUP BY"], correct: 0, hint: "Order.", explanation: "Default is ASC." },
    { id: 3046, topic: "SQL", type: "mcq", marks: 5, question: "Window function for ranking?", options: ["RANK()", "ORDER()", "GROUP()", "COUNT()"], correct: 0, hint: "Rank.", explanation: "Assigns rank within partition." },
    { id: 1500, topic: "SQL", type: "mcq", marks: 5, question: "Rank rows function?", options: ["RANK() OVER()", "ORDER()", "SORT()", "GROUP()"], correct: 0, hint: "Window.", explanation: "Assigns rank within partition." },
    { id: 1501, topic: "SQL", type: "mcq", marks: 4, question: "Left Join keeps?", options: ["All Left rows", "All Right rows", "Intersection", "Union"], correct: 0, hint: "Left.", explanation: "Preserves all records from left table." },
    { id: 1502, topic: "SQL", type: "mcq", marks: 3, question: "Filter groups condition?", options: ["HAVING", "WHERE", "FILTER", "WHEN"], correct: 0, hint: "Post-group.", explanation: "HAVING is used for conditions on aggregated data." },
    { id: 1503, topic: "Pandas", type: "mcq", marks: 4, question: "Merge default type?", options: ["Inner", "Outer", "Left", "Right"], correct: 0, hint: "Intersection.", explanation: "Default is inner join." },
    { id: 1504, topic: "Pandas", type: "mcq", marks: 5, question: "Wide to Long format?", options: ["melt()", "pivot()", "stack()", "unstack()"], correct: 0, hint: "Melting.", explanation: "Unpivots DataFrame." },
    { id: 1505, topic: "Pandas", type: "mcq", marks: 5, question: "Long to Wide format?", options: ["pivot()", "melt()", "stack()", "flatten()"], correct: 0, hint: "Pivoting.", explanation: "Reshapes data (spreads rows to columns)." },
    { id: 1506, topic: "NumPy", type: "mcq", marks: 5, question: "Broadcasting Condition?", options: ["Dimensions equal or one is 1", "Dimensions equal", "No condition", "Both > 1"], correct: 0, hint: "Stretch.", explanation: "Compatible if dimensions match or one is 1." },
    { id: 1507, topic: "NumPy", type: "mcq", marks: 4, question: "Matrix Mult operator?", options: ["@", "*", "x", "dot"], correct: 0, hint: "At.", explanation: "@ or np.matmul." },
    { id: 1508, topic: "Pandas", type: "mcq", marks: 3, question: "Drop missing values?", options: ["dropna()", "fillna()", "remove()", "del()"], correct: 0, hint: "Drop.", explanation: "Removes rows/cols with NaNs." },
    { id: 3100, topic: "SQL", type: "mcq", marks: 4, question: "DELETE vs TRUNCATE?", options: ["DELETE logs, TRUNCATE doesn't (faster)", "TRUNCATE logs, DELETE doesn't", "Same", "None"], correct: 0, hint: "Speed.", explanation: "TRUNCATE is a DDL command and faster as it doesn't log individual row deletions." },
    { id: 3101, topic: "SQL", type: "mcq", marks: 4, question: "Constraint for unique values?", options: ["UNIQUE", "DISTINCT", "PRIMARY", "FOREIGN"], correct: 0, hint: "One of a kind.", explanation: "UNIQUE constraint ensures all values in a column are different." },
    { id: 3102, topic: "Pandas", type: "mcq", marks: 5, question: "Apply function to whole DataFrame?", options: ["df.apply()", "df.map()", "df.applymap()", "df.transform()"], correct: 2, hint: "Element-wise.", explanation: "applymap() applies a function to every element of a DataFrame." },
    { id: 3103, topic: "NumPy", type: "mcq", marks: 4, question: "Create evenly spaced numbers?", options: ["np.linspace()", "np.arange()", "np.space()", "np.equal()"], correct: 0, hint: "Linear space.", explanation: "np.linspace(start, stop, num) returns evenly spaced numbers." },
    { id: 3104, topic: "SQL", type: "mcq", marks: 5, question: "Normalization Goal?", options: ["Reduce Redundancy", "Increase Speed", "Add Data", "Backup"], correct: 0, hint: "No duplicates.", explanation: "Organizing data to minimize redundancy and dependency." }
  ],

  // ==================================================================================
  // 4. MACHINE LEARNING (Supervised & Unsupervised)
  // ==================================================================================
  ml: [
    { id: 4001, topic: "ML Basics", type: "mcq", marks: 3, question: "Supervised Learning requires?", options: ["Labeled Data", "Unlabeled Data", "Reward Function", "No Data"], correct: 0, hint: "Teacher.", explanation: "Models learn mapping from input to label." },
    { id: 4002, topic: "Lifecycle", type: "mcq", marks: 3, question: "EDA stands for?", options: ["Exploratory Data Analysis", "Engineering Data Algo", "Evaluation Data Assessment", "None"], correct: 0, hint: "Explore.", explanation: "Understanding data before modeling." },
    { id: 4003, topic: "Evaluation", type: "mcq", marks: 5, question: "Confusion Matrix True Positive?", options: ["Predicted True, Actual True", "Predicted True, Actual False", "Predicted False, Actual True", "Predicted False, Actual False"], correct: 0, hint: "Correct Hit.", explanation: "Model correctly predicted the positive class." },
    { id: 4010, topic: "Regression", type: "mcq", marks: 4, question: "Linear Regression Assumption?", options: ["Linearity & Homoscedasticity", "Non-linearity", "Multicollinearity", "Categorical Output"], correct: 0, hint: "Straight line.", explanation: "Assumes linear relationship and constant variance." },
    { id: 4011, topic: "Regression", type: "mcq", marks: 4, question: "R-Squared range?", options: ["0 to 1", "-1 to 1", "-inf to inf", "0 to 100"], correct: 0, hint: "Fit.", explanation: "Proportion of variance explained." },
    { id: 4012, topic: "Regression", type: "mcq", marks: 5, question: "Lasso Regression (L1) useful for?", options: ["Feature Selection", "Complex fitting", "All features", "High Variance"], correct: 0, hint: "Zero coeffs.", explanation: "Shrinks coefficients to zero." },
    { id: 4020, topic: "Logistic", type: "mcq", marks: 4, question: "Logistic Regression Output?", options: ["Probability (0-1)", "Continuous", "Integer", "Vector"], correct: 0, hint: "Sigmoid.", explanation: "Uses sigmoid to squash output." },
    { id: 4021, topic: "Trees", type: "mcq", marks: 4, question: "Decision Tree split metric?", options: ["Gini Impurity / Entropy", "MSE", "Log Loss", "R2"], correct: 0, hint: "Purity.", explanation: "Measures quality of split." },
    { id: 4022, topic: "SVM", type: "mcq", marks: 5, question: "SVM Kernel Trick?", options: ["Maps to higher dimension", "Lowers dimension", "Removes outliers", "Sorts data"], correct: 0, hint: "Non-linear.", explanation: "Enables linear separation in high-dim space." },
    { id: 4023, topic: "Ensemble", type: "mcq", marks: 5, question: "Bagging Example?", options: ["Random Forest", "AdaBoost", "XGBoost", "Decision Tree"], correct: 0, hint: "Parallel.", explanation: "Bootstrap Aggregating." },
    { id: 4024, topic: "KNN", type: "mcq", marks: 3, question: "KNN 'K' stands for?", options: ["Neighbors", "Kernels", "Knots", "Keys"], correct: 0, hint: "Near.", explanation: "Number of nearest neighbors to vote." },
    { id: 4030, topic: "Clustering", type: "mcq", marks: 4, question: "K-Means Step 1?", options: ["Initialize Centroids", "Assign Points", "Update Centroids", "Calc Error"], correct: 0, hint: "Start.", explanation: "Pick K random points." },
    { id: 4031, topic: "Clustering", type: "mcq", marks: 4, question: "Elbow Method determines?", options: ["Optimal K", "Best features", "Outliers", "Speed"], correct: 0, hint: "Bend.", explanation: "Tradeoff between variance and K." },
    { id: 4032, topic: "Dimensionality", type: "mcq", marks: 5, question: "PCA objective?", options: ["Maximize Variance", "Minimize Variance", "Preserve Mean", "Cluster"], correct: 0, hint: "Spread.", explanation: "Projects data to axis of max variance." },
    { id: 4033, topic: "Association", type: "mcq", marks: 5, question: "Apriori Algorithm finding?", options: ["Frequent Itemsets", "Clusters", "Trends", "Images"], correct: 0, hint: "Basket.", explanation: "Market Basket Analysis." },
    { id: 800, topic: "ML Fundamentals", type: "mcq", marks: 3, question: "Which learning type uses labeled data?", options: ["Supervised", "Unsupervised", "Reinforcement", "Clustering"], correct: 0, hint: "Teacher provided.", explanation: "Supervised learning uses input-output pairs." },
    { id: 801, topic: "ML Fundamentals", type: "mcq", marks: 3, question: "What is the primary goal of the Training Phase?", options: ["Minimize Loss", "Maximize Loss", "Test Accuracy", "Deploy Model"], correct: 0, hint: "Learn patterns.", explanation: "The model learns parameters to minimize the error (loss) on training data." },
    { id: 802, topic: "Data Splitting", type: "mcq", marks: 4, question: "Why do we use a Validation Set?", options: ["Hyperparameter Tuning", "Final Evaluation", "Training Weights", "Data Augmentation"], correct: 0, hint: "Tuning.", explanation: "Validation data is used to tune hyperparameters and prevent overfitting before final testing." },
    { id: 803, topic: "Bias-Variance", type: "mcq", marks: 5, question: "High Bias typically leads to?", options: ["Underfitting", "Overfitting", "Optimal Fit", "High Variance"], correct: 0, hint: "Too simple.", explanation: "High bias suggests the model is too simple to capture the underlying pattern (Underfitting)." },
    { id: 804, topic: "Bias-Variance", type: "mcq", marks: 5, question: "High Variance typically indicates?", options: ["Overfitting", "Underfitting", "Perfect Fit", "Data Error"], correct: 0, hint: "Noise.", explanation: "High variance means the model captures noise and doesn't generalize (Overfitting)." },
    { id: 805, topic: "Lifecycle", type: "mcq", marks: 4, question: "First step in ML Development Lifecycle?", options: ["Problem Definition", "Data Collection", "Modeling", "Deployment"], correct: 0, hint: "Goal.", explanation: "Understanding the business problem is the critical first step." },
    { id: 820, topic: "Regression", type: "mcq", marks: 4, question: "Goal of Ordinary Least Squares (OLS)?", options: ["Minimize Sum of Squared Residuals", "Maximize R2", "Minimize Absolute Error", "Maximize Coefficients"], correct: 0, hint: "Squared errors.", explanation: "OLS minimizes sum of squared vertical distances between data points and the line." },
    { id: 821, topic: "Regression", type: "mcq", marks: 5, question: "What is Homoscedasticity?", options: ["Constant variance of errors", "Normal distribution of Y", "Linear relationship", "No multicollinearity"], correct: 0, hint: "Equal spread.", explanation: "The variance of residual terms should be constant at all levels of x." },
    { id: 822, topic: "Regression", type: "mcq", marks: 5, question: "Multicollinearity refers to?", options: ["High correlation between independent variables", "Correlation between X and Y", "Non-linear data", "Missing values"], correct: 0, hint: "Multi-features.", explanation: "When independent variables are highly correlated, it destabilizes coefficient estimates." },
    { id: 823, topic: "Metrics", type: "mcq", marks: 4, question: "Why use Adjusted R2 over R2?", options: ["Penalizes useless features", "Easier to calculate", "Always positive", "Ignores outliers"], correct: 0, hint: "Penalty.", explanation: "Adjusted R2 decreases if a new term improves the model less than expected by chance." },
    { id: 824, topic: "Regularization", type: "mcq", marks: 5, question: "Lasso Regression (L1) unique capability?", options: ["Feature Selection", "Faster Training", "Non-linear fitting", "Handling Missing Data"], correct: 0, hint: "Zero coefficients.", explanation: "Lasso can shrink coefficients to exactly zero, effectively selecting features." },
    { id: 825, topic: "Regularization", type: "mcq", marks: 5, question: "Ridge Regression (L2) adds what penalty?", options: ["Squared magnitude of coefficients", "Absolute magnitude", "Log magnitude", "None"], correct: 0, hint: "Square.", explanation: "Adds lambda * sum(beta^2)." },
    { id: 826, topic: "Optimization", type: "mcq", marks: 4, question: "Stochastic Gradient Descent updates weights:", options: ["After every sample", "After whole dataset", "After a mini-batch", "Randomly"], correct: 0, hint: "One by one.", explanation: "SGD updates parameters for each training example." },
    { id: 827, topic: "Regression", type: "mcq", marks: 4, question: "Risk of high-degree polynomial regression?", options: ["Overfitting", "Underfitting", "High Bias", "Convergence failure"], correct: 0, hint: "Wiggles.", explanation: "High degrees cause the model to fit noise perfectly." },
    { id: 828, topic: "SVM", type: "mcq", marks: 5, question: "What is the 'epsilon-tube' in SVR?", options: ["Insensitive region", "Kernel function", "Learning rate", "Regularization"], correct: 0, hint: "Ignore errors.", explanation: "Errors within the epsilon-tube are not penalized." },
    { id: 850, topic: "Logistic", type: "mcq", marks: 3, question: "Range of Sigmoid function?", options: ["0 to 1", "-1 to 1", "0 to infinity", "-inf to inf"], correct: 0, hint: "Probability.", explanation: "Sigmoid maps inputs to (0, 1)." },
    { id: 851, topic: "Metrics", type: "mcq", marks: 4, question: "Formula for Precision?", options: ["TP / (TP + FP)", "TP / (TP + FN)", "TP / Total", "TN / (TN + FP)"], correct: 0, hint: "True Positives / Predicted Positives.", explanation: "Precision measures accuracy of positive predictions." },
    { id: 852, topic: "Metrics", type: "mcq", marks: 4, question: "Recall is also known as?", options: ["Sensitivity", "Specificity", "Precision", "Accuracy"], correct: 0, hint: "True Positive Rate.", explanation: "Recall = TP / (TP + FN)." },
    { id: 853, topic: "Metrics", type: "mcq", marks: 5, question: "F1 Score is?", options: ["Harmonic mean of Precision and Recall", "Arithmetic mean", "Average", "Sum"], correct: 0, hint: "Harmonic.", explanation: "2 * (P*R)/(P+R)." },
    { id: 854, topic: "Trees", type: "mcq", marks: 4, question: "Criterion to split nodes in Classification?", options: ["Gini Impurity", "MSE", "R-Squared", "Euclidean Distance"], correct: 0, hint: "Purity.", explanation: "Gini Impurity or Entropy." },
    { id: 855, topic: "Ensemble", type: "mcq", marks: 5, question: "Bagging mainly reduces?", options: ["Variance", "Bias", "Noise", "Training Time"], correct: 0, hint: "Bootstrap.", explanation: "Bagging (Bootstrap Aggregating) reduces variance (overfitting)." },
    { id: 856, topic: "Ensemble", type: "mcq", marks: 5, question: "Random Forest is an example of?", options: ["Bagging", "Boosting", "Stacking", "Clustering"], correct: 0, hint: "Parallel trees.", explanation: "It uses Bagging with feature randomness." },
    { id: 857, topic: "Ensemble", type: "mcq", marks: 5, question: "Boosting works by?", options: ["Sequential correction of errors", "Parallel training", "Random subspaces", "Clustering"], correct: 0, hint: "Sequential.", explanation: "Trains models sequentially to correct previous errors (e.g., AdaBoost, XGBoost)." },
    { id: 858, topic: "SVM", type: "mcq", marks: 5, question: "Role of C parameter in SVM?", options: ["Margin hardness", "Kernel width", "Polynomial degree", "Learning rate"], correct: 0, hint: "Strictness.", explanation: "High C = Hard Margin (less misclassification allowed), Low C = Soft Margin." },
    { id: 859, topic: "SVM", type: "mcq", marks: 4, question: "Kernel Trick allows SVM to?", options: ["Solve non-linear problems", "Run faster", "Reduce dimensions", "Use less memory"], correct: 0, hint: "High dim.", explanation: "Maps data to higher dimensions to find a linear separator." },
    { id: 860, topic: "KNN", type: "mcq", marks: 3, question: "Is KNN parametric or non-parametric?", options: ["Non-parametric", "Parametric", "Semi-parametric", "Linear"], correct: 0, hint: "Lazy.", explanation: "Makes no assumptions about data distribution." },
    { id: 861, topic: "Algorithms", type: "mcq", marks: 4, question: "Key assumption of Naive Bayes?", options: ["Feature independence", "Data normality", "Linearity", "Homoscedasticity"], correct: 0, hint: "Naive.", explanation: "Assumes features are independent given the class." },
    { id: 900, topic: "Clustering", type: "mcq", marks: 4, question: "K-Means++ initialization helps to?", options: ["Avoid local optima", "Reduce K", "Increase clusters", "Use density"], correct: 0, hint: "Better start.", explanation: "Spreads out initial centroids." },
    { id: 901, topic: "Clustering", type: "mcq", marks: 5, question: "DBSCAN advantage over K-Means?", options: ["Handles arbitrary shapes & noise", "Faster", "Needs specific K", "Works on high dims"], correct: 0, hint: "Density.", explanation: "Finds non-spherical clusters and outliers." },
    { id: 902, topic: "Dimensionality", type: "mcq", marks: 5, question: "First Principal Component captures?", options: ["Maximum Variance", "Minimum Variance", "Mean", "Median"], correct: 0, hint: "Spread.", explanation: "Direction of greatest variance in data." },
    { id: 903, topic: "Dimensionality", type: "mcq", marks: 4, question: "Is PCA supervised or unsupervised?", options: ["Unsupervised", "Supervised", "Reinforcement", "Semi-supervised"], correct: 0, hint: "No labels.", explanation: "Does not use target labels." },
    { id: 904, topic: "Dimensionality", type: "mcq", marks: 5, question: "LDA differs from PCA by being?", options: ["Supervised", "Unsupervised", "Linear", "Non-linear"], correct: 0, hint: "Labels.", explanation: "LDA uses class labels to maximize class separability." },
    { id: 905, topic: "Association", type: "mcq", marks: 4, question: "Support in Apriori implies?", options: ["Frequency of itemset", "Confidence", "Lift", "Total Sales"], correct: 0, hint: "Popularity.", explanation: "Fraction of transactions containing the itemset." },
    { id: 4100, topic: "Dimensionality", type: "mcq", marks: 5, question: "t-SNE primary use?", options: ["Visualization of high-dim data", "Compression", "Noise Reduction", "Classification"], correct: 0, hint: "Plots.", explanation: "t-SNE is excellent for 2D/3D visualization of high-dimensional data." },
    { id: 4101, topic: "Evaluation", type: "mcq", marks: 4, question: "ROC Curve plots?", options: ["TPR vs FPR", "Precision vs Recall", "Accuracy vs Loss", "TP vs TN"], correct: 0, hint: "Rates.", explanation: "Receiver Operating Characteristic curve plots True Positive Rate vs False Positive Rate." },
    { id: 4102, topic: "Ensemble", type: "mcq", marks: 5, question: "Hard Voting in Ensemble?", options: ["Majority Class wins", "Average Probabilities", "Weighted Average", "Min Probability"], correct: 0, hint: "Votes.", explanation: "Hard voting predicts the class that gets the most votes from base models." },
    { id: 4103, topic: "Algorithms", type: "mcq", marks: 4, question: "Assumption of Naive Bayes?", options: ["Feature Independence", "Linearity", "Normal Distribution", "None"], correct: 0, hint: "Naive.", explanation: "It assumes all features are independent of each other." },
    { id: 4104, topic: "Optimization", type: "mcq", marks: 5, question: "Mini-Batch Gradient Descent?", options: ["Update after small batch", "Update after 1 sample", "Update after full dataset", "Random update"], correct: 0, hint: "Middle ground.", explanation: "Combines benefits of SGD and Batch GD by using small batches." },
    { id: 4105, topic: "Clustering", type: "mcq", marks: 4, question: "Hierarchical Clustering Type?", options: ["Agglomerative", "Density-based", "Centroid-based", "Probabilistic"], correct: 0, hint: "Bottom-up.", explanation: "Agglomerative is a bottom-up approach." }
  ],

  // ==================================================================================
  // 5. DEEP LEARNING (DL)
  // ==================================================================================
  dl: [
    { id: 5001, topic: "ANN", type: "mcq", marks: 3, question: "Perceptron Limitation?", options: ["Cannot solve XOR (Linear)", "Too slow", "Too deep", "Complex"], correct: 0, hint: "Linear.", explanation: "Can only separate linearly separable data." },
    { id: 5002, topic: "Activation", type: "mcq", marks: 4, question: "ReLU Function?", options: ["max(0, x)", "1/(1+e^-x)", "tanh(x)", "x"], correct: 0, hint: "Positive.", explanation: "Standard for hidden layers." },
    { id: 5003, topic: "Activation", type: "mcq", marks: 4, question: "Softmax usage?", options: ["Multi-class output probability", "Binary output", "Regression", "Hidden layer"], correct: 0, hint: "Sum to 1.", explanation: "Converts logits to prob dist." },
    { id: 5004, topic: "Training", type: "mcq", marks: 4, question: "Backpropagation purpose?", options: ["Calculate Gradients", "Initialize Weights", "Forward Pass", "Predict"], correct: 0, hint: "Chain rule.", explanation: "Propagates error backward." },
    { id: 5005, topic: "Optimization", type: "mcq", marks: 5, question: "Momentum helps SGD?", options: ["Accelerate in relevant direction", "Slow down", "Stop overfitting", "Reduce size"], correct: 0, hint: "Velocity.", explanation: "Dampens oscillations." },
    { id: 5010, topic: "CNN", type: "mcq", marks: 4, question: "Convolution Filter learns?", options: ["Features (Edges/Textures)", "Classes", "Probabilities", "Nothing"], correct: 0, hint: "Pattern.", explanation: "Extracts local spatial features." },
    { id: 5011, topic: "CNN", type: "mcq", marks: 4, question: "Padding 'Same'?", options: ["Output size = Input size", "Reduced size", "No padding", "Double size"], correct: 0, hint: "Equal.", explanation: "Maintains spatial dimensions." },
    { id: 5012, topic: "CNN", type: "mcq", marks: 4, question: "Max Pooling?", options: ["Downsamples (Reduces dim)", "Upsamples", "Adds noise", "Classifies"], correct: 0, hint: "Shrink.", explanation: "Takes max value in window." },
    { id: 5013, topic: "Architecture", type: "mcq", marks: 5, question: "Transfer Learning?", options: ["Use pre-trained weights on new task", "Train from scratch", "Unsupervised", "Reinforcement"], correct: 0, hint: "Transfer.", explanation: "Fine-tune existing models (e.g., VGG, ResNet)." },
    { id: 5020, topic: "RNN", type: "mcq", marks: 4, question: "RNN limitation?", options: ["Vanishing Gradient (Short memory)", "Too fast", "Images only", "No weights"], correct: 0, hint: "Forgets.", explanation: "Struggles with long dependencies." },
    { id: 5021, topic: "LSTM", type: "mcq", marks: 5, question: "LSTM Forget Gate?", options: ["Decides what info to discard", "Adds info", "Outputs info", "Initializes"], correct: 0, hint: "Remove.", explanation: "Controls memory retention." },
    { id: 5022, topic: "GRU", type: "mcq", marks: 5, question: "GRU vs LSTM?", options: ["GRU has fewer gates (No output gate)", "GRU is slower", "GRU has more gates", "Same"], correct: 0, hint: "Simplified.", explanation: "GRU merges cell/hidden state." },
    { id: 5030, topic: "Transformers", type: "mcq", marks: 6, question: "Self-Attention Mechanism?", options: ["Weighted importance of all tokens", "Convolution", "Recurrence", "Pooling"], correct: 0, hint: "Context.", explanation: "Relates every word to every word." },
    { id: 5031, topic: "Transformers", type: "mcq", marks: 5, question: "Positional Encoding?", options: ["Injects order information", "Encodes values", "Compresses", "Encrypts"], correct: 0, hint: "Sequence.", explanation: "Transformers process in parallel, need order info." },
    { id: 5032, topic: "BERT", type: "mcq", marks: 5, question: "BERT is?", options: ["Encoder-only / Bidirectional", "Decoder-only", "RNN", "CNN"], correct: 0, hint: "Understanding.", explanation: "Bidirectional Encoder Representations." },
    { id: 5033, topic: "GPT", type: "mcq", marks: 5, question: "GPT is?", options: ["Decoder-only / Autoregressive", "Encoder-only", "Bi-directional", "Stateless"], correct: 0, hint: "Generation.", explanation: "Generates next token." },
    { id: 1000, topic: "ANN", type: "mcq", marks: 3, question: "A Perceptron is?", options: ["A single layer binary classifier", "A deep network", "An RNN", "A transformer"], correct: 0, hint: "Basic unit.", explanation: "The simplest form of ANN." },
    { id: 1001, topic: "Activation", type: "mcq", marks: 4, question: "ReLU equation?", options: ["max(0, x)", "1/(1+e^-x)", "tanh(x)", "x"], correct: 0, hint: "Rectified.", explanation: "Zero for negative, identity for positive." },
    { id: 1002, topic: "Activation", type: "mcq", marks: 4, question: "Why use Softmax in output?", options: ["Probabilities sum to 1", "To predict real values", "To allow negative outputs", "Faster calc"], correct: 0, hint: "Multi-class.", explanation: "Converts logits to probability distribution." },
    { id: 1003, topic: "Training", type: "mcq", marks: 4, question: "One Epoch means?", options: ["One pass of full dataset", "One batch", "One update", "One validation"], correct: 0, hint: "Full cycle.", explanation: "Entire dataset passed forward and backward once." },
    { id: 1004, topic: "Optimization", type: "mcq", marks: 5, question: "Vanishing Gradient affects?", options: ["Sigmoid/Tanh deep networks", "ReLU networks", "Shallow networks", "Trees"], correct: 0, hint: "Small deriv.", explanation: "Sigmoid gradients are < 0.25, causing decay in deep layers." },
    { id: 1005, topic: "Optimization", type: "mcq", marks: 4, question: "Adam optimizer combines?", options: ["Momentum + RMSProp", "SGD + Momentum", "Adagrad + SGD", "None"], correct: 0, hint: "Best of both.", explanation: "Combines momentum and adaptive learning rates." },
    { id: 1006, topic: "Regularization", type: "mcq", marks: 4, question: "Dropout prevents overfitting by?", options: ["Randomly disabling neurons", "Adding L1 penalty", "Normalizing inputs", "Stopping early"], correct: 0, hint: "Switch off.", explanation: "Prevents co-adaptation of features." },
    { id: 1007, topic: "Training", type: "mcq", marks: 5, question: "Backprop relies on?", options: ["Chain Rule", "Product Rule", "Sum Rule", "Bayes Rule"], correct: 0, hint: "Calculus.", explanation: "Chain rule is used to compute gradients." },
    { id: 1030, topic: "CNN", type: "mcq", marks: 4, question: "Convolution main purpose?", options: ["Feature Extraction", "Classification", "Regularization", "Flattening"], correct: 0, hint: "Filters.", explanation: "Extracts local features like edges and textures." },
    { id: 1031, topic: "CNN", type: "mcq", marks: 4, question: "Stride of 2 results in?", options: ["Downsampling by half", "Upsampling by 2", "Same size", "Double depth"], correct: 0, hint: "Skip.", explanation: "Reduces spatial dimensions." },
    { id: 1032, topic: "CNN", type: "mcq", marks: 4, question: "Padding 'Same' ensures?", options: ["Output size = Input size", "No padding", "Output = 0", "Double padding"], correct: 0, hint: "Preserve.", explanation: "Keeps spatial dimensions constant." },
    { id: 1033, topic: "CNN", type: "mcq", marks: 3, question: "Max Pooling does what?", options: ["Takes largest value in window", "Averages window", "Sums window", "Multiplies"], correct: 0, hint: "Max.", explanation: "Downsamples by taking max value." },
    { id: 1034, topic: "Architecture", type: "mcq", marks: 5, question: "LeNet-5 was designed for?", options: ["Handwritten digits (MNIST)", "Face Rec", "Object Det", "Translation"], correct: 0, hint: "Postal.", explanation: "Early CNN for digit recognition." },
    { id: 1035, topic: "Architecture", type: "mcq", marks: 5, question: "Fine-tuning means?", options: ["Training last layers of pre-trained model", "Training from scratch", "Freezing all layers", "Random weights"], correct: 0, hint: "Adjust.", explanation: " adapting a pre-trained model to a new task." },
    { id: 1036, topic: "Training", type: "mcq", marks: 4, question: "Data Augmentation purpose?", options: ["Increase generalization", "Decrease data size", "Faster training", "Reduce noise"], correct: 0, hint: "Variations.", explanation: "Creates modified copies of data to reduce overfitting." },
    { id: 1060, topic: "RNN", type: "mcq", marks: 4, question: "Vanilla RNN limitation?", options: ["Short-term memory / Vanishing Gradient", "Too fast", "Binary only", "Cannot process text"], correct: 0, hint: "Forgets.", explanation: "Struggles with long dependencies." },
    { id: 1061, topic: "LSTM", type: "mcq", marks: 5, question: "Role of Forget Gate in LSTM?", options: ["Decide what info to discard", "Decide input", "Decide output", "Initialize weights"], correct: 0, hint: "Discard.", explanation: "Controls information retention." },
    { id: 1062, topic: "Transformers", type: "mcq", marks: 6, question: "Self-Attention computes?", options: ["Relevance of tokens to each other", "Convolution", "Recurrence", "Pooling"], correct: 0, hint: "Focus.", explanation: "Weights importance of all words relative to current word." },
    { id: 1063, topic: "Transformers", type: "mcq", marks: 5, question: "Positional Encoding needed because?", options: ["No recurrence/order awareness", "Images needed", "Outputs are probs", "Faster"], correct: 0, hint: "Parallel.", explanation: "Transformers process in parallel, so order must be injected." },
    { id: 1064, topic: "BERT", type: "mcq", marks: 5, question: "BERT uses which training?", options: ["Masked LM (MLM)", "Causal LM", "Translation", "Regression"], correct: 0, hint: "Blanks.", explanation: "Predicts masked words in a sentence." },
    { id: 1100, topic: "OpenCV", type: "mcq", marks: 3, question: "OpenCV reads images as?", options: ["BGR", "RGB", "HSV", "CMYK"], correct: 0, hint: "Blue first.", explanation: "Standard OpenCV format is BGR." },
    { id: 1101, topic: "OpenCV", type: "mcq", marks: 4, question: "Gaussian Blur used for?", options: ["Noise Reduction", "Edge Detection", "Sharpening", "Inverting"], correct: 0, hint: "Smooth.", explanation: "Smoothes image to remove high-freq noise." },
    { id: 1102, topic: "OpenCV", type: "mcq", marks: 5, question: "Otsu's method finds?", options: ["Optimal global threshold", "Adaptive threshold", "Gradient", "Edges"], correct: 0, hint: "Auto.", explanation: "Minimizes intra-class variance." },
    { id: 1103, topic: "OpenCV", type: "mcq", marks: 4, question: "Erosion operation?", options: ["Shrinks bright regions", "Expands bright regions", "Blurs", "Sharpens"], correct: 0, hint: "Erode.", explanation: "Removes pixels from object boundaries." },
    { id: 5100, topic: "Optimization", type: "mcq", marks: 4, question: "RMSProp main feature?", options: ["Adaptive Learning Rate", "Momentum", "Second Order", "None"], correct: 0, hint: "Adapt.", explanation: "Maintains a moving average of squared gradients." },
    { id: 5101, topic: "Regularization", type: "mcq", marks: 4, question: "Batch Normalization benefit?", options: ["Faster training & Stability", "Reduced Model Size", "Feature Selection", "None"], correct: 0, hint: "Normalize.", explanation: "Normalizes layer inputs, reducing internal covariate shift." },
    { id: 5102, topic: "Activation", type: "mcq", marks: 3, question: "Leaky ReLU solves?", options: ["Dying ReLU problem", "Exploding Gradients", "Overfitting", "Slow calc"], correct: 0, hint: "Leak.", explanation: "Allows small negative values to pass through." },
    { id: 5103, topic: "Training", type: "mcq", marks: 5, question: "Xavier Initialization use?", options: ["Sigmoid/Tanh activations", "ReLU", "Output layer", "RNN"], correct: 0, hint: "Symmetric.", explanation: "Best for symmetric activation functions." },
    { id: 5104, topic: "Architecture", type: "mcq", marks: 5, question: "ResNet Innovation?", options: ["Skip Connections", "Inception Modules", "Dense Blocks", "Attention"], correct: 0, hint: "Skip.", explanation: "Residual connections solve vanishing gradient in deep nets." }
  ],

  // ==================================================================================
  // 6. NATURAL LANGUAGE PROCESSING (NLP)
  // ==================================================================================
  nlp: [
    { id: 6001, topic: "Preprocessing", type: "mcq", marks: 3, question: "Tokenization?", options: ["Splitting text into units", "Stemming", "Vectorizing", "Cleaning"], correct: 0, hint: "Break.", explanation: "Segments text into words/subwords." },
    { id: 6002, topic: "Preprocessing", type: "mcq", marks: 4, question: "Lemmatization vs Stemming?", options: ["Lemma finds root (dictionary), Stem chops", "Stem finds root", "Same", "None"], correct: 0, hint: "Meaning.", explanation: "Lemmatization uses morphological analysis." },
    { id: 6003, topic: "Preprocessing", type: "mcq", marks: 3, question: "Stop words?", options: ["Common words (the, is)", "Rare words", "Nouns", "Verbs"], correct: 0, hint: "Noise.", explanation: "Filtered out to reduce noise." },
    { id: 6004, topic: "Features", type: "mcq", marks: 5, question: "TF-IDF purpose?", options: ["Weigh terms by rarity/importance", "Count frequency only", "Sort words", "Embed"], correct: 0, hint: "Inverse.", explanation: "High weight for rare terms in docs." },
    { id: 6005, topic: "Embeddings", type: "mcq", marks: 5, question: "Word2Vec Skip-gram?", options: ["Predict Context from Target", "Predict Target from Context", "Predict Sentiment", "None"], correct: 0, hint: "Skip out.", explanation: "Uses center word to predict neighbors." },
    { id: 6006, topic: "Embeddings", type: "mcq", marks: 5, question: "GloVe method?", options: ["Matrix Factorization (Co-occurrence)", "Neural Net", "Decision Tree", "Rule"], correct: 0, hint: "Global.", explanation: "Global Vectors." },
    { id: 6007, topic: "Tasks", type: "mcq", marks: 4, question: "NER identifies?", options: ["Entities (Person, Org, Loc)", "Verbs", "Adjectives", "Topics"], correct: 0, hint: "Names.", explanation: "Named Entity Recognition." },
    { id: 6008, topic: "Tasks", type: "mcq", marks: 4, question: "POS Tagging?", options: ["Grammatical labeling (Noun, Verb)", "Sentiment", "Translation", "Summary"], correct: 0, hint: "Speech.", explanation: "Part-Of-Speech tagging." },
    { id: 1200, topic: "Preprocessing", type: "mcq", marks: 3, question: "Tokenization is?", options: ["Splitting text into units", "Removing stopwords", "Finding root", "Vectorizing"], correct: 0, hint: "Split.", explanation: "Breaking text into words/sentences." },
    { id: 1201, topic: "Preprocessing", type: "mcq", marks: 4, question: "Stemming vs Lemmatization?", options: ["Stemming chops, Lemma uses dict", "Lemma chops", "Same", "None"], correct: 0, hint: "Root.", explanation: "Lemmatization finds the morphological root." },
    { id: 1202, topic: "Preprocessing", type: "mcq", marks: 3, question: "Stop words are?", options: ["High freq, low meaning", "Low freq, high meaning", "Nouns", "Verbs"], correct: 0, hint: "The, Is.", explanation: "Common words filtered out." },
    { id: 1203, topic: "N-grams", type: "mcq", marks: 4, question: "Bigram is?", options: ["Sequence of 2 words", "1 word", "3 words", "Sentence"], correct: 0, hint: "Bi.", explanation: "Two consecutive items." },
    { id: 1230, topic: "Features", type: "mcq", marks: 5, question: "High IDF value means?", options: ["Word is rare across corpus", "Word is common", "Word is short", "Word is stopword"], correct: 0, hint: "Inverse.", explanation: "Rare words carry more information." },
    { id: 1231, topic: "Embeddings", type: "mcq", marks: 5, question: "Skip-gram predicts?", options: ["Context from Target", "Target from Context", "Next sentence", "Sentiment"], correct: 0, hint: "Skip out.", explanation: "Predicts surrounding words given center word." },
    { id: 1232, topic: "Embeddings", type: "mcq", marks: 5, question: "CBOW predicts?", options: ["Target from Context", "Context from Target", "Next sentence", "Topic"], correct: 0, hint: "Bag.", explanation: "Continuous Bag of Words predicts center word from context." },
    { id: 1233, topic: "Embeddings", type: "mcq", marks: 5, question: "Vector Arithmetic: King - Man + Woman = ?", options: ["Queen", "Princess", "Prince", "Monarch"], correct: 0, hint: "Analogy.", explanation: "Captures semantic gender relationship." },
    { id: 1234, topic: "Tasks", type: "mcq", marks: 4, question: "NER stands for?", options: ["Named Entity Recognition", "Neural Entity Rec", "Noun Entity Rule", "None"], correct: 0, hint: "Entities.", explanation: "Identifying real-world objects in text." },
    { id: 1235, topic: "Tasks", type: "mcq", marks: 4, question: "POS Tagging identifies?", options: ["Grammatical parts of speech", "Sentiment", "Entities", "Topics"], correct: 0, hint: "Noun/Verb.", explanation: "Labels words as Noun, Verb, Adj, etc." },
    { id: 1236, topic: "Models", type: "mcq", marks: 5, question: "Seq2Seq models are used for?", options: ["Translation", "Classification", "Clustering", "Regression"], correct: 0, hint: "Encoder-Decoder.", explanation: "Mapping input sequence to output sequence." },
    { id: 6100, topic: "Preprocessing", type: "mcq", marks: 3, question: "Purpose of Lowercasing?", options: ["Standardize vocabulary", "Reduce file size", "Increase speed", "None"], correct: 0, hint: "Match.", explanation: "Helps treat 'The' and 'the' as the same word." },
    { id: 6101, topic: "Features", type: "mcq", marks: 4, question: "Bag of Words ignores?", options: ["Word Order", "Word Count", "Word Existence", "Vocabulary"], correct: 0, hint: "Sequence.", explanation: "BoW captures frequency but loses context and order." },
    { id: 6102, topic: "N-Grams", type: "mcq", marks: 4, question: "Disadvantage of N-grams?", options: ["High Dimensionality/Sparsity", "Low accuracy", "Fast training", "Simple"], correct: 0, hint: "Too many.", explanation: "Vocabulary size explodes as N increases." },
    { id: 6103, topic: "Encoding", type: "mcq", marks: 4, question: "One Hot Encoding issue in NLP?", options: ["Sparse & High Dim", "Low Dim", "Complex", "Slow"], correct: 0, hint: "Zeros.", explanation: "Creates massive vectors with mostly zeros." }
  ],

  // ==================================================================================
  // 7. MATHEMATICS & STATISTICS
  // ==================================================================================
  math: [
    { id: 7001, topic: "Stats", type: "mcq", marks: 3, question: "Median characteristic?", options: ["Robust to outliers", "Affected by outliers", "Sum of values", "Max value"], correct: 0, hint: "Middle.", explanation: "Splits data, ignores extremes." },
    { id: 7002, topic: "Stats", type: "mcq", marks: 4, question: "Standard Deviation?", options: ["Square root of Variance", "Variance squared", "Mean absolute dev", "Range"], correct: 0, hint: "Root.", explanation: "Measure of spread." },
    { id: 7003, topic: "Distributions", type: "mcq", marks: 4, question: "Normal Distribution shape?", options: ["Bell Curve", "Uniform", "Exponential", "Skewed"], correct: 0, hint: "Gaussian.", explanation: "Symmetric." },
    { id: 7004, topic: "Hypothesis", type: "mcq", marks: 5, question: "P-value < 0.05?", options: ["Reject Null Hypothesis (Significant)", "Accept Null", "Fail", "No result"], correct: 0, hint: "Rare.", explanation: "Evidence against Null." },
    { id: 7005, topic: "Hypothesis", type: "mcq", marks: 5, question: "Type II Error?", options: ["False Negative (Fail to reject false Null)", "False Positive", "True Positive", "True Negative"], correct: 0, hint: "Miss.", explanation: "Missing a real effect." },
    { id: 7010, topic: "Probability", type: "mcq", marks: 5, question: "Bayes Theorem?", options: ["P(A|B) = P(B|A)P(A)/P(B)", "P(A)P(B)", "P(A|B) = P(A)", "None"], correct: 0, hint: "Posterior.", explanation: "Update belief." },
    { id: 7011, topic: "Probability", type: "mcq", marks: 4, question: "Mutually Exclusive?", options: ["P(A and B) = 0", "Independent", "Dependent", "Sum is 1"], correct: 0, hint: "Disjoint.", explanation: "Cannot happen together." },
    { id: 7020, topic: "Vectors", type: "mcq", marks: 4, question: "Dot Product of orthogonal vectors?", options: ["0", "1", "-1", "Inf"], correct: 0, hint: "Perpendicular.", explanation: "No projection." },
    { id: 7021, topic: "Eigen", type: "mcq", marks: 5, question: "Eigenvalue represents?", options: ["Scaling factor", "Rotation angle", "Position", "Shear"], correct: 0, hint: "Stretch.", explanation: "Amount vector is stretched." },
    { id: 7022, topic: "Matrix", type: "mcq", marks: 5, question: "Determinant = 0?", options: ["Singular (No inverse)", "Identity", "Invertible", "Orthogonal"], correct: 0, hint: "Collapse.", explanation: "Volume becomes zero." },
    { id: 1300, topic: "Stats", type: "mcq", marks: 3, question: "Which is robust to outliers?", options: ["Median", "Mean", "Range", "Variance"], correct: 0, hint: "Middle.", explanation: "Median splits data, unaffected by extreme values." },
    { id: 1301, topic: "Stats", type: "mcq", marks: 4, question: "Standard Deviation is?", options: ["Square root of Variance", "Square of Variance", "Mean absolute error", "Range"], correct: 0, hint: "Root.", explanation: "Sqrt(Variance)." },
    { id: 1303, topic: "Distributions", type: "mcq", marks: 5, question: "Poisson Distribution models?", options: ["Events in fixed time", "Coin flips", "Heights", "Test scores"], correct: 0, hint: "Rate.", explanation: "Count of events in an interval." },
    { id: 1304, topic: "Hypothesis", type: "mcq", marks: 5, question: "Type I Error is?", options: ["False Positive", "False Negative", "True Positive", "True Negative"], correct: 0, hint: "False Alarm.", explanation: "Rejecting a true Null Hypothesis." },
    { id: 1305, topic: "Hypothesis", type: "mcq", marks: 5, question: "P-value < 0.05 means?", options: ["Reject Null Hypothesis", "Accept Null", "Test Failed", "No relation"], correct: 0, hint: "Significant.", explanation: "Statistically significant evidence against Null." },
    { id: 1306, topic: "Correlation", type: "mcq", marks: 4, question: "Pearson Corr = -1 means?", options: ["Perfect negative linear relationship", "No relation", "Positive relation", "Weak relation"], correct: 0, hint: "Opposite.", explanation: "As one increases, other decreases perfectly." },
    { id: 1340, topic: "Probability", type: "mcq", marks: 5, question: "Bayes Theorem Formula?", options: ["P(A|B) = P(B|A)P(A)/P(B)", "P(A)P(B)", "P(A)+P(B)", "P(B)/P(A)"], correct: 0, hint: "Posterior.", explanation: "Standard Bayes formula." },
    { id: 1341, topic: "Probability", type: "mcq", marks: 4, question: "Mutually Exclusive events?", options: ["P(A and B) = 0", "Independent", "P(A)=P(B)", "Dependent"], correct: 0, hint: "Disjoint.", explanation: "Cannot happen at same time." },
    { id: 1342, topic: "Vectors", type: "mcq", marks: 3, question: "Dot Product of orthogonal vectors?", options: ["0", "1", "-1", "Infinity"], correct: 0, hint: "Perpendicular.", explanation: "Vectors at 90 deg have 0 dot product." },
    { id: 1343, topic: "Matrix", type: "mcq", marks: 4, question: "Matrix Mult: (2x3) * (3x2) result?", options: ["2x2", "3x3", "2x3", "Error"], correct: 0, hint: "Outer dims.", explanation: "Result has rows of first and cols of second." },
    { id: 1344, topic: "Eigen", type: "mcq", marks: 5, question: "Eigenvalue represents?", options: ["Scaling factor", "Rotation", "Translation", "Shear"], correct: 0, hint: "Scale.", explanation: "Amount by which eigenvector is stretched." },
    { id: 1345, topic: "Matrix", type: "mcq", marks: 5, question: "PCA uses which decomp?", options: ["Eigendecomposition / SVD", "LU", "Cholesky", "QR"], correct: 0, hint: "Singular.", explanation: "Usually computed via SVD or Covariance Matrix Eigendecomposition." },
    { id: 7100, topic: "Distributions", type: "mcq", marks: 4, question: "Bernoulli Distribution?", options: ["Single trial with 2 outcomes", "Multiple trials", "Continuous", "Counts"], correct: 0, hint: "Coin flip.", explanation: "Models a single experiment with success/failure." },
    { id: 7101, topic: "Hypothesis", type: "mcq", marks: 5, question: "ANOVA test purpose?", options: ["Compare means of 3+ groups", "Compare 2 means", "Correlation", "Variance only"], correct: 0, hint: "Analysis of Variance.", explanation: "Tests if at least one group mean is different." },
    { id: 7102, topic: "Correlation", type: "mcq", marks: 4, question: "Spearman Correlation?", options: ["Rank-based (Non-linear)", "Linear only", "Categorical", "None"], correct: 0, hint: "Ranks.", explanation: "Measures monotonic relationship using ranks." },
    { id: 7103, topic: "Vectors", type: "mcq", marks: 4, question: "Unit Vector magnitude?", options: ["1", "0", "Infinity", "Variable"], correct: 0, hint: "Unity.", explanation: "A vector with a length of exactly 1." },
    { id: 7104, topic: "Stats", type: "mcq", marks: 4, question: "Central Limit Theorem states?", options: ["Sample means -> Normal Dist", "Data is Normal", "Mean = Median", "None"], correct: 0, hint: "Sample size.", explanation: "As sample size increases, the distribution of sample means approaches a normal distribution." }
  ],

  // ==========================================
  // 8. GENAI & LLM (NEWLY ADDED FROM CSV)
  // ==========================================
  genai_llm: [
  { id: 6001, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which layer of the GenAI Roadmap focuses on core model development and fundamental breakthroughs?", options: ["Research Layer", "Application Layer", "Operation Layer", "User Layer"], correct: 0, hint: "Focuses on exploring the unknown.", explanation: "The Research Layer is dedicated to core model development and fundamental breakthroughs in AI algorithms." },
  { id: 6002, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "The 'Foundation Layer' in GenAI primarily involves:", options: ["End-user interfaces", "Large-scale pre-trained models", "Customer support", "Hardware manufacturing"], correct: 1, hint: "Think of GPT-4 or Claude 3.", explanation: "The Foundation Layer primarily involves the large-scale pre-trained foundational models." },
  { id: 6003, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which layer provides the APIs and environments for developers to access foundation models?", options: ["Builder Layer", "Platform Layer", "Research Layer", "Distribution Layer"], correct: 1, hint: "Provides the ecosystem/infrastructure.", explanation: "The Platform Layer provides APIs and managed environments for developers to access foundation models easily." },
  { id: 6004, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "The layer where developers create specific tools or agents using foundation models is the:", options: ["Builder Layer", "Foundation Layer", "Data Dimension", "Infrastructure Dimension"], correct: 0, hint: "The ones doing the construction.", explanation: "The Builder Layer is where developers create specific AI tools, apps, or agents using underlying foundation models." },
  { id: 6005, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which layer represents the final software or service that end-users interact with?", options: ["Application Layer", "Research Layer", "Platform Layer", "Operation Layer"], correct: 0, hint: "The end product.", explanation: "The Application Layer represents the final, polished software or service that end-users interact with." },
  { id: 6006, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "The 'Operation Layer' is responsible for:", options: ["Writing research papers", "Monitoring, scaling, and maintaining AI systems", "Designing new chip architectures", "Marketing the product"], correct: 1, hint: "Similar to DevOps.", explanation: "The Operation (or MLOps) Layer is responsible for monitoring, scaling, maintaining, and securing live AI systems." },
  { id: 6007, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which layer deals with the channels through which the AI application reaches the market?", options: ["Distribution Layer", "Foundation Layer", "Data Dimension", "User Layer"], correct: 0, hint: "", explanation: "" },
  { id: 6008, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "The 'User Layer' focuses on:", options: ["How humans interact with and benefit from the AI", "Training the model", "Cleaning data", "Server maintenance"], correct: 0, hint: "", explanation: "" },
  { id: 6009, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "What does the 'Feedback Loop' in the GenAI Roadmap connect?", options: ["User to Research", "Foundation to Platform", "Data to Infrastructure", "People to Tools"], correct: 0, hint: "", explanation: "" },
  { id: 6010, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which dimension covers the physical compute resources like GPUs and TPUs?", options: ["Infrastructure Dimension", "Data Dimension", "Tools Dimension", "People Dimension"], correct: 0, hint: "", explanation: "" },
  { id: 6011, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "The 'Data Dimension' in the GenAI Roadmap is concerned with:", options: ["Data collection, curation, and governance", "Building web servers", "Hiring employees", "Designing UI layouts"], correct: 0, hint: "", explanation: "" },
  { id: 6012, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which dimension includes the frameworks and libraries used by developers?", options: ["Tools Dimension", "Infrastructure Dimension", "People Dimension", "Data Dimension"], correct: 0, hint: "", explanation: "" },
  { id: 6013, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "The 'People Dimension' emphasizes:", options: ["The expertise, ethics, and talent required for GenAI", "The number of servers in a data center", "The speed of the internet connection", "The price of the subscription"], correct: 0, hint: "", explanation: "" },
  { id: 6014, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "What is the primary goal of the 'Infrastructure Dimension'?", options: ["To provide scalable compute and storage", "To write code for mobile apps", "To design logos", "To conduct user surveys"], correct: 0, hint: "", explanation: "" },
  { id: 6015, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "In the GenAI Roadmap, 'Dimensions' represent:", options: ["The supporting pillars across all layers", "Specific user groups", "The timeline of development", "Marketing strategies"], correct: 0, hint: "", explanation: "" },
  { id: 6016, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "What is Gemini in the context of Google's AI models?", options: ["A multimodal AI model family", "A search engine optimization tool", "A hardware processor", "A mobile operating system"], correct: 0, hint: "", explanation: "" },
  { id: 6017, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which Gemini model is optimized for high-volume, high-speed tasks with lower latency?", options: ["Gemini Flash", "Gemini Ultra", "Gemini Pro", "Gemini Nano"], correct: 0, hint: "", explanation: "" },
  { id: 6018, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which version of Gemini is the most capable model for highly complex tasks?", options: ["Gemini Ultra", "Gemini Pro", "Gemini Flash", "Gemini Lite"], correct: 0, hint: "", explanation: "" },
  { id: 6019, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Gemini Pro is designed to be:", options: ["The best model for scaling across a wide range of tasks", "A small model for mobile devices only", "Only for image generation", "A basic text editor"], correct: 0, hint: "", explanation: "" },
  { id: 6020, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "What does 'multimodality' mean in the context of Gemini?", options: ["It can process and reason across text, images, video, and audio", "It can run on multiple computers at once", "It supports multiple languages only", "It can be used by multiple users simultaneously"], correct: 0, hint: "", explanation: "" },
  { id: 6021, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Which Google AI model preceded Gemini and was based on the Transformer architecture?", options: ["PaLM 2", "BERT", "T5", "All of the above"], correct: 3, hint: "", explanation: "" },
  { id: 6022, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Googles 'Responsible AI Principles' include which of the following?", options: ["Be socially beneficial", "Avoid creating or reinforcing unfair bias", "Be built and tested for safety", "All of the above"], correct: 3, hint: "", explanation: "" },
  { id: 6023, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Gemini's 'Generation Capability' includes:", options: ["Text, image, and speech generation", "Only text generation", "Only image generation", "Only code generation"], correct: 0, hint: "", explanation: "" },
  { id: 6024, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "The 'Thinking Capability' of Gemini allows it to:", options: ["Generate structured output and reason through logic", "Think like a human being emotionally", "Predict the future with 100% accuracy", "Operate without any electrical power"], correct: 0, hint: "", explanation: "" },
  { id: 6025, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "Gemini's 'Understanding Capability' extends to which formats?", options: ["Images, documents, audio, and video", "Text only", "Spreadsheets only", "YouTube comments only"], correct: 0, hint: "", explanation: "" },
  { id: 6026, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "What is 'Function Calling' in Gemini?", options: ["The ability to interact with external tools and APIs", "The ability to make phone calls to users", "A feature to rename functions in Python code", "A method to call customer support"], correct: 0, hint: "", explanation: "" },
  { id: 6027, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "How does Gemini handle structured output generation?", options: ["By using reasoning to format data into JSON or other schemas", "By randomly guessing the format", "By only providing raw text", "By requiring a human to format it"], correct: 0, hint: "", explanation: "" },
  { id: 6028, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "One of the key evolutions of Google's models leading to Gemini was:", options: ["Transitioning from LaMDA and PaLM to a natively multimodal architecture", "Removing the neural network component", "Switching to a purely rule-based system", "Focusing only on 1-bit processors"], correct: 0, hint: "", explanation: "" },
  { id: 6029, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "In Gemini's multimodal processing, 'Understanding' refers to:", options: ["Extracting insights from diverse media types", "Translating words into different fonts", "Storing data in a database", "Optimizing internet speed"], correct: 0, hint: "", explanation: "" },
  { id: 6030, topic: "LLM - Foundation", type: "mcq", marks: 1, question: "The 'Feedback Loop' is essential for:", options: ["Continuous improvement based on real-world usage", "Reducing the cost of electricity", "Making the model run slower", "Hiring more managers"], correct: 0, hint: "", explanation: "" },
  { id: 6031, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is a workflow in the context of automation?", options: ["A set of manual tasks", "A sequence of industrial, administrative, or other processes through which a piece of work passes from initiation to completion", "A single line of code", "A computer hardware component"], correct: 1, hint: "", explanation: "" },
  { id: 6032, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is the primary goal of business process automation?", options: ["To increase manual labor", "To replace all human employees", "To improve efficiency, consistency, and speed of tasks", "To make software more complex"], correct: 2, hint: "", explanation: "" },
  { id: 6033, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which of the following is a problem solved by automation?", options: ["High risk of human error in repetitive tasks", "Decreased data processing speed", "Increased operational costs for simple tasks", "All of the above"], correct: 3, hint: "", explanation: "" },
  { id: 6034, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Automation is most effective for tasks that are:", options: ["Creative and unpredictable", "Repetitive and rule-based", "One-time occurrences", "Highly emotional"], correct: 1, hint: "", explanation: "" },
  { id: 6035, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What does 'workflow orchestration' refer to?", options: ["Writing a single script", "Managing and coordinating multiple automated tasks or workflows", "Playing music during work", "Designing a user interface"], correct: 1, hint: "", explanation: "" },
  { id: 6036, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is n8n?", options: ["A programming language", "A fair-code licensed workflow automation tool", "A database management system", "An operating system"], correct: 1, hint: "", explanation: "" },
  { id: 6037, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Where does n8n fit in the automation ecosystem?", options: ["It is an alternative to Zapier and Make", "It is only for frontend development", "It is a hardware driver", "It is a social media platform"], correct: 0, hint: "", explanation: "" },
  { id: 6038, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which licensing model does n8n primarily use?", options: ["Proprietary", "Fair-code", "GPL only", "MIT only"], correct: 1, hint: "", explanation: "" },
  { id: 6039, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What makes n8n unique compared to many other automation tools?", options: ["It can be self-hosted", "It has no GUI", "It only supports 5 integrations", "It requires 100GB of RAM"], correct: 0, hint: "", explanation: "" },
  { id: 6040, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "n8n is often referred to as a _____ automation tool.", options: ["Low-code", "No-code only", "High-code only", "Hardware-based"], correct: 0, hint: "", explanation: "" },
  { id: 6041, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is the main workspace area in n8n where you build workflows?", options: ["The Canvas", "The Dashboard", "The Code Editor", "The Terminal"], correct: 0, hint: "", explanation: "" },
  { id: 6042, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "In n8n, what do you call the individual building blocks of a workflow?", options: ["Blocks", "Nodes", "Links", "Functions"], correct: 1, hint: "", explanation: "" },
  { id: 6043, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "How do you connect two nodes in n8n?", options: ["By writing a connection script", "By dragging a line from the output of one node to the input of another", "By clicking a 'Connect' button in the settings", "By using a physical cable"], correct: 1, hint: "", explanation: "" },
  { id: 6044, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is the purpose of the 'Execute Workflow' button?", options: ["To delete the workflow", "To run the entire workflow from start to finish", "To save the workflow", "To export the workflow to JSON"], correct: 1, hint: "", explanation: "" },
  { id: 6045, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Where can you see the execution history in n8n?", options: ["In the 'Settings' tab", "In the 'Executions' sidebar", "In the 'Nodes' panel", "In the 'Credentials' section"], correct: 1, hint: "", explanation: "" },
  { id: 6046, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What are 'Trigger' nodes in n8n?", options: ["Nodes that delete data", "Nodes that start a workflow based on an event", "Nodes that only work with databases", "Nodes that end a workflow"], correct: 1, hint: "", explanation: "" },
  { id: 6047, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which type of node is used to fetch data from an external API?", options: ["Trigger Node", "Action/Regular Node", "Sticky Note", "Logic Node"], correct: 1, hint: "", explanation: "" },
  { id: 6048, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What does 'Integration' mean in n8n?", options: ["Connecting n8n with third-party apps like Google Sheets, Slack, etc.", "Merging two n8n instances", "Installing n8n on Linux", "Using only internal nodes"], correct: 0, hint: "", explanation: "" },
  { id: 6049, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which node would you use to wait for a specific amount of time?", options: ["The Stop Node", "The Wait Node", "The Pause Node", "The Delay Node"], correct: 1, hint: "", explanation: "" },
  { id: 6050, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "How do you handle credentials for an integration in n8n?", options: ["By hardcoding them in the node", "By creating a 'Credential' object and linking it to the node", "By sharing them in the public forum", "By disabling security"], correct: 1, hint: "", explanation: "" },
  { id: 6051, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is a 'self-hosted' n8n instance?", options: ["n8n running on your own server or local machine", "n8n running on n8n.cloud", "n8n running on a public website", "n8n running inside a browser only"], correct: 0, hint: "", explanation: "" },
  { id: 6052, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is 'n8n Cloud'?", options: ["A managed hosting service provided by n8n", "A weather forecasting tool", "A version of n8n that doesn't use nodes", "A desktop application"], correct: 0, hint: "", explanation: "" },
  { id: 6053, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is a major advantage of self-hosting n8n?", options: ["No internet required ever", "Full control over data and lower costs for high-volume tasks", "It is easier to set up than the cloud version", "It automatically updates every hour"], correct: 1, hint: "", explanation: "" },
  { id: 6054, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which technology is commonly used to install self-hosted n8n easily?", options: ["Docker", "Java Applets", "Adobe Flash", "VirtualBox only"], correct: 0, hint: "", explanation: "" },
  { id: 6055, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "To run n8n using Docker, which command is typically used first?", options: ["docker pull n8nio/n8n", "docker stop n8n", "docker delete n8n", "docker start chrome"], correct: 0, hint: "", explanation: "" },
  { id: 6056, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is the default port for n8n?", options: ["8080", "5678", "3000", "80"], correct: 1, hint: "", explanation: "" },
  { id: 6057, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which environment variable is used to set the encryption key in n8n?", options: ["N8N_ENCRYPTION_KEY", "SECRET_KEY", "PASSWORD", "KEY_ENCRYPT"], correct: 0, hint: "", explanation: "" },
  { id: 6058, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "How long is the standard free trial for n8n Cloud?", options: ["7 days", "15 days", "30 days", "60 days"], correct: 1, hint: "", explanation: "" },
  { id: 6059, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "In a Docker setup, what is the purpose of a 'volume' for n8n?", options: ["To make the container louder", "To persist data like workflows and credentials between restarts", "To increase the RAM", "To store the operating system"], correct: 1, hint: "", explanation: "" },
  { id: 6060, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which command starts an n8n container in the background (detached mode)?", options: ["docker run -d", "docker run -it", "docker run -stop", "docker run -f"], correct: 0, hint: "", explanation: "" },
  { id: 6061, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "How does data flow between nodes in n8n?", options: ["From right to left", "From left to right", "In a circular motion only", "Randomly"], correct: 1, hint: "", explanation: "" },
  { id: 6062, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What format is data typically represented in within n8n?", options: ["XML", "JSON", "Plain Text", "Binary only"], correct: 1, hint: "", explanation: "" },
  { id: 6063, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is an 'Expression' in n8n?", options: ["A way to dynamically calculate or reference data using JavaScript", "A facial expression of the user", "A static text string", "A node type"], correct: 0, hint: "", explanation: "" },
  { id: 6064, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "How do you reference data from a previous node in an expression?", options: ["Using the syntax {{ $node['NodeName'].json['property'] }}", "By typing the property name directly", "By using SQL", "It is impossible to reference previous data"], correct: 0, hint: "", explanation: "" },
  { id: 6065, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is the purpose of the 'Set' node (or 'Edit Fields' node)?", options: ["To delete all data", "To create, update, or remove fields in the data stream", "To change the n8n theme", "To set the server time"], correct: 1, hint: "", explanation: "" },
  { id: 6066, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What does '$json' represent in an expression?", options: ["The input JSON data of the current node", "A currency symbol", "The global configuration", "The output of the last node only"], correct: 0, hint: "", explanation: "" },
  { id: 6067, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "How can you access the current date in an n8n expression?", options: ["Using $today", "Using {{ $now }} or {{ new Date() }}", "By manually typing it", "Using a 'Date' node only"], correct: 1, hint: "", explanation: "" },
  { id: 6068, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "In n8n, data is processed as an _____ of items.", options: ["Object", "Array", "String", "Number"], correct: 1, hint: "", explanation: "" },
  { id: 6069, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What happens if a node receives multiple items?", options: ["It only processes the first one", "It processes each item individually (for most nodes)", "It crashes", "It ignores all items"], correct: 1, hint: "", explanation: "" },
  { id: 6070, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which variable allows you to access data from the 'Trigger' node specifically?", options: ["By typing the property name directly", "$node['TriggerNodeName']", "$start", "$first"], correct: 1, hint: "", explanation: "" },
  { id: 6071, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is the purpose of the 'If' node?", options: ["To repeat a task", "To branch the workflow based on a true/false condition", "To merge two datasets", "To wait for 5 minutes"], correct: 1, hint: "", explanation: "" },
  { id: 6072, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is the 'Merge' node used for?", options: ["To combine data from two or more input branches", "To delete duplicate nodes", "To stop the workflow", "To split one item into many"], correct: 0, hint: "", explanation: "" },
  { id: 6073, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Which node is used to divide a single array of items into multiple individual items?", options: ["The Join Node", "The Split In Batches Node", "The Filter Node", "The Combine Node"], correct: 1, hint: "", explanation: "" },
  { id: 6074, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is the main difference between 'If' and 'Switch' nodes?", options: ["If' is for binary conditions; 'Switch' is for multiple possible routes", "If' is faster", "Switch' only works with numbers", "There is no difference"], correct: 0, hint: "", explanation: "" },
  { id: 6075, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is a 'Linear' workflow?", options: ["A workflow where nodes are connected in a single straight line", "A workflow that loops forever", "A workflow with many branches", "A workflow that uses AI"], correct: 0, hint: "", explanation: "" },
  { id: 6076, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What characterizes a 'Parallel' workflow?", options: ["Tasks are executed one after another", "Multiple branches execute tasks simultaneously or independently", "The workflow only runs at night", "The workflow uses two n8n instances"], correct: 1, hint: "Side-by-side execution.", explanation: "Parallel workflows branch out to execute multiple tasks simultaneously, speeding up the process." },
  { id: 6077, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is a 'Conditional' workflow?", options: ["A workflow that always follows the same path", "A workflow that makes decisions based on data inputs", "A workflow that requires a subscription", "A workflow with no trigger"], correct: 1, hint: "Uses IF/ELSE logic.", explanation: "Conditional workflows evaluate data inputs and branch out dynamically based on logical conditions." },
  { id: 6078, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "What is a 'Looping' workflow?", options: ["A workflow that runs once and stops", "A workflow that repeats a set of actions multiple times", "A workflow that never starts", "A workflow that only uses the 'Wait' node"], correct: 1, hint: "Iteration.", explanation: "Looping workflows iterate over arrays of data or repeat actions until a specific condition is met." },
  { id: 6079, topic: "Agentic Workflows", type: "mcq", marks: 1, question: "Can you integrate all workflow types (Linear, Parallel, Conditional, Looping) into a single flow?", options: ["No, it's too complex", "Yes, n8n allows combining these patterns in a single workflow", "Only in the Enterprise version", "Only if using Docker"], correct: 1, hint: "Modern tools are highly flexible.", explanation: "Yes, advanced automation platforms allow you to combine all workflow patterns seamlessly within a single architecture." }
]
};

const EXAM_MODULES = [
  { id: 'python', title: 'Python Programming', description: 'Core Python, scripting, and data handling.', icon: Terminal, color: 'text-green-400', bg: 'bg-green-500/10', total: QUESTIONS_DB.python.length, time: 30 },
  { id: 'cpp', title: 'C++ Programming', description: 'OOP, Memory Management, and STL.', icon: Code, color: 'text-blue-400', bg: 'bg-blue-500/10', total: QUESTIONS_DB.cpp.length, time: 35 },
  { id: 'ds', title: 'Data Science', description: 'NumPy, Pandas, and SQL basics.', icon: BarChart2, color: 'text-yellow-400', bg: 'bg-yellow-500/10', total: QUESTIONS_DB.ds.length, time: 40 },
  { id: 'ml', title: 'Machine Learning', description: 'Supervised & Unsupervised Learning.', icon: Cpu, color: 'text-orange-400', bg: 'bg-orange-500/10', total: QUESTIONS_DB.ml.length, time: 45 },
  { id: 'dl', title: 'Deep Learning', description: 'ANNs, CNNs, RNNs, and Transformers.', icon: Network, color: 'text-red-400', bg: 'bg-red-500/10', total: QUESTIONS_DB.dl.length, time: 45 },
  { id: 'nlp', title: 'NLP', description: 'Text processing and language models.', icon: MessageSquare, color: 'text-cyan-400', bg: 'bg-cyan-500/10', total: QUESTIONS_DB.nlp.length, time: 40 },
  { id: 'math', title: 'Math & Stats', description: 'Probability, Linear Algebra, and Stats.', icon: Sigma, color: 'text-pink-400', bg: 'bg-pink-500/10', total: QUESTIONS_DB.math.length, time: 35 },
  { id: 'genai_llm', title: 'GenAI & LLMs', description: 'Foundation models, AI workflows, & Agents.', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/10', total: QUESTIONS_DB.genai_llm.length, time: 25 }
];

// ==========================================
// 2. MOCK BACKEND SERVICE
// ==========================================

class MockBackendService {
  static users = [
    { id: 'admin-1', name: 'System Admin', email: 'admin@system.com', password: 'admin', role: 'admin', joined: '2023-01-15', scores: { python: 100, ds: 100, genai_llm: 100 } },
    { id: 'user-1', name: 'Alice Smith', email: 'alice@test.com', password: 'test', role: 'student', joined: '2023-10-05', scores: { python: 85, ds: 70, genai_llm: 90 } },
    { id: 'user-2', name: 'Bob Jones', email: 'bob@test.com', password: 'test', role: 'student', joined: '2023-11-20', scores: { ml: 92, cpp: 60, genai_llm: 75 } }
  ];

  static async delay(ms = 800) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async login(email, password) {
    await this.delay();
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid credentials");
    const { password: _, ...safeUser } = user;
    return { token: 'mock-jwt-token-123', user: safeUser };
  }

  static async register(name, email, password) {
    await this.delay();
    if (this.users.some(u => u.email === email)) throw new Error("Email already registered");
    const newUser = {
      id: `user-${Date.now()}`,
      name, email, password, role: 'student', joined: new Date().toISOString().split('T')[0], scores: {}
    };
    this.users.push(newUser);
    const { password: _, ...safeUser } = newUser;
    return { token: 'mock-jwt-token-new', user: safeUser };
  }

  static async updateScore(userId, moduleId, score) {
    await this.delay(400);
    const user = this.users.find(u => u.id === userId);
    if (user) {
      if (!user.scores[moduleId] || score > user.scores[moduleId]) {
        user.scores[moduleId] = score;
      }
    }
    return user;
  }

  static async getAllUsers() {
    await this.delay();
    return this.users.map(({ password, ...u }) => u);
  }

  static async deleteUser(userId) {
    await this.delay(500);
    const index = this.users.findIndex(u => u.id === userId);
    if (index === -1) throw new Error("User not found");
    this.users.splice(index, 1);
    return true;
  }

  static async updateUserPassword(userId, newPassword) {
    await this.delay(500);
    const user = this.users.find(u => u.id === userId);
    if (!user) throw new Error("User not found");
    user.password = newPassword;
    return true;
  }
}

// ==========================================
// 2.5 CSV PARSER & REVISION MODULE
// ==========================================

// --- Robust CSV Parser (Handles quotes and newlines) ---
function parseCSV(text) {
  let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
  for (l of text) {
    if ('"' === l) {
      if (s && l === p) row[i] += l;
      s = !s;
    } else if (',' === l && s) l = row[++i] = '';
    else if ('\n' === l && s) {
      if ('\r' === p) row[i] = row[i].slice(0, -1);
      row = ret[++r] = ['']; i = 0;
    } else row[i] += l;
    p = l;
  }
  return ret.filter(r => r.join('').trim() !== '');
}

const RevisionModule = ({ onExit }) => {
  const [data, setData] = useState(null);
  const [view, setView] = useState('upload'); // 'upload', 'eda', 'revision'
  const [error, setError] = useState('');

  // Revision State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState('All');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQs, setAnsweredQs] = useState(new Set());

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const rawText = event.target.result;
        const parsedData = parseCSV(rawText);
        
        const headers = parsedData[0].map(h => h.trim());
        const rows = parsedData.slice(1);
        
        const formattedData = rows.map(row => {
          let obj = {};
          headers.forEach((header, index) => {
            obj[header] = row[index] ? row[index].trim() : '';
          });
          return obj;
        }).filter(item => item.Question && item.Question.trim() !== '');

        setData(formattedData);
        setView('eda');
        setError('');
      } catch (err) {
        setError('Failed to parse CSV file. Ensure it is formatted correctly.');
      }
    };
    reader.readAsText(file);
  };

  const edaMetrics = useMemo(() => {
    if (!data) return null;
    const total = data.length;
    const severityCount = {};
    const tagsCount = {};

    data.forEach(item => {
      const sev = item['Severity Type'] || 'Unknown';
      severityCount[sev] = (severityCount[sev] || 0) + 1;

      let tags = item['Tags'] || 'Untagged';
      tags = tags.replace(/[\n\t]/g, '').trim(); 
      tagsCount[tags] = (tagsCount[tags] || 0) + 1;
    });
    return { total, severityCount, tagsCount };
  }, [data]);

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (selectedTag === 'All') return data;
    return data.filter(item => {
      const tag = (item['Tags'] || 'Untagged').replace(/[\n\t]/g, '').trim();
      return tag === selectedTag;
    });
  }, [data, selectedTag]);

  const displayQuestions = useMemo(() => {
    let prevCorrectIndex = -1;
    
    return filteredData.map(item => {
      const options = ['Option-1', 'Option-2', 'Option-3', 'Option-4']
        .map(k => item[k])
        .filter(Boolean);
        
      let shuffled, correctIdx, attempts = 0;
      do {
        shuffled = [...options];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        correctIdx = shuffled.indexOf(item.Answer);
        attempts++;
      } while (
        correctIdx !== -1 && 
        correctIdx === prevCorrectIndex && 
        attempts < 20 && 
        options.length > 1
      );
      
      if (correctIdx !== -1) prevCorrectIndex = correctIdx;
      return { ...item, displayOptions: shuffled };
    });
  }, [filteredData]);

  const currentQuestion = displayQuestions[currentIndex];

  const handleOptionSelect = (selectedOption) => {
    if (showAnswer) return;
    setShowAnswer(true);
    const isCorrect = selectedOption === currentQuestion.Answer;
    
    if (isCorrect && !answeredQs.has(currentIndex)) {
      setScore(prev => prev + 1);
    }
    
    const newAnswered = new Set(answeredQs);
    newAnswered.add(currentIndex);
    setAnsweredQs(newAnswered);
  };

  const nextQuestion = () => {
    if (currentIndex < displayQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  const resetRevision = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setScore(0);
    setAnsweredQs(new Set());
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] flex flex-col text-slate-200 font-sans pb-20">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 px-4 h-16 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={onExit} className="p-2 -ml-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <BookOpen className="text-blue-400" size={20} />
            <h1 className="text-lg font-bold text-white hidden sm:block">Custom Revision Hub</h1>
          </div>
        </div>
        <div className="flex space-x-2">
          {data && (
            <>
              <button 
                onClick={() => setView('eda')}
                className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-colors flex items-center space-x-2 ${view === 'eda' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'text-slate-400 hover:bg-slate-800'}`}
              >
                <BarChart2 size={16} />
                <span className="hidden sm:inline">Dashboard</span>
              </button>
              <button 
                onClick={() => { setView('revision'); resetRevision(); }}
                className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-colors flex items-center space-x-2 ${view === 'revision' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'text-slate-400 hover:bg-slate-800'}`}
              >
                <CheckCircle size={16} />
                <span className="hidden sm:inline">Study Module</span>
              </button>
              <button 
                onClick={() => { setData(null); setView('upload'); }}
                className="px-3 py-1.5 rounded-lg font-medium text-sm text-slate-400 hover:bg-slate-800 transition-colors ml-2 border border-slate-700"
              >
                New Upload
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-4 max-w-6xl w-full mx-auto mt-4">
        
        {view === 'upload' && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center animate-slide-up">
            <div className="max-w-xl w-full bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 p-12 text-center shadow-xl">
              <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <UploadCloud size={40} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Upload Question Bank</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Upload your structured CSV file to instantly generate an interactive study module and exploratory data dashboard.
              </p>
              
              <label className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25 text-white font-medium py-3 px-8 rounded-xl transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5">
                <UploadCloud size={18} />
                <span>Browse CSV File</span>
                <input type="file" accept=".csv" className="hidden" onChange={handleFileUpload} />
              </label>
              
              {error && <div className="mt-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center justify-center gap-2"><AlertCircle size={16}/>{error}</div>}
            </div>
          </div>
        )}

        {view === 'eda' && edaMetrics && (
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-white">Exploratory Data Analysis</h2>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-sm">
                <p className="text-sm text-slate-400 font-medium mb-1">Total Questions</p>
                <p className="text-3xl font-bold text-white">{edaMetrics.total}</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-sm">
                <p className="text-sm text-slate-400 font-medium mb-1">Total Tags/Topics</p>
                <p className="text-3xl font-bold text-white">{Object.keys(edaMetrics.tagsCount).length}</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-sm">
                <p className="text-sm text-slate-400 font-medium mb-3">Difficulty Levels</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(edaMetrics.severityCount).map(([sev, count]) => (
                    <span key={sev} className="px-2.5 py-1 bg-slate-800 text-xs font-medium rounded-lg text-slate-300 border border-slate-700">
                      {sev}: {count}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Tags Distribution */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-sm">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center"><Tag size={18} className="mr-2 text-blue-400"/> Topic Distribution</h3>
                <div className="space-y-5">
                  {Object.entries(edaMetrics.tagsCount).sort((a,b)=>b[1]-a[1]).map(([tag, count]) => (
                    <div key={tag}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-300 truncate pr-4">{tag}</span>
                        <span className="text-slate-500">{count} Qs</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${(count / edaMetrics.total) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ready to Study Card */}
              <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 p-8 rounded-2xl border border-indigo-500/20 shadow-lg text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <BookOpen size={48} className="mb-4 text-indigo-300" />
                <h3 className="text-3xl font-bold mb-3 relative z-10">Ready to Revise?</h3>
                <p className="text-indigo-200/80 mb-8 max-w-sm relative z-10">Your data is parsed and ready. Dive into the interactive study module to test your knowledge.</p>
                <button 
                  onClick={() => { setView('revision'); resetRevision(); }}
                  className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all relative z-10"
                >
                  Start Revision Session
                </button>
              </div>
            </div>
          </div>
        )}

        {view === 'revision' && currentQuestion && (
          <div className="flex flex-col lg:flex-row gap-6 lg:h-[calc(100vh-140px)] animate-slide-up">
            
            {/* Sidebar Filters */}
            <div className="w-full lg:w-72 bg-slate-900/50 rounded-2xl border border-slate-800 p-5 flex flex-col">
              <h3 className="font-semibold text-white mb-3">Filter by Topic</h3>
              <select 
                className="w-full p-2.5 border border-slate-700 rounded-xl bg-slate-950 text-slate-200 mb-6 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={selectedTag}
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                  resetRevision();
                }}
              >
                <option value="All">All Topics ({data.length})</option>
                {Object.entries(edaMetrics.tagsCount).map(([tag, count]) => (
                  <option key={tag} value={tag}>{tag} ({count})</option>
                ))}
              </select>

              <div className="mt-auto bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 text-center">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Your Score</p>
                <p className="text-4xl font-bold text-blue-400 mb-4">{score} <span className="text-xl text-slate-600">/ {displayQuestions.length}</span></p>
                <button 
                  onClick={resetRevision} 
                  className="flex items-center justify-center w-full py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors border border-slate-600"
                >
                  <RefreshCcw size={16} className="mr-2" /> Reset Progress
                </button>
              </div>
            </div>

            {/* Flashcard Area */}
            <div className="flex-1 flex flex-col h-full">
              <div className="bg-slate-900/50 flex-1 rounded-2xl border border-slate-800 p-6 md:p-10 flex flex-col relative overflow-y-auto custom-scrollbar">
                
                {/* Meta info */}
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-800">
                  <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-3 py-1.5 rounded-full font-medium">
                    {currentQuestion['Topic Type'] || 'General'}
                  </span>
                  <span className={`text-xs px-3 py-1.5 rounded-full font-medium border
                    ${currentQuestion['Severity Type'] === 'EASY' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      currentQuestion['Severity Type'] === 'MEDIUM' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                      'bg-red-500/10 text-red-400 border-red-500/20'}`}
                  >
                    {currentQuestion['Severity Type'] || 'N/A'}
                  </span>
                </div>

                {/* Question Text */}
                <h2 className="text-xl md:text-2xl font-medium text-white mb-10 leading-relaxed">
                  {currentQuestion.Question}
                </h2>

                {/* Options */}
                <div className="space-y-3 mt-auto">
                  {currentQuestion.displayOptions.map((optionText, idx) => {
                    const isCorrectAnswer = optionText === currentQuestion.Answer;
                    
                    let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ";
                    
                    if (!showAnswer) {
                      btnClass += "border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 text-slate-300 bg-slate-950/50";
                    } else {
                      if (isCorrectAnswer) {
                        btnClass += "border-emerald-500 bg-emerald-500/10 text-emerald-300 font-medium shadow-lg shadow-emerald-500/10";
                      } else {
                        btnClass += "border-slate-800 bg-slate-950/50 text-slate-500 opacity-50";
                      }
                    }

                    return (
                      <button 
                        key={idx} 
                        disabled={showAnswer}
                        onClick={() => handleOptionSelect(optionText)}
                        className={btnClass}
                      >
                        <span className="text-lg">{optionText}</span>
                        {showAnswer && isCorrectAnswer && <CheckCircle size={22} className="text-emerald-500 shrink-0 ml-4" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-lg">
                <button 
                  onClick={prevQuestion} 
                  disabled={currentIndex === 0}
                  className="flex items-center px-4 py-2.5 text-slate-300 hover:bg-slate-800 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  <ChevronLeft size={20} className="mr-1" /> Prev
                </button>
                
                <span className="text-sm font-medium text-slate-400">
                  {currentIndex + 1} / {displayQuestions.length}
                </span>

                <button 
                  onClick={nextQuestion}
                  disabled={currentIndex === displayQuestions.length - 1}
                  className="flex items-center px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-500 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Next <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// ==========================================
// 3. CONTEXTS (AUTH & TOAST)
// ==========================================

const AuthContext = createContext(null);
const ToastContext = createContext(null);

// ==========================================
// 4. COMPONENTS
// ==========================================

const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon, disabled = false, fullWidth = false }) => {
  const base = "inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5",
    secondary: "bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700",
    danger: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-slate-800",
    success: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20"
  };
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {Icon && <Icon className={`w-4 h-4 ${children ? 'mr-2' : ''}`} />}
      {children}
    </button>
  );
};

// --- AUTH SCREENS ---

const AuthScreen = () => {
  const { login, register, loading, error, clearError } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) login(formData.email, formData.password);
    else register(formData.name, formData.email, formData.password);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-blue-500/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0F1C] to-[#0A0F1C]"></div>
      
      <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 relative z-10 shadow-2xl animate-slide-up">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-slate-400 text-sm">Enterprise Exam Platform v10</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-400 animate-slide-up">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="text-sm">{error}</div>
            <button onClick={clearError} className="ml-auto hover:text-red-300"><X className="w-4 h-4" /></button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="password" required value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button type="submit" fullWidth disabled={loading} className="mt-6" icon={loading ? Loader2 : (isLogin ? LogIn : UserPlus)}>
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => { setIsLogin(!isLogin); clearError(); }} className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- EXAM ENGINE ---

const ExamEngine = ({ moduleId, onComplete, onExit }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const q = QUESTIONS_DB[moduleId] || [];
    setQuestions(q);
    const modDef = EXAM_MODULES.find(m => m.id === moduleId);
    setTimeLeft((modDef?.time || 30) * 60);
  }, [moduleId]);

  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  useEffect(() => {
    if (timeLeft === 0 && !isSubmitted && questions.length > 0) {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleSelect = (qId, optionIdx) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let earned = 0;
    let total = 0;
    questions.forEach(q => {
      total += q.marks;
      if (answers[q.id] === q.correct) earned += q.marks;
    });
    return Math.round((earned / total) * 100);
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) return <div className="p-8 text-center text-slate-400 flex items-center justify-center min-h-screen"><Loader2 className="w-8 h-8 animate-spin" /></div>;

  const currentQ = questions[currentIdx];
  const moduleInfo = EXAM_MODULES.find(m => m.id === moduleId);

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-slate-200 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onExit} className="p-2 -ml-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <moduleInfo.icon className={`w-5 h-5 ${moduleInfo.color}`} />
              <span className="font-semibold text-white hidden sm:block">{moduleInfo.title}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <CheckSquare className="w-4 h-4" />
              <span>{Object.keys(answers).length} / {questions.length} Answered</span>
            </div>
            {!isSubmitted && (
              <div className={`flex items-center gap-2 font-mono px-3 py-1.5 rounded-lg border ${timeLeft < 300 ? 'bg-red-500/10 border-red-500/30 text-red-400 animate-pulse' : 'bg-slate-800/50 border-slate-700 text-slate-300'}`}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
            )}
            {isSubmitted && (
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                Score: {score}%
              </div>
            )}
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-slate-800">
          <div 
            className={`h-full transition-all duration-300 ${isSubmitted ? 'bg-emerald-500' : 'bg-blue-500'}`} 
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        {!isSubmitted ? (
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Question {currentIdx + 1} of {questions.length}</span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-md">{currentQ.marks} {currentQ.marks > 1 ? 'Marks' : 'Mark'}</span>
            </div>
            
            <h2 className="text-2xl font-medium text-white mb-8 leading-relaxed">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = answers[currentQ.id] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(currentQ.id, idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-500/5' 
                        : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-600 hover:bg-slate-800'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-blue-500' : 'border-slate-600'}`}>
                      {isSelected && <div className="w-3 h-3 bg-blue-500 rounded-full" />}
                    </div>
                    <span className="text-lg">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center animate-slide-up">
              <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 border-4 ${score >= 70 ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' : 'bg-orange-500/20 border-orange-500/30 text-orange-400'}`}>
                {score >= 70 ? <Award className="w-10 h-10" /> : <AlertCircle className="w-10 h-10" />}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Exam Complete!</h2>
              <p className="text-slate-400 mb-6">You scored {score}% on this assessment.</p>
              <div className="flex items-center justify-center gap-4">
                <Button onClick={() => onComplete(score)} icon={ChevronLeft}>Return to Dashboard</Button>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-medium text-white px-2">Detailed Review</h3>
              {questions.map((q, i) => {
                const selected = answers[q.id];
                const isCorrect = selected === q.correct;
                const isUnanswered = selected === undefined;
                
                return (
                  <div key={q.id} className={`p-6 rounded-xl border ${isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : (isUnanswered ? 'bg-slate-800/50 border-slate-700' : 'bg-red-500/5 border-red-500/20')}`}>
                    <div className="flex gap-4">
                      <div className="shrink-0 mt-1">
                        {isCorrect ? <CheckCircle className="w-6 h-6 text-emerald-500" /> : (isUnanswered ? <Square className="w-6 h-6 text-slate-500" /> : <XCircle className="w-6 h-6 text-red-500" />)}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg text-white mb-4">{i + 1}. {q.question}</p>
                        <div className="grid gap-2">
                          {q.options.map((opt, idx) => {
                            const isSelectedOpt = selected === idx;
                            const isCorrectOpt = q.correct === idx;
                            let style = "bg-slate-900/50 text-slate-400 border-transparent";
                            if (isCorrectOpt) style = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 font-medium";
                            else if (isSelectedOpt && !isCorrectOpt) style = "bg-red-500/20 text-red-300 border-red-500/30";
                            
                            return (
                              <div key={idx} className={`px-4 py-2 rounded-lg border flex items-center justify-between ${style}`}>
                                <span>{opt}</span>
                                {isCorrectOpt && <CheckCircle className="w-4 h-4" />}
                                {isSelectedOpt && !isCorrectOpt && <XCircle className="w-4 h-4" />}
                              </div>
                            );
                          })}
                        </div>
                        {q.explanation && (
                          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3 text-blue-200">
                            <Brain className="w-5 h-5 shrink-0 text-blue-400" />
                            <p className="text-sm">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer controls */}
        {!isSubmitted && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-30">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <Button 
                variant="secondary" 
                onClick={() => setCurrentIdx(p => Math.max(0, p - 1))}
                disabled={currentIdx === 0}
                icon={ChevronLeft}
              >
                Previous
              </Button>
              
              {currentIdx === questions.length - 1 ? (
                <Button variant="success" onClick={handleSubmit} icon={CheckCircle}>
                  Submit Exam
                </Button>
              ) : (
                <Button 
                  onClick={() => setCurrentIdx(p => Math.min(questions.length - 1, p + 1))}
                  className="flex-row-reverse"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


// --- ADMIN PANEL ---

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const showToast = useContext(ToastContext);

  // Edit State
  const [editingUser, setEditingUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    const data = await MockBackendService.getAllUsers();
    setUsers(data.filter(u => u.role !== 'admin'));
    setLoading(false);
  };

  const handleDelete = async (userId) => {
    if (confirm("Are you sure you want to completely remove this user? This action cannot be undone.")) {
      try {
        await MockBackendService.deleteUser(userId);
        showToast("User deleted successfully", "success");
        loadUsers();
      } catch (e) {
        showToast("Failed to delete user", "error");
      }
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (!editingUser || !newPassword) return;
    try {
      await MockBackendService.updateUserPassword(editingUser.id, newPassword);
      showToast("Password updated successfully", "success");
      setEditingUser(null);
      setNewPassword('');
    } catch(e) {
      showToast("Update failed", "error");
    }
  };

  if (loading) return <div className="p-8 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-500" /></div>;

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">User Management</h2>
        <div className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300">Total Students: {users.length}</div>
      </div>

      {editingUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Edit User: {editingUser.name}</h3>
              <button onClick={() => setEditingUser(null)} className="text-slate-400 hover:text-white"><X className="w-5 h-5"/></button>
            </div>
            
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">New Password</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="text" required value={newPassword} onChange={e => setNewPassword(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-white focus:border-blue-500 outline-none"
                    placeholder="Enter new password"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="ghost" onClick={() => setEditingUser(null)} type="button">Cancel</Button>
                <Button variant="primary" icon={Save} type="submit">Save Changes</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/50 border-b border-slate-800 text-slate-400 text-sm">
                <th className="p-4 font-medium">Student Info</th>
                <th className="p-4 font-medium">Joined Date</th>
                <th className="p-4 font-medium">Modules Completed</th>
                <th className="p-4 font-medium">Avg Score</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {users.map(u => {
                const completed = Object.keys(u.scores).length;
                const avgScore = completed ? Math.round(Object.values(u.scores).reduce((a,b)=>a+b,0) / completed) : 0;
                
                return (
                  <tr key={u.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-semibold border border-blue-500/20">
                          {u.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-white">{u.name}</div>
                          <div className="text-sm text-slate-500">{u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-slate-400 text-sm">{u.joined}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-800 rounded-full h-2 max-w-[100px]">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(completed/EXAM_MODULES.length)*100}%` }}></div>
                        </div>
                        <span className="text-sm text-slate-400">{completed}/{EXAM_MODULES.length}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${avgScore >= 80 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : avgScore >= 60 ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                        {avgScore}%
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => setEditingUser(u)}
                          className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                          title="Edit Password"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(u.id)}
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete User"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-slate-500">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(null);
  
  // Navigation State
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'exam', 'admin', 'revision'
  const [activeModule, setActiveModule] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => setToast(null), 3000);
  };

  const login = async (email, password) => {
    setLoading(true); setError(null);
    try {
      const res = await MockBackendService.login(email, password);
      setUser(res.user);
      setCurrentView('dashboard');
    } catch (e) { setError(e.message); } 
    finally { setLoading(false); }
  };

  const register = async (name, email, password) => {
    setLoading(true); setError(null);
    try {
      const res = await MockBackendService.register(name, email, password);
      setUser(res.user);
      setCurrentView('dashboard');
    } catch (e) { setError(e.message); } 
    finally { setLoading(false); }
  };

  const logout = () => {
    setUser(null);
    setCurrentView('dashboard');
    setActiveModule(null);
  };

  const startExam = (moduleId) => {
    setActiveModule(moduleId);
    setCurrentView('exam');
  };

  const handleExamComplete = async (score) => {
    try {
      const updatedUser = await MockBackendService.updateScore(user.id, activeModule, score);
      setUser(updatedUser);
      setCurrentView('dashboard');
      setActiveModule(null);
      showToast(`Exam completed! Score: ${score}%`, 'success');
    } catch(e) {
      showToast("Error saving score", "error");
    }
  };

  // Auth Guard
  if (!user) {
    return (
      <AuthContext.Provider value={{ login, register, loading, error, clearError: () => setError(null) }}>
        <AuthScreen />
      </AuthContext.Provider>
    );
  }

  return (
    <ToastContext.Provider value={showToast}>
      <style>{`
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
      `}</style>
      
      <div className="min-h-screen bg-[#0A0F1C] text-slate-200 font-sans custom-scrollbar selection:bg-blue-500/30">
        
        {/* Navbar */}
        {currentView !== 'exam' && (
          <nav className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-lg text-white tracking-tight hidden sm:block">Enterprise Exam Platform</span>
                    <span className="text-xs text-blue-400 font-medium hidden sm:block">v10.2</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {user.role === 'admin' && (
                    <button 
                      onClick={() => setCurrentView(currentView === 'admin' ? 'dashboard' : 'admin')}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${currentView === 'admin' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                    >
                      <Shield className="w-4 h-4" />
                      Admin Panel
                    </button>
                  )}
                  
                  <div className="h-8 w-px bg-slate-800 mx-2 hidden sm:block"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <div className="text-sm font-medium text-white">{user.name}</div>
                      <div className="text-xs text-slate-400 capitalize">{user.role}</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-medium">
                      {user.name.charAt(0)}
                    </div>
                    <button onClick={logout} className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" title="Sign Out">
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}

        {/* Main Content Area */}
        <main className={currentView !== 'exam' ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" : ""}>
          {currentView === 'dashboard' && (
            <div className="animate-slide-up space-y-8">
              
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10 max-w-2xl">
                  <h1 className="text-3xl font-bold text-white mb-3">Welcome back, {user.name.split(' ')[0]}! 👋</h1>
                  <p className="text-blue-200/80 text-lg leading-relaxed mb-6">
                    Continue your learning journey. You have completed {Object.keys(user.scores).length} out of {EXAM_MODULES.length} modules. New Agentic Workflow module is now live!
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl px-5 py-3 flex items-center gap-3">
                      <Award className="w-6 h-6 text-amber-400" />
                      <div>
                        <div className="text-sm text-slate-400">Average Score</div>
                        <div className="text-lg font-bold text-white">
                          {Object.keys(user.scores).length > 0 
                            ? Math.round(Object.values(user.scores).reduce((a,b)=>a+b,0)/Object.keys(user.scores).length) + '%'
                            : 'N/A'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revision Hub Banner */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-5 relative z-10">
                   <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center shrink-0">
                     <BookOpen className="w-7 h-7" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-1">Custom Revision Hub</h3>
                     <p className="text-slate-400 text-sm">Upload any Question Bank (CSV) to generate an interactive study module and metrics dashboard.</p>
                   </div>
                </div>
                <Button onClick={() => setCurrentView('revision')} icon={UploadCloud} className="shrink-0 w-full md:w-auto relative z-10">
                  Open Revision Hub
                </Button>
              </div>

              {/* Modules Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-white">Available Certifications</h2>
                  <div className="flex gap-2">
                    <button className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition"><Filter className="w-4 h-4" /></button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {EXAM_MODULES.map((mod, idx) => {
                    const score = user.scores[mod.id];
                    const isCompleted = score !== undefined;
                    
                    return (
                      <div key={mod.id} className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full" style={{ animationDelay: `${idx * 50}ms` }}>
                        
                        {mod.id === 'genai_llm' && (
                          <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-400 text-xs font-bold px-2.5 py-1 rounded-full border border-purple-500/30">
                            NEW
                          </div>
                        )}
                        
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${mod.bg} ${mod.color}`}>
                          <mod.icon className="w-7 h-7" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                        <p className="text-slate-400 text-sm mb-6 flex-grow">{mod.description}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center text-xs text-slate-500 gap-1.5"><ListFilter className="w-3.5 h-3.5"/> {mod.total} Questions</div>
                            <div className="flex items-center text-xs text-slate-500 gap-1.5"><Clock className="w-3.5 h-3.5"/> {mod.time} Mins</div>
                          </div>
                          
                          {isCompleted ? (
                            <div className="text-right">
                              <div className="text-xs text-emerald-400/80 mb-1 font-medium">Completed</div>
                              <div className={`text-xl font-bold ${score >= 80 ? 'text-emerald-400' : 'text-blue-400'}`}>{score}%</div>
                            </div>
                          ) : (
                            <Button variant="secondary" onClick={() => startExam(mod.id)} className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500">
                              Start <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </Button>
                          )}
                        </div>
                        
                        {/* Progress Bar Bottom */}
                        {isCompleted && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
                            <div className={`h-full ${score >= 80 ? 'bg-emerald-500' : 'bg-blue-500'}`} style={{ width: `${score}%` }}></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {currentView === 'admin' && user.role === 'admin' && <AdminPanel />}
          
          {currentView === 'exam' && activeModule && (
            <ExamEngine 
              moduleId={activeModule} 
              onComplete={handleExamComplete} 
              onExit={() => { setCurrentView('dashboard'); setActiveModule(null); }} 
            />
          )}

          {currentView === 'revision' && (
            <RevisionModule onExit={() => setCurrentView('dashboard')} />
          )}

        </main>

        {/* Global Toast */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
            <div className={`px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 border ${
              toast.type === 'success' ? 'bg-emerald-900/90 border-emerald-500/50 text-emerald-200' : 
              toast.type === 'error' ? 'bg-red-900/90 border-red-500/50 text-red-200' : 
              'bg-slate-800 border-slate-700 text-slate-200'
            }`}>
              {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
              <span className="font-medium">{toast.message}</span>
            </div>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}