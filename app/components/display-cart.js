import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  calculateTotal: Ember.computed('shoppingCart.items.length', function(){
    var cart = this.get('shoppingCart');
    var cartSum = 0;
    for (var i = 0; i < cart.items.length; i++) {
      cartSum += parseInt(cart.items[i].get('cost'));
    }
    return cartSum
  }),

  actions: {
    removeItem(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
