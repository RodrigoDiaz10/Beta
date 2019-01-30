function validate(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    if (number1 == "" || number1 < 0){
        alert("Invalid Number 1")
    } else if (number2 == "" || number2 < 0){
        alert("Invalid Number 2")
    } else {
        this.fibonacci();
    }
}