import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('rating');
    // return this.store.findAll('product');
  },
  averageRating: Ember.computed('rating.stars','rating.product',function(){
    var myRating = this.get('rating');
    console.log(myRating);
    var ratingSum = 0;
    for (var i = 0; i < myRating.stars.length; i++) {
      ratingSum += parseInt(myRating.stars[i].get('stars'));
    }
    //return ratingSum/rating.stars.length
  })
});
