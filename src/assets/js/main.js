//import mediumZoom from 'medium-zoom'; no la utilizo porque no funciona correctamente con mi library de swiper
import Splide from '@splidejs/splide';
import Swiper from 'swiper/bundle';



/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        console.log('click')
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu');

}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {

    let itemCLass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemCLass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach(el => {

    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active');
    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        console.log({ modalBtn, i });
        console.log("dsads");
        modal(i);
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            console.log("close")
            modalView.classList.remove('active-modal');
        })
    })
})

/*==================== TEMPLATE  ====================*/

const imgContains = document.querySelectorAll('.portfolio__img'),
    modalShow = document.querySelector('#modal-show-image'),
    modalImg = document.querySelector('#modal-img');

imgContains.forEach((imgTag, i, parent) => {
    imgTag.addEventListener('click', () => {
        modalShow.classList.add('active-modal');
        const srcModal = imgTag.getAttribute('data-src-img')
        modalImg.src = imgTag.src;
    });
});

modalShow.addEventListener('click', () => {
    modalShow.classList.remove('active-modal');
})



/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {

    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // mousewheel:true,
    // keyboard:true,
})



/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrolly = window.pageYOffset;
    sections.forEach(current => {

        const sectionHeight = current.offsetHeight; //Height including padding and border
        const sectionTop = current.offsetTop - 50;//Espacio que hay desde el etiqueta padre hasta el hijo        
        const sectionId = current.getAttribute('id');

        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrenTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrectIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';


// We validate if the user previously chose a topic
if (selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / desactivate the theme manually with the button
themeButton.addEventListener('click', () => {

    // console.log("getCurrenTheme", getCurrenTheme());
    // console.log("getCurrectIcon", getCurrectIcon());
    // console.log("darkTheme", darkTheme);
    // console.log("iconTheme", iconTheme)

    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrenTheme());
    localStorage.setItem('selected-icon', getCurrectIcon());
})


// Post a user

///Get values from Form with vanilla js
/*const form = document.querySelector('.contact__form')
const formularios =document.forms;

console.log(formularios[0]);
console.log(formularios['contactar'])

function printDom(node,prefix) {    
    console.log(`${prefix} ${node.nodeName} : ${node.nodeType} -> ${node.nodeValue}`);
    for (let index = 0; index < node.childNodes.length; index++) {
        printDom(node.childNodes[index],`${prefix} \t`)    
    }
}
printDom(formularios['contactar'],"");
*/


/*==================== SEND EMAIL MESSAGE ====================*/

const name = document.getElementsByName('name'),
    email = document.getElementsByName('email'),
    project = document.getElementsByName('project'),
    message = document.getElementsByName('message'),
    bntSendMessage = document.getElementById('sendMessage');


 function checkInputs() {     
   
    //get the values from Inputs
    const nameValue = name[0].value.trim();
    const emailValue = email[0].value.trim();
    const projectValue = project[0].value.trim();
    const messageValue = message[0].value.trim();
    if (nameValue === '') {
        //show Error
        //add Error  class
        setErrorFor(name[0], 'Name cannot be blank.')
    } else {
        setSuccessFor(name[0])

        if (emailValue === '') {
            setErrorFor(email[0], 'Email cannot be blank.');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email[0], 'Email is not valid.');
        } else {
            setSuccessFor(email[0]);


            if (projectValue === '') {
                setErrorFor(project[0], 'Projecto or Subject cannot be blank.');
            } else {
                setSuccessFor(project[0]);

                if (messageValue === '') {
                    setErrorFor(message[0], 'Projecto or Subject cannot be blank.');
                } else {
                    setSuccessFor(message[0]);                 

                    //desabilitamos el bottom

                    bntSendMessage.disabled= true;
                    let MailResquest = {
                        name: nameValue,
                        email: emailValue,
                        project: projectValue,
                        message: messageValue
                    };
                    const url = "https://server-mail-spring.herokuapp.com/server/api/sendemail";
                    //send mail message
                    // //sendMail(JSON.stringify(MailResquest));
                    makeRequest("POST", url, JSON.stringify(MailResquest)).then(rpta=>{
                        bntSendMessage.disabled= false;
                        console.log(rpta)
                    },error=>{
                        bntSendMessage.disabled= false;
                        console.log(error)
                    })
                }


            }

        }

    }



}
function setErrorFor(input, message) {
    const contacContent = input.parentElement;
    const small = contacContent.querySelector('small');
    //addError message inside small
    small.innerText = message;
}

function setSuccessFor(input) {
    const contacContent = input.parentElement;
    const small = contacContent.querySelector('small');
    //addError message inside small
    small.innerText = '';
}
function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
bntSendMessage.addEventListener('click', () => {
    checkInputs();
});

function makeRequest(method, url, objcReq = null) {

    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if(method==='POST'){
            xhr.send(objcReq);
        }else{
            xhr.send();
        }

        
    });
}
// function sendMail(jsonObject) {

//     console.log(jsonObject)

//     const url = "http://localhost:8080/server/api/sendemail";
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     xhr.onload = function () {
//         if (xhr.readyState == 4 && xhr.status == "201" || xhr.status == "200") {
//             console.log("esta es la respuesta positiva del servidor");
//             console.log(xhr.responseText);
//             console.log(xhr.responseText);

//         } else {
//             console.log("esta es la respuesta negativa del servidor");
//             console.log(xhr.responseText);
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.send(jsonObject);

// }

