  let student={
name:"jaysimha",
    emplyId:438598,
    address:"ananthapur",
    State:"Andhra pradesh",
    arr:[2,4,6,3,9,5,8,7,11,19,67,68,45],
    array:function(){
var sum=0
console.log("The even number in an array is :")
for(let x in student.arr){
    sum=sum+student.arr[x]

if(student.arr[x]%2==0){
      console.log(student.arr[x])
    }
}

console.log("sum of all the elements in an array is :"+sum)
var count=0
console.log("The prime numbers in the given array is :")
for(let i in student.arr){
    for(let j=2;j<student.arr[i];j++){
        if(student.arr[i]%j==0){
            count = count+1
            break;
        }
    }
    if(count==0){
        console.log(student.arr[i])
    }
    count=0
        }
    }
}
var len = student.arr.length;
console.log("The length of the array is :"+len)
student.array()