import DS from 'ember-data';

export default DS.Model.extend({
  stars: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  product: DS.belongsTo('product', { async: true }),
});
