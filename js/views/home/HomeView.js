define([
  'jquery',
  'underscore',
  'backbone',
  'views/file/FilesView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, FilesView, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate);

      var filesView = new FilesView();
      
      // console.log('asd', filesView.render());
 
    }

  });

  return HomeView;
  
});
