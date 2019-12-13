const API = "https://5de068a9bb46ce001434c17e.mockapi.io/products";
function getProduct(API) {
  axios.get(API)
    .then(function (response) {
      const product = response.data;
      const newProduct = document.getElementById("new-prd");
      newProduct.innerHTML =  product.map(products => { 
        return ` <div class="sanpham">
                  <img src="${products.avatar}">
                  <a onclick="setItem(id=${products.id})" href="product_detail.html"><p>${products.name}</p></a>
                  <span>${products.price}</span>
                </div>`}).join('');
    })
    .catch(function (error) {
      console.log("lỗi" + error);
    })
}
getProduct(API)
function setItem(id){
  // alert(id);
  localStorage.setItem("id",id);
}

