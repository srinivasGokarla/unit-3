function runProgram(input) {
  input = input.trim().split("\n")
  var N = Number(input[0])
  console.log(N)
  console.log(financial(N).toFixed(4) + "`")
}
function financial(N) {
  if(N == 1) {
      return 0;
  }
  return financial(N-1) + Math.log(N) 
  }


if (process.env.USERNAME === "USER") {
  runProgram(`3`);
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
