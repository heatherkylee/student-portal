/* global Vue, VueRouter, axios */


var UserEditPage = {
  template: "#user-edit-page",
  data: function() {
    return {
      message: "UserEditPage",
      userInfo: {
        first_name: "first_name",
        last_name: "last_name",
        email: "email",
        phone_number: "phone_number",
        short_bio: "short_bio",
        linkedin_url: "linkedin_url",
        twitter_handle: "twitter_handle",
        website_url: "website_url",
        online_resume_url: "online_resume_url",
        github_url: "github_url",
        photo_url: "photo_url"
      }
    };
  },
  created: function() {
    // axios.get('/api/user').then(function (response) {
    //   this.user = response.data;
    // }.bind(this));
  },
  methods: {},
  computed: {}
};

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Home"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [
  { path: "/", component: HomePage },
  { path: "/edit", component: UserEditPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});