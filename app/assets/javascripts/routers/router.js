MoonDrake.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.pictures = options.pictures;
		this.$rootEl = options.$rootEl;
		$('body').on("click", ".open-modal", this._openAboutModal);
		$('body').on("click", ".close-modal", this._closeAllModals);
		$('body').on("click", '.instagram-photo', this._modalFullSizePic);
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
		this._selectLink($('.home-link'))
	},

	contact: function(){
		var contactView = new MoonDrake.Views.Contact({});
		this._swapView(contactView);
		this._selectLink($('.contact-link'))
	},

	gallery: function(){
		var galleryView = new MoonDrake.Views.Gallery({
			model: 'moonmoon'
		});
		this._swapView(galleryView);
		this._selectLink($('.gallery-link'))
	},

	beauty: function(){
		var galleryView = new MoonDrake.Views.Gallery({
			model: 'moondrakebeauty'
		});
		this._swapView(galleryView);
		this._selectLink($('.beauty-link'))

	},

	monster: function(){
		var galleryView = new MoonDrake.Views.Gallery({
			model: 'moondrakemonster'
		});
		this._swapView(galleryView);
		this._selectLink($('.monster-link'))
	},

	sfx: function(){
		var galleryView = new MoonDrake.Views.Gallery({
			model: 'sfxmakeup'
		});
		this._swapView(galleryView);
		this._selectLink($('.sfx-link'))
	},

	_openAboutModal: function() {
		$("#about-modal").addClass("is-active");
	},

	_closeAllModals: function() {
		$(".modal").removeClass("is-active");
	},

	_selectLink: function($link) {
		this._deselectAllLinks();
		$link.addClass('selected-link');
	},

	_deselectAllLinks: function() {
		$('.selected-link').removeClass('selected-link');
	},

	_modalFullSizePic: function(event) {
		// console.log(MoonDrake);
		var source = event.currentTarget.src;
		var modalView = new MoonDrake.Views.Fullsize({
			model: source
		});
		$("#backbone-content").append(modalView.render().$el);
	},

	_swapView: function (view) {
		this._current_view && this._current_view.remove();
		this._current_view = view;
		this.$rootEl.html(view.render().$el);
		var aboutModalView = new MoonDrake.Views.Aboutmodal();
		this.$rootEl.append(aboutModalView.render().$el);
	},

	_createGallery: function(tag) {

	}
});
