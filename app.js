let flowers = [{
image: "pictures/peonies-pink.jpg",     
name: "Pink Peonies",
text: "Some text about beautiful and fresh flowers.",
price: 14,
qtty: 1
},
{
image: "pictures/peonies-white.jpg",     
name: "White Peonies",
text: "Some text about beautiful and fresh flowers.",
price: 14,
qtty: 1
},
{
image: "pictures/roses.jpg",     
name: "Roses",
text: "Some text about beautiful and fresh flowers.",
price: 12,
qtty: 1
},
{
image: "pictures/tulips.jpg",     
name: "Tulips",
text: "Some text about beautiful and fresh flowers.",
price: 8,
qtty: 1
},
{
image: "pictures/gerbera.jpg",     
name: "Gerbera",
text: "Some text about beautiful and fresh flowers.",
price: 10,
qtty: 1
},
{
image: "pictures/box1.jpg",     
name: "Medium Box of Fresh Flowers",
text: "Some text about beautiful and fresh flowers.",
price: 30,
qtty: 1
},
{
image: "pictures/box2.jpg",     
name: "Large Box of Fresh Flowers",
text: "Some text about beautiful and fresh flowers.",
price: 40,
qtty: 1
},
{
image: "pictures/wedding.jpg",     
name: "Wedding Bouquet",
text: "Some text about beautiful and fresh flowers.",
price: 27,
qtty: 1
},
{
image: "pictures/fresh-flowers.jpg",     
name: "Monthly Subscription. Fresh Flowers every week",
text: "Some text about beautiful and fresh flowers.",
price: 60,
qtty: 1
}
]

for(let i = 0; i < flowers.length; i++){

document.getElementById("main-container").innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${flowers[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${flowers[i].name}</h5>
    <p class="card-text">${flowers[i].text}.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${flowers[i].price} €</li>
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-light addToCart">Add to Cart</button>
   
    
  </div>
</div>`
}

let btns = document.getElementsByClassName("addToCart");
let cart = [];

for(let i = 0; i < btns.length; i++)
{
    btns[i].addEventListener("click", function()
    {

     if(cart.find((value) => value.name == flowers[i].name))
     {
        cart[i].qtty++;
     }
     else
     {
        cart.push(flowers[i])
     }

    CreatCart();
    Total();

    })      
}

function CreatCart () {
    document.getElementById("cart-items").innerHTML = "";
 for(let val of cart) 
        {
        document.getElementById("cart-items").innerHTML += 
        `
        <div class="d-flex justify-content-around">
        <p>${val.name}</p>
        <p><span> <button type="button" class="btn btn-light btn-minus">-</button> </span><span class="qtty">${val.qtty}</span><span> <button type="button" class="btn btn-light btn-plus">+</button> </span></p>
        <p>${val.price} € / per bouquet<span> <button type="button" class="btn btn-light btn-x">X</button></span></p>
        </div>
        `;
        }

        let plus = document.getElementsByClassName("btn-plus");
        let minus = document.getElementsByClassName("btn-minus");
        let close = document.getElementsByClassName("btn-x");
        
        for(let i = 0; i < plus.length; i++) 
        {
            plus[i].addEventListener("click", function()
            {
            cart[i].qtty++;
            document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty;    
             Total(); 
            })

            minus[i].addEventListener("click", function()
            {
                if(cart[i].qtty == 1)
                {
                    cart.splice(i,1);
                    CreatCart();
                }
                else 
                {
                    cart[i].qtty--;
                    document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty; 
                }
                    Total();
            })

                close[i].addEventListener("click", function()
                {
                    cart[i].qtty = 1;
                    cart.splice(i,1);
                    CreatCart();
                    Total();
                })
        }

} //end of CreatCard Function

function Total () 
{
  let total = 0;
    for(let val of cart)
  {
    total = total + (val.price * val.qtty);
    }
//      if(total > 100 ){
//         myFunction();
//   }

    document.getElementById("total").innerHTML = `${total} €`;

}

// function myFunction() {
//   alert("Your Have 10% Discount");
// }
   
