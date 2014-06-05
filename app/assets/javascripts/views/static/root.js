MoonDrake.Views.Root = Backbone.View.extend({

  template: JST['static/root'],

  render: function() {
  	var renderedContent = this.template({
  		user: this.model
  	})
  	this.$el.html(renderedContent);
  	return this;
  }

});
