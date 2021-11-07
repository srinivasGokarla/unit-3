function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i < testcases; i++){
      var N = Number(input[line++])
    //  console.log(N)
      (binary,str="")
  }
}
function binary(N,str) {
  if (N < 1) {
    console.log(str)
    return
}

var ans = N % 2;
N = Math.floor(N / 2)
str = ans + str;

return binary(N, str)

}


if (process.env.USERNAME === "USER") {
  runProgram(`2
  15
  128`);
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

