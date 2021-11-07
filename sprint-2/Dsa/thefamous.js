function runProgram(input) {
    input = input.trim().split("\n");
    var n = input[0].trim().split(" ").map(Number);
    console.log(getSum(n))

}

function getSum(n) {

    let sum = 0;
    while (n > 0 || sum > 9) {
        if (n == 0) {
            n = sum;
            sum = 0;
        }
        sum = sum + n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

if (process.env.USERNAME === "USER") {
    runProgram(`148`);
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