Meteor.subscribe('workouts', function () {
	//console.log("workouts (client): ", workouts.findOne());
    return workouts.find();
});
