function twicenumberfind(array)
{
let arr=[];
  for (let i = 0; i < array.length; i++){
      for (let j=0; j<i;j++){
          if(array[i]==array[j]){
              arr.push(array[j])
          }         

      }      
}

console.log(arr)
}

twicenumberfind([0,1,2,3,4,5,6,7,7,8,8,9,10,11,12,12,13,14,15,16,17,18,19,20])