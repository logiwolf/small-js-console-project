const arr = [17, 21, 23, 56];

const printForcast = function (arr) {
  let string = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    string = string + `..${arr[i]} degree in day ${i + 1}..`;
  }
  console.log(string);
};
printForcast(arr);
