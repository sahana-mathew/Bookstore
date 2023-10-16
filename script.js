// let dropdown = () =>{
//     let categoryDropdown = document.querySelector('.category_dropdown')
//     if (categoryDropdown.style.display == 'none') {
//         categoryDropdown.style.display = 'block'
//     } else {
//         categoryDropdown.style.display = 'none'
//     }
// }

// dropdown
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



// // search border
// let inputBorder = () => {
//     let input = document.getElementById('input')
//     // alert('hi')
//     input.style.border = '2px solid rgb(18, 1, 250)'
//     // box-shadow: rgb(18, 1, 250) 0px 5px 15px;
// }

// let inputBorder = document.querySelector('.input')
// let myInputBorder = () => {
//     alert('hii')
//     // if (inputBorder.style.boxShadow == 'none') {
//     //     inputBorder.style.boxShadow = 'rgb(18, 1, 250) 0px 5px 15px'
//     // } else {
//     //     inputBorder.style.boxShadow == 'none'
//     // }
//     // inputBorder.style.boxShadow = 'rgb(18, 1, 250) 0px 5px 15px'
// }

// inputBorder.addEventListener('click',myInputBorder = () => {
//     inputBorder.style.boxShadow = 'rgb(18, 1, 250) 0px 5px 15px'
// }
// )
// //  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;


// let myInputBorder = () =>{
//     let inputBorder = document.querySelector('.input')
//         if (inputBorder.style.boxShadow == 'none') {
//             inputBorder.style.boxShadow = 'rgb(18, 1, 250) 0px 5px 15px'
//         } else {
//             inputBorder.style.boxShadow = 'none' 
//         }
//     }






// courosel

let slideImg = document.querySelector('#slideimg')
function courosel() {
    
}