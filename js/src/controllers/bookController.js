App.BookController = Ember.ObjectController.extend({
  sourcePhrase:"",
  targetPhrase:"",
  actions: {
    favorite: function() {
      this.toggleProperty('favorite')
    },
     addPhrase: function() {
      $(".addPhrase").toggleClass("open")
      $(".newPhrase").toggleClass("open")

      $(".book .content-wrapper ul.content").append("<li class='entry'><ul><li class='source'><p><span class='progress'><span></span><span></span><span></span></span></p></li></ul></li>")//progress object

    },
    saveSource: function() {
      if($(".newPhrase .input.source").val()!="") {
        $(".book .content-wrapper ul.content .entry:last-of-type ul li.source p").html($(".newPhrase .input.source").val()).parent().parent().append("<li class='target'><p><span class='progress'><span></span><span></span><span></span></span></p></li>")
        $(".newPhrase .input.source").hide()
        $(".newPhrase .input.target").show()
        $(".newPhrase .saveSource").hide()
        $(".newPhrase .saveTarget").show()
        $(".newPhrase .input.source").val("")
      }
    },
    saveTarget: function() {
      if($(".newPhrase .input.target").val()!="") {
        $(".newPhrase .input.source").show()
        $(".newPhrase .input.target").hide()
        $(".newPhrase .saveSource").show()
        $(".newPhrase .saveTarget").hide()
        $(".newPhrase .input.target").val("")
        $(".newPhrase").toggleClass("open")
        $(".addPhrase").toggleClass("open")

        var phrase = this.store.createRecord('phrase',{
          sourcePhrase: this.get("sourcePhrase"),
          targetPhrase: this.get("targetPhrase"),
          book: this.get('model'),
          createdAt: new Date()
        })
        var controller = this
        phrase.save().then(function(phrase) {
          controller.set("sourcePhrase", "");
          controller.set("targetPhrase", "");
          controller.get("model.phrases").addObject(phrase)
        })
      }
      $(".book .content-wrapper ul.content .entry:last-of-type").remove()
    }
  }
})
