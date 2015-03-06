
Template['schedule'].helpers({
	schedules : function(){ 
    var sched = schedules.find({});
		return sched;
	}
});

Template.schedule.events({
  'click a' : function(event,template){
   // $('.list-group-item').addClass('list-group-item-success');
   console.log(template.data._id); //this gets the id
   $('#'+event.target.id).addClass('list-group-item-success');

  }
});

Template.schedules.rendered = function(){

}
Template.schedule.rendered = function(){


}



