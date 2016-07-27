import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember'
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  twitter: attr('string'),
  fullName: Ember.computed('firstName', 'lastName', {
    get(){
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  })
});
