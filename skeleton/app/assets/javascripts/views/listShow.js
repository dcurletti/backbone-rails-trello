TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],

  className: "list-wrapper",

  events: {
    'click #delete': 'deleteList'
  },

  attributes: function () {
    return {
      id: "" + this.model.id
    };
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.collection, 'add', this.render);
  },

  test: function () {},

  render: function () {
    console.log("trying to render card")
    var renderedContent = this.template({
      list: this.model
    })
    this.$el.html(renderedContent);
    this.$el.data('list-id', this.model.id)
    return this;
  },

  deleteList: function (event) {
    console.log(this.model)
    event.preventDefault();
    this.model.destroy();
  }
})
