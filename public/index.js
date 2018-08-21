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
  methods: {
    submit: function() {
      var params = {
        first_name: this.userInfo.first_name,
        last_name: this.userInfo.last_name,
        email: this.userInfo.email,
        phone_number: this.userInfo.phone_number,
        short_bio: this.userInfo.short_bio,
        linkedin_url: this.userInfo.linkedin_url,
        twitter_handle: this.userInfo.twitter_handle,
        website_url: this.userInfo.website_url,
        online_resume_url: this.userInfo.online_resume_url,
        github_url: this.userInfo.github_url,
        photo_url: this.userInfo.photo_url
      }
      console.log(params);
      console.log("submit!");
    }
  },
  computed: {}
};

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to The Student Portal!",
      users: [],
      resumes: [],
      capstones: [],
      education: [],
      skills: [],
      experiences: []

      message: "Home"
    };
  },
  created: function() {
    console.log('in the created function')
    // axios.get('http://localhost:3000/api/user').then(function (response) {
    //   this.user = response.data;
    // }.bind(this))
    
  },
  methods: {},
  computed: {}
};

// authentication

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email, password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var LogoutPage = {
  template: "<h1>Logout</h1>",
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  }
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/edit", component: UserEditPage },
    { path: "/login", component: LoginPage },
    { path: "/logout", component: LogoutPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});
