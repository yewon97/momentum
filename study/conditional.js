// 유저 나이 묻기
// const age = prompt("How old are you?");

// console.log(age, parseInt(age)); 
// console.log(typeof(age)); 이렇게 쓸 수도 있음

// if(isNaN(age)){
//   console.log("Please write a number");
// } else {
//   console.log("Thank you for writing your age."); 
// }

// const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young!"); 
} else if (age >= 18 && age <=50) {
  console.log("You can drink"); 
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) { // 적는 순서 신경쓰기
  console.log("Wow, you are wise!");
} else if (age > 80) {
  console.log("You can do whatever you want");
} else {
  console.log("You can't drink"); 
}