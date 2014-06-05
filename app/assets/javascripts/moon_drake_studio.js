window.MoonDrake = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('hello')
    var $rootEl = $('#backbone-content');
    var $sidebar = $('#backbone-sidebar');

    var sidebarView = new MoonDrake.Views.Sidebar({});
    $sidebar.html(sidebarView.render().$el);


    MoonDrake.pictures = new MoonDrake.Collections.Pictures();
  	// MoonDrake.pictures.fetch({});

    new MoonDrake.Routers.Router({
          $rootEl: $("#backbone-content")
          // pictures: MoonDrake.pictures
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  MoonDrake.initialize();
});
