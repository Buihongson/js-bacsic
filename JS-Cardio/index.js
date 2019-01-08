// Bài 1: REVERSE A STRING
// Return a string in REVERSE
// ex: reverseString('hello') === 'olleh'

function reverseString(str) {
  var stringSplit = str.split('').reverse().join('');
  return stringSplit;

  // Không dùng method reverse()

  // var revStr = '';
  // for(let i = str.length - 1 ; i >= 0 ; i--) {
  //   revStr = revStr + str[i];
  // }

  // return revStr;

  // Dùng reduce

  // return str.split('').reduce((revStr , char) => char + revStr , '');
}

// reverseString('hello');

//  Bài 2: VALIDATE A PALINDROME
//  Return true if palindrome and false if not 
//  ex: isPalindrome('racecar') === true , isPalindrome('hello') === false

function isPalindrome(str) {
  const revStr = str.split('').reverse().join('');

  return revStr === str;
}

//  Bài 3: REVERSE AN INTEGER
//  Return an integer in reverse
//  ex. revInteger(521) === 125

function revInteger(int) {
  // ----> Cách 1:
  // let revInt = 0;
  // const signNumber = Math.sign(int);
  // while(Math.abs(int) > 0) {   
  //   var temp = Math.abs(int) % 10;
  //   revInt = revInt*10 + temp;
  //   int = Math.abs(~~(int / 10));
  // }
  
  // return revInt * signNumber;

  //////////////////////////////
  // ----> Cách 2:
  // var revInt = int.toString().split('').reverse().join('');
  // return parseInt(revInt) * Math.sign(int);

  //////////////////////////////
  // ---->Cách 3:
  // dùng method reduce

  var revInt = int.toString().split('').reduce((rev, num) => num + rev, '');
  return parseInt(revInt) * Math.sign(int);
}

// Bài 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex: capitalizeLetters('i love javascript') === I Love Javascipt

function capitalizeLetters(str){
  // dung vong lap
  
  // const strArr = str.toLowerCase().split(' ');
  // // for (let i = 0; i < strArr.length; i++) {
  // //   strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
  // // }

  // const capiStr = []
  // for ( let char of strArr) {
  //   char = char.substring(0, 1).toUpperCase() + char.substring(1);
  //   capiStr.push(char);
  // }

  // return capiStr.join(' ');

  //////////////////////////////

  // dùng method map

  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

// Bài 5: MAX CHARACTER
// Return the character that is most commin in a string
// ex: maxCharacter('javascript') === 'a'

function maxCharacter(str) {
  const strArr = str.split('');
  let maxNum = 0;
  let maxChar = '';
  
  let countChar = strArr.reduce(function(numChar, char) {
    if(char in numChar) {
      numChar[char] ++;
    } else {
      numChar[char] = 1;
    }

    return numChar;
  }, {});

  for(let char in countChar) {
    if(countChar[char] > maxNum) {
      maxNum = countChar[char];
      maxChar = char;
    }
  }

  return `Max character is ${maxChar} : ${maxNum}`;
}

// Bài 6: FIZZBUZZ
// Write a program that prints all the numbers form 1 to 100. 
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". 
// For numbers which are mutiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log(`FizzBuzz`);
    } else if(i % 3 === 0) {
      console.log(`Fizz`);
    } else if(i % 5 === 0) {
      console.log(`Buzz`);
    } else {
      console.log(i);
    }
  }
}

const output = fizzBuzz();

console.log(output);
