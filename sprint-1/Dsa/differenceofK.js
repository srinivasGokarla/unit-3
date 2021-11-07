function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0]);
    var line = 1;
    for(i = 0; i < testcases; i++) {
        var [N, K] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
      //   console.log(arr,N,K)
       console.log(differenceOfK(arr,K,N))
    }
}
        function differenceOfK(arr,K,N){
        var i = 0;
        var j = 0;
        while(i < arr.length && j < arr.length){
            temp = arr[j] - arr[i];
           if (temp == K && i != j)  {
              return "Yes"
         
           } if (temp < K) {
               
               j++;
          } else {
                i++;
            }
        }
            return "No"
}

   if (process.env.USERNAME === "USER") {
     runProgram(`2
     5 3
     1 2 3 4 5
     5 8
     1 2 3 4 5 `);
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