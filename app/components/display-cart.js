import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  calculateTotal: Ember.computed('shoppingCart.items.length', function(){
    var shoppingCart = this.get('shoppingCart');
    var cartSum = 0;
    for (var i = 0; i < shoppingCart.items.length; i++) {
      cartSum += parseInt(shoppingCart.items[i].get('cost'));
    }
    return cartSum
  }),

  actions: {
    removeItem(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
