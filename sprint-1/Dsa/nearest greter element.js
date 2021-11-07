function runProgram(input) {
  input=input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i < testcases; i++) {
      var N = Number(input[line++])
      var arr = input[line++].trim().split(" ").map(Number)
      nearestgreater(arr) 
  }
 
}
function left(arr){
  left = [];
 Stack = []
 for (var i = 0; i < arr.length; i++) {
   while(stack != 0 && arr[stack.peek()] <= arr[i]) {
    stack.pop();
   
   if (stack.isEmpty()){
     ans[i] = -1; 
   } else {
     ans[i] = stack.peek();
   }
   stack.push(i);
 }
   return left;
}
}
function right(arr){
 right = []
 stack = [];
 for (var i =arr.length-1 ;i >= 0; i--) {
   while(stack != 0 && arr[stack.peek()] <= a[i]) {
    stack.pop();
   } 
   if (stack.isEmpty()) {
    ans[i] = -1;
   }
   else{
     ans[i] = stack.peek();
   }
   stack.push(i);
 }
 return right;
}
function nearestgreater(arr){
  ans = [];
  for (var i = 0; i < left.length; i++){
    if (left[i] == -1 && right[i] == -1)  {
      ans[i] = -1;
     } else if (left[i] == -1) {
      ans[i] = right[i];
     } 
    else if (right[i] == -1) {
      ans[i] = left[i];
    }
    else{
      var temp1 = Math.abs(i - left[i]); //finding the absolute difference
      var temp2 = Math.abs(i - right[i]); // finding the absolute difference
      ans[i] = temp1 > temp2 ? right[i] : left[i];
    }
  }
  return ans;
  }
 
    if (process.env.USERNAME === "USER") {
      runProgram(`1
      5
      5 4 1 3 2`);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }