function runProgram(input) {
  input = input.trim().split("\n")
  var str = input[0].trim().split("")
 // console.log(str)
  LengthRecursion(str, i = 0, count = 0)
}
function LengthRecursion(str,i,count) {
  if(i == str.length) {
    console.log(count)
    return
  } else { 
    LengthRecursion(str,i+1, count+1)
    return
  }
 
}


if (process.env.USERNAME === "USER") {
  runProgram(`masaischool`);
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
