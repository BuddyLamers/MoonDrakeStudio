MoonDrake.Views.Root = Backbone.View.extend({

  template: JST['static/root'],

  className: 'main-page',
  
  render: function() {
  	var renderedContent = this.template({
  		
  	})
  	this.$el.html(renderedContent);


  	return this;
  }

});
