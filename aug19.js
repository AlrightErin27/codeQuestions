//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞FIND THE ODD INT 6KYU🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const findOdd = (A) => A.find((i) => A.filter((el) => el === i).length % 2);

console.log(findOdd([-1, 12, 3, 12, -1])); //3
