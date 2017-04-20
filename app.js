//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);

function init() {

    var controller = new ScrollMagic.Controller();

    var trigger1 = document.getElementById('trigger1');
    
    var timeline1 = new TimelineMax({yoyo:true, repeat:-1, ease:Power0.easeInOut});
    timeline1.to(['.ninnos-portada', '.remo'], 5, {y: -20});
    timeline1.to('.fondo-agua', 5, {x: -70}, 0);
    timeline1.to('.agua2', 5, {y: 30}, 0);
    timeline1.to('.agua3', 5, {x: 100}, 0);
    timeline1.to('.agua4', 5, {y: 30}, 0);
    timeline1.to(['#portadaTotoParpadoArriba1', '#portadaTotoParpadoArriba2'], .6, {y:-15}, 0);
    timeline1.to(['#portadaTotoParpadoAbajo1', '#portadaTotoParpadoAbajo2'], .6, {y:15}, 0);
    timeline1.to(['#portadaJoelParpadoArriba1', '#portadaJoelParpadoArriba2'], .5, {y:-15}, 0.2);
    timeline1.to(['#portadaJoelParpadoAbajo1', '#portadaJoelParpadoAbajo2'], .5, {y:15}, 0.2);

    var scene1 = new ScrollMagic.Scene({ triggerElement: trigger1, duration: 700});
    scene1.setTween(timeline1); // trigger a TweenMax.to tween
    scene1.addIndicators({ name: "1 (duration: 700)" }); // add indicators (requires plugin)
    scene1.addTo(controller);

    var trigger2 = document.getElementById("trigger2");
    
    var timeline2 = new TimelineMax({ease:Power0.easeInOut});
    timeline2.to('#primera-parte', 2, {opacity:1}, 0);
    timeline2.to('#primera-parte', 10, {y: 170}, 3);
    timeline2.to('#kids', 3, {opacity: 1}, 0);
    timeline2.to(['#circulo1', '#circulo4'], 2, {opacity: 1}, 4);
    timeline2.to(['#circulo2', '#circulo5'], 2, {opacity: 1}, 4.5);
    timeline2.to(['#circulo3', '#circulo6'], 2, {opacity: 1}, 5);
    timeline2.to('#circulo7', 2, {opacity: 1}, 5.5);
    timeline2.to(['#nube1','#bote1','#remo1', '#remo2'], 2, {opacity: 1}, 6);

    var scene2 = new ScrollMagic.Scene({ triggerElement: trigger2, duration: 500});
    scene2.setTween(timeline2);
    scene2.addIndicators({ name: "2 (duration: 500px)" });
    scene2.addTo(controller);
    
    var timeline3 = new TimelineMax({yoyo:true, repeat:-1, ease:Power0.easeInOut});
    timeline3.to('#brazoPremio', 10, {rotation: 25, transformOrigin:"left 50%"}, 0.5);
    timeline3.to(['#parte1TotoParpadoArriba1', '#parte1TotoParpadoArriba2'], .6, {y:-60}, 0);
    timeline3.to(['#parte1TotoParpadoAbajo1', '#parte1TotoParpadoAbajo2'], .6, {y:60}, 0);
    timeline3.to(['#parte1JoelParpadoArriba1', '#parte1JoelParpadoArriba2'], .5, {y:-60}, 0.2);
    timeline3.to(['#parte1JoelParpadoAbajo1', '#parte1JoelParpadoAbajo2'], .5, {y:60}, 0.2);
    timeline3.to('#idea', 5, {y: 10});

    var scene3 = new ScrollMagic.Scene({ triggerElement: trigger2, duration: 700});  
    scene3.setTween(timeline3);   
    scene3.addIndicators({ name: "3 (duration: 700px)" });
    scene3.addTo(controller);

    var trigger3 = document.getElementById("trigger3");
    
    var timeline4 = new TimelineMax({ease:Power0.easeInOut});
    timeline4.to('#segunda-parte', 2, {opacity:1}, 0);
    timeline4.to('#segunda-parte', 100, {y: 170}, 5);

    var scene4 = new ScrollMagic.Scene({ triggerElement: trigger3, duration: 500 });
    scene4.setTween(timeline4);
    scene4.addIndicators({ name: "4 (duration: 500px)" });
    scene4.addTo(controller);

    var timeline5 = new TimelineMax({ease:Power0.easeInOut});
    timeline5.to('#bote-manos', 60, {x: 650, y: -220});
    timeline5.to('#bote-manos', 2, {css:{rotation: 25, zIndex: 4}});
    timeline5.to('#bote-manos', 60, {x: -170, y: -290});
    timeline5.to('#bote-manos', 2, {css:{zIndex: 1}});
    timeline5.to('#bote-manos', 2, {css:{rotation: 10}});
    timeline5.to('#bote-manos', 5, {x: -5});
    timeline5.to('#bote-manos', 2, {css:{rotation: -10}});
    timeline5.to('#bote-manos', 60, {x: 650, y: -650});

    var scene5 = new ScrollMagic.Scene({ triggerElement: trigger3, duration: 700 });
    scene5.setTween(timeline5);
    scene5.addIndicators({ name: "5 (duration: 700px)" });
    scene5.addTo(controller);

    var trigger4 = document.getElementById("trigger4");

    var timeline6 = new TimelineMax({ease:Power0.easeInOut});
    timeline6.to('#tercera-parte', 2, {opacity:1}, 0);
    timeline6.to('#tercera-parte', 70, {y: 170}, 20);
    timeline6.to('#lampara', 5, {css:{rotation: 20}});
    timeline6.to('#bombilla', 0.2, {css:{opacity: 0}});  
    timeline6.to('#lampara', 10, {x: -370}, 100); 
    timeline6.to('#lampara', 5, {css:{rotation: 50}});

    var scene6 = new ScrollMagic.Scene({triggerElement: trigger4, duration: 500 });
    scene6.setTween(timeline6);
    scene6.addIndicators({ name: "6 (duration: 500px)" });
    scene6.addTo(controller);

    var timeline7 = new TimelineMax({repeat:-1, ease:Power0.easeInOut});
    timeline7.to('#gota1', 1, {css:{opacity:1}});
    timeline7.to('#gota2', 1, {css:{opacity:1}});
    timeline7.to('#gota3', 1, {css:{opacity:1}});
    timeline7.to('#gota4', 1, {css:{opacity:1}});
    timeline7.to('#gota1', 1, {css:{opacity:1}});
    timeline7.to('#gota6', 1, {css:{opacity:1}});
    timeline7.to('#gota7', 1, {css:{opacity:1}});
    timeline7.to('#gota8', 1, {css:{opacity:1}});
    timeline7.to('#gota9', 1, {css:{opacity:1}});
    timeline7.to('#gota10', 1, {css:{opacity:1}});

    var scene7 = new ScrollMagic.Scene({ triggerElement: trigger4, offset: 500, duration: 200});
    scene7.setTween(timeline7);
    scene7.addIndicators({ name: "7 (duration: 700px)" });
    scene7.addTo(controller);
}



