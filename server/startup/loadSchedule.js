Meteor.startup(function () {
	var fs = Meteor.require('node-fs');
	//var parser = Meteor.require('plain-text-data-to-json');

	var sched = Assets.getText('seed.json');
	//var schedCount = schedules.find({}).count();

	//var schedule = JSON.parse(fs.readFileSync('seed.js', 'utf-8'));
	console.log(eval(sched));
	var schedule = eval(sched);
	//console.log(json);
	// console.log('test ', scheduleJSON);
	//console.log('schedule: ', schedule);
	// console.log('before: ', schedCount);

	// if(schedCount < 1){
		schedules.insert({schedule: schedule} );
	// }

	// console.log('after: ', schedCount);
});