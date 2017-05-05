var fileInput = document.querySelector("#file");
var putHere = document.getElementById("#putHere");






var a = fileInput.addEventListener("change", function(e) {
    var file = e.target.files[0],
        reader = new FileReader();
    
    reader.onload = function() {
        var converter = new showdown.Converter(),
            html = converter.makeHtml(this.result);
        console.log(html);
        
        putHere.innerHTML = html;

       
    };
    
    text = reader.readAsText(file);

    
    
}, false);





