MoonDrake.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.pictures = options.pictures;
		this.$rootEl = options.$rootEl;
		$('body').on("click", ".open-modal", this._openAboutModal);
		$('body').on("click", ".close-modal", this._closeAboutModal);
	},

	routes: {
		'contact': 'contact',
		'home': 'root',
		'gallery': 'gallery',
		'beauty': 'beauty',
		'monster': 'monster',
		'sfx': 'sfx',
		'': 'root'
	},
 
	root: function(){
		var rootView = new MoonDrake.Views.Root({

		});
		this._swapView(rootView);
	},

	contact: function(){
		var contactView = new MoonDrake.Views.Contact({});
		this._swapView(contactView);
	},

	gallery: function(){
		var galleryView = new MoonDrake.Views.Gallery({
			model: 'moonmoon'
		});
		this._swapView(galleryView);
	},

	beauty: function(){
		var galleryView = new MoonDrake.Views.Gallery({
			model: 'kitten'
		});
		this._swapView(galleryView);
	},

	monster: function(){
		var galleryView = new MoonDrake.Views.Gallery({
			model: 'horror'
		});
		this._swapView(galleryView);
	},

	sfx: function(){
		var galleryView = new MoonDrake.Views.Gallery({
			model: 'sfxmakeup'
		});
		this._swapView(galleryView);
	},

	_openAboutModal: function(){
		$("#about-modal").addClass("is-active");
	},

	_closeAboutModal: function() {
		$("#about-modal").removeClass("is-active");
	},

	_swapView: function (view) {
		this._current_view && this._current_view.remove();
		this._current_view = view;
		this.$rootEl.html(view.render().$el);
	},

	_createGallery: function(tag) {

	}
});
