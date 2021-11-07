
function runProgram(input) {
  input = input.trim().split("\n")
  var N = Number(input[0])
  var arr = input[1].trim().split(" ").map(Number)
  console.log(BubbleRecursion(arr,0))

}
function BubbleRecursion(arr,cur) {
    if(cur == arr.length)  {
        return arr;
    }
        for(var i = 0; i < arr.length; i++){
                if(arr[i] > arr[i+1]){
                    var temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                  
                }
            }
          
       return  BubbleRecursion(arr,cur+1);
}

if (process.env.USERNAME === "USER") {
  runProgram(`5
  3 5 0 9 8`);
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
