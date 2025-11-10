let nums = [1,2,3,4,5];
for(let i=nums.length-1 ; i>=0 ; i--){
    console.log(nums[i]);
}

/*

- Difference between for..of and for..in
- for..of is used to iterate over arrays, strings, maps while for..in is used to iterate over objects.
- In for..of the elements are stored in the variable, where as the keys are stored in the for..in loop
- they will store the value of the iterable while in for..in the value can be accessed using the key

*/