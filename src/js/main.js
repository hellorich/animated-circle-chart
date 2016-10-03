require(['jquery', 'circliful', 'test'], function ($, circliful, test) {
  
  'use strict';
  
  console.log('Main loaded');

  test.publicMethod('Hello');

  var animationStep = $('.chart').data('animationStep'),
      percent       = $('.chart').data('percent');

  $( document ).ready(function() {
    $('.chart').circliful({
      animationStep: animationStep,
      percent: percent
    });
  });

});