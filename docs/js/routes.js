/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/* 
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider) {
    $stateProvider
    .state('index', {
      url: "",
      views: {
        'Nav': { templateUrl: 'pags/menu.html', controller: 'indexCtrl'},
        'Home': { templateUrl: 'pags/home.html', controller: 'indexCtrl'},
        'About': { templateUrl: 'pags/about.html', controller: 'indexCtrl'},
        'Portfolio': { templateUrl: 'pags/portfolio.html', controller: 'indexCtrl'},
        'Contact':{ templateUrl: 'pags/contact.html'},
        'Footer':{ templateUrl: 'pags/footer.html'}
      }
    }) 
    .state('home', {
      url: "/home",
      views: {
        'Nav': { templateUrl: 'pags/menu.html', controller: 'indexCtrl'},
        'Home': { templateUrl: 'pags/home.html', controller: 'indexCtrl'},
        'Journal': { templateUrl: 'pags/about.html', controller: 'indexCtrl'},
        'Portfolio': { templateUrl: 'pags/portfolio.html', controller: 'indexCtrl'},
        'Contact':{ templateUrl: 'pags/contact.html'},
        'Footer':{ templateUrl: 'pags/footer.html'}
      }
    })   
    .state('postdetail', {
      url: "/post-detail",
      views: {
        'Post': { templateUrl: 'pags/n1.html'},
        'Contact':{ templateUrl: 'pags/contact.html'},
        'Footer':{ templateUrl: 'pags/footer.html'}
      }
    })      
  });