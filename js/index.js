
TweenLite.to('.hero__animaciones-llave', 2, { rotation: 540, delay: .9 });

gsap.to('.hero__animaciones-bug', { duration: 2.5, ease: "bounce", y: 170 });

gsap.to('.hero__animaciones-code-vector', {
    delay: 3,
    duration: 1,
    ease: 'elastic',
    borderRadius: '7%',
    border: '5px solid #ce4242',



});

gsap.to('.hero__animaciones-code-vector', {
    delay: 7,
    duration: 1,
    ease: 'elastic',
    borderRadius: '7%',
    border: '5px solid #c0e585',
    y: 4,
});

gsap.to('.hero__animaciones-code-vector', {
    delay: 8,
    duration: 1,

    ease: 'elastic',
    borderRadius: '7%',
    border: '5px solid #c0e58500',
    y: -1,
});

gsap.to('.hero__animaciones-bug', {
    delay: 5.5,
    duration: 2.5,
    ease: "bounce",
    y: -170,
    opacity: 0,
});


TweenLite.to('.hero__animaciones-bug', 2, { rotation: 800, delay: 5.5 });

gsap.to('.hero__animaciones-hand', {
    delay: 5,
    duration: 1,
    ease: "back",
    y: -120,
});

TweenLite.to('.hero__animaciones-llave', .7, { rotation: 0, delay: 5.5 });

gsap.to('.hero__animaciones-hand', {
    delay: 5,
    duration: 1,
    ease: "back",
    y: -120,
});

gsap.to('.hero__animaciones-hand', {
    delay: 6.5,
    duration: 1,
    ease: "back",
    y: 0,
});

let cambiaFotoHero = () => {
    document.querySelector('.hero__foto__img-perfil').src = 'img/perfil.jpg';
}

let cambiaFotoHero2 = () => {
    document.querySelector('.hero__foto__img-perfil').src = 'img/Me.jpg';
}


setTimeout('cambiaFotoHero()', 3500);
setTimeout('cambiaFotoHero2()', 7000);


