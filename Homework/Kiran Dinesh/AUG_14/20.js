var arr = [1, 7, 5, 10, 49, 25,9,8,7,100];
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
   console.log(sum);
   
}

sumEvenNumbers(arr)