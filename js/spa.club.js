/*
 * spa.club.js
 * Danilo Zekovic
 * testing to display clubs
 */

spa.club = (function (){
  'use strict';
  // begin local variables
  var
    configMap = {
      main_html : String()
        + '<p>Club one test page</p>'
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

      console.log("clubs page reached");
      //set to taste
      serverURL = 'http://localhost:4000';

      // load HTML and jquery collections
      stateMap.$container = $container;
      $container.hide();
      $container.html( configMap.main_html );

      setJqueryMap();
      console.log("initModule over");

    };

    return {
      initModule  : initModule,
      //postSection : postSection
    };
}());
