function runProgram(input) {
  input = input.trim().split("\n")
  var[N,K] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
 // console.log(arr,N,K)
 
 if(CountWithCounter(arr,K,N,count)) {
     console.log(count)
 }
}

function CountWithCounter(arr,K,N,count) {
    if (K == 0) {
        return
    } if (N == 0) {
        return count;
    } if (arr[N - 1] > K) {
         SumExists(N - 1, arr, K)
         count++;
    }
     SumExists(N - 1, arr, K) || SumExists(N - 1, arr, K - arr[N - 1])
     return count
}


if (process.env.USERNAME === "USER") {
  runProgram(`4 10
  1 2 3 4`);
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
