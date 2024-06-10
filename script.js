var flag=0;
document.querySelector("#menuButton").addEventListener("click",function(){
  console.log(flag)
  if(flag==0){
    document.querySelector("#menu").style.display="flex";
    flag=1;
    console.log(flag);
  }
  else{
    document.querySelector("#menu").style.display="none";
    flag=0;
    console.log(flag)
  }
})

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp : 0.1
});

Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.textAnimate(".text" /* Element to target.*/, {
  //Parameters are optional.
  style:1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});