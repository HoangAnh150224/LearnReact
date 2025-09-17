//lấy 1 phần tử cần thiết
import { myVar } from "./named.js";
console.log(myVar);


import { myFunc } from "./named.js";
myFunc();


// 2. hoặc lấy 1 số phần tử cần thiết
import { myVar as var1, myFunc as func1 } from "./named.js";
console.log(var1);
func1();

//3. hoặc lấy tất cả phần tử cần thiết
import * as myModule from "./named.js";
console.log(myModule.myVar);
myModule.myFunc();

import * as myModule2 from "./named.js";
console.log(myModule2.myVar2);
myModule2.myFunc2();
console.log(myModule2.df2);// không dùng được vì trong export = nó không bao gồm thằng exportdefault lên không dùng đươc,
// muốn dùng phải import riêng

import df2 from "./named.js";
console.log(df2);

// hoặc có thể import liệt kể như sau
import df2 , { myVar as var2, myFunc as func2, myVar2 as var3, myFunc2 as func3 } from "./named.js";
console.log(df2);
console.log(var2);
func2();
console.log(var3);
func3();

// 4. import default
// import df from "./default.js";
// console.log(df);

import total from "./default.js";
console.log(total(10,20));




