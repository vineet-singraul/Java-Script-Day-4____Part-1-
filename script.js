function PriceDiscount() {
     let price = Number(prompt("Enter The Price :"));
     let Coopen = confirm("Do You Have Any Apply Coopen :");

     if(Coopen == true)
     {
         let price1 = price*0.10;
         price1 = price - price1;

        alert("With Coopen : "+price1)
     }
     else{
        alert("Without Apply Coopen : "+price)
        
     }
}

PriceDiscount();
