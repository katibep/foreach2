const cards=document.querySelector(".cards")
async function allProducts(){
    try {
        const response=await fetch ("https://dummyjson.com/products")
        const data=await response.json();
        const products=data.products;
        const newProducts=products.slice(0,4);
        renderproducts(newProducts);
    } catch (error) {
       console.error("error fetching products:error");
    }
}
function renderproducts(newProducts){
    cards.innerHTML='';
    newProducts.forEach((products) => {
    const productHTML=` <div class="cards">
    <div class="card2">
        <div class="card">
            <i class='bx bx-heart two'></i>
            <div class="image">
                <img src="${products.images[0]}" alt="">
            </div>
            <div class="words">
             <p>${products.category}</p>
             <p class="all">${products.title} </p>
             <div class="stras">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <span>${products.rating}</span>
             </div>
             <p class="all">$${products.price}</p>
            </div>
        </div>
    </div>
   </div>` 
    cards.insertAdjacentHTML("beforeend",productHTML)  
    });
}
allProducts()