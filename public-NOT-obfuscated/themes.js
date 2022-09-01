function black() {
    document.querySelector(".main__left").style.background = 'none';
    document.querySelector(".main__videos").style.background = 'none';
    document.querySelector(".main__left").style.backgroundColor = "black";
    document.querySelector(".main__videos").style.backgroundColor = "black";
    document.body.style.backgroundColor = "black";
}
function cyan() {
    document.querySelector(".main__left").style.background = 'none';
    document.querySelector(".main__videos").style.background = 'none';
    document.querySelector(".main__left").style.backgroundColor = "#33FFFC";
    document.querySelector(".main__videos").style.backgroundColor = "#33FFFC";
    document.body.style.backgroundColor = "#33FFFC";
}
function yellow() {
    document.querySelector(".main__left").style.background = 'none';
    document.querySelector(".main__videos").style.background = 'none';
    document.querySelector(".main__left").style.backgroundColor = "yellow";
    document.querySelector(".main__videos").style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "yellow";
}
function pink() {
    document.querySelector(".main__left").style.background = 'none';
    document.querySelector(".main__videos").style.background = 'none';
    document.querySelector(".main__left").style.backgroundColor = "pink";
    document.querySelector(".main__videos").style.backgroundColor = "pink";
    document.body.style.backgroundColor = "pink";
}


function own() {
    document.querySelector(".main__left").style.background = 'none';
    document.querySelector(".main__videos").style.background = 'none';
    color = prompt("Enter the color you want on the Background???");
    document.body.style.backgroundColor = color;
    document.querySelector(".main__left").style.backgroundColor = color;
    document.querySelector(".main__videos").style.backgroundColor = color;

}


function pic1() {

    // var body = document.getElementsByTagName('body')[0];
    // body.style.background='url("back2.jpg")';
    document.querySelector("#boardDiv").style.background = 'url("back1.jpg")';
    document.querySelector(".main__left").style.background = 'url("back1.jpg")';
    document.querySelector(".main__videos").style.background = 'url("back1.jpg")';



}
function pic2() {

    // var body = document.getElementsByTagName('body')[0];
    // body.style.background='url("back2.jpg")';
    document.querySelector("#boardDiv").style.background = 'url("back2.webp")';
    document.querySelector(".main__left").style.background = 'url("back2.webp")';
    document.querySelector(".main__videos").style.background = 'url("back2.webp")';



}
function pic3() {
    console.log("lio");
    // var body = document.getElementsByTagName('body')[0];
    // body.style.background='url("back2.jpg")';
    document.querySelector("#boardDiv").style.background = 'url("back3.jpg")';
    document.querySelector(".main__left").style.background = 'url("back3.jpg")';
    document.querySelector(".main__videos").style.background = 'url("back3.jpg")';



}
function pic4() {
    console.log("lio");
    // var body = document.getElementsByTagName('body')[0];
    // body.style.background='url("back2.jpg")';
    document.querySelector("#boardDiv").style.background = 'url("back4.jpg")';
    document.querySelector(".main__left").style.background = 'url("back4.jpg")';
    document.querySelector(".main__videos").style.background = 'url("back4.jpg")';
}