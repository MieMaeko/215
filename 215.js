//1

// function func(mass){
//     let sum = 0;
//     for (let elem of mass){
//        sum+=elem
      
//     }
//     return sum;
// }
// console.log(func([2,2,3,4]))

//2
// function funcn(num){
//     let arr =[]
//     for (let i=0; i<=num; i++){
//       if ( num%i==0){
//         arr.push(i)
//       }
      
//     }
//     return arr;
// }
// console.log(funcn(10))

//3
// function funStr(str){
//     return str.split('')
// }
// console.log(funStr('строка'))

//4
// function funStr1(str){
//     let st = str.split('')
//     let massiv = [];
//     for (let i = st.length-1; i>=0; i--){
//         massiv.push(st[i])
//     }
//     return massiv.join('')
// }
// console.log(funStr1('очень большая строка'))

//5
// function Bigletter (stroka){
//     return stroka.slice(0,1).toUpperCase() + stroka.slice(1)
// }
// console.log(Bigletter('я высокий'))

//6

// function getUpper(str) {
//   let res = "";
//   let words = str.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     res += words[i][0].toUpperCase() + words[i].slice(1) + " ";
//   }
//   return res
// }
// console.log(getUpper('в лесу родилась ёлочка'));

//7
// function pushmass(numb){
//     let mass =[];
//     for (let i=1; i<=numb;i++){
//         mass.push(i)
//     }
//     return mass
// }
// console.log(pushmass(10))

//8
// let sum = 0;
// function sumNum (number) {
//     strnum = String(number).split('')
//     for (let i = 0 ; i<strnum.length; i++){
//         sum += +strnum[i]
//     }
//     return sum
// }
// console.log(sumNum(99))

//9
// function checkYear (year){
//     if(year%4==0 && year%100!=0){
//         return year +' високосный'
//     }    
//     if (year %100 == 0 && year%400==0){
//         return year +' високосный'
//     }
//     return year +' невисокосный';
// }
// console.log(checkYear(2000))

//10
// let timesut = 86400
// function sutki(sec){
//     for (let i = 1; i<30; i++){
//         if (sec < timesut*i){
//             return i;
//         }  
//     }
// }
// console.log(sutki(200000))

//11
// function randomElem (mass){
//     function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     let res = getRandomInt(0, mass.length-1)
//     return mass[res]
// }
// console.log(randomElem([1,2,3,4,5,6,7]))

//12
// let schet = 0
// function prostoe(number){
//     for (let i = 0; i<=number;i++){
//             if (number%i==0) {
//                 schet++
//             }
//             if (schet > 2) {
//                 return 'neprost'
//             }
//     }
//     return 'prost'
// }
// console.log(prostoe(7))
// console.log(prostoe(4))