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
      var user = params.user;
      user.get('products').addObject(newProduct);
      newProduct.save().then(function(){
        return user.save();
      });

      this.transitionTo('store');
    },
    saveUser(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('admin');
    }
  }
});
