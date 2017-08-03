Template.anotherexample.onCreated ->
  # counter starts at 0
  @counter = new ReactiveVar(0)
  console.log 'I AM IN EXAMPLE TEMPLATE from coffee'
  return
Template.anotherexample.helpers counter: ->
  Template.instance().counter.get()
Template.anotherexample.events 'click button': (event, instance) ->
  # increment the counter when button is clicked
  console.log coffeeplace.rs
  instance.counter.set instance.counter.get() + 1
  return
