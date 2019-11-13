const beginner = {
  id: 1,
  title: "Python Introduction: Absolute Beginner",
  color: "blue",
  duration: "3 Hours per Week, 6 weeks",
  description: "For the first six-weeks, ​Código Ecuador uses Microsoft's online introduction to Python course for absolute beginners along with additional coding exercises. Students will spend three classroom hours per week with an instructor learning the following:",
  bulletPoints: ["Using Python in Jupyter Notebooks", "Gathering input and manipulating input/output", "Building Reusable functions with parameters and return values", "Decisions and repetition using conditional statements and loops" ]
}

const fundamentals = {
  id: 2,
  color: "yellow",
  title: "Python Fundamentals",
  duration: "3 Hours per Week, 6 weeks",
  description: "Students spend the second six-week block building upon those basic computer science commands in Microsoft's Python Fundamentals course. Código Ecuador immerses students further into the course concepts with exciting exercises to get them thinking about real-life applications for their new skills.",
  bulletPoints: ["Python 3 fundamentals", "Strings and List manipulation", "Methods to Iterate through strings, lists and ranges", "Creating, reading and writing to files" ]
}

const intermediate = {
  id: 3,
  color: "blue",
  title: "Intermediate Python",
  duration: "3 Hours per Week, 6 weeks",
  description: "In the next part of the course, students will prepare to create full-length programs with lessons on:",
  bulletPoints: ["Handling Exceptions in Python", "Numbers, Algorithms, and More Functions", "Regular Expressions", "Object-Oriented Programming​" ]
}

const databases = {
  id: 4,
  color: "yellow",
  title: "Python Advanced: Databases and Visualization",
  duration: "3 Hours per Week, 6 weeks",
  description: "Students will learn how to run queries in SQL, manipulate data frames using Python Pandas, and create stunning visualizations to model relationships between variables using Matplotlib commands.",
  bulletPoints: ["Introduction to SQL ", "SQLite", "Pandas", "Matplotlib Visualization" ]
}

const scraping = {
  id: 5,
  color: "blue",
  title: "Python Advanced: Web Scraping",
  duration: "3 Hours per Week, 6 weeks",
  description: "Students will learn how to run queries in SQL, manipulate data frames using Python Pandas, and create stunning visualizations to model relationships between variables using Matplotlib commands.",
  bulletPoints: ["HTML, CSS, Javascript basics", "BeautifulSoup", "JSON Files", "Developer Tools" ]
}



export const pythonClasses = [beginner, fundamentals, intermediate, databases, scraping ]
