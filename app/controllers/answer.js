import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    addAnswer: function() {
      var answerDate = new Date().toDateString();
      var newAnswer = this.store.createRecord('answer', {
        name: this.get('name'),
        body: this.get('body'),
        date: answerDate
      });
      var question = this.get('controllers.question.model');
      newAnswer.save().then(function(){
        question.get('answers').pushObject(newAnswer);
        question.save();
      });

      this.setProperties({
        name: '',
        body: ''
      });

      this.transitionToRoute('question', question.id);
    }
  }
});
