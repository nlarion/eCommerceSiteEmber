import DS from 'ember-data';

export default DS.Model.extend({
  stars: DS.attr(),
  product: DS.belongsTo('product', { async: true }),
});
