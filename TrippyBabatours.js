let bookNow = document.querySelectorAll(".details div h4");
let cancel = document.querySelector("#contact-form i");
let cancelM = document.getElementById("cancel")
let menu = document.getElementById("menu")
let layer= document.getElementById("layer");
let list = document.querySelector("#header ul")
bookNow.forEach(function (element,index) {
    bookNow[index].addEventListener("click",function (e) {
        console.log(e.pageX,e.pageY);
        layer.style.display = "flex"
        layer.style.top = e.pageY
        layer.style.left = e.pageX
        
    })
})
cancel.addEventListener("click",function name() {
    layer.style.display = "none"
})

menu.addEventListener("click",()=>{
    list.style.display = "flex"
    menu.style.display = "none"
})
cancelM.addEventListener("click",()=>{
    list.style.display = "none"
    menu.style.display = "block"
})