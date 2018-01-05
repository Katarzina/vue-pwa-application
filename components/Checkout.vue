<template lang="pug">  
  .checkout-area(v-show='checkoutBool') 
    <div class="align-center cartSize"><span> {{ cartSize }} </span><i class="fa fa-shopping-bag"></i></div>
     <div id="flex-container">
      <div class="flex-item">
      <table>
       <thead>
        <tr>
         <th class="align-center">ID</th>
         <th>Name</th><th>Description</th><th class="align-right">Amount</th>
         <th class="align-right">Price</th>   
         <th class="align-right">Total</th>      
        </tr>
       </thead>
       <tbody>
       <tr v-for="product in cart">
        <td class="align-center">{{ product.sku }}</td>
        <td>{{ product.product }}</td>
        <td>{{ product.description }}</td>
        <td class="align-right">{{ product.quantity }}</td>
        <td class="align-right">{{ product.price }}</td>
        <td class="align-right">{{ Math.round(product.price*product.quantity) }}</td>
       </tr>
       <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
       </tr>   
       </tbody>
      </table>
      </div>
      <div class="raw-item align-center">
       <div v-if="cartSubTotal != 0"><strong> TOTAL QTY : {{ cartSize }} </strong></div>
       <div v-if="cartSubTotal != 0"><strong> TOTAL : ${{ cartSubTotal }} </strong></div>
       <div v-if="cartSubTotal != 0"><strong> SHIPPING & HANDLING : $6.50 </strong></div>
       <div v-if="cartSubTotal != 0"><strong> SUBTOTAL : ${{ cartSubTotal + 6.50 }} </strong></div>
       <button v-show="cartSubTotal" @click="checkoutModal()">PROCEED TO CHECKOUT</button>      
      </div>
     </div>  
        
</template>

<script>

export default { 
name: 'Checkout',
props: ['checkoutBool', 'cart', 'cartTotal'],

 data () {
    return {
       
    }
 },
  
  head: {
    title: 'Checkout',
    meta: [
      { hid: 'description', name: 'description', content: 'Checkout' }
    ]
  },

  computed: { 

   cartSize() { 

      var cartSize = 0;            

      for (var i = 0; i < this.cart.length; i++) {
        cartSize += this.cart[i].quantity;
      }

      return cartSize;
    },

    cartSubTotal() {
       var cartSubTotal = 0;
       for (var i = 0; i < this.cart.length; i++) {
        cartSubTotal += this.cart[i].price * this.cart[i].quantity;
      } 

     return Math.round(cartSubTotal);

    },  

    checkoutModal() {

       alert("It's finish in this code example, my dear"); 

    } 
  

  },  

  methods: {

  
  },  
  
  
}   
</script>
<style lang="sass" scoped> 

$mobile: 600px
$max-width: 100em

.cartSize
  margin: 1em

.checkout-area table 
  margin: 0 auto
  padding: 0.5em
  width: 100%
  max-width: $max-width * 0.5
  text-align: left

  th, td 
    padding: 0.25em
  

  @media(max-width: $mobile) 
    th:nth-child(3), td:nth-child(3) 
      display: none
 
#flex-container
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-around

  @media(max-width: $mobile) 
    flex-direction: column

#flex-container > .flex-item 
  width: auto  
  margin: 5px
  padding: 20px 30px
  box-shadow: 0 2px 6px 2px #eee
  box-sizing: border-box 


#flex-container > .raw-item 
  width: auto  
  box-shadow: 0 2px 6px 2px #eee
  box-sizing: border-box 
  margin: 5px
  padding: 20px 30px
  @media(max-width: $mobile) 
     width: auto 

</style>
