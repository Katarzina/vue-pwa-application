<template lang="pug">
.cart__container    
  <div class="cart"><span class="cart-size" @click="showCart = !showCart"> {{ cartSize }} </span><i class="fa fa-shopping-bag" @click="showCart = !showCart"></i>
   <div class="cart-items" v-show="showCart">
    <table class="cartTable">
     <tbody> 
      <tr class="cartProduct" v-for="product in cart">
       <td class="align-left">
        <div class="cartImage" @click="removeProduct(product)" :style="{ 'background-image': 'url(' + product.image + ')' }" style="background-size: cover; background-position: center;"><i class="close fa fa-times"></i></div>        
       </td> 
       <td class="align-center"><button class="plusMinus" @click="quantityChange(product, 'decriment')"><i class="fa fa-minus"></i></button></td>
       <td class="align-center">{{ product.quantity }}</td>
       <td class="align-center"><button class="plusMinus" @click="quantityChange(product, 'incriment')"><i class=" fa fa-plus"></i></button></td>      
       <td class="align-center">{{ product.product }}</td>
       <td>${{ product.price }}</td>
      </tr>
     </tbody>
    </table>
   </div>
  <div class="cartSubTotal" v-show="showCart">${{cartSubTotal}}</div>
  <a href="/shop#top"><button type="button" class="checkoutCart" v-show="showCart" v-if="cartSize > 0" @click="showCheckout()">Checkout </button></a> 
  </div>
</template>
<script>
export default {
  name: 'Cart',
  props: ['checkoutBool', 'cart', 'cartTotal','showProduct'],
  data: function() {
    return {
      showCart: false,      
    }
  },

computed: {    

    cartSize() { 

      var cartSize = 0; 
      var cartLength = this.cart.length;           

      for (var i = 0; i < cartLength; i++) {
        cartSize += this.cart[i].quantity;
      }

      return cartSize;
    },

    cartSubTotal() {
       var cartSubTotal = 0;
       var cartLength = this.cart.length;
       for (var i = 0; i < cartLength; i++) {
        cartSubTotal += this.cart[i].price * this.cart[i].quantity;
      } 

     return Math.round(cartSubTotal);

    }

  },  
  methods: {
    removeProduct: function(product) {

      var index = this.cart.indexOf(product);
      this.cart.splice(index, 1);

      if(this.cart.length <= 0) {
        this.checkoutBool = false;
      }
    },    

    quantityChange: function(product, direction) {      

      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].sku === product.sku) {

          var newProduct = this.cart[i];        
          if (direction === "incriment") {
            newProduct.quantity = newProduct.quantity + 1;
            this.$set(this.cart, i, newProduct);

          } else {
            newProduct.quantity = newProduct.quantity - 1;

            if (newProduct.quantity == 0) {
              var index = this.cart.indexOf(newProduct);
              this.cart.splice(index, 1);              

            } else {
              this.$set(this.cart, i, newProduct);
            }
          }
        }
      }

      if (direction === "incriment") {
        this.cartSubTotal = this.cartSubTotal + product.price;

      } else {
        this.cartSubTotal = this.cartSubTotal - product.price;
      }     

      if (this.cart.length <= 0) {
        this.checkoutBool = false;
      }
    },
    
    showCheckout: function() { 

      this.showCart = false;
      this.$emit('changeshow');      
      
    },
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.plusMinus
  font-size: 0.75em     

th, td 
  padding: 0 0.5em  

.align-left 
  text-align: left

.cartProduct 
  display: inline-block   
  width: 100%  
  font-size: 0.75em 

.cart 
  position: fixed
  right: 1em
  top: 4.5em
  text-align: right
  background: white
  color: rgba(0,0,0,0.85)
  z-index: 1 

  .fa-shopping-cart, .cart-size 
   cursor: pointer
   font-size: 1em
   user-select: none

  .fa-shopping-cart 
   padding: 1em 1em 1em 0

  .cart-size 
   padding: 1em 1em 1em 1em
      
  .cart-items 
   padding: 0 0.25em 

  .cartTable 
    width: 18em
        
  .cartImage 
    width: 6em
    height: 4em
    margin: 0.5em auto
    position: relative
    cursor: pointer 

    i 
     position: absolute
     left: 93%
     top: 1%
     transform: translate(-50%, -50%)
     font-size: 1em
     z-index: 1
     transition: all 0.25s
          
          
    &:hover 
     i 
      text-shadow: 1px 2px 5px black     
            
     &:after 
      background: rgba(0,0,0,0.5)
          
    &:active 
     i 
      text-shadow: 0px 0px 1px black

  .cartSubTotal 
    border-top: 1px solid black
    font-size: 0.8em
    padding: 0.5em  
   
  .checkoutCart
    margin: 0.25em   

</style>
