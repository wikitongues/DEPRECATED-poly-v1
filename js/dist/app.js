var App=Ember.Application.create({});App.ResetScroll=Ember.Mixin.create({activate:function(){this._super(),window.scrollTo(0,0)}}),App.ApplicationAdapter=DS.FirebaseAdapter.extend({firebase:new Firebase("https://wikitongues-poly.firebaseio.com/")}),App.Router.map(function(){this.resource("book",{path:"books/:book_id"}),this.route("new")}),App.BookRoute=Ember.Route.extend({model:function(a){return this.store.find("book",a.book_id)}}),App.IndexRoute=Ember.Route.extend({model:function(){return this.store.findAll("book")}}),App.NewRoute=Ember.Route.extend({model:function(){return this.store.createRecord("book")}}),App.Book=DS.Model.extend({title:DS.attr("string"),timeCreated:DS.attr("date"),author:DS.attr("string"),url:DS.attr("string"),banner:DS.attr("string"),description:DS.attr("string"),favorite:DS.attr("boolean"),sourceLanguage:DS.attr("string"),sourceCode:DS.attr("string"),targetLanguage:DS.attr("string"),targetCode:DS.attr("string"),phrases:DS.hasMany("phrase",{async:!0})}),App.Phrase=DS.Model.extend({book:DS.belongsTo("book"),sourcePhrase:DS.attr("string"),targetPhrase:DS.attr("string")}),App.BookController=Ember.ObjectController.extend({sourcePhrase:"",targetPhrase:"",actions:{favorite:function(){this.toggleProperty("favorite")},addPhrase:function(){$(".addPhrase").toggleClass("open"),$(".newPhrase").toggleClass("open"),$(".book .content-wrapper ul.content").append("<li class='entry'><ul><li class='source'><p><span class='progress'><span></span><span></span><span></span></span></p></li></ul></li>")},saveSource:function(){""!=$(".newPhrase .input.source").val()&&($(".book .content-wrapper ul.content .entry:last-of-type ul li.source p").html($(".newPhrase .input.source").val()).parent().parent().append("<li class='target'><p><span class='progress'><span></span><span></span><span></span></span></p></li>"),$(".newPhrase .input.source").hide(),$(".newPhrase .input.target").show(),$(".newPhrase .saveSource").hide(),$(".newPhrase .saveTarget").show(),$(".newPhrase .input.source").val(""))},saveTarget:function(){if(""!=$(".newPhrase .input.target").val()){$(".newPhrase .input.source").show(),$(".newPhrase .input.target").hide(),$(".newPhrase .saveSource").show(),$(".newPhrase .saveTarget").hide(),$(".newPhrase .input.target").val(""),$(".newPhrase").toggleClass("open"),$(".addPhrase").toggleClass("open");var a=this.store.createRecord("phrase",{sourcePhrase:this.get("sourcePhrase"),targetPhrase:this.get("targetPhrase"),book:this.get("model"),createdAt:new Date}),b=this;a.save().then(function(a){b.set("sourcePhrase",""),b.set("targetPhrase",""),b.get("model.phrases").addObject(a)})}$(".book .content-wrapper ul.content .entry:last-of-type").remove()}}}),App.IndexController=Ember.ArrayController.extend({isFavorite:function(){return this.filterBy("favorite")}.property("@each.favorite"),isNew:function(){return this.filterBy("favorite",!1)}.property("@each.favorite")}),App.NewController=Ember.Controller.extend({actions:{saveBook:function(){var a=this;this.get("model").save().then(function(){a.transitionToRoute("/books/"+a.get("model.id"))})}}}),App.Book.FIXTURES=[{id:1,title:"Useful phrases in Kiribati",author:"Omniglot",url:"http://www.omniglot.com/language/phrases/kiribati.htm",banner:"img/users/ladonna.png",description:"A collection of useful phrases in Kiribati, a Micronesian language spoken on Kiribati and a number of other Pacific islands.",favorite:!0,sourceLanguage:"English",sourceCode:"eng",targetLanguage:"Kiribati",targetCode:"gil",phrases:[1,2,3]},{id:2,title:"Useful phrases in Yolngu",author:"Evan",url:"http://www.omniglot.com/language/phrases/yolngu.htm",banner:"img/users/joyce.png",description:"A collection of useful phrases in Yolngu, a Pama-Nyungan language spoken in Arnhem Land in the Northern Territory of Australia.",favorite:!1,sourceLanguage:"English",sourceCode:"eng",targetLanguage:"Yolngu",targetCode:"ygs",phrases:[4,5,6]},{id:3,title:"Useful phrases in Northern Sotho",author:"Omniglot",url:"http://www.omniglot.com/language/phrases/northernsotho.htm",banner:"img/users/tatenda.png",description:"A collection of useful phrases in Northern Sotho (Sesotho sa Leboa / Sepedi), a member of the Bantu branch of Niger-Congo languages spoken in South Africa.",favorite:!1,sourceLanguage:"English",sourceCode:"eng",targetLanguage:"Northern Sotho",targetCode:"nso",phrases:[7,8,9]},{id:4,title:"Suomen Kieli On Paras Kieli",author:"Omniglot",url:"http://www.omniglot.com/language/phrases/finnish.php",banner:"",description:"A guide to help noobs get with paras kieli.",favorite:!0,sourceLanguage:"English",sourceCode:"eng",targetLanguage:"Finnish",targetCode:"nso",phrases:[10,11,12]}],App.Phrase.FIXTURES=[{id:1,book:1,sourcePhrase:"Welcome",targetPhrase:"Mauri"},{id:2,book:1,sourcePhrase:"Hello",targetPhrase:"Ko na mauri"},{id:3,book:1,sourcePhrase:"How are you?",targetPhrase:"Ko uara?"},{id:4,book:2,sourcePhrase:"Welcome",targetPhrase:"Märr-ŋamathirri"},{id:5,book:2,sourcePhrase:"How are you?",targetPhrase:"Nhämirri nhe?"},{id:6,book:2,sourcePhrase:"Long time no see",targetPhrase:"Malk lambirri bäyŋu nhäma"},{id:7,book:3,sourcePhrase:"Welcome",targetPhrase:"Kena ka kgotso"},{id:8,book:3,sourcePhrase:"Hello",targetPhrase:"Dumêlang"},{id:9,book:3,sourcePhrase:"How are you?",targetPhrase:"O phela jwang?"},{id:10,book:4,sourcePhrase:"This gentleman will pay for everything.",targetPhrase:"Tämä herrasmies maksaa kaiken"},{id:11,book:4,sourcePhrase:"Would you like to dance with me?",targetPhrase:"Haluaisitko tanssia kanssani?"},{id:12,book:4,sourcePhrase:"My hovercraft is full of eels!",targetPhrase:"Ilmatyynyalukseni on täynnä ankeriaita!"}];