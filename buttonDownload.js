//Fonte do código: 
//https://www.infinetsoft.com/Post/Download-div-content-on-button-click-using-javascript/1357#.YqIkW6jMLcs
//código só baixa o conteúdo html e mas não renderiza o código css.
function download() {
    var a = document.body.appendChild(
       document.createElement("a")
    );
   a.download = "card.html";
   a.href = "data:text/html," + document.getElementById("first-cover").innerHTML;
   a.click(); //Trigger a click on the element
}
