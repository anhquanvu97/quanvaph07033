const API = "http://5de068a9bb46ce001434c17e.mockapi.io/products";
function detail(){
  const id = localStorage.getItem("id");
  // alert(id);
  axios.get(`${API}/${id}`)
  .then(function (response) {
    const product = response.data;
    // alert(product.name);
    const detail = document.getElementById("chitiet");
    const dt = document.getElementById("detail");
    const anh = document.getElementById("anh");
    anh.innerHTML = `<img src="${product.avatar}">`;
    dt.innerHTML = `<p>${product.detail}</p>`;
    // document.getElementById("price") = product.price;
    detail.innerHTML = `
        <a href="#" id="name">${product.name}</a>
        <p id=price style="font-size: 24px;text-decoration: none;color: #000;margin-top: 12px;
        margin-bottom: 5px;">${product.price}</p>
        <p id="ct">${product.short_desc}</p>
        <button onclick="addToCart()" style="width: 150px; margin-top: 30px; font-size: 16px;"><i class="fa fa-shopping-cart"></i>  Add to Cart</button>
    `;
  })
  .catch(function (error) {
    console.log(error);
  })
}
detail();
function addToCart(){
      let id = JSON.parse(localStorage.getItem("id"));
      axios.get(`${API}/${id}`)
      .then(function(response){
        const sp = response.data;

        if(localStorage.getItem("cart")){
          let cart = JSON.parse(localStorage.getItem("cart"));
          cart.push(sp);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
        else{
          localStorage.setItem("cart", JSON.stringify([sp]))
        }
      })
      .catch(function(error){
        console.log(error);
      })
    }
function showCart(){
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  const sp = document.getElementById("cart");
  cart.innerHTML = cart.map(product => { 
        return `${product.name}`;
        })
}
showCart();