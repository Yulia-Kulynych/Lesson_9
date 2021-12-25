/* 1. 
let i = 3;
while (i) {
alert( i-- );
}// цикл будет выполняться пока условия в скобках = true, 
//то есть когда i=0=false цикл остановиться и последнее выведенное число будет 1.
*/
/*2.
let A=10;
let B=5;
let C=1;

if (B>A & C>B){
    A*=2;
    B*=2;
    C*=2;
}
else{
    A=-A;
    B=-B;
    C=-C;
}
alert (`A=${A}, B=${B}, C=${C}`);
*/
/* 3.
let A=10;
let B=5;
let C=3;

if ((B>A & C>B)||(A>B & B>C)){
    A*=2;
    B*=2;
    C*=2;
}
else{
    A=-A;
    B=-B;
    C=-C;
}
alert (`A=${A}, B=${B}, C=${C}`);
*/
/*4.
let A=10;
let B=25;
let C=35;

if ((B-A)<(C-A)){
    alert (`B ближе к A, расстояние от точки A составляет ${B-A} ед.`)
}
else if ((C-A)<(B-A)) {
    alert (`C ближе к A, расстояние от точки A составляет ${C-A} ед.`)
}
*/
/*5.
let X=0;
let Y=0;

if ((X==0) & (Y==0)){
    alert ("0")
}
else if ((X!==0)&(Y==0)) {
    alert ("1")
}
else if ((X==0) & (Y!==0)) {
    alert ("2")
}
else{
    alert ("3")
}
*/
/*6.
let X=2;
let Y=-5;

if ((X>0)& (Y>0)){
    alert ("Точка находиться в I четверти")
}
else if ((X<0)& (Y>0)){
    alert ("Точка находиться в II четверти")
}
else if ((X<0)& (Y<0)){
    alert ("Точка находиться в III четверти")
}
else if ((X>0)& (Y<0)){
    alert ("Точка находиться в IV четверти")
}*/

/*7.
let X1=2;
let Y1=5;

let X2=6;
let Y2=5;

let X3=2;
let Y3=2;

let X4=X2;
let Y4=Y3;

alert (`Координаты четвертой вершины: X4=${X4}, Y4=${Y4}.`)
*/
/*8.
let Year=400;
 
if (Year%4 ==0) {
    if ((Year%100 ==0)&(Year%400 ==0)){
           alert("366 дней") 
        }
    else if ((Year%100 ==0)&(Year%400 !==0)){
        alert("365 дней") 
    }}
else {
    alert("365 дней") 
    }
*/
/*9.
let A=-11;
if (A==0){
    alert("нулевое число")
}
else if ((A>0)&(A%2==0)){
    alert("положительное четное число")
}
else if ((A>0)&(A%2!==0)){
    alert("положительное нечетное число")
}
else if ((A<0)&(A%2==0)){
    alert("отрицательное четное число")
}
else if ((A<0)&(A%2!==0)){
    alert("отрицательное нечетное число")
}
*/
/*10.
let A=100;

if (A%2==0){
    if (A<100){
        alert("четное двузначное число")
    }
    else if ((A>99)&(A<999)){
        alert("четное трехзначное число")
        }
    }
else if (A%2!==0){
    if (A<100){
        alert("нечетное двузначное число")
        }
    else if ((A>99)&(A<999)){
        alert("нечетное трехзначное число")
        }
    }
*/
/*11.
let ii =0;
while  (++ii < 5 ) alert (ii);//выводит значения 1-4, сначало выполняется инкремент, сравнение и вывод

let i =0;
while  (i++ < 5 ) alert (i);// 1-5, так как идет сначало сравнение с 5, а потом инкремент и вывод
*/

/*12
for (let i=0; i<5; i++) alert (i);//
for (let i=0; i<5; ++i) alert (i);// ркзультаты одинаковые так как очередность действий предопределено ходом цикла for
*/

/*13.
for (let i=2; i<11; i++ ) {
    alert (i);
    i++;
}
*/

/*14.
for (let i=0; i<3; i++){
    alert (`number ${i}!`); 
}*/
/*
let i=0;
while (i<3){
    alert (`number ${i}!`);
    i++
}
*/
/*15.
let inputNumber;
do {
    inputNumber=prompt("Input number > 100");
    console.log(inputNumber)
}
while (+inputNumber<100 & inputNumber!==null )
*/
/*17
let A=+prompt ("Input first number")
let B=+prompt ("Input second number")
alert(`Arithmetic mean is ${(A+B)/2}`)
*/
/*18
let A=+prompt ("Введите число")

alert(`Квадратный корень: ${Math.sqrt(A)}`)
*/
/*19
let A=+prompt ("Введите число")
let B=+prompt ("Введите число")
let C=+prompt ("Введите число")
let min=0
let max=0

if (A<B&A<C){
    min=A;
}
else if (B<A&B<C) {
     min=B;
}
else if (C<A & C<B){
    min=C;
}

alert (`min=${min}`)

if (A>B&A>C){
    max=A;
}
else if (B>A&B>C) {
    max=B;
}
else if (C>A & C>B){
    max=C;
}
alert (`max=${max}`)
alert (`Разница ${max-min}`)
*/
/*21.
let A=+prompt ("Введите число")

if (A%2==0){
    alert(`Число ${A} четное`)
}
else {
    alert(`Число ${A} нечетное`)
}*/
/*22
let A=+prompt ("Введите величину в дюймах")

    alert(`Результат в сантиметрах ${A*2.54} `)
*/
/*23
let A=prompt ("Введите трехзначное число")

let A1=+A[0]
let A2=+A[1]
let A3=+A[2]


if ((A>99& A<1000)||(A<(-99) & A>(-1000))){
    if (A%2==0){
        alert(`Число ${A} четное`)
        alert(`Сумма его цифр ${A1+A2+A3}`)
    }
    else {
        alert(`Число ${A} нечетное`)
        alert(`Произведение его цифр ${A1*A2*A3}`)
    }
}
else{
    alert("Введите трехзначное число")
}
*/
/*24
let a=+prompt ("Введите длину стороны a")
let b=+prompt ("Введите длину стороны b")
let c=+prompt ("Введите длину стороны c")
if (((a+b)>c)&((a+c)>b) & ((b+c)>a)){
    alert("Такой треугольник существует")
}
else {
    alert("Такой треугольник не существует")
}
*/
/*25
let x=+prompt ("Введите x координату")
let y=+prompt ("Введите y координату")
let R=10
if  (Math.sqrt(((x*x)+(y*y)))<R){
    alert('Точка находится в кругу ')
    }
else if (Math.sqrt(((x*x)+(y*y)))>R){
    alert('Точка находится за пределами круга')
    }
else if (Math.sqrt(((x*x)+(y*y)))==R){
    alert('Точка находится на круге ')
    }
*/
/*26
let user = {}
user.name="John"
user.surname ="Smith" 
console.log(user)
user.name="Pete"
console.log(user)
delete user.name
console.log(user)
*/
/*27
const user = {
    name: "John"
    };
user.name = "Pete";
console.log(user)//будет работать, содержимое объекта менять можно
*/
/*28
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
salaries.sum=salaries.John+salaries.Ann+salaries.Pete
console.log(salaries)
*/
/*29
let i = 0;
while (i != 10) {
i += 0.2;//проблема неточности исчисления дробных чисел
console.log(i)
}
*/