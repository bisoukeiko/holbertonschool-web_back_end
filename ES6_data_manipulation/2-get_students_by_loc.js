export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((object) => object.location === city);
}
