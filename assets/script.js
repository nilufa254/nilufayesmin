var typed = new Typed(".typing",{
    strings: ["Web Designer","Web Developer","Wordpress Designer","Wordpress Developer"],
    typeSpeed: 80,
    backSpeed: 80,
});



// circle Skills ///////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>` ;
    }
    elem.innerHTML = points;


    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

// mix it up portfolio section //
var mixer = mixitup('.portfolio-gallary');




// Active Menu ///////////////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll" ,activeMenu);


// Sticky Navbar ///////////////////
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 50)

})

// toggle Navbar ///////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-list");


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");

}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");

}

// ParaLLax  Scrolling///////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});



const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));



//Contact Form///////////////////

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const number = document.getElementById("number");
const message = document.getElementById("message");
// add even listener o form container.....
const submit = document.getElementsByClassName("form")[0];

submit.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log("clicked");

    let ebody = `
    <b>name:</b>${fullName.value}
    <br>
    <b>email:</b>${email.value}
    <br>
    <b>adress:</b>${address.value}
    <br>
    <b>number:</b>${number.value}
    <br> 
    <b>message: </b>${message.value}   
    `

    // Email code here.....
    Email.send({
        SecureToken : "48031d76-2241-4c2c-a343-ae1c84f11136",
        To : 'nilufayesmin254@gmail.com',
        From : "nilufayesmin254@gmail.com",
        Subject : "testing email form" + email.value ,
        Body : ebody
    }).then(
        message => {
                    if (message == "OK"){
                        Swal.fire({
                            title: "Success!",
                            text: "Message sent successfully!",
                            // icon: "success"
                          });
                    }
                }
             );
        });

//     const messageBody = `Full Name: ${fullName.value}<br> email: ${email.value}<br>
//      address: ${address.value}<br> number: ${number.value}<br> message: ${message.value}`;




// function emailSend () {

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "nilufayesmin254@gmail.com",
//         Password : "FE5410AB86B1E39A373A7011098A123DE6E2",

//         To : 'nilufayesmin254@gmail.com',
//         From : "nilufayesmin254@gmail.com",
//         Subject : address.value,
//         Body : messageBody
//     }).then(
//       message => {
//         if (message == "OK"){
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message sent successfully!",
//                 // icon: "success"
//               });
//         }
//       }
//     );
    
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     emailSend();
// });




// const form = document.querySelector("form");
// const fullname  = document.getElementById("name");
// const email  = document.getElementById("email");
// const address  = document.getElementById("address");
// const number  = document.getElementById("number");
// const message  = document.getElementById("message");



// function sendEmail(){

// //   const bodyMessage = `Full name: ${fullname.value}<br> Email: 
// //   ${email.value}<br> Address: ${address.value}<br> Phone Number: ${number.value}<br>
// //   Message: ${message.value}`;
  
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "nilufayesmin254@gmail.com",
//     Password : "A774F8EE2A11D986007CFF78A639E7A44F96",
//     To : 'nilufayesmin254@gmail.com',
//     From : "nilufayesmin254@gmail.com",
//     Subject : subject.value,
//     Body : bodyMessage
// }).then(
//   message => alert(message)
// );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// });