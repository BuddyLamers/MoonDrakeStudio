MoonDrake.Views.GoogleCalendar = Backbone.View.extend({
  template: JST['static/googlecalendar'],

  className: 'main',

  render: function() {
    var renderedContent = this.template({});
    this.$el.html(renderedContent);
    return this;
  }
});