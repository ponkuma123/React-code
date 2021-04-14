let array = [2,4,3,5,4,7,9,6,8,2];
let arr=[];
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 ===0){
      arr.push(array[i]);
    }
   
}
console.log("The Even number in the array are :",arr);