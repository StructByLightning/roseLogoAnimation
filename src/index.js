window.addEventListener("load", ()=>{
  gsap.registerPlugin(DrawSVGPlugin)
  gsap.registerPlugin(MorphSVGPlugin)

  let tl = gsap.timeline({repeat: -1, repeatDelay: 1, ease:"sine.inOut"})
  //ring materialize
  tl.fromTo(".ring", {
    drawSVG: "0% 0%",
    strokeWidth: 0,
  }, {
    strokeWidth: 20,
    drawSVG: "250% 350%",
    duration: 1,
  })

  //grow rose
  tl.fromTo(".petal8", {
    scaleX: 0, 
    scaleY: 0, 
    transformOrigin: "center center"
  }, {
    scaleX: 1, 
    scaleY:1 , 
    transformOrigin: "center center",
    duration: .30,
  }, "<10%")
  tl.fromTo(".petal1", {scaleX:0, scaleY: 0, transformOrigin: "center center"}, {scaleX: 1, scaleY: 1, morphSVG: {shape: ".petal1End", type: "rotational"}, transformOrigin: "center center", duration: .45,}, "<")
  tl.fromTo(".petal2", {scaleX:0, scaleY: 0, transformOrigin: "center center"}, {scaleX: 1, scaleY: 1, morphSVG: {shape: ".petal2End", type: "rotational"}, transformOrigin: "center center", duration: .45,}, "<10%")
  tl.fromTo(".petal5", {scaleX:0, scaleY: 0, transformOrigin: "center center"}, {scaleX: 1, scaleY: 1, morphSVG: {shape: ".petal5End", type: "rotational"}, transformOrigin: "center center", duration: .45,}, "<10%")
  tl.fromTo(".petal3", {scaleX:0, scaleY: 0, transformOrigin: "center center"}, {scaleX: 1, scaleY: 1, morphSVG: {shape: ".petal3End", type: "rotational"}, transformOrigin: "center center", duration: .40,}, "<10%")
  tl.fromTo(".petal4", {scaleX:0, scaleY: 0, transformOrigin: "center center"}, {scaleX: 1, scaleY: 1, morphSVG: {shape: ".petal4End", type: "rotational"}, transformOrigin: "center center", duration: .40,}, "<10%")
  tl.fromTo(".petal6", {scaleX:0, scaleY: 0, transformOrigin: "center center"}, {scaleX: 1, scaleY: 1, morphSVG: {shape: ".petal6End", type: "rotational"}, transformOrigin: "center center", duration: .40,}, "<10%")
  tl.fromTo(".petal7", {scaleX:0, scaleY: 0, transformOrigin: "center center"}, {scaleX: 1, scaleY: 1, morphSVG: {shape: ".petal7End", type: "rotational"}, transformOrigin: "center center", duration: .40,}, "<10%")

  tl.fromTo(".vine1", {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", duration: .60,}, "<50%")
  tl.fromTo(".vine2", {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", duration: .50,}, "<20%")
  tl.fromTo(".vine3", {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", duration: .50,}, "<")
  tl.fromTo(".vine4", {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", duration: .50,}, "<10%")
  tl.fromTo(".vine5", {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", duration: .50,}, "<")

  tl.fromTo(".leaf1", {translateX: "-100%",translateY: "100%",}, {translateX: 0,translateY: 0,duration: 0.3, }, "<10%")
  tl.fromTo(".leaf2", {translateX: "-100%",translateY: "-100%",}, {translateX: 0,translateY: 0,duration: 0.3, }, "<")
  tl.fromTo(".leaf3", {translateX: "100%",translateY: "-100%",}, {translateX: 0,translateY: 0,duration: 0.3, }, "<")
  tl.fromTo(".leaf4", {translateX: "100%",translateY: "100%",}, {translateX: 0,translateY: 0,duration: 0.3, }, "<")





})