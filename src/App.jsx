import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Play, CheckCircle, XCircle, AlertCircle, 
  ChevronRight, ChevronLeft, Clock, HelpCircle, 
  LayoutGrid, Award, Terminal, 
  Cpu, Database, Code, LogOut, BarChart2,
  Loader2, User, CheckSquare, Square,
  ShieldAlert, Eye, Lock, History, Brain, Globe, Sigma, Network, MessageSquare, Mail, UserPlus, LogIn, ArrowLeft, Filter, Layers, ListFilter
} from 'lucide-react';

/**
 * 🚀 ENTERPRISE EXAM PLATFORM v10.0 - "Precision & Review"
 * Updates:
 * - Topic Selection Module: Select specific topics before starting
 * - Enhanced History: Persisted session tracking
 * - Detailed Answer Review: Compare user answers vs correct answers
 */

// ==========================================
// 1. DATA LAYER (FULL DATABASE)
// ==========================================

const QUESTIONS_DB = {
  
  // ==================================================================================
  // 1. PYTHON (Fundamentals to Advanced Automation)
  // ==================================================================================
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
  ]
};

// Metadata expanded with gradients and icons
const SUBJECTS_METADATA = {
  python: { title: "Python Master", icon: "Terminal", color: "from-blue-500 to-cyan-400", bg: "bg-blue-900/20" },
  cpp: { title: "C++ Architect", icon: "Cpu", color: "from-indigo-500 to-purple-400", bg: "bg-indigo-900/20" },
  ds: { title: "Data Science", icon: "Database", color: "from-emerald-500 to-teal-400", bg: "bg-emerald-900/20" },
  ml: { title: "Machine Learning", icon: "Brain", color: "from-orange-500 to-amber-400", bg: "bg-orange-900/20" },
  dl: { title: "Deep Learning", icon: "Network", color: "from-rose-500 to-pink-400", bg: "bg-rose-900/20" },
  nlp: { title: "NLP Specialist", icon: "MessageSquare", color: "from-violet-500 to-fuchsia-400", bg: "bg-violet-900/20" },
  math: { title: "Mathematics", icon: "Sigma", color: "from-slate-500 to-gray-400", bg: "bg-slate-900/20" }
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
    
    // Filter questions based on selected topics
    // If "ALL" is in the list, or no topics selected (fallback), use all questions
    let pool = (selectedTopics.includes("ALL") || selectedTopics.length === 0)
      ? allQuestions 
      : allQuestions.filter(q => selectedTopics.includes(q.topic));
    
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
    const result = { 
        id: sessionId,
        sessionId, 
        score, 
        maxMarks, 
        percentage: maxMarks > 0 ? (score/maxMarks)*100 : 0, 
        passed: maxMarks > 0 ? (score/maxMarks) >= 0.65 : false, 
        subjectId, 
        date: new Date().toISOString() 
    };
    if (!USER_HISTORY[userId]) USER_HISTORY[userId] = [];
    USER_HISTORY[userId].unshift(result); // Add new result to the beginning
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

// --- Topic Selection View ---
const TopicSelectionView = ({ subject, onStart, onBack }) => {
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Dynamically derive unique topics from the Question Database for this subject
    const availableTopics = React.useMemo(() => {
        const questions = QUESTIONS_DB[subject] || [];
        const topics = [...new Set(questions.map(q => q.topic))].sort();
        return topics;
    }, [subject]);

    // Handle "Select All"
    const toggleAll = () => {
        if (selectedTopics.length === availableTopics.length) {
            setSelectedTopics([]);
        } else {
            setSelectedTopics(availableTopics);
        }
    };

    const toggleTopic = (topic) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(prev => prev.filter(t => t !== topic));
        } else {
            setSelectedTopics(prev => [...prev, topic]);
        }
    };

    const filteredTopics = availableTopics.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleStart = () => {
        onStart(selectedTopics.length === 0 ? ["ALL"] : selectedTopics);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-white p-6 relative">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <nav className="flex items-center gap-4 mb-8 relative z-10 max-w-4xl mx-auto">
                <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={24} />
                </button>
                <div>
                    <h1 className="text-2xl font-bold">{SUBJECTS_METADATA[subject]?.title || subject.toUpperCase()}</h1>
                    <p className="text-slate-400 text-sm">Select topics to customize your exam</p>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto relative z-10">
                <GlassCard className="p-6 md:p-8">
                    {/* Controls */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
                        <div className="relative w-full md:w-64">
                            <ListFilter className="absolute left-3 top-3 text-slate-500" size={18} />
                            <input 
                                type="text" 
                                placeholder="Filter topics..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <button onClick={toggleAll} className="flex-1 md:flex-none px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
                                {selectedTopics.length === availableTopics.length ? "Deselect All" : "Select All"}
                            </button>
                            <span className="flex items-center text-sm text-slate-400 px-2">
                                {selectedTopics.length} selected
                            </span>
                        </div>
                    </div>

                    {/* Topic Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto custom-scrollbar pr-2 mb-8">
                        {filteredTopics.map(topic => {
                            const isSelected = selectedTopics.includes(topic);
                            return (
                                <button 
                                    key={topic}
                                    onClick={() => toggleTopic(topic)}
                                    className={`flex items-center justify-between p-3 rounded-lg border transition-all text-left ${isSelected ? 'bg-blue-600/20 border-blue-500/50 text-white' : 'bg-slate-800/30 border-white/5 text-slate-400 hover:bg-slate-800/60'}`}
                                >
                                    <span className="font-medium text-sm truncate pr-2">{topic}</span>
                                    {isSelected ? <CheckSquare size={18} className="text-blue-400 shrink-0" /> : <Square size={18} className="text-slate-600 shrink-0" />}
                                </button>
                            )
                        })}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                        <span className="text-sm text-slate-500">
                            {selectedTopics.length === 0 ? "Default: All topics included" : `${selectedTopics.length} topics included`}
                        </span>
                        <NeonButton onClick={handleStart} className="px-8">
                            Start Exam <ChevronRight size={18} />
                        </NeonButton>
                    </div>
                </GlassCard>
            </main>
        </div>
    );
};

const DashboardView = ({ onSelectSubject, user, logout, onViewHistory }) => {
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
          <button onClick={onViewHistory} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors text-sm">
            <History size={16} className="text-blue-400" />
            <span className="hidden sm:inline text-slate-300">History</span>
          </button>
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
        <p className="text-slate-400 mb-8 text-lg">Select a domain to customize your assessment.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SUBJECTS_METADATA).map(([key, sub]) => {
            // Dynamic Icon Component
            const IconComp = { Terminal, Cpu, Database, Brain, Network: LayoutGrid, MessageSquare: Code, Sigma, Globe }[sub.icon] || Code;
            // Get unique question count
            const qCount = QUESTIONS_DB[key]?.length || 0;
            
            return (
              <GlassCard key={key} className="p-6 group hover:-translate-y-2 transition-transform duration-300 cursor-pointer border-t-4 border-t-transparent hover:border-t-white/30">
                <div onClick={() => onSelectSubject(key)}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sub.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComp className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                    <p className="text-sm text-slate-400 mb-6">{qCount} Questions Bank</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-slate-800" />)}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                        Select <ChevronRight size={14} />
                      </div>
                    </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </main>
    </div>
  );
};

// --- History View ---
const HistoryView = ({ history, onBack }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <nav className="flex items-center gap-4 mb-10 relative z-10 max-w-4xl mx-auto">
        <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Exam History</h1>
      </nav>

      <main className="max-w-4xl mx-auto relative z-10 space-y-4">
        {history.length === 0 ? (
          <GlassCard className="p-10 text-center">
            <History className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-300">No Exams Taken Yet</h3>
            <p className="text-slate-500 mt-2">Complete a certification track to see your history.</p>
          </GlassCard>
        ) : (
          history.map((item) => (
            <GlassCard key={item.id} className="p-6 flex items-center justify-between group hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${item.passed ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {item.percentage.toFixed(0)}%
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{SUBJECTS_METADATA[item.subjectId]?.title || item.subjectId.toUpperCase()}</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                    <span className="flex items-center gap-1"><Clock size={12} /> {new Date(item.date).toLocaleDateString()} {new Date(item.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    <span>•</span>
                    <span className={item.passed ? "text-green-400" : "text-red-400"}>{item.passed ? "Passed" : "Failed"}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{item.score}<span className="text-sm text-slate-500">/{item.maxMarks}</span></div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Score</div>
              </div>
            </GlassCard>
          ))
        )}
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
          <p className="text-slate-400">Could not load questions for this criteria.</p>
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
    <div className="min-h-screen bg-[#0f172a] p-6 flex flex-col items-center relative overflow-hidden overflow-y-auto">
       {/* Fireworks / Glow effect based on result */}
       <div className={`fixed inset-0 pointer-events-none opacity-20 ${results.passed ? 'bg-green-500/20' : 'bg-red-500/20'}`} />

       <div className="w-full max-w-4xl relative z-10 space-y-6 pb-10">
         <GlassCard className="p-10 text-center">
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

         <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white px-2">Detailed Review</h2>
            {questions.map((q, idx) => {
               const userAnswer = answers[idx];
               const isCorrect = userAnswer === q.correct;
               const isSkipped = userAnswer === undefined;

               return (
                 <GlassCard key={idx} className={`p-6 border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                    <div className="flex items-start justify-between mb-4">
                       <span className="text-slate-400 font-mono text-sm">Question {idx + 1} • <span className="text-slate-500">{q.topic}</span></span>
                       <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'}
                       </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4"><CodeBlock text={q.question} /></h3>
                    
                    <div className="space-y-2 mb-4">
                       {/* Show User Answer if incorrect */}
                       {!isCorrect && !isSkipped && (
                          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                             <div className="text-xs text-red-400 uppercase font-bold mb-1">Your Answer</div>
                             <div className="text-red-200">{q.options[userAnswer]}</div>
                          </div>
                       )}
                       
                       {/* Always Show Correct Answer */}
                       <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                          <div className="text-xs text-green-400 uppercase font-bold mb-1">Correct Answer</div>
                          <div className="text-green-200">{q.options[q.correct]}</div>
                       </div>
                    </div>

                    <div className="text-sm text-slate-400 bg-slate-800/50 p-3 rounded-lg">
                       <span className="font-bold text-slate-300">Explanation:</span> {q.explanation}
                    </div>
                 </GlassCard>
               );
            })}
         </div>
       </div>
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
  const [history, setHistory] = useState([]);

  // Simple Router Logic
  useEffect(() => {
    if(user && view === 'auth') setView('dash');
    if(!user) setView('auth');
  }, [user]);

  const fetchHistory = async () => {
    const data = await MockBackendService.getHistory(user.id);
    setHistory(data);
    setView('history');
  };

  const handleSubjectSelect = (subjectId) => {
      setActiveSubject(subjectId);
      setView('topic-select');
  };

  const startSession = async (selectedTopics) => {
     const sess = await MockBackendService.startExamSession(activeSubject, selectedTopics);
     setSession(sess);
     setView('exam');
  };

  const finishExam = (res, q, a) => {
    setResults(res);
    setExamData({q, a});
    setView('results');
  };

  if (!user) return <AuthView />;
  if (view === 'history') return <HistoryView history={history} onBack={() => setView('dash')} />;
  if (view === 'topic-select') return <TopicSelectionView subject={activeSubject} onStart={startSession} onBack={() => setView('dash')} />;
  if (view === 'exam' && session) return <ExamInterface session={session} user={user} onFinish={finishExam} />;
  if (view === 'results') return <ResultsView results={results} questions={examData.q} answers={examData.a} onHome={() => setView('dash')} />;
  
  return <DashboardView user={user} logout={logout} onViewHistory={fetchHistory} onSelectSubject={handleSubjectSelect} />;
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
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 3px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.4); }
        `}</style>
        <MainController />
      </ToastContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;