let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu")
};
window.onscroll = ()=>{
    menu.classList.remove("move");
    navbar.classList.remove("open-menu")

}
// reviews content

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// email script
function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendbtn = document.querySelector(".snd-btn");

    sendbtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate()

function sendmail(name,email,msg){
    emailjs.send("service_i0w1g8k","template_7gq4yvo",{
        from_name:email,
        to_name: name,
        message: msg,
        
        });
}

function emptyerror() {
    Swal.fire({
        icon: "error",
        title: "Oh No...",
        text: "fields cannot be empty"
    });
}

function success() {
    Swal.fire({
        icon: "success",
        title: "Email sent successfully",
        text: "I try to reply in 24 hours"
    });
}

// header background color change

let header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle('header-active',window.scrollY >0)
})

// top scroll
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () =>{
    scrollTop.classList.toggle('scroll-active',window.scrollY >= 400)
})