TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST["boardShow"],

  initialize: function (options) {
    this.collection = this.model.lists();
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addToList);
    this.listenTo(this.collection, 'remove', this.render);
  },

  orderOptions: {
    modelName: "list"
  },

  addToList: function (list) {
    var listItemView = new TrelloClone.Views.ListShow({
      collection: this.collection,
      model: list
    });

    this.addSubview('#lists', listItemView)
  },

  render: function () {
    var renderedContent = this.template({
      model: this.model
    });

    this.$el.html(renderedContent);

    this.renderForm();
    this.renderLists();

    return this;
  },

  renderForm: function () {
    var listFormView = new TrelloClone.Views.ListForm({
      collection: this.collection
    });
    this.addSubview('#form', listFormView)
  },


  renderLists: function () {
    this.model.lists().each(this.addToList.bind(this));
    // this.$('#lists').sortable();
  }


})
