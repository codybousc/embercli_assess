import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addQuestion: function() {
      var formattedDate = new Date().toDateString();
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        title: this.get('title'),
        body: this.get('body'),
        date: formattedDate
      });
      newQuestion.save();
      this.setProperties({
        name: '',
        title: '',
        body: ''
              });

      this.transitionToRoute('questions');
    }
  }
});
