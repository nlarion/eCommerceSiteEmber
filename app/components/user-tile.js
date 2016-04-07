import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),

  actions: {
    selectUser(user) {
      console.log(user);
      this.get('currentUser').add(user);
    }
  }
});
