export default function getListStudentIds(listStudents) {
  if (Array.isArray(listStudents)) {
    return listStudents.map((student) => student.id);
  }
  return [];
}
