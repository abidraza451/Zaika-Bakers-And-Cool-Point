/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Menu show

navToggle.addEventListener('click' , ()=>{
  navMenu.classList.add('show-menu')
})

// Menu hidden 

navClose.addEventListener('click', ()=>{
  navMenu.classList.remove('show-menu')
})

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/

const blurHeader = ()=>{
  const header = document.getElementById('header');
  
  this.scrollY >= 50 ? header.classList.add('blur-header')
  : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = ()=>{
  const scrollUpBtn =  document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll')
                      : scrollUpBtn.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActiveLink = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current=>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass= document.querySelector('.nav__menu a[href*='+ sectionId +']')

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active')
          }else{
            sectionsClass.classList.remove('active')
          }
  })
}

window.addEventListener('scroll',scrollActiveLink)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  opacity: '1',
  scale: '1.1',
  duration: '2500',
  delay: '300'
})


sr.reveal(`.home__data, .about__img, .about__data, .visit__data`)

sr.reveal(`.home__img:nth-child(1), .footer__img-1, .footer__img-2` , { rotate: {z: -10} })
sr.reveal(`.home__bread, .about__bread` , { rotate: {z: 15} })
sr.reveal(`.home__footer` , { scale:1, origin: 'bottom'})
sr.reveal(`.footer__container` , { scale:1})

sr.reveal(`.new__card:nth-child(1) img` , { rotate: {z: -30}, distance: 0 })
sr.reveal(`.new__card:nth-child(2) img` , { rotate: {z: 15}, distance: 0, delay: 600 })
sr.reveal(`.new__card:nth-child(3) img` , { rotate: {z: -30}, distance: 0, delay: 900  })

sr.reveal(`.favorite__card img` , {interval: 100, rotate: {z: 15}, distance: 0 })


const pr = ScrollReveal({
  distance: '40px',
  opacity: '1',
  scale: '1.1',
  duration: 2500,
  delay: 300
});
pr.reveal('.home__img:nth-child(2)', {
  origin: 'top',
  rotate: { z: -10 },
  delay: 400
});

pr.reveal('.home__img:nth-child(3)', {
  origin: 'right',
  rotate: { z: -20 },
  delay: 600
});