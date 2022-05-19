let params = (new URL(document.location)).searchParams;
// console.log(params.get("dataId"));
let dataid = params.get("dataId")
// console.log(dataid);
fetch(`https://jsonplaceholder.typicode.com/photos/${dataid}`).then(resp=>resp.json()).then(data=>{
        // console.log(data.title);
        let header = document.querySelector('header')
        let html = `
        <div class="container bootdey">
        <div class="col-md-12">
        <section class="panel">
              <div class="panel-body">
                  <div class="col-md-6">
                      <div class="pro-img-details">
                          <img src="${data.url}" alt="">
                      </div>
                      
                  </div>
                  <div class="col-md-6">
                      <h4 class="pro-d-title">
                          <a href="#" class="">
                              ${data.title}
                          </a>
                      </h4>
                      <p class="ids">
                          ${data.id}
                      </p>
                      <div class="product_meta">
                          <span class="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#">Jackets</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.</span>
                          <span class="tagged_as"><strong>Tags:</strong> <a rel="tag" href="#">mens</a>, <a rel="tag" href="#">womens</a>.</span>
                      </div>
                      <div class="m-bot15"> <strong>Price : $ ${data.id}30.00 </strong>   </div>
                      <div class="form-group">
                          <label>Quantity</label>
                          <input type="quantiy" placeholder="1" class="form-control quantity">
                      </div>
                      <p>
                          <button class="btn btn-round btn-danger add-cart" data-id="${data.id}" type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
                      </p>
                  </div>
              </div>
          </section>
          </div>
          </div>
        `
        
        header.innerHTML=html
        let addButtons = document.querySelectorAll(".add-cart");
        console.log(addButtons);
        document.addEventListener("DOMContentLoaded", function () {
          if (localStorage.getItem("basket") !== null) {
            calcCount();
          }
        });
        
        let basket = [];
        
        addButtons.forEach((btn) => {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            if (localStorage.getItem("basket") !== null) {
              basket = JSON.parse(localStorage.getItem("basket"));
            }
        
            let image = document.querySelector('.pro-img-details img').src
            let title = document.querySelector('.pro-d-title a').innerHTML
            let price = document.querySelector('.m-bot15 strong').innerHTML
            let id = this.getAttribute("data-id");
            let existedProduct = basket.find((x) => x.id == id);
            console.log(id);
            if (existedProduct === undefined) {
              let product = {
                id,
                image,
                title,
                price,
                count: 1,
              };
              basket.push(product);
            } else {
              existedProduct.count++;
            }
            localStorage.setItem("basket", JSON.stringify(basket));
            calcCount();
            console.log(basket);
          });
        });
        
        function calcCount() {
          let basket = JSON.parse(localStorage.getItem("basket"));
          let count = basket.reduce((t, val) => {
            return (t += val.count);
          }, 0);
          let countValue = document.querySelector("sup");
          countValue.innerText = count;
        }
        
})
