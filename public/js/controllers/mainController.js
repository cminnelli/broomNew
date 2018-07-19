
// CONFIGURACION FIREBASE
  var config = {
    apiKey: "AIzaSyB_pK2rypETX2rroDgmdVZ2G6S8cocRGF0",
    authDomain: "broomdevelop.firebaseapp.com",
    databaseURL: "https://broomdevelop.firebaseio.com",
    projectId: "broomdevelop",
    storageBucket: "broomdevelop.appspot.com",
    messagingSenderId: "478555603925"
  };

// INICIA FIREBASE
firebase.initializeApp(config);

// ANGULAR APP
app = angular.module("myApp" , []);



app.controller("mainController" , function($scope , $http, googleService){         
 
  $scope.portfolio = {
    charlie:[
    {nombre:"Ingenio Técnico" , 
    categoria: "Consultora RRHH",
    tipo: ["Responsive" , "Web Institucional" , "autoadministrable" , "Landing Page"],
    image:"render3.jpg",
  },
     {nombre:"AutosMinn" , 
      categoria: "Concesionario",
      tipo: ["Responsive" , "Web Institucional" , "autoadministrable" , "Landing Page"],
      image:"render2.jpg",
  },
      {nombre:"Sistema RRHH" , 
      categoria: "Micrositio",
      tipo: ["Aplicacion Web" , "Responsive" , "autoadministrable" , "Landing Page"],
      image:"render3.jpg",
   },
      {nombre:"Portfolio" , 
      categoria: "Portfolios",
       tipo: ["Responsive" , "Web Institucional" , "autoadministrable" , "Landing Page"],
      image:"render2.jpg",
   }

    ],
    tomy:[]
  }


})