function file() {
    var x = document.getElementById('fileUpload').style.display;
    if (x == 'none')
        document.getElementById('fileUpload').style.display = 'block';
    else
        document.getElementById('fileUpload').style.display = 'none';
}