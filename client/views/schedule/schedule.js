Template['schedule'].helpers({
	schedules : function(){
		return schedules.find({});
	}
});

Template['schedule'].events({

});

Template.home.created = function() {

var schedules= schedules.find({});


   $(document).ready(function() {

   		for(var a = 0; a < schedules.schedule.length; a++){

   			if(schedules.schedule[a].completed === 1){
        		("#green").addClass('list-group-item-success');
        	}
        }
   });
}