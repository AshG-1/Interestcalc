function calculate() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
    const interestType = document.getElementById("interest-type").value;

    let result;

    if (interestType === "simple") {
        result = principal * rate * time / 100;
    } else if (interestType === "compound") {
        result = principal * (Math.pow(1 + rate / 100, time) - 1);
    }

    document.getElementById("result").innerHTML = result.toFixed(2);
}