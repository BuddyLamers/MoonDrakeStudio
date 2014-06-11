MoonDrake.Views.Contact = Backbone.View.extend({
	template: JST['static/contact'],

	render: function() {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		return this;
	}
});