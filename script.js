document.addEventListener("DOMContentLoaded",function () {

const title = document.getElementById('title');
const color = ['red', 'orange', 'black'];
const bt1color = ['purple','green','cyan'];

let colorindex = 0;
let colorindex2 = 0;
let counter = 0;


    


function changeColor() {
    title.style.color = color[colorindex];
    colorindex = (colorindex+1)%color.length;
}
function changeColor2() {
    bt1.style.color = bt1color[colorindex2];
    colorindex2 = (colorindex2+1)%color.length;
    bt1.style.backgroundColor = "yellow";
}

function TouchBotton() {
    counter++;
    console.log(counter);
    
    quad.style.backgroundColor = "red";
    
   
    
   if(counter > 1 ){
        counter = 0;
        quad.style.backgroundColor = "black";
    }

}


setInterval(changeColor,100);
setInterval(changeColor2,100);
HowItsWork();

bt1.addEventListener('click', TouchBotton);










    
});
    

