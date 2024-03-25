export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, n) => sum + n, 0);
}
