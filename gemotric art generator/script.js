const btn=document.getElementById("btngen");
/// shape array
const shapes=[
    "div1","div2","div3","div4","div5","div6","div7","div8",
    "div9","div10","div11","div12","div13","div14","div15","div16"
];

/// color array
const colors=[
    "#01d2fd","#ffc700","#fe9f12","#06d0c7"
];

const boxes=document.querySelectorAll(".container div");

/// function for generating random div position with color
let generatePattern=()=>{
    boxes.forEach(
        (box)=>{
            box.className="";
            let i=Math.floor(Math.random()*shapes.length);
            let j=Math.floor(Math.random()*colors.length);
            box.classList.add(shapes[i]);
            box.style.backgroundColor=colors[j];
            
        }
    );
};
  

btn.addEventListener("click",generatePattern);
window.addEventListener("load",generatePattern);