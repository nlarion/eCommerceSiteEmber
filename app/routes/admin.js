import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      users: this.store.findAll('user')
    });
  },

  actions: {
    saveProduct(params){
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('store');
    },
    saveUser(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('admin');
    }
  }
});
