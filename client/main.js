import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Raven from 'raven-js';

import './main.html';

Raven.config('https://62e98dca8b9d4fa9b1d5c868df3a7d76@sentry.io/198536',{
  release: '1.0'
}).install()

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
