// 1.
// let a = 678
// let first = Math.floor(a / 100) // 6
// let second = Math.floor((a % 100) / 10)
// let last = a % 10
// let result = (first + last) - second
// console.log("Yig'indi " + second + "dan " + result + "da katta");


// 2.
// let num = 10
// let result = 0
// for(let i = 1; i <= num; i++) {
//     if(num % i == 0) {
//         result = result += i
//     }
// }
// console.log(result);


// 3.
// let arr = [true, "Salom", "Salom", 23, undefined,]
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] == "string") {
//         arr[i] = null
//     }
// }
// console.log(arr);


// 4.
// let arr = [1, 2134, 345, 345, 12]
// console.log(Math.max(...arr));


// 5.
// let arr = [1, 2134, 345, 345, 12]
// let total = 0
// for(let i of arr) {
//     total = total += i
// }
// console.log(total);


// 7.
// let arr = [13,72,339,425,53,63,73,88,12,23,45,56,]
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         arr[i] = 0
//     }
// }
// console.log(arr);  


// 8.
// let num1 = prompt("Birinchi raqamni kiriting") * 1;
// let num2 = prompt("Ikkinchi raqamni kiriting") * 1;
// let operator = prompt("Actionni kiriting");
// let result;
// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         alert(result);
//         break;
//     case "-":
//         result = num1 - num2;
//         alert(result);
//         break;
//     case "*":
//         result = num1 * num2;
//         alert(result);
//         break;
//     case "/":
//         if (num2 !== 0) {
//             result = num1 / num2;
//             alert(result);
//         } else {
//             alert("0 ga bo'lish mumkin emas");
//         }
//         break;
//     default:
//             alert("shulardan kiriting: +, -, *, or /.");
//}


// 9.
// let name = prompt("Ismni kiriting")
// let arr = ["Nuriddin", "Shahboz", "Adham", "Shuhrat", "Tursunboy", "Matmo'min"]
// for(let i = 0; i < arr.length; i++) {
//     if(name == arr[i]) {
//         alert("Ismingiz bor " + arr[i])
//     }
// }


// 10.
// let name = prompt("Ism kiriting")
// const userList = [
//     {
//         id: 1,
//         age: 20,
//         name: "Nuriddin",
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         id: 2,
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name: "Izzatbek",
//         gmail: "nuriddin@gmail.com"
//     }
// ]
// for(let i = 0; i < userList.length; i++) {
//     if(name == userList[i].name) {
//         console.log(userList[i]);
//     }
// }


// 11.
// const userList = [
//     {
//         id: 1,
//         age: 20,
//         name: "Nuriddin",
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         id: 2,
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name: "Izzatbek",
//         gmail: "nuriddin@gmail.com"
//     }
// ]
// let maxAge = userList[0].age

// for(let i = 0; i < userList.length; i++) {
//    if(userList[i].age > maxAge) {
//     maxAge = userList[i].age
//    }
// }
// console.log(maxAge);


// 12.
// const userList = [
//     {
//         id: 1,
//         age: 20,
//         name: "Nuriddin",
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         id: 2,
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name: "Izzatbek",
//         gmail: "nuriddin@gmail.com"
//     }
// ]
// let result = (userList[0].age + userList[1].age + userList[2].age) / userList.length
// console.log(result);


// 13.
// let arr = [23, 54, 21, 76, 23, 87];
// let originalLength = arr.length;
// for (let i = 0; i < originalLength; i++) {
//     let total = arr[0] + arr[arr.length - 1];
//     if (total % 2 == 0) {
//         arr.push(total);
//     } else {
//         arr.unshift(total);
//     }
// }

// console.log(arr);


//-----------------------------------------HOMEWORK---------------------------------------------------------------------\\
// let usersList = [
//     { id: 1, name: "Qodir", age: 22, hobby: "Football" },
//     { id: 2, name: "Adham", age: 21, hobby: "Volleybol" },
//     { id: 3, name: "Shokir", age: 25, hobby: "Basketbol" },
//     { id: 4, name: "Ismoil", age: 22, hobby: "Football" }
// ];

// function findSameUsers(arr) {
//     let list = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i].age === arr[j].age && arr[i].hobby === arr[j].hobby) {
//                 // Push only unique matches that haven't been added already
//                 if (!list.includes(arr[i])) {
//                     list.push(arr[i]);
//                 }
//                 if (!list.includes(arr[j])) {
//                     list.push(arr[j]);
//                 }
//             }
//         }
//     }

//     console.log(list);
// }

// findSameUsers(usersList);



// 2.
// let list = [3,4,3,2,3,4,5,6,3,5,6,7,8,9,5,4,3]
// function fn(arr){
//     let newArr = []
//     for(let num of arr){
//         if(!newArr.includes(num)){
//             newArr.push(num)
//         }
//     }
//     console.log(newArr);
// }
// fn(list)


// 3.
// let arr = [22, 3, 41, 4, 4234, 23, 25, 2, 52, 52, 52, 5235235, 2, 2, 5325, 2523, 5];
// let maxNum = arr[0];
// for (let i = 1; i < arr.length; i++) { 
//     if (maxNum < arr[i]) {
//         maxNum = arr[i]; 
//     }
// }
// arr.unshift(maxNum); 
// console.log(arr);


// 4.
// let size = prompt("Ism sizeni kiriting:") - 0
// let usersName = []

// for(let i = 1; i <= size;i++){
//     let newName = prompt(i + ". ism kiriting")
//     usersName.push(newName)
// }

// let findName = prompt("Ism qidiring:")
// let count = 0
// for(let i = 0; i < usersName.length;i++){
//     if(usersName[i] == findName){
//         count++
//     }
// }
// if(count > 0){
//     console.log(findName)
// }
// else{
//     usersName.push(findName)
//     console.log(usersName);
// }


// 5.
// function countDown() {
//     let number = parseInt(prompt("Enter a number:"));
//     for (let i = number; i >= 0; i--) {
//         console.log(i);
//     }
// }
// countDown();


// ---------------------------------------------------------------------------------------------------------------

// 1.
// let number = prompt("3 xonali son  kiriting?")
// function cangeNumber(num){
//     const result = num.split("").reverse().join("")
//     console.log(result);

// }
// cangeNumber(number)
// function cangeNumber(num){
//     let a = Number(num) % 10 // 3
//     let b = Math.floor((Number(num) % 100) / 10) // 2
//     let c = Math.floor(Number(num) / 100) // 1
//     console.log("" + a + b + c);
// }
// cangeNumber(number)
// function countDown(number) {
//     console.log(number);
//     const newNumber = number - 1;
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }
// countDown(4);


// 5.
// let obj1 = {id:1}
// let obj2 = {name:"salom"}
// let obj3 = {age:15}
// let resObj = {...obj1, ...obj2, ...obj3}
// console.log(resObj);


// 6.
// let xodimlar = {
//     a:2500,
//     b:3600,
//     c:1800
// }
// function fn(obj){
//     let sum = 0
//     for(let user in obj){
//         sum = sum + obj[user]
//     }
//     console.log(sum);
// }
// fn(xodimlar)
