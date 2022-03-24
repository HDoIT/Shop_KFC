let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// ---------- review
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
      name: 'Độ',
      position: 'FontEnd Developer',
      photo:
        './images/logo1.jpg',
      text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.1",
    },
    {
      name: 'C. Ronaldo',
      position: 'Software Engineer',
      photo: './images/logo2.jpg',
      text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.2",
    },
    {
      name: 'L. Messi',
      position: 'Data Entry',
      photo: './images/logo3.jpg',
      text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.3",
    },
    {
      name: 'Neymar',
      position: 'Receptionist',
      photo: './images/logo4.jpg',
      text:
        "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.4",
    },
    {
      name: 'D.Degea',
      position: 'Graphic Designer',
      photo: './images/logo5.jpg',
      text:
        "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.5",
    },
  ]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 3000)

// ---------
// const widthImg = 120;
// const slideContainer = document.querySelector('.slides')
// const slideImg = [...document.querySelectorAll('.slide')];

// slideContainer.style.width = `${slideImg.length * widthImg}rem`

// let index = 0;

// function prev(){
//     if(index===0)
//     {
//         index=slideImg.length -1
//     }
//     else{
//         index--
//     }

//     slideContainer.style.transform = `translateX(-${widthImg*index}rem)`;
// }
// document.querySelector('.prev').addEventListener('click',()=>{
//     prev()
// })

// function next(){
//     if(index<slideImg.length -1)
//     {
//         index++
//     }
//     else{
//         index=0
//     }

//     slideContainer.style.transform = `translateX(-${widthImg*index}rem)`;

// }



// document.querySelector('.next').addEventListener('click',()=>{
//     next()
// })

// setInterval(()=>{next()},20000)