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
      + '<br>'
      + '<div id="clubs" class="container">'
      +   '<div class="jumbotron clubs-jb">'
      +     '<h1>All of the CLubs</h1>'
      +     '<p>There is something for everybody</p>'
      +   '</div>'
      +   '<div class="row">'
      +     '<div  class="col-md-12">'
      +       '<div id="academic" class="academic-content club-group">'
      +       '<button id="btn-academic" class="btn btn-info btn-lg club-type" type="submit">Academic</button>'

      +         '<p>foo</p>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      +   '<div class="row">'
      +     '<div class="col-md-12">'
      +       '<h1 class="club-type">Athletic</h1>'
      +     '</div>'
      +   '</div>'
      +   '<div class="row">'
      +     '<div class="col-md-12">'
      +       '<h1 class="club-type">Creative</h1>'
      +     '</div>'
      +   '</div>'
      +   '<div class="row">'
      +     '<div class="col-md-12">'
      +       '<h1 class="club-type">Government</h1>'
      +     '</div>'
      +   '</div>'
      +   '<div class="row">'
      +     '<div class="col-md-12">'
      +       '<h1 class="club-type">Music</h1>'
      +     '</div>'
      +   '</div>'
      +   '<div class="row">'
      +     '<div class="col-md-12">'
      +       '<h1 class="club-type">Social & Service</h1>'
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
        $container : $container,
        $academic_bt  : $container.find('#btn-academic'),
        $academic     : $container.find('#academic')
      };
    };

    // public methods
    initModule = function ( $container ) {

      console.log("clubs page reached");
      //set to taste
      //serverURL = 'http://localhost:4000';

      // load HTML and jquery collections
      stateMap.$container = $container;
      $container.hide();
      $container.html( configMap.main_html ).show();

      setJqueryMap();
      console.log("initModule over");

      jqueryMap.$academic_bt.click(function(){
        console.log("academic got clicked");
        jqueryMap.$academic.style.transition = "height 0.2s linear 0s";
        jqueryMap.$academic.style.height = "200px";
      });

    };

    return {
      initModule  : initModule,
      //postSection : postSection
    };
}());
