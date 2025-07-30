const readline = require("require").createInterface ({
    input: process.stdin,
    output: process.stdout,
})
readline.question("Enter the marks",(input) => {
    console.log(input)
    if(input => 80 <= 100) {
        console.log("A")
    }
    else if(input => 60 <= 79) {
        console.log("B")
    }
    else if(input => 50 <= 59) {
        console.log("C")
    }
    else if(input => 40 <= 49) {
        console.log("D")
    }
    else if(input => 30 <= 39) {
        console.log("E")
    }
});
readline.close()
