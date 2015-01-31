TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST["boardShow"],

  initialize: function (options) {
    this.collection = this.model.lists();
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addToList);
  },

  orderOptions: {
    modelName: "list",
    subviewContainer: "#lists"
  },

  render: function () {
    var renderedContent = this.template({
      model: this.model
    });

    this.$el.html(renderedContent);

    this.renderLists();
    this.renderForm();

    return this;
  },

  renderForm: function () {
    var listFormView = new TrelloClone.Views.ListForm();
    this.addSubview('#form', listFormView)
  },


  addToList: function (list) {
    var listItemView = new TrelloClone.Views.ListShow({
      model: list
    });
    this.addSubview('#lists', listItemView)
    // var listFormView = new TrelloClone.Views.ListForm();
    // this.addSubview('#form', listFormView);
  },

  renderLists: function () {
    this.model.lists().each(this.addToList.bind(this));
    this.$('#lists').sortable();
  }


})
