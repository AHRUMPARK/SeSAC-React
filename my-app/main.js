// @ts-check

const arr = [1, 2, 3, 4, 5];
console.log(arr);
// console.log(...arr);

// 메모리 주소가 카피 됩니다. 값이 복사 되는게 아닙니다.
// const copyArr = arr;
// console.log(copyArr);

// 메모리 주소만 그대로 가져와서 true가 뜹니다.
// console.log(arr === copyArr);

// 배열 내부 값만 복사 하고 싶다면? > 전개 연산자
// [] 막으면, 값을 흩뿌리지 않는다.
// false가 뜸 주소가 같지 않기때문에
// const copyArr = [...arr];
// console.log(copyArr);

// console.log(arr === copyArr);

// true 객체 값, 주소값이 같다
const obj = {
  proro: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

// 전개 연산자 객체 { } 날라가고 값만 나온다. { proro: '뽀로로', lupy: '루피', crong: '크롱' }
// 키와 값이 동일하지만, 메모리가 다르기 때문에 false가 뜹니다.
console.log({ ...obj });

// 키와 값은 많아서 모르지만, 나머지 키값 그대로 받고 그 중 이 키값만 바꾸겟다. 부분 변경!
const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
// console.log(obj === copyObj);

// function foo(a,b,c,d,e,f,g){

// }

// 나머지 연산자?
// function fonn(a, b, ...rest) {
//   rest = { c: 'dd', d: 'dd' };
// }
