var number = +prompt("Enter number 1")
var zhupSan = 0;
var taqSan = 0;

function san(number) {
    if( number % 2 == 0 ){
        zhupSan += number
        alert("zhup san")
    } else{
        taqSan += number
        alert("Taq san")
    }
    return number
}

alert( "Siz zhazgan san - " + san(number) + " !")




