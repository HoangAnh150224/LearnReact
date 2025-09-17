// cách 1 khai báo hàm và tên biến rồi mới xuất

const myVar = 10;

function myFunc() {
    console.log("Hoàng Anh đây");
}


export { myVar, myFunc };


// cách 2 xuất luôn khi khai báo
export const myVar2 = 20;

export function myFunc2() {
    console.log("Hoàng Anh đây - cách 2");
}


let df2 = "biến default 2";
export default df2;