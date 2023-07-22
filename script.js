{

    var hiddenText = document.getElementById("stuff");
    hiddenText.style.visibility = "hidden";

    document.getElementById("button").onclick = function(){
        hiddenText.style.visibility = "shown";
    }
}