export default function getListStudentIds(arrStudents) {
  if (arrStudents instanceof Array) {
    return arrStudents.map((object) => object.id);
  }

  return [];
}
