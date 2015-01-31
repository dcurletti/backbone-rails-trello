TrelloClone.Views.ListForm = Backbone.View.extend({

  template: JST["lists/form"],

  className: "list-item list-form",

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
})
