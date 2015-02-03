TrelloClone.Views.ListForm = Backbone.View.extend({

  template: JST["lists/form"],

  className: "list list-form col-xs-3",

  events: {
    'submit': 'submitList'
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  submitList: function (event) {
    event.preventDefault();
    var data = this.$el.find('form').serializeJSON();

    this.collection.create({
      title: data.list.title,
      board_id: this.collection.board.id
    }, { wait: true})

    this.$('#listName')
  }
})
