function myMathFunction() {
    var x = (4 + 8) * 3 / 2 - 4;
    document.getElementById("Math").innerHTML = x;
}


function MyIncFunction() {
    var y = 5;
    y++;
    document.getElementById("Incre").innerHTML = y;
}


function MyDecFunction() {
    var z = 9;
    z--;
    document.getElementById("Decre").innerHTML = z;
}


function MyRandFunction(){
    window.alert(Math.random());
}