MoonDrake.Views.Aboutmodal = Backbone.View.extend({
  template: JST['static/aboutmodal'],

  render: function() {
    var renderedContent = this.template({});
    this.$el.html(renderedContent);
    return this;
  }
});