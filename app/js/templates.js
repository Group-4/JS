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
    + "</p>\n\n\n</div>\n\n\n<div class=\"leaderboardDiv\">\n\n<h2>Here's where you stand on the Leaderboard:</h2>\n\n<ul id=\"leaderboardList\" class=\"leaderboardList\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.user : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>\n</ul>\n\n\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n<div class=\"loginBox\">\n\n<h2>Login</h2>\n\n<div class=\"formDiv\">\n<form id=\"loginForm\" class=\"loginForm\">\n  <input type=\"text\" id=\"loginusername\" placeholder=\" username\">\n  <input type=\"text\" id=\"loginpassword\" placeholder=\" password\">\n  <button id=\"loginButton\">Login</button>\n</form>\n</div>\n\n<div class=\"registerDiv\">\n<form id=\"registerForm\" class=\"registerForm\">\n  <input type=\"text\" id=\"email\" placeholder=\" email\">\n  <input type=\"text\" id=\"regusername\" placeholder=\" username\">\n  <input type=\"text\" id=\"regpassword\" placeholder=\" password\">\n  <button id=\"registerButton\">Register</button>\n\n</form>\n\n</div>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["single"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});