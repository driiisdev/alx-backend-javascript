export default function getStudentIdsSum(ListStudents) {
  if (Array.isArray(ListStudents)) {
    return ListStudents.reduce((total, student) => total + student.id, 0);
  }
  return 0;
}
