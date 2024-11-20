export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const listStudentByCity = listStudents.filter((object) => object.location === city);

  const listStudentGradeByCity = listStudentByCity.map((student) => {
    student.grade = 'N/A';
    for (const gradeInfo of newGrades) {
      if (student.id === gradeInfo.studentId) {
        student.grade = gradeInfo.grade;
      }
    }

    return student;
  });

  return listStudentGradeByCity;
}
