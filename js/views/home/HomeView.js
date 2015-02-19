define([
  'jquery',
  'underscore',
  'backbone',
  'views/file/FilesView',
  'text!templates/home/HomeTemplate.html'
], function($, _, Backbone, FilesView, tpl){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
    template: _.template(tpl),

    render: function(){
      
      // $('.menu li').removeClass('active');
      // $('.menu li a[href="#"]').parent().addClass('active');
      // this.$el.html(tpl);

      var filesView = new FilesView();
      filesView.render();
      return this;

    }

  });

  return HomeView;
  
});
