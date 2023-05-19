const btn = document.querySelector(".j-btn");

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

btn.addEventListener("click", () => {
    alert(`1. Ширина окна: ${clientWidth}, высота окна: ${clientHeight}`);
    
})

let clientScrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,  
    document.body.clientHeight, document.documentElement.clientHeight);

    let clientScrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,  
        document.body.clientWidth, document.documentElement.clientWidth);

    btn.addEventListener("click", () => {
        alert(`2. Ширина документа: ${clientScrollWidth}, высота окна: ${clientScrollHeight}`);
        
    })