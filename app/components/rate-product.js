import Ember from 'ember';

export default Ember.Component.extend({
  addRating: false,

  actions: {
    ratingFormShow() {
      this.set('addRating', true);
    },

    formHide() {
      this.set('addRating', false);
    },

    saveRating() {
      var params = {
        stars: parseInt(this.get('stars')),
        product: this.get('product')
      };
      this.set('addRating', false);
      this.sendAction('saveRating', params);
    }
  }
});
