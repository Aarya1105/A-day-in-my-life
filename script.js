gsap.registerPlugin(ScrollTrigger);

/* Smooth Scroll */
const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth:true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main",{
scrollTop(value){
return arguments.length
? locoScroll.scrollTo(value,0,0)
: locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect(){
return {top:0,left:0,width:window.innerWidth,height:window.innerHeight};
}
});

ScrollTrigger.addEventListener("refresh",()=>locoScroll.update());
ScrollTrigger.refresh();

/* Fade Animation */
gsap.utils.toArray(".panel").forEach(panel=>{
gsap.from(panel,{
opacity:0,
y:100,
duration:1,
scrollTrigger:{
trigger:panel,
scroller:"#main",
start:"top 80%"
}
});
});

/* Butterfly Flying */
gsap.to("#butterfly",{
x:window.innerWidth,
y:200,
duration:6,
repeat:-1,
yoyo:true,
ease:"power1.inOut"
});

/* Scooty Moving */
gsap.to("#scooty",{
x:900,
scrollTrigger:{
trigger:".scooty-section",
scroller:"#main",
start:"top center",
end:"bottom center",
scrub:true
}
});

const music = document.getElementById("bg-music");

window.addEventListener("load", () => {
    music.muted = false;
    music.play().catch(()=>{});
});