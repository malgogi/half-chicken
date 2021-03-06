// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ion-google-place'])
.constant( 'DEPLOY_SERVER_URL', 'https://half-chicken-server.herokuapp.com/api' )
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //login page
  .state('login', {
    url : '/login',
    templateUrl : 'templates/user/log-in.html',
    controller : 'logInCtrl'
  })

  .state( 'signup', {
    url : '/signup',
    templateUrl : 'templates/user/sign-up.html',
    controller : 'signUpCtrl'
  })

  .state( 'main', {
    url : '/main',
    templateUrl : 'templates/main/main.html',
    abstract: true
  })
    .state('main.register', {
      url: '/main-register',
      views: {
        'tab-register': {
          templateUrl : 'templates/main/main-tab-register.html',
          controller : 'mainCtrl'
        }
      }
    })
      .state( 'main.register-detail', {
        url : '/register-detail',
        views : {
          'tab-register' : {
            templateUrl : 'templates/detailpage/detailpage-main.html'    
          }
        }
        
      })
    .state('main.apply', {
      url: '/main-apply',
      views: {
        'tab-apply': {
          templateUrl : 'templates/main/main-tab-apply.html',
          controller : 'mainCtrl'
        }
      }
    })
      .state( 'main.apply-detail', {
        url : '/apply-detail',
        views : {
          'tab-apply' : {
            templateUrl : 'templates/detailpage/detailpage-main.html'    
          }
        }
        
      })


  .state( 'register', {
    url : '/register',
    templateUrl : 'templates/register/register-main.html',
    controller : 'registerCtrl'
  })

  .state( 'myPage', {
    url : '/mypage',
    templateUrl : 'templates/mypage/mypage-main.html',
    controller : 'myPageMainCtrl'
  })

  .state( 'myPageModify', {
    url : '/mypage-modify',
    templateUrl : 'templates/mypage/mypage-modify.html'
  })

  .state( 'setting', {
    url : '/setting',
    templateUrl : 'templates/setting/setting-main.html'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
