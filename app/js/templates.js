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

  return "\n<div class=\"congratsDiv\">\n\n<h2>Congrats "
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "! You guessed correctly!</h2>\n\n<div class=\"singleWrap\">\n    <div class=\"singleMain\">\n      <i class=\"fa fa-camera\"></i>\n      <p>posted by <span>"
    + alias3(((helper = (helper = helpers.owner || (depth0 != null ? depth0.owner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner","hash":{},"data":data}) : helper)))
    + "<span></p>\n\n      <div class=\"image\">\n        <img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\">\n\n        <div class=\"imageInfo\">\n          <h3>Correct Answer: "
    + alias3(((helper = (helper = helpers.guessAnswer || (depth0 != null ? depth0.guessAnswer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"guessAnswer","hash":{},"data":data}) : helper)))
    + "</h3>\n\n          <p>Total Incorrect: </p>\n\n\n          <!-- would be cool to add div with user's score and addClass show on hover for this information -->\n\n        </div>\n      </div>\n\n<p>Your score is now: "
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</p>\n\n<div class=\"keepPlayingDiv\">\n  <button class=\"keepPlaying\" id=\"keepPlaying\">Keep Playing</button>\n\n</div>\n\n\n</div><!--end of congratsDiv-->\n\n\n<div class=\"leaderboardDiv\">\n\n<h2>Here's where you stand on the Leaderboard:</h2>\n\n<ul id=\"leaderboardList\" class=\"leaderboardList\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.user : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>\n</ul>\n\n\n</div><!-- end of leaderboardDiv -->\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"loginBox\">\n\n<h2>Login</h2>\n\n<div class=\"formDiv\">\n<form id=\"loginForm\" class=\"loginForm\">\n  <input type=\"text\" id=\"loginusername\" placeholder=\" username\">\n  <input type=\"password\" id=\"loginpassword\" placeholder=\" password\">\n  <button id=\"loginButton\">Login</button>\n</form>\n</div>\n\n<div class=\"registerDiv\">\n<h2>Register</h2>\n<form id=\"registerForm\" class=\"registerForm\">\n  <input type=\"email\" id=\"email\" placeholder=\" email\">\n  <input type=\"text\" id=\"regusername\" placeholder=\" username\">\n  <input type=\"password\" id=\"regpassword\" placeholder=\" password\">\n  <button id=\"registerButton\">Register</button>\n\n</form>\n\n</div>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "     <li data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n\n       <div class=\"imageWrap\">\n          <div class=\"actualImage\">\n            <a href=\"#/single/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\"></a>\n          </div>\n\n          <p>posted by: "
    + alias3(((helper = (helper = helpers.owner || (depth0 != null ? depth0.owner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner","hash":{},"data":data}) : helper)))
    + "</p>\n          <p>first solved by: "
    + alias3(((helper = (helper = helpers.solved_by || (depth0 != null ? depth0.solved_by : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"solved_by","hash":{},"data":data}) : helper)))
    + "</p>\n          <P>hint: "
    + alias3(((helper = (helper = helpers.hint || (depth0 != null ? depth0.hint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hint","hash":{},"data":data}) : helper)))
    + "</p>\n       </div>\n\n     </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"mainImages\">\n  <h2>LET'S PLAY!</h2>\n  <div class=\"rightBtns\">\n    <div class=\"logout\" id=\"logout\">\n      <p class=\"logoutBtn\" id=\"logoutBtn\">Logout</p>\n    </div>\n    <a href=\"/#newpost\"><div class=\"newpostBtn\">\n      <i class=\"fa fa-camera\"></i>\n      <p>Add a new post</p>\n    </div></a>\n  </div>\n\n  <ul class=\"small-block-grid-3\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.image : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  </ul>\n\n</div>\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["newpost"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"newpostMain\">\n\n  <form id=\"postImage\" class=\"postImage\">\n    <input type=\"text\" placeholder=\"Image URL\" id=\"image_url\">\n    <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n    <input type=\"text\" placeholder=\"Add a hint here\" id=\"hint\">\n    <button id=\"submitPost\">Add Post</button>\n  </form>\n\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n      <div class=\"innerAside\">\n        <div class=\"asideTop\">\n          <h4>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</h4>\n          <div class=\"avatar\">\n            <img src=\"http://placehold.it/100x100\">\n          </div>\n          <div class=\"score\">\n            <p>Current score: "
    + alias3(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"points","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n        </div>\n        <div class=\"leaderboardSection\">\n          <h4>Leaderboard</h4>\n          <ul id=\"leaderboard\" class=\"leaderboard\">\n            <li>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + ": </li>\n          </ul>\n        </div>\n        </div>\n\n<div class=\"deleteDiv\">\n  <button id=\"#deleteButton\">Delete Account</button>\n</div>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["single"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"singleWrap\">\n    <div class=\"singleMain\">\n      <i class=\"fa fa-camera\"></i>\n      <p>posted by <span>"
    + alias3(((helper = (helper = helpers.owner || (depth0 != null ? depth0.owner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner","hash":{},"data":data}) : helper)))
    + "<span></p>\n      <p class=\"deletePost\" id=\"deletePost\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-minus-square\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i></p>\n\n      <div class=\"image\">\n        <img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\">\n\n        <div class=\"imageInfo\">\n          <p>First solved by: <span>"
    + alias3(((helper = (helper = helpers.solved_by || (depth0 != null ? depth0.solved_by : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"solved_by","hash":{},"data":data}) : helper)))
    + "</span></p>\n          <p>Correct so far: <span>"
    + alias3(((helper = (helper = helpers.solved || (depth0 != null ? depth0.solved : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"solved","hash":{},"data":data}) : helper)))
    + "</span></p>\n          <p>Hint: <span>"
    + alias3(((helper = (helper = helpers.hint || (depth0 != null ? depth0.hint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hint","hash":{},"data":data}) : helper)))
    + "</span></p>\n\n          <!-- would be cool to add div with user's score and addClass show on hover for this information -->\n\n        </div>\n      </div>\n\n      <form class=\"guessInput\" id=\"guessInput\">\n        <input type=\"text\" placeholder=\"What's your guess?\" id=\"guess\" class=\"guess\">\n\n        <a href=\"#/leaderboard/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><button id=\"guessBtn\" class=\"guessBtn\">Check it!</button></a>\n\n      </form>\n\n    <div class=\"singleGuesses\" id=\"singleGuesses\">\n    <p id=\"seeOldGuesses\">See your old guesses</p>\n      <ul class=\"incorrectGuesses\" id=\"incorrectGuesses\">\n      </ul>\n    </div>\n\n    </div> <!-- end singleMain -->\n\n  </div> <!-- end singleWrap -->\n";
},"useData":true});