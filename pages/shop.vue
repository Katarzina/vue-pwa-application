<template lang="pug"> 
  .container#top
   .container__inner.shop-section    
    <cart :cart="cart" v-on:changeshow="showCheckout" :cart-total="cartTotal" :checkout-bool="checkoutBool" :show-product="showProduct"></cart>
    .category(v-if="showProduct")    
     .sizes(v-for="category of categories")
      .cat(v-for="color of category.colors")      
        button.size(@click='changeCat(color.color)' :style="{ background: color.color }") {{color.color}}             
      .cat
        button.size(@click='changeCat("")') Clear filter
    .products  
      product(
       v-for="product of products",
       v-if="seekProp(product.color) === true",
       :product="product",
       :key="product.sku",     
       :cart="cart",       
       :cart-total="cartTotal",
       :show-product="showProduct"       
      )
    button(@click='returnProduct' v-if="checkoutBool") Return to Product         
    h1(v-if="checkoutBool") Checkout
    checkout(
      :cart="cart",
      :cart-total="cartTotal",
      :checkout-bool="checkoutBool"       
    )   
    
</template>

<script>
import Cart from '../components/Cart'
import Product from '../components/Product'
import Checkout from '../components/Checkout'
import products from '../content/products'
import categories from '../content/category'

export default {
 components: { Product, Cart, Checkout },

  data () {
    return {
      categories,   
      products,
      checkoutBool: false,
      showProduct: true,
      cart: [],     
      cartTotal: 0,
      filter: ""     
    }
  },
  
  head: {  

    title: 'Shop',
    meta: [
      { hid: 'description', name: 'description', content: 'Shop' }
    ]
  },

  methods: {

  changeCat: function(filter) { 
     this.filter = filter;  
    },

  showCheckout: function() {

      this.showProduct = false;
      this.checkoutBool = true;


  },  

  returnProduct: function() {

      this.showProduct = true;
      this.checkoutBool = false;

  },  

  seekProp: function(color) {

    if (!this.filter) {     
       return true; 
    } else {  
      var found = false;
      if (color) {
       for (var i = 0; i < color.length; i++) {

         if (color[i] === this.filter) {
           found = true;
           break;
         }
       }      
      return found;
      }
    }      
  }
},  
  
  
}   
</script>
<style lang="sass" scoped>
@import ~assets/css/base/helpers

.checkoutCart
  position: fixed
  right: 10em
  top: 5em
  text-align: right
  background: white
  color: rgba(0,0,0,0.85)
  z-index: 1   

.category 
  padding-left: 4%
  @media(max-width: 600)
    padding-right: 5% 

.cat 
  display: inline-block

.size 
  position: relative 
  margin: 5px 
  border-radius: 5px
  cursor: pointer
  padding: 3px 5px    

</style>
