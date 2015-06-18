this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["leaderboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
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