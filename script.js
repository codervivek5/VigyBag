var main = document.querySelector(".main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove",function(dets){
   gsap.to("#cursor",{
    x:dets.x,
    y:dets.y,
    duration:0.6,
    //ease:"elastic.out"
   })
})
imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View more";
    gsap.to("#cursor",{
        scale:10,
        backgroundColor: "#ffffff8a"
    })
})
imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = "";
    gsap.to("#cursor",{
        scale:1,
        backgroundColor: "#ffff"
    })
})