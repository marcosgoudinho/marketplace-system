// Service para comunicação com a API
app.service('ApiService', ['$http', '$q', function($http, $q) {
    
    // URL base da API
    var apiUrl = 'http://localhost:3000/api';
    
    // Configuração padrão do $http
    $http.defaults.headers.common['Content-Type'] = 'application/json';
    
    // Interceptor para tratamento de erros
    $http.interceptors.push(['$q', function($q) {
        return {
            'responseError': function(rejection) {
                console.error('Erro na API:', rejection);
                return $q.reject(rejection);
            }
        };
    }]);
    
    // Métodos para produtos
    this.getProducts = function(params) {
        return $http.get(apiUrl + '/produtos', { params: params });
    };
    
    this.getProduct = function(id) {
        return $http.get(apiUrl + '/produtos/' + id);
    };
    
    this.createProduct = function(product) {
        return $http.post(apiUrl + '/produtos', product);
    };
    
    this.updateProduct = function(id, product) {
        return $http.put(apiUrl + '/produtos/' + id, product);
    };
    
    this.deleteProduct = function(id) {
        return $http.delete(apiUrl + '/produtos/' + id);
    };
    
    // Métodos para categorias
    this.getCategories = function() {
        return $http.get(apiUrl + '/categorias');
    };
    
    this.getCategory = function(id) {
        return $http.get(apiUrl + '/categorias/' + id);
    };
    
    // Métodos para usuários
    this.login = function(credentials) {
        return $http.post(apiUrl + '/auth/login', credentials);
    };
    
    this.register = function(userData) {
        return $http.post(apiUrl + '/auth/register', userData);
    };
    
    this.logout = function() {
        return $http.post(apiUrl + '/auth/logout');
    };
    
    this.getCurrentUser = function() {
        return $http.get(apiUrl + '/auth/me');
    };
    
    // Métodos para vendedores
    this.getSellers = function() {
        return $http.get(apiUrl + '/vendedores');
    };
    
    this.getSeller = function(id) {
        return $http.get(apiUrl + '/vendedores/' + id);
    };
    
    this.createSeller = function(sellerData) {
        return $http.post(apiUrl + '/vendedores', sellerData);
    };
    
    // Métodos para pedidos
    this.createOrder = function(orderData) {
        return $http.post(apiUrl + '/pedidos', orderData);
    };
    
    this.getOrders = function() {
        return $http.get(apiUrl + '/pedidos');
    };
    
    this.getOrder = function(id) {
        return $http.get(apiUrl + '/pedidos/' + id);
    };
    
    // Métodos para busca
    this.search = function(query, filters) {
        var params = { q: query };
        if (filters) {
            angular.extend(params, filters);
        }
        return $http.get(apiUrl + '/search', { params: params });
    };
    
    // Métodos para upload de arquivos
    this.uploadImage = function(file) {
        var formData = new FormData();
        formData.append('image', file);
        
        return $http.post(apiUrl + '/upload', formData, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        });
    };
    
    // Métodos para configurações
    this.getSettings = function() {
        return $http.get(apiUrl + '/settings');
    };
    
    this.updateSettings = function(settings) {
        return $http.put(apiUrl + '/settings', settings);
    };
    
    // Métodos para estatísticas
    this.getStats = function() {
        return $http.get(apiUrl + '/stats');
    };
    
    // Métodos para notificações
    this.getNotifications = function() {
        return $http.get(apiUrl + '/notifications');
    };
    
    this.markNotificationAsRead = function(id) {
        return $http.put(apiUrl + '/notifications/' + id + '/read');
    };
    
    // Métodos para avaliações
    this.getReviews = function(productId) {
        return $http.get(apiUrl + '/produtos/' + productId + '/reviews');
    };
    
    this.createReview = function(productId, review) {
        return $http.post(apiUrl + '/produtos/' + productId + '/reviews', review);
    };
    
    // Métodos para favoritos
    this.getWishlist = function() {
        return $http.get(apiUrl + '/wishlist');
    };
    
    this.addToWishlist = function(productId) {
        return $http.post(apiUrl + '/wishlist', { productId: productId });
    };
    
    this.removeFromWishlist = function(productId) {
        return $http.delete(apiUrl + '/wishlist/' + productId);
    };
    
    // Métodos para comparação
    this.getCompareList = function() {
        return $http.get(apiUrl + '/compare');
    };
    
    this.addToCompare = function(productId) {
        return $http.post(apiUrl + '/compare', { productId: productId });
    };
    
    this.removeFromCompare = function(productId) {
        return $http.delete(apiUrl + '/compare/' + productId);
    };
    
    // Métodos para cupons
    this.validateCoupon = function(code) {
        return $http.post(apiUrl + '/coupons/validate', { code: code });
    };
    
    // Métodos para endereços
    this.getAddresses = function() {
        return $http.get(apiUrl + '/addresses');
    };
    
    this.createAddress = function(address) {
        return $http.post(apiUrl + '/addresses', address);
    };
    
    this.updateAddress = function(id, address) {
        return $http.put(apiUrl + '/addresses/' + id, address);
    };
    
    this.deleteAddress = function(id) {
        return $http.delete(apiUrl + '/addresses/' + id);
    };
    
    // Métodos para pagamentos
    this.getPaymentMethods = function() {
        return $http.get(apiUrl + '/payment-methods');
    };
    
    this.processPayment = function(paymentData) {
        return $http.post(apiUrl + '/payments', paymentData);
    };
    
    // Métodos para relatórios
    this.getReports = function(type, params) {
        return $http.get(apiUrl + '/reports/' + type, { params: params });
    };
    
    // Métodos para logs
    this.getLogs = function(params) {
        return $http.get(apiUrl + '/logs', { params: params });
    };
    
    // Métodos para backup
    this.createBackup = function() {
        return $http.post(apiUrl + '/backup');
    };
    
    this.restoreBackup = function(backupId) {
        return $http.post(apiUrl + '/backup/' + backupId + '/restore');
    };
    
    // Métodos para cache
    this.clearCache = function() {
        return $http.post(apiUrl + '/cache/clear');
    };
    
    // Métodos para manutenção
    this.getMaintenanceStatus = function() {
        return $http.get(apiUrl + '/maintenance/status');
    };
    
    this.enableMaintenance = function() {
        return $http.post(apiUrl + '/maintenance/enable');
    };
    
    this.disableMaintenance = function() {
        return $http.post(apiUrl + '/maintenance/disable');
    };
}]); 