var fileInput = document.querySelector("#file"),
    putHere = document.querySelector("#putHere"),

makeHTML = function(md) {

    var converter = new showdown.Converter();
    return converter.makeHtml(md);
};


putHTML = function(md) {

    var html = makeHTML(md);
    putHere.innerHTML = html;
};

fileInput.addEventListener("change", function(e) {

    var file = e.target.files[0],
        reader = new FileReader();
    reader.onload = function() {
        putHTML(this.result);
    }
    reader.readAsText(file);
}, false);






