export default function getListStudentIds(arrStudents) {
  let newArr = [];
  if (typeof arrStudents === 'object') {
    newArr = arrStudents.map((object) => object.id);
  }

  return newArr;
}
