function findMaxConsecutiveOnes(nums) {
    let max= 0;
    let count = 0;
    for (let i = 0; i<nums.length; i++) {

        if (nums[i]==0){
            count=0
        }
        else{
            count++
            
        }
        if (count > max) max = count;
    };
    console.log(max)
};

findMaxConsecutiveOnes([1,1,1,0,1,1,1,0,0,1,0,1,0])