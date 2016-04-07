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
        stars: this.get('stars'),
        user: this.get('user'),
        product: this.get('product')
      };
      this.set('addRating', false);
      this.sendAction('saveRating', params);
    }
  }
});
