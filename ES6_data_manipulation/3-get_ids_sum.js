export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((sum, object) => sum + object.id, 0);
}
