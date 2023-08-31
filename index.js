"use strict";
//                 Write a program to find and display the length of a given string.
var str = "InshaAllah Mubeen will fullfil his dream with the help of Allah";
let b = str.length;
console.log(b);
//                  Create a program that converts a string to lowercase using the `toLowerCase()` method.
var str = "MUBEEN ZULFIQAR";
let a = str.toLowerCase();
console.log(a);
//              Write a program that converts a given string to uppercase using the `toUpperCase()` method
var str = "MUBEEN ZULFIQAR";
let c = str.toUpperCase();
console.log(c);
//                     Write a program that replaces a word in a string with another word using the `replace()` method.
var str2 = "Mubeen";
var str3 = "Ansari";
let d = str2.replace("Mubeen", str3);
console.log(d);
//                     Write a program that demonstrates string concatenation using the `concat()` method.
//                    aydiiii chassss ae ay naaaam joran diiii HAHAHAHAHAHAHAHAHAHA
var n1 = "Amna";
var n2 = "Mubeen";
let ab = n1.concat(` is a future wife of ${n2}`);
console.log(ab);
//                       Write a program that splits a sentence into words using the `split()` method and displays the resulting array
var array = "InshaAllah Mubeen will fullfil his dream with the help of Allah";
let bc = array.split(" ");
console.log(bc);
//                       . Create a program that trims the whitespace from both ends of a given string using the `trim()` method.
var spc = "                          javascript                          ";
let cd = spc.trim();
console.log(cd);
//                        Write a program that retrieves and displays the character at a specific index using the `charAt()` method.
var str5 = "Hello Mubeen";
var index = 6;
if (index >= 0 && index <= str5.length) {
    let dc = str5.charAt(index);
    console.log(dc);
}
else {
    console.log("Out of range");
}
//                        Create a program that outputs the Unicode value of the character at a given index using `charCodeAt()`.
var str5 = "Hello Mubeen";
var index = 6;
if (index >= 0 && index <= str5.length) {
    let dc = str5.charCodeAt(index);
    console.log(dc);
}
else {
    console.log("Out of range");
}
//                         Create a program that uses the `replaceAll()` method to replace all occurrences of a word in a string
var str2 = "InshaAllah Mubeen will fullfil his dream with the help of Allah in his future";
let m3 = str2.substr(0, 8);
console.log(m3);
//                        Create a program that showcases the `substr()` method to extract a specific number of characters from a string.
// var str6: string = "Mubeen,Ansari";
// var startIndex = 7;
// var lastIndex = 6;
// if (startIndex >= 0 && startIndex <= str6.length) {
//   let m4 = str6.substr(startIndex, lastIndex);
//   console.log(m4);
// }else{
//     "error"
// }
//                        Write a program that demonstrates the use of the `substring()` method to extract a portion of a string.
var str7 = "Mubeen,Ansari";
let m5 = str7.slice(7, 4);
console.log(m5);
// var startIndex = 7;
// var lastIndex = 5;
// if (startIndex >= 0 && startIndex <= str7.length) {
//   let m5 = str7.substring(startIndex, lastIndex);
//   console.log(m5);
// }else{
//     "error"
// }
