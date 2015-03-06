Meteor.publish('workouts', function () {
  return workouts.find();
});
