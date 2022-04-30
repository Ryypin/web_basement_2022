let buyButton = document.querySelector("#buyButton");
let buyButtonExitPay = document.querySelector("#popUpExitPay");
let divPopUp = document.querySelector(".payPopUp");
let divPopUpClose = document.querySelector(".PopUpButton");



if(buyButton){
    buyButton.addEventListener('click', event => {
        divPopUp.classList.add("open");
    });
    divPopUpClose.addEventListener('click', event => {
        divPopUp.classList.remove("open");
    });
    buyButtonExitPay.addEventListener('click', event => {
        divPopUp.classList.remove("open");
    });

}
