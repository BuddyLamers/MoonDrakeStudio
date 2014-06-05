MoonDrake.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.pictures = options.pictures;
		this.$rootel = options.$rootEl;
	},

	routes: {
		'': 'root'
	},
 
	root: function(){
		var rootView = new MoonDrake.
	}
});
