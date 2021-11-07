function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    console.log(fibbonacci(N))
  }
  function fibbonacci(N) {
      if(N == 0 || N == 1) {
          return N
      }
      return [fibbonacci(N-1) + fibbonacci(N-2)]
  }

  if (process.env.USERNAME === "USER") {
    runProgram(`4`);
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
  