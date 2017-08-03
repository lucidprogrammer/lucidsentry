import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.example.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  console.log('I AM IN EXAMPLE TEMPLATE')
});

Template.example.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.example.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    console.log(myjs.something)
    instance.counter.set(instance.counter.get() + 1);
  },
});
