MoonDrake.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.pictures = options.pictures;
		this.$rootEl = options.$rootEl;
	},

	routes: {
		'': 'root'
	},
 
	root: function(){
		var rootView = new MoonDrake.Views.Root({

		});
		this._swapView(rootView);
	},

	_swapView: function (view) {
		this._current_view && this._current_view.remove();
		this._current_view = view;
		this.$rootEl.html(view.render().$el);
	}
});
