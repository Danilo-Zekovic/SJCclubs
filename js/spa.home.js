/*
 * spa.home.js
 * Danilo Zekovic
 * testing to display home view
 */

spa.home = (function (){
  'use strict';
  // begin local variables
  var
    configMap = {
      main_html : String()
        + '<br>'
        + '<div class="container">'
        +   '<div class="jumbotron home-jb">'
        +     '<h1>home</h1>'
        +     '<p>home</p>'
        +   '</div>'
        +   '<div class="row">'
        +     '<div class="col-md-4"'
        +       '<p>Welcome to home view of SJC clubs</p>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row">'
        +     '<div class="col-md-3 social-media">'
        +       '<p>Welcome</p>'
        +     '</div>'
        +     '<div class="col-md-3 social-media">'
        +       '<p>Welcome</p>'
        +     '</div>'
        +     '<div class="col-md-3 social-media">'
        +       '<p>Welcome</p>'
        +     '</div>'
        +     '<div class="col-md-3 social-media">'
        +       '<p>Welcome</p>'
        +     '</div>'
        +     '<div class="col-md-3 social-media">'
        +       '<p>Welcome</p>'
        +     '</div>'
        +     '<div class="col-md-3 social-media">'
        +       '<p>Welcome</p>'
        +     '</div>'
        +   '</div>'
        + '</div>'
    },

    stateMap = {
      $container : undefined
    },

    jqueryMap = {},
    initModule, serverURL, setJqueryMap;
    // end local variables

    setJqueryMap = function () {
      var $container = stateMap.$container;

      jqueryMap = {
        $container : $container
      };
    };

    // public methods
    initModule = function ( $container ) {

      console.log("home page reached");
      //set to taste
      //serverURL = 'http://localhost:4000';

      // load HTML and jquery collections
      stateMap.$container = $container;
      $container.hide();
      $container.html( configMap.main_html ).show();

      setJqueryMap();
      console.log("initModule over");

    };

    return {
      initModule  : initModule,
      //postSection : postSection
    };
}());
