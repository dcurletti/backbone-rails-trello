TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boardsIndex'],

  initialize: function () {
    this.listenTo(this.collection, "sync remove", this.render)
  },

  render: function() {
    this.$el.empty();

    this.collection.each(function (board) {
      // Switch this to composite view
      var boardView = new TrelloClone.Views.BoardItem({model: board})
      // debugger;
      this.$el.append(boardView.render().$el)
    }.bind(this));

    return this;
  }


})
