const file_name = document.querySelector('input');
const text = document.querySelector('textarea');
const save_btn = document.querySelector('button');
const select_option = document.querySelector('select');

save_btn.addEventListener('click', function(){
    const file_type = getFileType();
    if(checkFileName(file_name, file_type)){
        saveFile(file_name, text, file_type);
    }else{
        alert('Please enter a file name with extension');
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
function checkFileName(file, type){
    return file.value != '' && type != 'none';
}

//get file type
function getFileType(){
    //get selected option
    let selected_option = select_option.options[select_option.selectedIndex].value;
    return selected_option;
}