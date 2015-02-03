TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST['board_form'],

  events: {
    "submit form": "createBoard"
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent)
    return this;
  },

  createBoard: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();

    var success = function(){
      this.collection.add(this.model, {merge: true});
      Backbone.history.navigate('', {trigger:true})
    }.bind(this)

    var errors = function () {
      console.log("big error")
    }

    this.model.save(attrs, {
      success: success,
      error: errors
    });

  }

})
