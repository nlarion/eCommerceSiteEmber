import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },

  actions: {
    saveRating(params){
      var newRating = this.store.createRecord('rating', params);
      var product = params.product;
      product.get('ratings').addObject(newRating);
      newRating.save().then(function(){
        return product.save();
      });
      this.transitionTo('item');
    }
  }
});
