
function runProgram(input) {
    input = input.trim().split("\n");
    var N = Number(input[0])
    var arr =  input[1].trim().split(" ").map(Number).sort((a,b)=>a-b)
  
    doctorStrange(arr, N, arr2 = [], 0)
}

const obj = {};

function doctorStrange(arr,N,arr2,steps) {
    if (N == steps) {
        if(obj[arr2.join(" ")] == undefined) {
            obj[arr2.join(" ")] = 1
            console.log(arr2.join(" "))
        }
        return;
    }
    if (arr.length > 0){
        if(obj[arr2.join(" ")] == undefined) {
            obj[arr2.join(" ")] = 1
            console.log(arr2.join(" "))
        }

    } for(let i = steps; i < N; i++) {
        arr2.push(arr[i])
        doctorStrange(arr,N,arr2,i+1)
        arr2.pop();
    }
}

if (process.env.USERNAME === "USER") {
    runProgram(`3
    1 2 2 `);
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