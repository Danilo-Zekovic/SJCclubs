/*
 * spa.shell.js
 * Danilo Zekovic
 * Main shell, basic structure of the app
*/

spa.shell = (function () {
  'use strict';
  // ------------> "Local" variables
  var
    configMap = {
      main_html : String()
      + '<p id="page-title">Saint Joseph\'s College Clubs Page</p>'
      + '<nav class="navbar navbar-default navbar-custom" role="navigation">'
      +   '<div class="container">'
      +      '<!-- Brand and toggle get grouped for better mobile display -->'
      +      '<div class="navbar-header">'
      +         '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'
      +            '<span class="sr-only">Toggle navigation</span>'
      +            '<span class="icon-bar"></span>'
      +            '<span class="icon-bar"></span>'
      +            '<span class="icon-bar"></span>'
      +         '</button>'
      +         '<!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->'
      +         '<a class="navbar-brand" href="/">SJC</a>'
      +      '</div>'
      +      '<!-- Collect the nav links, forms, and other content for toggling -->'
      +      '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
      +         '<ul class="nav navbar-nav">'
      +            '<li>'
      +              '<a href="/">Home</a>'
      +            '</li>'
      +            '<li>'
      +              '<a href="/clubs">Clubs</a>'
      +            '</li>'
      +            '<li>'
      +              '<a href="/about">About</a>'
      +            '</li>'
      +         '</ul>'
      +      '</div>'
      +      '<!-- /.navbar-collapse -->'
      +    '</div>'
      +    '<!-- /.container -->'
      + '</nav>'

      + '<section><div id="home-view">'
      +   'Author Danilo Zekovic'
      + '</div></section>'
      + '<section><div id="clubs-view">'
      + '</div></section>'
      + '<section><div id="about-view">'
      + '</div></section>'

      + '<div id="footer">'
      + '<p>Design by: Danilo Zekovic<br>Saint Joseph\'s College<br>www.saintjoe.edu 2015</p>'
      + '</div>'
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
      $main      : $container.find('#home-view'),
      $clubs     : $container.find('#clubs-view'),
      $about     : $container.find('#about-view')
    };
  };
  // End DOM method /setJqueryMap

  // Begin client-side router methods

  // Base route
  function index() {
    if( currentMod != jqueryMap.$main ) {
      currentMod.hide();
    }
    //currentMod.hide();
    currentMod = jqueryMap.$main;
    currentMod.show();
    //jqueryMap.$main.show();
    }

  function clubs() {
    if( currentMod != jqueryMap.$clubs ) {
      currentMod.hide();
    }
    currentMod = jqueryMap.$clubs;
    currentMod.show();
    //spa.club.postSection(); // will not work yet until spa.club.postSection() is created
  }

  function about() {
    if( currentMod != jqueryMap.$about) {
      currentMod.hide();
    }
    currentMod = jqueryMap.$about;
    currentMod.show();
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

    spa.club.initModule(jqueryMap.$clubs);
    spa.about.initModule(jqueryMap.$about);
    spa.home.initModule(jqueryMap.$main);
    jqueryMap.$clubs.hide();
    jqueryMap.$about.hide();
    jqueryMap.$main.hide();

    // Default content is "home" screen
    currentMod = jqueryMap.$main;

    // Set up routes
    page('/', index);
    page('/clubs', clubs);
    page('/about', about);
    page();



  }; // End public method initModule

  // Post API reference property
  return { initModule : initModule };
  //--- end methods exposed to public
}());
