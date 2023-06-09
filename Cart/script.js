
//*******************quantity buttons logic**********************

const btnAdd = document.getElementById("Add")
const btnSub = document.getElementById("Sub")
// const quantity = document.getElementById("quantity")





function ChangeQnt(e){
    
    const quantity = e.parentElement.querySelector("#quantity")
 
    
    if (e.getAttribute("id") == "Add") {
        
        quantity.setAttribute("value" ,`${quantity.value = Number(quantity.value) + 1 }` )
        updateTotalPrice(e.parentElement.getAttribute("prdNum") , Number(quantity.value ) , "ADD")

    }
    else{
        if(quantity.value != 0)
        {
        quantity.setAttribute("value" ,`${quantity.value = Number(quantity.value) - 1 }` )
        updateTotalPrice(e.parentElement.getAttribute("prdNum") , Number(quantity.value ) , "SUB")
        }
    }

}

function updateTotalPrice(productNum , qnt , OperationType){
    const totalAmountelm = document.getElementById("Amount")
    const price = Number(document.getElementById(`product${productNum}Price`).innerText)
    let NewAmount
    if(OperationType == "ADD")
    {
        NewAmount =  ((totalAmountelm.innerText)*1 ) + (price)
    }
    else{
        NewAmount =  ((totalAmountelm.innerText)*1 ) - (price)
    }
    totalAmountelm.innerText = NewAmount
   
}

//******************************************************************* */