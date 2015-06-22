import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    delete:function() {
      if(confirm('Are you sure?')){
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var d = this.get('model');
      d.save();
      this.set('isEditing', false);
    }
  }
});
