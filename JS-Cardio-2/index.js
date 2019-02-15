// Bài 1: LONGEST WORD
// Return the longest word of a string 
// If more than one longest word, put into array
// ex: longestWord('Hello, my name is Son') === 'hello'
// ex: longestWord('Hello there, my name is Son') === ['hello', 'there']

function longestWord(sen) {
    // Create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);

    // If multiple word, put into array
    const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

    // const longestWordArr = [];

    // for(let char of sorted) {
    //     if(char.length === sorted[0].length) {
    //         longestWordArr.push(char);
    //     }
    // }

    // Check if more than one array val
    if (longestWordArr.length === 1) {
        // return the word
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

// Bài 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex: chuckArray([1, 2, 3, 4, 5, 6, 7] , 3) === [[1, 2, 3] , [4, 5, 6], [7]]
// ex: chuckArray([1, 2, 3, 4, 5, 6, 7] , 2) === [[1, 2] , [3, 4], [5, 6], [7]]
function chuckArray(arr, len) {
    // Init chucked array
    const chuckedArr = [];
    // Set index
    let i = 0;

    // Loop while index is less than the array length
    while (i < arr.length) {
        // Slice out from index to the index + the chuck length nd push on to the chucked array
        chuckedArr.push(arr.slice(i, i + len));

        // Increment by chunk length
        i += len;
    }

    return chuckedArr;
}

// Bài 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex: [[1, 2] , [3, 4], [5, 6], [7]] === [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
    // SOLUTION 1:
    // let result = [].concat.apply([], arrays);

    // return result;

    // SOLUTION 2:
    // return arrays.reduce((flattenArr, arr) => flattenArr.concat(arr));
    
    // SOLUTION 3:
    return [].concat(...arrays); // spread
}

// Bài 4: ANAGRAM
// Return true if anagram and false if not
// ex: 'elbow' === 'below'
// ex: 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

// Bài 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should return to A
// ex: 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if(char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    // Capitalize  the vowels
    newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());

    return newStr;
}

const output = letterChanges('Hello There');

console.log(output);