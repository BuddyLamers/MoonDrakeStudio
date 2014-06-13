MoonDrake.Views.Fullsize = Backbone.View.extend({

  template: JST["pictures/fullsize"],

  render: function() {
    var renderedContent = this.template({
      source: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});