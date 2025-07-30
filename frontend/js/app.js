// Aplicação principal do Marketplace
var app = angular.module('marketplaceApp', ['ngRoute', 'ngResource']);

// Configuração global da aplicação
app.run(['$rootScope', 'CartService', function($rootScope, CartService) {
    // Configurações globais
    $rootScope.apiUrl = 'http://localhost:3000/api';
    
    // Atualizar contador do carrinho
    $rootScope.$watch(function() {
        return CartService.getCartCount();
    }, function(newCount) {
        $rootScope.cartCount = newCount;
    });
    
    // Atualizar total do carrinho
    $rootScope.$watch(function() {
        return CartService.getCartTotal();
    }, function(newTotal) {
        $rootScope.cartTotal = newTotal;
    });
    
    // Função para mostrar mensagens
    $rootScope.showMessage = function(message, type) {
        $rootScope.message = {
            text: message,
            type: type || 'info'
        };
        
        setTimeout(function() {
            $rootScope.message = null;
            $rootScope.$apply();
        }, 3000);
    };
}]); 