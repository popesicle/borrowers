import Ember from 'ember';

export default Ember.Component.extend({
  isValid: ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    {
      get(){
        return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.firstName')) &&
          !Ember.isEmpty(this.get('model.lastName')) &&
          !Ember.isEmpty(this.get('model.twitter'));
      }
    }
  ),
  actions: {
    save() {
      console.log('+- save action in edit-form component');
      this.save(this.get('model'));
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
      this.cancel();
    }
  }
});
