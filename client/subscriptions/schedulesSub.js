Meteor.subscribe('schedules', function () {
	console.log("schedules (client): ", schedules.findOne());
    return schedules.find();
});
