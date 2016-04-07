import Ember from 'ember';
export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  addNewProduct: false,
  actions: {
    formShow() {
      this.set('addNewProduct', true);
    },
    hideForm() {
      this.set('addNewProduct', false);
    },
    saveProduct() {
      //console.log(this.get('myUser'));
      console.log(this.get('currentUser').users.get('firstObject'));
      var params = {
        title: this.get('title'),
        //user: this.get('myUser').get('firstObject'),
        user: this.get('currentUser').users.get('firstObject'),
        image: this.get('image') ? this.get('image') : "",
        description: this.get('description'),
        cost: parseInt(this.get('cost'))
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params);
    }
  }
});
