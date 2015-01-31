TrelloClone.Views.BoardItem = Backbone.View.extend({

  template: JST["boardItem"],

  tagName: "div",

  className: "board col-xs-3",

  events: {
    "click": "showBoard"
  },

  render: function () {
    var renderedContent = this.template({board: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  showBoard: function (event){
    Backbone.history.navigate('/boards/' + this.model.id, {trigger: true});
  }

})
