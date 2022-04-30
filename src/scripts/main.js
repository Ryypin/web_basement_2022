let buyButton = document.querySelector("#buyButton");
let divPopUp = document.querySelector(".payPopUp");
let divPopUpClose = document.querySelector(".PopUpButton");

if(buyButton){
    buyButton.addEventListener('click', event => {
        divPopUp.classList.add("open");
    });
    divPopUpClose.addEventListener('click', event => {
        divPopUp.classList.remove("open");
    });

}
