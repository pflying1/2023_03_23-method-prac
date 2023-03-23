const studentList = ["파 반개","양파 1개","마늘 1쪽","고추장 1스푼","간장 1스푼"];

// .filter() 메서드 예제
const kimStudents = studentList.filter(function(student) {
  return student.startsWith("양파");
});
console.log(kimStudents);
// .filter() 메서드 + 나머지 값을 가져오는 % 연산
const oddStudents = studentList.filter(function(student, index){
  return index % 2 === 0;
});
console.log(oddStudents);
// .filter() 메서드 + 문자열 길이 비교
const threeLetterStudents = studentList.filter(function(student) {
  return student.length === 5;
});
console.log(threeLetterStudents);
// .map() 메서드 예제 : 매핑한다고 하여 상당히 자주 사용하는 메서드
const studentsWithSuffix = studentList.map(function(student){
  return student + " 입니다.";
});
console.log(studentsWithSuffix);
// .map() 메서드 예제 : 대문자로 변환 
const upperCaseStudents = studentList.map(function(student){
  return student.toUpperCase();
});
console.log(upperCaseStudents)