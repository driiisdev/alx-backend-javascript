export default function getStudentsByLocation(ListStudents, city) {
  if (Array.isArray(ListStudents) && (typeof city === 'string')) {
    return ListStudents.filter((student) => student.location === city);
  }
  return [];
}
