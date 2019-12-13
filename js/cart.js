window.onload = function(){
	const API = "http://5de068a9bb46ce001434c17e.mockapi.io/products";
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
	  const sp = document.querySelector("#cart");
	  console.log(sp)
	  sp.innerHTML = cart.map(product => { 
	        return `
	        		<tr style="height: 120px;">
						<td>${product.name}</td>
						<td><img src="${product.avatar}"></td>
						<td>${product.price}</td>
						<td>
							<button>X</button>
						</td>
					</tr>
	        `;
	        }).join('')
	}
	showCart();
}
