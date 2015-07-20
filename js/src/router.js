App.Router.map(function() {
  this.resource('book', {path:"books/:book_id"})
  this.route('new')
})