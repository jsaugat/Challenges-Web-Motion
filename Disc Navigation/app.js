var active = 3
var panCircles = document.querySelectorAll('.panCircle')
var second = document.querySelectorAll('.second')

gsap.to(panCircles[active-1],{
    opacity : .4
})
gsap.to(second[active-1],{
    opacity: 1
})

panCircles.forEach((elem,index)=>{
    elem.addEventListener('click',(e)=>{
        gsap.to("#circle",{
            rotate : (3-(index+1))*10,
            ease : Expo.easeInOut,
            duration : 1
        })
        gsap.to(second[index],{
            opacity: 1
        })
        greyOut();
        gsap.to(e.target,{
            opacity : 0.5
        })
    })
})

function greyOut(){
    gsap.to(panCircles,{
        opacity : 0.09
    })
    gsap.to(second,{
        opacity : .5
    })
}

gsap.to('#circle',{
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 1
})