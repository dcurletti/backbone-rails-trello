TrelloClone.Views.BoardItem = Backbone.View.extend({

  template: JST["boardItem"],

  className: "board col-xs-3",

  events: {
    'click #delete': "deleteBoard",
    "click p": "showBoard"
  },

  render: function () {
    var renderedContent = this.template({board: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  showBoard: function (event){
    console.log('hello')
    Backbone.history.navigate('/boards/' + this.model.id, {trigger: true});
  },

  deleteBoard: function (event) {
    event.stopPropagation();
    this.model.destroy();
  }
})
