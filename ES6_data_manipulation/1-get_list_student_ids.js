export default function getListStudentIds(arrStudents) {
  if (typeof arrStudents === 'object') {
    return arrStudents.map((object) => object.id);
  }

  return [];
}
