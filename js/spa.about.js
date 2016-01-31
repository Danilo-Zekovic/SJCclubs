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
        +       '<p>When looking for a club or activity that interests you, your biggest challenge will be deciding which one to get involved with first. Travel to North Carolina with Habitat for Humanity, plan events like our annual Little 500 as a member of the Puma Activities Council (PAC), or test your mettle with the Rugby Club. Because of our small student population, you can easily take a leadership role in whatever club or activity you get involved with. And if we don’t have what you’re looking for, you can always start it yourself.</p>'
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
