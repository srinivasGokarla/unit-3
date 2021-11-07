function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  var Q = [];
  var S = []
  for (var i = 0; i < testcases; i++) {
      var arr = input[line++].trim().split(" ").map(Number)
    
    NEwYearCelebration(arr, Q, S)
  }


}

function NEwYearCelebration(arr, Q, S) {
  if (arr[0] == '1') {
      Q.push(arr[1])
  } else if (arr[0] == '2') {
      S.push(arr[1])
  } else if (arr[0] == '3') {
      if (Q.length > 0) {
          console.log(Q[0])
      } else {
          console.log(-1)
      }
  } else if (arr[0] == '4') {
      if (S.length > 0) {
          console.log(S[S.length - 1])
      } else {
          console.log(-1)
      }
  } else if (arr[0] == '5') {
      if (Q.length > 0) {
          S.push(Q[0]);
          Q.shift();
      }
  }

}




if (process.env.USERNAME === "USER") {
  runProgram(`7
  1 4
  2 3
  1 2
  3
  4
  5
  4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function(input) {
      read += input;
  });
  process.stdin.on("end", function() {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
  });
  process.on("SIGINT", function() {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
  });
}