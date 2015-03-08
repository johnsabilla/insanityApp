
Template['schedule'].helpers({
	schedules : function(){ 
    var sched = schedules.find({});
		return sched;
	},
});


Template.schedule.events({


  'click a' : function(event,template){
   // $('.list-group-item').addClass('list-group-item-success');
   console.log(schedules.findOne({ _id: new Meteor.Collection.ObjectID(template.data._id._str)})); //this gets the id
   console.log(event.target.id);
   console.log(this);

   var test = schedules.findOne({ _id: new Meteor.Collection.ObjectID(template.data._id._str)});

   if(this.completed == 0){
   		console.log("this", test);
   		console.log("hello fuckface ", this.count);

   		//updateSchedule(template.data.id, this.count );
   		schedules.update({ '_id' : template.data._id }, { 'schedule': { 'completed' : 1  } });
   		//db.schedules.update({ "_id" : ObjectId("54fa2a3ec957445b162b58e7"), "schedule.count" : 14}, {"$set" : {"schedule.$.completed" : 1  }})
   }
   $('#'+event.target.id).addClass('list-group-item-success');
  }
});

Template.schedules.rendered = function(){

}
Template.schedule.rendered = function(){
}



