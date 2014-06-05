window.MoonDrake = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MoonDrake.pictures = new MoonDrake.Collections.Pictures();
  	MoonDrake.pictures.fetch({
  		success: function () {
  			new MoonDrake.Routers.Router({
  				$rootEl: $("#content")
  				pictures: MoonDrake.pictures
  			});
  		}
  	});
  }
};

$(document).ready(function(){
  MoonDrake.initialize();
});
