import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/blog/:postId', {
    action: function (params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
    }
});

FlowRouter.route( '/example', {
  action: function() {
    BlazeLayout.render('layout1', { top: "header", main: "postList" });
  },
  name: 'example', 
});
