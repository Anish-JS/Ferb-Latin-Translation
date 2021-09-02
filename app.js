var btn = document.querySelector("#btn");
var txt = document.querySelector("#text-input");
var output = document.querySelector("#display");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL (text) {
    return serverURL + "?"+ "text=" + text;
}

function errorHandler(error){
    console.log ("Error occured", error);
    alert("Something wrong with server, Try again later");

}

function clickEventHandler(){
    var input = txt.value;

    fetch(getTranslationURL(input))
        .then (response => response.json())
        .then (json => {
            var translatedTxt = json.contents.translated;
            output.innerText =translatedTxt;
        })
        .catch(errorHandler)
}

btn.addEventListener("click",clickEventHandler)