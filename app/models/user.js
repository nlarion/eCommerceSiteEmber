import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  ratings: DS.hasMany('rating', { async: true}),
  products: DS.hasMany('product', { async: true})
});
