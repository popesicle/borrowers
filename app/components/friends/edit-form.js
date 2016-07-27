import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    {
      get() {
        return !Ember.isEmpty(this.get('model.email')) && !Ember.isEmpty(this.get('model.firstName')) && !Ember.isEmpty(this.get('model.lastName')) && !Ember.isEmpty(this.get('model.twitter'));
      }
    }
  ),
  actions: {
    save() {

      if(this.get('isValid')) {
        this.get('model').save().then((friend)=> {
          return this.save('friend');
        }, (err)=> {
          this.set('errorMessage', 'there was something wrong with saving the model');
        });
      } else {
        this.set('errorMessage', 'All fields must filled.');
      }
    },
    cancel() {
      console.log('canceled');
      this.cancel(this.get('model'));
    },
    delete() {
      console.log('Baron Von Fuckface');
    }
  }
});
