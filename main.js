function sayHelloWorld() {
    for (let i = 0; i < 3; i++) {
        console.log("Hello, World!");
    }
  }
  
  function findRectanglePerimeter(a, b) {
    return (a + b) * 2;
  }
  
  function findCircleArea(r) {
    return 3.14 * r ** 2;
  }
  
  function greetPerson(name) {
    console.log("Hi, " + name + "!");
  }
  
  function findRatio(a, b) {
    return a / b;
  }
  
  function findSumOfSquares(a, b) {
    return a ** 2 + b ** 2;
  }
  
  function findProductOfThree(a, b, c) {
    return a * b * c;
  }
  
  function convertDollarsToTenge(dollars) {
    return dollars * 446;
  }
  
  function checkPositiveOrNegative(a) {
    if (a > 0) {
      return "Positive";
    } else if (a < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  function checkEqualOrNot(a, b) {
    if (a === b) {
      return "Equal";
    } else {
      return "Not equal";
    }
  }
  
  function checkEvenOrOdd(a) {
    if (a % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  function checkBetweenZeroAndOne(a) {
    if (a > 0 && a < 1) {
      return "Between 0 and 1";
    } else {
      return "Not between 0 and 1";
    }
  }
  
  function findGreatestOfTwo(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  
  function findGreatestOfThree(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
  
  function findDayOfWeek(dayNumber) {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (dayNumber >= 1 && dayNumber <= 7) {
      return daysOfWeek[dayNumber-1];
    } else {
      return "Not a day number";
    }
  }
  
 
  sayHelloWorld();
  console.log(findRectanglePerimeter(78, 41));
  console.log(findCircleArea(8));
  greetPerson("Assel");
  console.log(findRatio(100, 5));
  console.log(findSumOfSquares(4, 5));
  console.log(findProductOfThree(789, 0.7, 78));
  console.log(convertDollarsToTenge(1000));
  console.log(checkPositiveOrNegative(-874));
  console.log(checkEqualOrNot(55, 55));
  console.log(checkEvenOrOdd(37));
  console.log(checkBetweenZeroAndOne(0.54548));
  console.log(findGreatestOfTwo(6548, 1567));
  console.log(findGreatestOfThree(89, 4657, 487));
  console.log(findDayOfWeek(5));
  