export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, n) => sum + n.id, 0);
}
