// #1 Write a program to find the area of a subclass Square using
// Rectangle class

class Rectangle {
  constructor(side) {
    this.side = side;
  }
  area() {
    return this.side*this.side;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side);
  }
}

let square = new Square(5);
console.log(`The area of a square is: ${square.area()}`);
square.area();

// #2 Write a program to a function find_largest to return the 
// nth largest number in an array [3,45,6,7,23,5,7,8]

function find_largest (arr, largest) {
    arr = arr.sort((a,b) => a-b);
    return arr[arr.length - largest];
  }
  
  let arr = [3,45,6,7,23,5,7,8];
  let output = find_largest(arr, 4);
  console.log(output);

// #3 Write a program which accept a number as input in the function
// parameter and insert dashes between each two even numbers
// ex: 025468 -> 0-254-6-8

function computeDash(str) {
  let num = str.split("");
  let newStr = "";
  for(let i=0; i<num.length;i++) {
      if(num[i]%2==0 && num[i+1]%2==0)
        newStr += num[i] + "-";
      else
        newStr += num[i];
  }
  return newStr;
}
let result = computeDash("025468");
  console.log(result);

/*function insertDash(value) {
  let rem1, rem2;
  let res1 = 0 , res2 = 0;
  while(value>0) {
    rem1 = value%10;
    res1 = res1*10 + rem1;
    value = parseInt(value/10);
  }
  while(res1>0) {
    rem2 = res1%10;
    if(rem2%2==0)
      res2 += "-" +rem2;
    else
      res2 = res2 + rem2;
    res1 = parseInt(res1/10);
  }
  return res2;
}
let num = 025468;
let result1 = insertDash(num);
console.log(result1);*/