//  QSN: 1
let num1 = 5;
if(num1 > 0){
  console.log(`${num1} is a positive number.`)
}
else if(num1 < 0){
  console.log(`${num1} is a negative number.`)
}
else{
  console.log("Number is 0.")
}

// solving qsn no 1 by using switch case
num1 = 0;

switch(true){
  case (num1 > 0):
  console.log(`${num1} is a positive number.`);
  break;
  
  case (num1 < 0):
  console.log(`${num1} is a negative number.`);
  break;

  default:
    console.log("The number is zero.")

}

// QSN 2
let age = 17;
if (age >= 18){
  console.log("You are eligible to vote.")
}
else{
  console.log("You are not eligible to vote!")
}

// QSN 3
let day = 5;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day!");
}

// QSN 4
let str = "Roman"
if(str.length > 10){
  console.log("The string is longer than 10 character .")
}
else{
  console.log("The given string is not less then 10 character.")
}

// QSN 5

let grade = 63;
if(grade >=90){
  console.log("Your grade is A+");
}
else if(grade >=80){
  console.log("Your grade is A.");
}
else if(grade >=70){
  console.log("Your grade is B+. ")
}
else if(grade >=60){
  console.log("Your grade is B.")
}
else if(grade >= 50){
  console.log("Your grade is C.")
}
else{
  console.log("Your Grade is D.")
}


// QSN 6
let month = 10;
switch(month){
  case 1:
    console.log("The number of days in January is ",31 );
    break;

  case 2:
    console.log("The number of days in February is ",28 );
    break;

  case 3:
    console.log("The number of days in March is ",31 );
    break;

  case 4:
    console.log("The number of days in April is ",30 );
    break;

  case 5:
    console.log("The number of days in May is ",31 );
    break;

  case 6:
    console.log("The number of days in June is ",30 );
    break;

  case 7:
    console.log("The number of days in July is ",31 );
    break;

  case 8:
    console.log("The number of days in August is ",31 );
    break;

  case 9:
    console.log("The number of days in September is ",30 );
    break;

  case 10:
    console.log("The number of days in October is ",31 );
    break;

  case 11:
    console.log("The number of days in November is ",30 );
    break;

  case 12:
    console.log("The number of days in December is ",31 );
    break;

  default:
    console.log("Invalid Month.")
  
}

// QSN 7
let year = 2023;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`year ${year} is a leap year!`);
} else {
  console.log(`year ${year} is not a leap year!`);
}


// QSN 8
let weight = 65;
let height = 1.70688;

let BMI = weight / height**2;
console.log("Your BMI is: ",BMI)


// QSN 9

let randomNumber = 9;
if(randomNumber %2 === 0){
  console.log("The given number is even.");
}
else{
  console.log("The given number is Odd.");
}
