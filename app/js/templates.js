this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["leaderboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li data-id=\""
    + alias3(((helper = (helper = helpers.userID || (depth0 != null ? depth0.userID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userID","hash":{},"data":data}) : helper)))
    + "\">\n\n  "
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"congratsDiv\">\n\n<h2>Congrats "
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "! You guessed correctly!</h2>\n\n<img src=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n\n<h3>"
    + alias3(((helper = (helper = helpers.guessAnswer || (depth0 != null ? depth0.guessAnswer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"guessAnswer","hash":{},"data":data}) : helper)))
    + "</h3>\n\n<p>Your score is now: "
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</p>\n\n\n</div><!--end of congratsDiv-->\n\n\n<div class=\"leaderboardDiv\">\n\n<h2>Here's where you stand on the Leaderboard:</h2>\n\n<ul id=\"leaderboardList\" class=\"leaderboardList\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.user : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>\n</ul>\n\n\n</div><!-- end of leaderboardDiv -->\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n<div class=\"loginBox\">\n\n<h2>Login</h2>\n\n<div class=\"formDiv\">\n<form id=\"loginForm\" class=\"loginForm\">\n  <input type=\"text\" id=\"loginusername\" placeholder=\" username\">\n  <input type=\"password\" id=\"loginpassword\" placeholder=\" password\">\n  <button id=\"loginButton\">Login</button>\n</form>\n</div>\n\n<div class=\"registerDiv\">\n<h2>Register</h2>\n<form id=\"registerForm\" class=\"registerForm\">\n  <input type=\"email\" id=\"email\" placeholder=\" email\">\n  <input type=\"text\" id=\"regusername\" placeholder=\" username\">\n  <input type=\"password\" id=\"regpassword\" placeholder=\" password\">\n  <button id=\"registerButton\">Register</button>\n\n</form>\n\n</div>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "  <li data-id=\""
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n\n  <img href=\"#/single\" src=\""
    + alias1(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.rootURL : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">\n\n\n</li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <aside>\n      <div class=\"innerAside\">\n        <div class=\"asideTop\">\n          <h4>USERNAME</h4>\n          <div class=\"avatar\">\n            <img src=\"http://placehold.it/100x100\">\n          </div>\n          <div class=\"score\">\n            <p>Current score: </p>\n          </div>\n        </div>\n        <div class=\"leaderboardSection\">\n          <h4>Leaderboard</h4>\n          <ul id=\"leaderboard\" class=\"leaderboard\">\n            <li>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + ": </li>\n            <li>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + ": </li>\n          </ul>\n        </div>\n        </div>\n    </aside>\n\n<div class=\"mainImages\">\n  <h2>LET'S PLAY!</h2>\n  <button id=\"takemetosingleview\">go to single view</button>\n  <ul class=\"small-block-grid-3\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.image : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n\n<div class=\"deleteDiv\">\n  <button id=\"#deleteButton\">Delete Account</button>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["single"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <aside>\n      <div class=\"innerAside\">\n        <div class=\"asideTop\">\n          <h4>USERNAME</h4>\n          <div class=\"avatar\">\n            <img src=\"http://placehold.it/100x100\">\n          </div>\n          <div class=\"score\">\n            <p>Current score: </p>\n          </div>\n        </div>\n        <div class=\"leaderboardSection\">\n          <h4>Leaderboard</h4>\n          <ul id=\"leaderboard\" class=\"leaderboard\">\n            <li>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + ": </li>\n            <li>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + ": </li>\n          </ul>\n        </div>\n        </div>\n    </aside>\n\n    <div class=\"singleMain\">\n      <h3>SINGLE PAGE HEADER WILL GO HERE</h3>\n\n      <div class=\"image\">\n        <img src=\"http://placehold.it/350x450\">\n        <div class=\"imageInfo\">\n          <p>Incorrect so far: </p>\n          <p>Correct so far: \n          </p>\n          <p>Posted by </p>\n\n          <!-- would be cool to add div with user's score and addClass show on hover to this information -->\n\n        </div>\n      </div>\n\n    <form class=\"guessInput\" id=\"guessInput\">\n      <input type=\"text\" placeholder=\"What's your guess?\" id=\"guess\" class=\"guess\">\n      <button id=\"guessBtn\" class=\"guessBtn\">Submit Guess</button>\n    </form>\n\n    </div>\n\n";
},"useData":true});