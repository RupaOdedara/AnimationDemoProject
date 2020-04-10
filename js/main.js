$( function() {






  // init plugin
  NodeCursor({
      cursor : true, 
      node : true, 
      cursor_velocity : 1, 
      node_velocity : 0.15, 
      native_cursor : 'none', 
      element_to_hover : '.nodeHover', 
      cursor_class_hover : 'disable', 
      node_class_hover : 'expand', 
      hide_mode : true, 
      hide_timing : 2000, 
  });



  var tl = new TimelineMax({onUpdate:updatePercentage});
  var tl2 = new TimelineMax();
  const controller = new ScrollMagic.Controller();
  
  tl.from('blockquote', .5, {x:200, opacity: 0});
  tl.from('span', 1, { width: 0}, "=-.5");
  tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
  tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
  tl.from('.circle-code', 1, { x:-100}, "=-.7");
  tl.from('.circle-design', 1, { x:100 }, "=-.7");
  tl.from('.circle-create', 1, { y:15 }, "=-.7");

  tl2.from("#box", 1, {opacity: 0, scale: 0});
  tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})
  
  const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
              triggerHook: "onLeave",
              duration: "100%"
  })
    .setPin(".sticky")
    .setTween(tl)
      .addTo(controller);
  
  const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
  })
    .setTween(tl2)
      .addTo(controller);
  
  
  function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    console.log(tl.progress());
  }
  
  
  const slider = document.querySelectorAll(".main");
  const slide = document.querySelectorAll(".slide");
  const slide1 = document.querySelectorAll(".slide1");
  const slide2 = document.querySelectorAll(".slide2");
  const slide3 = document.querySelectorAll(".slide3");
  const slide4 = document.querySelectorAll(".slide4");
  const slide5 = document.querySelectorAll(".slide5");
  const slide6 = document.querySelectorAll(".slide6");
  const headline =document.querySelectorAll(".headline");
  const heroimg = document.querySelectorAll(".heroimg");
  var tl3 = new TimelineMax();

  tl3.fromTo(slider, 1.5, {x: "-100%",y:"100%"},{y: "0%",x:"0%", ease: Power2.easeInOut },"-=1.2")
  .fromTo(slide1, 1.5, {opacity: 0,x:"30%"},{opacity: 1,x:"0%", ease: Power2.easeInOut },"-=1.2")
  .fromTo(slide2, 1.5, {opacity: 0,x:"30%"},{opacity: 1,x:"0%", ease: Power2.easeInOut },"-=1.2")
  .fromTo(slide3, 1.5, {opacity: 0,x:"30%"},{opacity: 1,x:"0%", ease: Power2.easeInOut },"-=1.2")
  .fromTo(slide4, 1.5, {opacity: 0,x:"30%"},{opacity: 1,x:"0%", ease: Power2.easeInOut },"-=1.2")
  .fromTo(slide5, 1.5, {opacity: 0,x:"30%"},{opacity: 1,x:"0%", ease: Power2.easeInOut },"-=1.2")
  .fromTo(slide6, 1.5, {opacity: 0,x:"30%"},{opacity: 1,x:"0%", ease: Power2.easeInOut },"-=1.2")
  .fromTo(headline,1.5,{opacity: 0,x:"30%"},{opacity: 1,x:"0%", ease: Power2.easeInOut },"-=2.2")
  .fromTo(heroimg,1.5,{opacity: 0,x:"10%"},{opacity: 1,x:"0%", ease: Power2.easeInOut },"-=1.5");
  
  
 
  // var tl4 = new TimelineMax();
  // $(heroimg).mouseenter(function(){
  //   tl4.to(this, 1, {x:"-30%",height:"50%"})
  // })
  
  // $(heroimg).mouseleave(function(){
  //   tl4.to(this, 1, {height:"40%",x:"-20%"})
  // })

  // portfolio animation


});

