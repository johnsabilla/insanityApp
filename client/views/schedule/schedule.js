
Template.schedule.helpers({
	schedules : function(){ 
    var sched = schedules.find({}).fetch();
    console.log('in helper: ', sched);
    console.log('this helper', this);
		return sched;
	},
});

Template.schedule.events({

  'click a' : function(event,template){
   console.log('a tag ID ',event.target.id);
   console.log('documentID ', template.data._id);

   var docUpdate = schedules.findOne({ _id: template.data._id});

   console.log('document', docUpdate);

   count = docUpdate.schedule.length;
   if(this.completed == 0){

      var workoutUpdate = { phase : this.phase
                           ,completed : 1
                           ,name : this.name
                           ,count : this.count };
      docUpdate.schedule[this.count] = workoutUpdate;

      schedules.update({ '_id' : template.data._id}, { '$set': { 'schedule': docUpdate.schedule  } });

      $('#'+event.target.id).removeClass('list-group-item-danger');
      $('#'+event.target.id).addClass('list-group-item-success');
    }

    if(this.completed == 1){

      var workoutUpdate = { phase : this.phase
                           ,completed : 0
                           ,name : this.name
                           ,count : this.count };
      docUpdate.schedule[this.count] = workoutUpdate;

      schedules.update({ '_id' : template.data._id}, { '$set': { 'schedule': docUpdate.schedule  } });

      $('#'+event.target.id).removeClass('list-group-item-success');
      $('#'+event.target.id).addClass('list-group-item-danger');
    }

  }

});

Template.schedule.rendered = function(){
  $('#my-datepicker').datepicker();
  //console.log('css', $('#active1').find("span.completed").text());
  //console.log('this in rendered', this.findAll('a').length);

  var count = this.findAll('a').length;

  var isComplete;

    for(var x = 0; x < count; x++){

      isComplete = $('#active'+x).find("span.completed").text();

      if(isComplete === "1"){
        $('#active'+x).addClass('list-group-item-success');
      }
      else{
        $('#active'+x).addClass('list-group-item-danger');
      }
  }
};



