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
let alberthumValue = sessionStorage.getItem("credit");

let alberthumToEuro = document.querySelector("[data-euro]");

if(alberthum && alberthumValue){
        alberthum.innerHTML = alberthumValue;
        alberthum.setAttribute("data-alberthum",alberthumValue );
        alberthumToEuro.innerHTML =  (alberthumValue *1.52).toFixed(5);
//    console.log(alberthumValue);
}

if(alberthum){
    alberthumValue = Number(alberthum.getAttribute("data-alberthum") );

    let Products = document.querySelectorAll("[data-price]");

        Products.forEach(item => {
            item.addEventListener('click', event => {
                console.log(event.target);
                let dataSale = event.target.getAttribute("data-price");

                console.log(alberthumValue +" "+ dataSale);
                if(alberthumValue >= dataSale){
                alberthumValue =   alberthumValue - dataSale;
                alberthum.innerHTML = alberthumValue;
                sessionStorage.setItem("credit", alberthumValue);
                alberthumToEuro.innerHTML =  (alberthumValue *1.52).toFixed(2) + '€';
            }else{
                alert("Crédit insuffisant, vous êtes viré.");
            }
            });
        });

}
