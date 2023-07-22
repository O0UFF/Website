{

    var hiddenText = document.getElementById("stuff");
    hiddenText.style.visibility = 0;

    document.getElementById("button").onclick = function(){
        hiddenText.style.visibility = 1;
    }
}