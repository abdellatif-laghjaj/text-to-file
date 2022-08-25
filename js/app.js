const file_name = document.querySelector('input');
const text = document.querySelector('textarea');
const save_btn = document.querySelector('button');

save_btn.addEventListener('click', function(){
    if(checkFileName(file_name)){
        saveFile(file_name, text);
    }else{
        alert('Please enter a file name');
    }
});

// Save file
function saveFile(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a");
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

//check if file name is empty
function checkFileName(file){
    return file.value != '';
}