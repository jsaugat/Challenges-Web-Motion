const timeline = gsap.timeline({defaults : {duration : 1}})
timeline
    .from('#group .elem #i1',{duration: 2,y: '200%', ease : 'expo', opacity:0})
    .to('#group .elem #i1',{y: '-100%',ease : 'expo'}) //this is

    .to('#group .elem #i2',{ y: '-50%',ease : 'expo'},'<0') //saugat
    .to('#group .elem #i2',{ y: '-100%',ease : 'expo'},'<1') //saugat

    .to('#group .elem #i3',{y: '-80%',ease : 'expo'},'<0') //designing the future
    .to('#group .elem #i3',{opacity:0},'<2') //designing the future
    .to('#loaderScreen' ,{opacity:0})
