import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    formShow() {
      this.set('addNewProduct', true);
    },

    hideForm() {
      this.set('addNewProduct', false);
    },

    saveProduct() {
      var params = {
        title: this.get('title'),
        image: this.get('image') ? this.get('image') : "",
        description: this.get('description'),
        cost: parseInt(this.get('cost'))
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params);
    }
  }
});
