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
  
  
  const cursor = document.querySelector(".cursor");
  
  
  
  document.addEventListener('mousemove',e => {
    cursor.setAttribute("style", "top:" + (e.pageY - 10 ) + "px; left:" + ( e.pageX - 10 ) + "px;");
  })


});

