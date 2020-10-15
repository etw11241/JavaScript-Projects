function My_First_Function() {    //Instantiating function My_First_Function
    var sentence = "I am learning and coding";   //Instantiating variable
    sentence += " a lot of great info from this online text"  //Naming variable again to concatenate
    document.getElementById("Concatenate").innerHTML = sentence; //Using getelementbyID to set new variable value onclick 
}