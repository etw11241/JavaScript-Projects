function myNANFunction1() {
    document.getElementById("Test1").innerHTML = 0 / 0;
}

function myNaNFunction2() {
    document.getElementById("Test2").innerHTML = isNaN("Programming is Fun");
}

function myNaNFunction3() {
    document.getElementById("Test3").innerHTML = isNaN("12345");
}