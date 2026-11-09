const gradeTracker = {
  students: [],

  // Add a new student
  addStudent(name, grades) {
    this.students.push({ name: name, grades: grades });
  },

  // Get a student by name
  getStudent(name) {
    const student = this.students.find((s) => s.name === name);
    return student || null;
  },

  // Calculate a student's average
  getStudentAverage(name) {
    const student = this.getStudent(name);
    if (student === null) {
      return null;
    }
    const scores = Object.values(student.grades);
    if (scores.length === 0) return 0;

    const total = scores.reduce((sum, score) => sum + score, 0);
    return Math.round((total / scores.length) * 100) / 100;
  },

  // Calculate the average for a subject across the class
  getSubjectAverage(subject) {
    const grades = this.students
      .map((student) => student.grades[subject])
      .filter((grade) => typeof grade === "number");

    if (grades.length === 0) return null;

    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return Math.round((total / grades.length) * 100) / 100;
  },

  // Find the student with the highest overall average
  getTopStudent() {
    if (this.students.length === 0) return null;

    return this.students.reduce((top, student) => {
      return this.getStudentAverage(student.name) >
        this.getStudentAverage(top.name)
        ? student
        : top;
    });
  },

  // Find students whose average is below 70
  getStrugglingStudents() {
    return this.students.filter(
      (student) => this.getStudentAverage(student.name) < 70,
    );
  },
  // converting the number score to a letter grade
  getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  },

  // Create a formatted report card
  generateReportCard(name) {
    const student = this.getStudent(name);

    if (!student) return `No student found with the name ${name}.`;

    const gradeLines = Object.entries(student.grades)
      .map(
        ([subject, score]) =>
          `${subject}: ${score} (${this.getLetterGrade(score)})`,
      )
      .join("\n");

    const average = this.getStudentAverage(name);

    return [
      `Report Card: ${student.name}`,
      gradeLines,
      `Average: ${average.toFixed(2)} (${this.getLetterGrade(average)})`,
    ].join("\n");
  },
};

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudent("Alice")); // the Alice object
console.log(gradeTracker.getStudent("Zed")); // null
console.log(gradeTracker.getStudentAverage("Alice")); // 91.67
console.log(gradeTracker.getStudentAverage("Bob")); // 78.33
console.log(gradeTracker.getStudentAverage("Charlie")); // 61
console.log(gradeTracker.getStudentAverage("Zed")); // null
console.log(gradeTracker.getLetterGrade(95)); // A
console.log(gradeTracker.getLetterGrade(85)); // B
console.log(gradeTracker.getLetterGrade(72)); // C
console.log(gradeTracker.getLetterGrade(65)); // D
console.log(gradeTracker.getLetterGrade(40)); // F
console.log(
  gradeTracker.getStrugglingStudents().map((student) => student.name),
); // ["Charlie"]
console.log(gradeTracker.generateReportCard("Alice"));
console.log(gradeTracker.getSubjectAverage("math")); // 75.67
console.log(gradeTracker.getSubjectAverage("art")); // null (no one has this subject)
console.log(gradeTracker.getTopStudent().name); // Alice
