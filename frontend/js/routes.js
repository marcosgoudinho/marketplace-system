// Configuração das rotas da aplicação
angular.module('marketplaceApp').config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        // Rota principal
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        
        // Rota para páginas não encontradas
        .otherwise({
            redirectTo: '/'
        });
}]); 