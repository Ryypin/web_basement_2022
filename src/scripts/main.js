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



let alberthum = document.querySelector("[data-alberthum]");
let alberthumValue = 0;
if(alberthum){
    alberthumValue = Number(alberthum.getAttribute("data-alberthum") );
    console.log(alberthumValue);


    let Products = document.querySelectorAll("[data-price]");
    Products.forEach(event => { event.addEventListener("click", e => {
          let getvalue = event.target.getAttribute(data-price);
          console.log(getvalue);
        })});


}



Products = (multicheckboxes.forEach(t => {
        t.addEventListener("click", e => {
            "true" == e.target.getAttribute("data-button") && t.classList.toggle("toolContainer__checkboxes--open")
        })