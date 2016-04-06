import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('item', {path: '/item/:product_id'});
  this.route('admin');
});

export default Router;
