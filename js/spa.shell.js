/*
 * spa.shell.js
 * Shell for OSCON Demo
*/

spa.shell = (function () {
  'use strict';
  // ------------> "Local" variables
  var
    configMap = {
      main_html : String()
      +'<nav>'
      +'<div class="navbar navbar-default" role="navigation">'
      +'<div class="navbar-header">'
      +'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">'
      +'<span class="sr-only">Toggle navigation</span>'
      +'<span class="icon-bar"></span>'
      +'<span class="icon-bar"></span>'
      +'<span class="icon-bar"></span>'
      +'</button>'
      +'<a class="navbar-brand" href="/">SJC SPA Demo</a>'
      +'</div>'
      +'<ul class="nav navbar-nav navbar-right" id="logs">'
      +'<li id="sign"><a href=""><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>'
      +'<li id="log"><a href=""><span class="glyphicon glyphicon-log-in"></span> Login</a></li>'
      +'</ul>'
      +'</div></nav>'

      +'<nav class="collapse navbar-collapse navbar-ex1-collapse col-md-8 col-sm-7">'
      +'<ul class="nav nav-sidebar" id="side">'
      +'<li><a href="/">Home</a></li>'
      +'<li><a href="/dates">Date Calculator</a></li>'
      +'<li><a href="/socket">socket.io Data Channel</a></li>'
      +'<li><a href="/">SEO Concerns</a></li>'
      +'<li id="signUp"><a href=""><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>'
      +'<li id="logIn"><a href=""><span class="glyphicon glyphicon-log-in"></span> Login</a></li>'
      +'</ul>'
      +'</nav>'

      +'<section><div id="content-main">Feature Content Region'
      + '</div></section>'
      +'<section><div id="content-dates"></div></section>'
      +'<section><div id="content-socket"></div></section>'
      +'<section><div id="content-seo"></div></section>'
    },

    stateMap = {
      // View state information
      $container  : undefined,
    },

    jqueryMap = {},

    initModule, setJqueryMap,
    currentMod;

  //--- end variables


  //--- Methods interacting with the DOM/jQuery

  // Begin DOM method /setJqueryMap
  setJqueryMap = function () {
    var $container = stateMap.$container;

    // Only three regions for now
    jqueryMap = {
      $container : $container,
    };
  };
  // End DOM method /setJqueryMap

  // Begin client-side router methods

  // Base route
  function index() {
    currentMod.hide();
    currentMod = jqueryMap.$content;
    jqueryMap.$content.show();
    }

  // End DOM client-side router methods

  // -- end DOM-oriented methods //

  // -- Public API methods

  // Begin Public method /initModule
  initModule = function ( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.html( configMap.main_html );

    // Keep track of our elements
    setJqueryMap();

    // Default content is "home" screen
    currentMod = jqueryMap.$content;

    // Set up routes
    page('/', index);


  }; // End public method initModule

  // Post API reference property
  return { initModule : initModule };
  //--- end methods exposed to public
}());
