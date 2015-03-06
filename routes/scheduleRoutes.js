Router.route('/schedule/', {
  //this.render('schedule');

  waitOn: function(){
  	return Meteor.subscribe('schedules');
  },
  data: function(){
  	return schedules.findOne({});
  }
});
