TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/new": "boardForm",
    "boards/:id": "boardShow"
  },

  initialize: function(boards, $rootEl){
    this.$rootEl = $rootEl;
    this.collection = boards;
  },

  boardsIndex: function(){
    var boardIndexView = new TrelloClone.Views.BoardsIndex({collection: this.collection});
    this._swapView(boardIndexView);
  },

  boardForm: function(){
    var board = new TrelloClone.Models.Board();
    var boardFormView = new TrelloClone.Views.BoardForm({
      collection: this.collection,
      model: board
    });
    this._swapView(boardFormView);
  },

  boardShow: function(id){
    // Need to change this to getOrFetch
    var board = this.collection.getOrFetch(id);
    var boardShowView = new TrelloClone.Views.BoardShow({
      collection: this.collection,
      model: board
    })

    this._swapView(boardShowView);
  },

  _swapView: function(newView){
    if (this._currentView) {
      this._currentView.remove();
    }

    this._currentView = newView;
    this.$rootEl.html(newView.render().$el)
  }



})
