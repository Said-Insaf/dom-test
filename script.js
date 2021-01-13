let favs = Array.from(document.querySelectorAll(".fa-heart"))
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
let cards = Array.from(document.querySelectorAll(".card"))
let plusBtns = Array.from(document.querySelectorAll(".plus-btn"))
let minusBtns = Array.from(document.querySelectorAll(".minus-btn"))




// Favourites Part
for (let fav of favs) {
    fav.addEventListener("click", function () {
        fav.style.color === 'red' ? fav.style.color = '#212529' : fav.style.color = 'red'
    })
}
// Remove button Part
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        // deleteBtns[i].parentNode.parentNode.parentNode.remove()
        cards[i].remove()
        total()
    })
}





