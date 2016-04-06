import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },

  model: function(){
    return this.store.query('product', {
      orderBy: 'cost',
      startAt: 50
    });
  }
});
