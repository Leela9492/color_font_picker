function colorRed(){
    let a=document.getElementById('actualcontent');
    a.style.color="red";
}
function colorOrange(){
    let a=document.getElementById('actualcontent');
    a.style.color="orange";
}
function colorYellow(){
    let a=document.getElementById('actualcontent');
    a.style.color="yellow";
}
function colorPink(){
    let a=document.getElementById('actualcontent');
    a.style.color="pink";
}
function colorGreen(){
    let a=document.getElementById('actualcontent');
    a.style.color="green";
}
function colorViolet(){
    let a=document.getElementById('actualcontent');
    a.style.color="violet";
}
function colorBlue(){
    let a=document.getElementById('actualcontent');
    a.style.color="blue";
}
function colorAqua(){
    let a=document.getElementById('actualcontent');
    a.style.color="aqua";
}
function colorBrown(){
    let a=document.getElementById('actualcontent');
    a.style.color="brown";
}
function colorWhite(){
    let a=document.getElementById('actualcontent');
    a.style.color="white";
}
function colorGray(){
    let a=document.getElementById('actualcontent');
    a.style.color="gray";
}
function colorBlack(){
    let a=document.getElementById('actualcontent');
    a.style.color="black";
}
function colorDarkblue(){
    let a=document.getElementById('actualcontent');
    a.style.color="#00008B";
}
function colorMagenta(){
    let a=document.getElementById('actualcontent');
    a.style.color="#8B008B";
}
function colorGold(){
    let a=document.getElementById('actualcontent');
    a.style.color="#FFD700";
}
function bgcolorRed(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="red";
}
function bgcolorOrange(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="orange";
}
function bgcolorYellow(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="yellow";
}
function bgcolorPink(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="pink";
}
function bgcolorGreen(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="green";
}
function bgcolorViolet(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="violet";
}
function bgcolorBlue(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="blue";
}
function bgcolorAqua(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="aqua";
}
function bgcolorBrown(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="brown";
}
function bgcolorWhite(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="white";
}
function bgcolorGray(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="gray";
}
function bgcolorBlack(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="black";
}
function bgcolorDarkblue(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="#00008B";
}
function bgcolorMagenta(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="#8B008B";
}
function bgcolorGold(){
    let a=document.getElementById('actualcontent');
    a.style.backgroundColor="#FFD700";
}
function fontpick(val){
    let fontval=document.getElementById('actualcontent');
    fontval.style.fontFamily=val;
}

let down=document.getElementById('download');
down.addEventListener('click',download_pic);
function download_pic(){
    html2canvas(document.getElementById('actualcontent')).then(canvas=>{
        const link=document.createElement('a');
        link.href=canvas.toDataURL('image/png');
        link.download='image.png';
        link.click();
    });
}