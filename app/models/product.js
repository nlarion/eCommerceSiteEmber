import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  cost: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  ratings: DS.hasMany('rating', { async: true}),
  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function(){
    return this.get('shoppingCart').includes(this);
  })
});
