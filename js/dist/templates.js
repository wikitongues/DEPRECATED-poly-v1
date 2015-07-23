Ember.TEMPLATES["node_modules/grunt-contrib-uglify/node_modules/uglify-js/node_modules/yargs/completion.sh"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("###-begin-");
  stack1 = helpers._triageMustache.call(depth0, "app_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-completions-###\n#\n# yargs command completion script\n#\n# Installation: ");
  stack1 = helpers._triageMustache.call(depth0, "app_path", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" completion >> ~/.bashrc\n#    or ");
  stack1 = helpers._triageMustache.call(depth0, "app_path", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" completion >> ~/.bash_profile on OSX.\n#\n_yargs_completions()\n{\n    local cur_word args type_list\n\n    cur_word=\"${COMP_WORDS[COMP_CWORD]}\"\n    args=$(printf \"%s \" \"${COMP_WORDS[@]}\")\n\n    # ask yargs to generate completions.\n    type_list=`");
  stack1 = helpers._triageMustache.call(depth0, "app_path", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" --get-yargs-completions $args`\n\n    COMPREPLY=( $(compgen -W \"${type_list}\" -- ${cur_word}) )\n    return 0\n}\ncomplete -F _yargs_completions ");
  stack1 = helpers._triageMustache.call(depth0, "app_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n###-end-");
  stack1 = helpers._triageMustache.call(depth0, "app_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-completions-###\n");
  return buffer;
  
});

Ember.TEMPLATES["node_modules/grunt-ember-test/fixtures/grandparent/parent/child"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Should be nested.");
  
});

Ember.TEMPLATES["node_modules/grunt-ember-test/fixtures/preprocess"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\n    <div>Spaces</div>\n	<div>Tabs</div>\n\n\n	<div   class=\"spaces  in   attrs\"></div>\n	");
  data.buffer.push(escapeExpression((helper = helpers.spaces || (depth0 && depth0.spaces),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data},helper ? helper.call(depth0, "in", "handlebars", "tags", options) : helperMissing.call(depth0, "spaces", "in", "handlebars", "tags", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["node_modules/grunt-ember-test/fixtures/simple"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<p>Hello, my name is ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(".</p>");
  return buffer;
  
});

Ember.TEMPLATES["node_modules/grunt-ember-test/fixtures/text"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Basic template that does nothing.");
  
});

Ember.TEMPLATES["_phraseInput"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<li class=\"entry entering\">\n  <ul>\n    <li class=\"source\">\n      <p>\n        <span class=\"progress\">\n          <span></span>\n          <span></span>\n          <span></span>\n        </span>\n      </p>\n    </li>\n    <li class=\"target\">\n      <p>\n        <span class=\"progress\">\n          <span></span>\n          <span></span>\n          <span></span>\n        </span>\n      </p>\n    </li>\n  </ul>\n</li>");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['top-nav'] || (depth0 && depth0['top-nav']),options={hash:{
    'tagName': ("nav")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "top-nav", options))));
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "footer-component", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["book"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <img class=\"icon star\" src=\"img/icons/i_starred.svg\" alt=\"favorite\">\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <img class=\"icon star\" src=\"img/icons/i_unstarred.svg\" alt=\"favorite\">\n      ");
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "sourceLanguage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program7(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "targetLanguage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li class=\"entry\">\n          <ul>\n            ");
  stack1 = helpers['if'].call(depth0, "sourcePhrase", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "targetPhrase", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </ul>\n        </li>\n        ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li class=\"source\">\n              <p>");
  stack1 = helpers._triageMustache.call(depth0, "sourcePhrase", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            </li>\n            ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li class=\"target\">\n              <p>");
  stack1 = helpers._triageMustache.call(depth0, "targetPhrase", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            </li>\n            ");
  return buffer;
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\n        <p class=\"empty\">Shoot! There is nothing here!</p>\n      ");
  }

  data.buffer.push("<div class=\"book\">\n  <div class=\"info\">\n    <button class=\"favorite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "favorite", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['if'].call(depth0, "favorite", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </button>\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <h3>");
  stack1 = helpers._triageMustache.call(depth0, "author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </div>\n\n  <img class=\"banner\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("banner")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"\">\n\n    <div class=\"cardinality\">\n      <section>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("language source"),
    'tagName': ("h1"),
    'title': ("sourceLanguage")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING",'title': "ID"},hashContexts:{'classNames': depth0,'tagName': depth0,'title': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "link-to", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <img class=\"icon cardinality\" src=\"img/icons/i_cardinality.svg\" alt=\"\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("language target"),
    'tagName': ("h1"),
    'title': ("targetLanguage")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING",'title': "ID"},hashContexts:{'classNames': depth0,'tagName': depth0,'title': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "link-to", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </section>\n    </div>\n\n  <section class=\"content-wrapper\">\n    <ul class=\"content\">\n      ");
  stack1 = helpers.each.call(depth0, "phrases", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      \n    </ul>\n    <div class=\"addPhrase open\">\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPhrase", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">+</button>\n    </div>\n    <div class=\"newPhrase\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("input source"),
    'value': (""),
    'valueBinding': ("sourcePhrase"),
    'placeholder': ("Source Phrase"),
    'autofocus': (true)
  },hashTypes:{'classNames': "STRING",'value': "STRING",'valueBinding': "STRING",'placeholder': "STRING",'autofocus': "BOOLEAN"},hashContexts:{'classNames': depth0,'value': depth0,'valueBinding': depth0,'placeholder': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("input target"),
    'value': (""),
    'valueBinding': ("targetPhrase"),
    'placeholder': ("Target Phrase"),
    'autofocus': (true)
  },hashTypes:{'classNames': "STRING",'value': "STRING",'valueBinding': "STRING",'placeholder': "STRING",'autofocus': "BOOLEAN"},hashContexts:{'classNames': depth0,'value': depth0,'valueBinding': depth0,'placeholder': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      <a class=\"icon save saveSource\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveSource", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" title=\"Save\">+</a>\n      <a class=\"icon save saveTarget\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveTarget", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" title=\"Save\">+</a>\n    </div>\n  </section>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/book-entry"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<section class=\"info\">\n  <span class=\"banner\">\n    ");
  stack1 = helpers['if'].call(depth0, "book.banner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n  <button class=\"favorite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "favorite", {hash:{
    'bubbles': (false)
  },hashTypes:{'bubbles': "BOOLEAN"},hashContexts:{'bubbles': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "book.favorite", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n  <p class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "book.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  <p class=\"author\">");
  stack1 = helpers._triageMustache.call(depth0, "book.author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n</section>\n<section class=\"details\">\n  <span class=\"source language\">\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "book.sourceLanguage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </span>\n  <img class=\"icon cardinality\" src=\"img/icons/i_cardinality.svg\" alt=\"\">\n  <span class=\"target language\">\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "book.targetLanguage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </span>\n</section>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("book.banner")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"\">\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n      <img class=\"icon star\" src=\"img/icons/i_starred.svg\" alt=\"favorite\">\n      ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n      <img class=\"icon star\" src=\"img/icons/i_unstarred.svg\" alt=\"favorite\">\n    ");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "book", "book", options) : helperMissing.call(depth0, "link-to", "book", "book", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/top-nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<img class=\"icon home\" src=\"img/icons/i_home.svg\" alt=\"home\">");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<button>\n  <img class=\"icon more\" src=\"img/icons/i_more.svg\" alt=\"more\">\n</button>\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'placeholder': ("Search for a tag, phrase or language")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n       ");
  data.buffer.push(escapeExpression((helper = helpers['book-entry'] || (depth0 && depth0['book-entry']),options={hash:{
    'book': (""),
    'tagName': ("li")
  },hashTypes:{'book': "ID",'tagName': "STRING"},hashContexts:{'book': depth0,'tagName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "book-entry", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['book-entry'] || (depth0 && depth0['book-entry']),options={hash:{
    'book': (""),
    'tagName': ("li")
  },hashTypes:{'book': "ID",'tagName': "STRING"},hashContexts:{'book': depth0,'tagName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "book-entry", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n    +\n  ");
  }

  data.buffer.push("<div class=\"container dashboard\">\n  <section>\n    <h3>Favorites</h3>\n    <ul>\n      ");
  stack1 = helpers.each.call(depth0, "isFavorite", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </section>\n\n  <section>\n    <h3>New</h3>\n    <ul>\n      ");
  stack1 = helpers.each.call(depth0, "isNew", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </section>\n\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("newBook")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "new", options) : helperMissing.call(depth0, "link-to", "new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <img class=\"icon star\" src=\"img/icons/i_starred.svg\" alt=\"favorite\">\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <img class=\"icon star\" src=\"img/icons/i_unstarred.svg\" alt=\"favorite\">\n      ");
  }

  data.buffer.push("<div class=\"new book\">\n  <div class=\"info\">\n    <button class=\"favorite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "favorite", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['if'].call(depth0, "favorite", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </button>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("title"),
    'valueBinding': ("model.title"),
    'placeholder': ("Useful phrases in Laputa")
  },hashTypes:{'classNames': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'classNames': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <h3>");
  stack1 = helpers._triageMustache.call(depth0, "author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'rows': (2),
    'classNames': ("description"),
    'valueBinding': ("model.description"),
    'placeholder': ("A collection of useful phrases in Laputa, a Swiftian language spoken in Balnibarbi and a number of other islands.")
  },hashTypes:{'rows': "INTEGER",'classNames': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'rows': depth0,'classNames': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n\n  <img class=\"banner\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("banner")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"\">\n\n    <div class=\"cardinality\">\n      <section>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("languageSource"),
    'valueBinding': ("model.sourceLanguage"),
    'placeholder': ("Source Language")
  },hashTypes:{'classNames': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'classNames': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <img class=\"icon cardinality\" src=\"img/icons/i_cardinality.svg\" alt=\"\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'classNames': ("languageTarget"),
    'valueBinding': ("model.targetLanguage"),
    'placeholder': ("Target Language")
  },hashTypes:{'classNames': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'classNames': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </section>\n    </div>\n\n  <section class=\"content-wrapper\">\n    <h1>To add a phrase, <br>click the button below!</h1>\n    <div class=\"addPhrase open\">\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveBook", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">+</button>\n    </div>\n  </section>\n</div>");
  return buffer;
  
});