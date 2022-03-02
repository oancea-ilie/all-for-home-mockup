let bar = document.querySelector('.fa-bars');
let nav = document.querySelector('.nav');
let times = document.querySelector('.fa-times');

let ok = 0;
bar.addEventListener('click',()=>{
    if(ok == 0){
        nav.style.right = '0';
        nav.style.opacity = '1';
        ok = 1;
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-times');
    }else{
        nav.style.right = '-100%';
        nav.style.opacity = '0';
        ok = 0;
        bar.classList.remove('fa-times');
        bar.classList.add('fa-bars');
    }
});

