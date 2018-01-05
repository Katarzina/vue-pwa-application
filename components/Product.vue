<template lang="pug">     
.product(v-show='showProduct')     
    img.image(
          :src="product.image",
          :alt="product.product",
          @click='viewProduct(product)'
    )
    .name {{ product.product }}
    .description {{ product.description }}
    .price ${{ product.price }}
    button(@click='addToCart(product)') Add to Cart
    .modalWrapper(v-show='showModal')     
     .overlay(@click='hideModal()') 
     .modal 
      i.close.fa.fa-times(@click='hideModal()') 
      .imageWrapper
        .image(:style="{ 'background-image': 'url(' + modalData.image + ')' }" style='background-size: cover; background-position: center;' v-on:mouseover='imageMouseOver($event)' v-on:mousemove='imageMouseMove($event)' v-on:mouseout='imageMouseOut($event)')    
       
      .additionalImages(v-if='modalData.images') 
          .additionalImage(v-for='image in modalData.images' :style="{ 'background-image': 'url(' + image.image + ')' }" style='background-size: cover; background-position: center;' @click='changeImage(image.image)')    
         
      .name {{ modalData.product }}
      .description {{ modalData.description }}
      .details {{ modalData.details }}
      h3.price ${{ modalData.price }}
      label(for='modalAmount') QTY 
      input(:id='modalAmount' v-model='modalAmount' class='amount' @keyup.enter='modalAddToCart(modalData), hideModal()')   
      button(@click='modalAddToCart(modalData), hideModal()') Add to Cart   
      
        
</template>
<script>
export default {
  name: 'Product',
  props: ['product','cart', 'cartTotal','showProduct'],
  data: function() {
    return {
      showModal: false,
      modalData: {},
      modalAmount: 1,
      timeout: "",
      mousestop: ""      
    }
  },

 mounted: function () {
    var self = this;
    document.addEventListener("keydown", function(e) {
      if (self.showModal && e.keyCode == 27) {
        self.hideModal();
      } 
    });
  },
  
  methods: {
    addToCart: function(product) {
      var found = false;
      var cartLength = this.cart.length;

      for (var i = 0; i < cartLength; i++) {

        if (this.cart[i].sku === product.sku) {
          var newProduct = this.cart[i];
          newProduct.quantity = newProduct.quantity + 1;           
          this.$set(this.cart, i, newProduct);
          found = true;
          break;
        }
      }

      if(!found) {
        product.quantity = 1;
        this.cart.push(product);
      }

      //this.cartSubTotal = this.cartSubTotal + product.price;
      //this.cartTotal = this.cartSubTotal + (this.tax * this.cartSubTotal);
      this.checkoutBool = true;
      
    },

    modalAddToCart: function(modalData) {
      var self = this;

      for(var i = 0; i < self.modalAmount; i++) {
        self.addToCart(modalData);
      }

      self.modalAmount = 1;
    },

    viewProduct: function(product) {     
      var self = this;
      //self.modalData = product;
      self.modalData = (JSON.parse(JSON.stringify(product)));
      self.showModal = true;
    },

    changeProductInModal: function(direction) {

      var self = this,
          productsLength = this.product.length,
          currentProduct = self.modalData.sku,
          newProductId,
          newProduct;
        

      if(direction === "next") {
        newProductId = currentProduct + 1;

        if(currentProduct >= productsLength) {
          newProductId = 1;
        }

      } else if(direction === "prev") {
        newProductId = currentProduct - 1;

        if(newProductId === 0) {
          newProductId = productsLength;
        }
      }

      //console.log(direction, newProductId);

      for (var i = 0; i < productsLength; i++) {
        if (this.product[i].sku === newProductId) {
          self.viewProduct(this.product[i]);
        }
      }
    },

    hideModal: function() {
      //hide modal and empty modal data
      var self = this;
      self.modalData = {};
      self.showModal = false;
    },

    changeImage: function(image) {
      var self = this;
      self.modalData.image = image;
    },

    imageMouseOver: function(event) {
      event.target.style.transform = "scale(2)";
    },

    imageMouseMove: function(event) {
      var self = this;
      
      event.target.style.transform = "scale(2)";
      
      self.timeout = setTimeout(function() {
        event.target.style.transformOrigin = ((event.pageX - event.target.getBoundingClientRect().left) / event.target.getBoundingClientRect().width) * 100 + '% ' + ((event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset) / event.target.getBoundingClientRect().height) * 100 + "%";
      }, 50);
      
      self.mouseStop = setTimeout(function() {
        event.target.style.transformOrigin = ((event.pageX - event.target.getBoundingClientRect().left) / event.target.getBoundingClientRect().width) * 100 + '% ' + ((event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset) / event.target.getBoundingClientRect().height) * 100 + "%";
      }, 100);
    },

    imageMouseOut: function(event) {
      event.target.style.transform = "scale(1)";
    }
  }  
}
</script>
<style scoped>
$mobile: 600px;
$max-width: 100em;

@mixin aspect-ratio($width, $height) {
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ($height / $width) * 100%;
  }
  > .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}


@keyframes openUp {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

button {  

  .fa {
    font-size: 1em !important;
    vertical-align: middle;
  }

}

input {
  display: inline-block;
  appearance: none;
  padding: 0.5em;
  margin: 0.5em 0.5em 0.5em 0;
  width: 50px;
  background: white;
  border: 1px solid black;
  transition: all 0.1s;
  font-size: 14px;
}

label {
  font-size: 0.75em;
  margin-right: 0.5em;
}


.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

.vert-bottom {
  vertical-align: bottom;
}

.vert-middle {
  vertical-align: middle;
}

.products {
   margin: 0 auto;
   width: 100%;
   max-width: 1280px;
}   
  
.product {    
    display: inline-block;
    margin: 0.75em;
    width: 60%;
    max-width: 15em;
    padding: 0.5em;
}
.image {
      width: 15em;
      height: 12em;
      margin-bottom: 0.5em;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: box-shadow 0.25s;

    @media(max-width: $mobile) {
      width: 100vw;
      height: 100vw;
    }
    

  &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      opacity: 0;
      transition: all 0.25s;
  }

  &:after {
      content: "\f00e";
      font-family: "FontAwesome";
      position: absolute;
      top: 250%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 5em;
      color: white;
      pointer-events: none;
      text-shadow: 0 0 5px rgba(0,0,0,0.5), 0 0 10px rgba(0,0,0,0.5); 
      transition: all 0.25s;
  }
 
  &:hover {
    box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

    &:before {
     opacity: 1;
   }

    &:after {
        top: 50%;
    }
  } 
}

.name {
   font-weight: bold;
   font-size: 1.25em;
}

.description {
  font-style: italic;
}

.price {
  font-weight: bold;
}
     

.modalWrapper {

  position: relative;

}  

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      //cursor: pointer;
      z-index: 2;
    }

    .prevProduct, .nextProduct {
        position: fixed;
        color: white;
        font-size: 2em;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
        padding: 1em;
        user-select: none;
        z-index: 5;
      }

    .prevProduct {
      left: calc(50% - 9.5em);
    }

    .nextProduct {
      right: calc(50% - 9.5em);
    }

    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 2em;
      text-align: center;
      max-height: calc(100% - 2em);
      overflow-y: scroll;
      overflow-x: hidden;
      animation: openUp 0.1s;
      z-index: 3;
      backface-visibility: hidden;

    }  

      .close {
        position: fixed;
        top: -0.5em;
        right: -0.5em;
        cursor: pointer;
        padding: 1em;
      }

      .imageWrapper {
        width: 25em;
        height: 25em;                
        margin: 0.5em auto;
        overflow: hidden;
      }  

      .imageWrapper  .image {
          width: 100%;
          height: 100%;
          transition: transform 0.2s;
          z-index: 4;
          cursor: crosshair;       
      }

      .additionalImages {
        display: flex;
        width: 100%;
        height: 130px;
        margin: 0 auto;
        text-align: center;

      }  

      .additionalImages .additionalImage {
          flex-grow: 1;
          margin: 3px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          width: 25%;
          height: auto;
          @include aspect-ratio(16, 12);
            
          &:nth-of-type(1n) {
           margin-left: 0;
          }
            
          &:nth-of-type(4n) {
           margin-right: 0;
          }
      }
      

      .name {
        font-weight: bold;
        font-size: 1.25em;
      }

      .description {
        font-style: italic;
      }

      .details {
        max-width: 25em;
        margin: 0 auto;
        padding: 0.5em 0;
      }

      .price {
        font-weight: bold;
        padding-bottom: 0.5em;
      }  
 

@media(max-width: $mobile) {
      .cart {
        &, & .cartTable {
          width: 100% !important;
        }
      }

      .products {
        text-align: left;

        .product {
          display: block;

          .image {
            width: calc(100vw - 2.5em);
            height:  calc(100vw - 2.5em);
          }
        }
      }

      .modalWrapper {
        .prevProduct, .nextProduct {
          display: none;
        }

        .modal {
          &.checkout {
            width: 100%;
          }

          .imageWrapper {
            width: calc(100vw - 4em);
            height:  calc(100vw - 4em);
          }
        }
      }
}
</style>
