Template['workout'].helpers({
	workouts: function () {
		console.log("workouts (workout helper): ", workouts.findOne());
		return workouts.find({});
	}
});

Template['workout'].events({
});
