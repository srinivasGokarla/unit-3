
function bob(N) {
    if(N == 0) {
        return 1;
    }
    if(N < 0) {
        return 0;
    } else {
        return (bob(N-1) +  bob(N-3) + bob(N-5))
    }
}
    function runProgram(input) {
        input = input.trim().split("\n")
        var N = Number(input[0])
      
        console.log(bob(N))
      }

if (process.env.USERNAME === "USER") {
  runProgram(`7`);
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
