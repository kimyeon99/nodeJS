// let app = new Vue({
//     el:'#app',
//     data: {
//         brand:'Vue',
//         product:'Socks',
//         selectedVariant:0,
//         image:'./assets/socks_green.jpg',
//         inStock:true,
//         // inventory: 100
//         details:['80% cotton', '20% polyester', 'Gender-neutral'],
//         variants:[
//             {
//                 variantId:2334,
//                 variantColor:'green',
//                 variantImage:'./assets/socks_green.jpg',
//                 variantQuantity:10
//             },
//             {
//                 variantId:2335,
//                 variantColor:'blue',
//                 variantImage:'./assets/socks_blue.jpg',
//                 variantQuantity:0
//             }
//         ],
//         cart:0
//     },
//     methods:{
//         addToCart(){
//             this.cart += 1
//         },
//         updateProduct(index){
//             this.selectedVariant = index
//         }
//     },
//     computed:{
//         title(){
//             return this.brand + ' ' + this.product
//         },
//         image(){
//             return this.variants[this.selectedVariant].variantImage
//         },
//         inStock(){
//             return this.variants[this.selectedVariant].variantQuantity
//         }
//     }
// });

Vue.component('product', {
    template: `
     <div class="product">  

        <div class="product-image">
          <img :src="image" />
        </div>
  
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
  
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
  
            <div class="color-box"
                 v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div> 
  
            <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }">
            Add to cart
            </button>
            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
         </div>  
      
      </div>
     `,
    data() {
      return {
          product: 'Socks',
          brand: 'Vue Mastery',
          selectedVariant: 0,
          details: ['80% cotton', '20% polyester', 'Gender-neutral'],
          variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
              variantQuantity: 10     
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
              variantQuantity: 0     
            }
          ],
          cart:0
      }
    },
    methods: {
    addToCart: function() {
        //this.cart+=1
    },
    updateProduct: function(index) {  
        this.selectedVariant = index
    }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product  
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
        if (this.premium) {
            return "Free"
        }
            return 2.99
        }
    }
  })
  
  var app = new Vue({
    el: '#app',
    data: {
        cart:0
    },
    methods: {
        addToCart(id){this.cart.push(id)}
    }
});

  