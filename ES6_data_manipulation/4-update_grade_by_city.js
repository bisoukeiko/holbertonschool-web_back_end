export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const listStudentByCity = listStudents.filter((object) => object.location === city);

  const listStudentGradeByCity = listStudentByCity.map((student) => {
    const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: gradeInfo ? gradeInfo.grade : 'N/A',
    };
  });

  return listStudentGradeByCity;
}
