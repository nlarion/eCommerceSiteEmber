import Ember from 'ember';

export function totalCost(params) {
  var foo = params[0];
  console.log(foo);
  for (var i = 0; i < foo.length; i++) {
    console.log(foo[i].cost);
  }
  return Ember.String.htmlSafe("size");
}

export default Ember.Helper.helper(totalCost);
