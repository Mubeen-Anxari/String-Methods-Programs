//                1:( Write a program to find and display the length of a given string.)
var str: string =
  "InshaAllah Mubeen will fullfil his dream with the help of Allah";
let b = str.length;
console.log(b);

//                 2: (Create a program that converts a string to lowercase using the `toLowerCase()` method.)
var str: string = "MUBEEN ZULFIQAR";
let a = str.toLowerCase();
console.log(a);
//             3: (Write a program that converts a given string to uppercase using the `toUpperCase()` method)
var str: string = "MUBEEN ZULFIQAR";
let c = str.toUpperCase();
console.log(c);

//                    4: (Write a program that replaces a word in a string with another word using the `replace()` method.)
var str2: string = "Mubeen";
var str3: string = "Ansari";
let d = str2.replace("Mubeen", str3);
console.log(d);

//                    5:( Write a program that demonstrates string concatenation using the `concat()` method.)

//                    aydiiii chassss ae ay naaaam joran diiii HAHAHAHAHAHAHAHAHAHA
var n1: string = "Amna";
var n2: string = "Mubeen";
let ab = n1.concat(` is a future wife of ${n2}`);
console.log(ab);
//                      6: (Write a program that splits a sentence into words using the `split()` method and displays the resulting array)
var array: string =
  "InshaAllah Mubeen will fullfil his dream with the help of Allah";
let bc = array.split(" ");
console.log(bc);
//                       .7: (Create a program that trims the whitespace from both ends of a given string using the `trim()` method).
var spc: string =
  "                          javascript                          ";
let cd = spc.trim();
console.log(cd);

//                       8: (Write a program that retrieves and displays the character at a specific index using the `charAt()` method.)
var str5: string = "Hello Mubeen";
var index: number = 6;

if (index >= 0 && index <= str5.length) {
  let dc = str5.charAt(index);
  console.log(dc);
} else {
  console.log("Out of range");
}
//                        9:( Create a program that outputs the Unicode value of the character at a given index using `charCodeAt()`.)
var str5: string = "Hello Mubeen";
var index: number = 6;

if (index >= 0 && index <= str5.length) {
  let dc = str5.charCodeAt(index);
  console.log(dc);
} else {
  console.log("Out of range");
}

//                         10: (Create a program that uses the `replaceAll()` method to replace all occurrences of a word in a string)
var str2: string =
  "InshaAllah Mubeen will fullfil his dream with the help of Allah in his future";
let m3 = str2.substr(0, 8);
console.log(m3);

//                       11: (Create a program that showcases the `substr()` method to extract a specific number of characters from a string.)
var str6: string = "Mubeen,Ansari";
var startIndex = 7;
var lastIndex = 6;
if (startIndex >= 0 && startIndex <= str6.length) {
  let m4 = str6.substr(startIndex, lastIndex);
  console.log(m4);
} else {
  ("error");
}

//                      12:  (Write a program that demonstrates the use of the `substring()` method to extract a portion of a string.)

//                                      ye same splice wala kam krta h
