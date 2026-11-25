// Week 10: JavaScript Fundamentals
// Author: Jean-ugine

const student = {
  name: "Jean-ugine",
  course: "JavaScript Fundamentals",
  scores: [80, 75, 90],
};

function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

function getGrade(average) {
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";
  return "F";
}

const average = calculateAverage(student.scores);

console.log("Student:", student.name);
console.log("Scores:", student.scores);
console.log("Average:", average.toFixed(2));
console.log("Grade:", getGrade(average));