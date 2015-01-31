TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],

  


  render: function () {
    var renderedContent = this.template({
      list: this.model
    })
    this.$el.html(renderedContent);

    return this;
  }
})
