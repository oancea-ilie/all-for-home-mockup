let bar = document.querySelector('.fa-bars');
let nav = document.querySelector('.nav');
let times = document.querySelector('.fa-times');
let homeNav = document.querySelector(".home-nav");

let ok = 0;
bar.addEventListener('click',()=>{
    if(ok == 0){

        if(nav){
            nav.style.right = '0';
            nav.style.opacity = '1';
        }
        if(homeNav){
            homeNav.style.right = '0';
            homeNav.style.opacity = '1';
        }

        ok = 1;
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-times');
    }else if(ok == 1){
        if(nav){
            nav.style.right = '-100%';
            nav.style.opacity = '0';
        }
        if(homeNav){
            homeNav.style.right = '-100%';
            homeNav.style.opacity = '0';
        }
        ok = 0;
        bar.classList.remove('fa-times');
        bar.classList.add('fa-bars');
    }
});


let corectie =()=>{
    if(window.innerWidth >=768){
        if(nav){
            nav.style.right = '0';
            nav.style.opacity = '1';
        }
        if(homeNav){
            homeNav.style.right = '0';
            homeNav.style.opacity = '1';
        }
        bar.classList.remove('fa-times');
        bar.classList.add('fa-bars');
        console.log('test');
    }else{
        if(nav){
            nav.style.right = '-100%';
            nav.style.opacity = '0';
        }
        if(homeNav){
            homeNav.style.right = '-100%';
            homeNav.style.opacity = '0';
        }
        
    }
}
corectie();
window.addEventListener('resize',corectie);


let heroWrapper = document.querySelector(".hero-wrapper");
let arr = ['url(../img/hero-foto.jpg)','url(../img/lunch.jpg)','url(../img/dinner.jpg)'];
let homeHeroWrapper= document.querySelector(".home-hero-wrapper");
let arr2 =['url(../img/discount.jpg)','url(../img/plan.jpg)','url(../img/recipes-bg.jpg)']
let i = 0;
setInterval(()=>{
    if(i == 3){
        i = 0;
    }
    if(heroWrapper){
        heroWrapper.style.backgroundImage = arr[i];
        i++;
    }
    else if(homeHeroWrapper){
        homeHeroWrapper.style.backgroundImage = arr[i];
        i++;
    }
},3000);
