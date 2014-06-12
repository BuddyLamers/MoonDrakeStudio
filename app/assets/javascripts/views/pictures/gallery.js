MoonDrake.Views.Gallery = Backbone.View.extend({

  template: JST['pictures/gallery'],

  oldrender: function(){
  	var renderedContent = this.template({});
  	this.$el.html(renderedContent);
  	return this;
  },

  render: function(){
  	var photoCount = 10;
    var tag = this.model;
  	var that = this;

  	$.ajax({
  		type: "GET",
  		dataType: "jsonp",
  		cache: false,
  		url: "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=" + "ca710f787fa246c3b08792d5b91e970e",
  		success: function(response) {
  			var length = response.data != 'undefined' ? response.data.length : 0;
  			var limit = photoCount != null && photoCount < length ? photoCount : length;
  			if(limit > 0) {
          for(var i = 0; i < limit; i++) {
           that.$el.append($('<img>', {
            class: "instagram-photo",
            src: response.data[i].images.standard_resolution.url
          }));
         }
       }
     }
   });
  	return this;
  }

//   render: function(){
  	
//   		$('#photos').instagram({
//   hash: 'makeup',
//   clientId: 'ca710f787fa246c3b08792d5b91e970e',
//   userId: '1330565085'
// });
//   	return this;
//   }

});
