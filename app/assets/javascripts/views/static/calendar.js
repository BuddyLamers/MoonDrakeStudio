MoonDrake.Views.Calendar = Backbone.View.extend({

  template: JST['static/calendar'],
  
  render: function() {
    this.$el.fullCalendar({
        events: 'http://www.google.com/your_feed_url/'
    });
    return this;
  }

});