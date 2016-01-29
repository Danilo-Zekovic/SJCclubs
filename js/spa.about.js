/*
 * spa.club.js
 * Danilo Zekovic
 * testing to display clubs
 */

spa.about = (function (){
  'use strict';
  // begin local variables
  var
    configMap = {
      main_html : String()
        + '<br>'
        + '<div class="container">'
        +   '<div class="jumbotron about-jb">'
        +     '<h1>About Clubs and Activities at SJC</h1>'
        +     '<p>There is so much to discover</p>'
        +   '</div>'
        +   '<div class="row">'
        +     '<div class="col-md-12"'
        +       '<p>text goes here</p>'
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

      console.log("about page reached");
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
