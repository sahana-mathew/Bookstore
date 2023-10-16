let dropdown = () =>{
    let categoryDropdown = document.querySelector('.category_dropdown')
    categoryDropdown.classList.toggle('show')
} 

window.onclick = function(event) {
    if (!event.target.matches('.closedropdown')) {
        let dropDown = document.getElementsByClassName('category_dropdown')

        for (let i = 0; i<dropDown.length; i++) {
            let x = dropDown[i];

            if (x.classList.contains('show')) {
                x.classList.remove('show')
            }
            
        }
    }
}


// ligin & signup

const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

// password show and hide
let inputPassword = document.getElementById('input-password')
let eyeIconShow = document.getElementById('eye-icon-show')
let eyeIconHide = document.getElementById('eye-icon-hide')

let pwVisibility = () => {
    inputPassword.setAttribute('type','text')
    eyeIconShow.style.display = 'none'
    eyeIconHide.style.display = 'block'
}
let pwHide = () => {
    inputPassword.setAttribute('type','password')
    eyeIconShow.style.display = 'block'
    eyeIconHide.style.display = 'none'
}

let inputPassword1 = document.getElementById('input-password1')
let eyeIconShow1 = document.getElementById('eye-icon-show1')
let eyeIconHide1 = document.getElementById('eye-icon-hide1')

let pwVisibility1 = () => {
    inputPassword1.setAttribute('type','text')
    eyeIconShow1.style.display = 'none'
    eyeIconHide1.style.display = 'block'
}
let pwHide1 = () => {
    inputPassword1.setAttribute('type','password')
    eyeIconShow1.style.display = 'block'
    eyeIconHide1.style.display = 'none'
}


// let pwVisibility = () => {
//     if (inputPassword.type == 'password' ) {
//         inputPassword.type = 'text'
//         eyeIconHide.style.display = 'block'
//         eyeIconShow.style.display = 'none'

//     }
// }

// let pwHide = () => {
//     if (inputPassword.type == 'text') {
//         inputPassword.type = 'password'
//         eyeIconHide.style.display = 'none'
//         eyeIconShow.style.display = 'block'
//     }
// }