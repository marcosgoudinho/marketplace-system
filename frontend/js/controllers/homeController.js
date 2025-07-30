// Controller principal da aplicação
app.controller('HomeController', ['$scope', '$location', 'ApiService', 'CartService', function($scope, $location, ApiService, CartService) {
    
    // Variáveis do header
    $scope.selectedCurrency = 'BRL';
    $scope.selectedLanguage = 'pt-BR';
    $scope.searchTerm = '';
    $scope.selectedCategory = '';
    $scope.cartCount = 0;
    $scope.cartTotal = 0;
    
    // Categorias disponíveis
    $scope.categories = [
        'Todas categorias',
        'Eletrônicos',
        'Roupas',
        'Casa e Jardim',
        'Esportes',
        'Livros',
        'Automóveis',
        'Beleza',
        'Brinquedos'
    ];
    
    // Inicializar controller
    $scope.init = function() {
        $scope.updateCartInfo();
        $scope.loadCategories();
        $scope.loadFeaturedProducts();
        $scope.loadStats();
    };
    
    // Atualizar informações do carrinho
    $scope.updateCartInfo = function() {
        $scope.cartCount = CartService.getCartCount();
        $scope.cartTotal = CartService.getCartTotal();
    };
    
    // Carregar categorias da API
    $scope.loadCategories = function() {
        ApiService.getCategories().then(function(response) {
            if (response.data && response.data.length > 0) {
                $scope.categories = ['Todas categorias'].concat(response.data);
            }
        }).catch(function(error) {
            console.log('Usando categorias padrão');
        });
    };
    
    // Navegação
    $scope.navigateTo = function(page) {
        $location.path('/' + page);
    };
    
    // Funcionalidades do header
    $scope.openLogin = function() {
        $location.path('/login');
    };
    
    $scope.openRegister = function() {
        $location.path('/register');
    };
    
    $scope.openCart = function() {
        $location.path('/carrinho');
    };
    
    $scope.openWishlist = function() {
        $scope.showMessage('Lista de desejos em desenvolvimento', 'info');
    };
    
    // Funcionalidades de busca
    $scope.toggleCategories = function() {
        // Aqui você pode implementar um dropdown para categorias
        $scope.showMessage('Seletor de categorias em desenvolvimento', 'info');
    };
    
    $scope.performSearch = function() {
        if ($scope.searchTerm.trim()) {
            // Salvar termo de busca no localStorage para usar em outras páginas
            localStorage.setItem('searchTerm', $scope.searchTerm);
            localStorage.setItem('selectedCategory', $scope.selectedCategory);
            
            // Navegar para página de produtos com parâmetros de busca
            $location.path('/produtos').search({
                q: $scope.searchTerm,
                category: $scope.selectedCategory
            });
        } else {
            $scope.showMessage('Digite algo para pesquisar', 'warning');
        }
    };
    
    // Observar mudanças na moeda
    $scope.$watch('selectedCurrency', function(newCurrency) {
        if (newCurrency) {
            localStorage.setItem('selectedCurrency', newCurrency);
            // Aqui você pode implementar conversão de moeda
            $scope.showMessage('Moeda alterada para ' + newCurrency, 'success');
        }
    });
    
    // Observar mudanças no idioma
    $scope.$watch('selectedLanguage', function(newLanguage) {
        if (newLanguage) {
            localStorage.setItem('selectedLanguage', newLanguage);
            // Aqui você pode implementar mudança de idioma
            $scope.showMessage('Idioma alterado', 'success');
        }
    });
    
    // Carregar produtos em destaque
    $scope.loadFeaturedProducts = function() {
        // Dados de exemplo - em produção viriam da API
        $scope.featuredProducts = [
            {
                id: 1,
                name: 'Smartphone Galaxy S21',
                price: 2999.99,
                image: 'https://via.placeholder.com/300x200?text=Smartphone'
            },
            {
                id: 2,
                name: 'Notebook Dell Inspiron',
                price: 4599.99,
                image: 'https://via.placeholder.com/300x200?text=Notebook'
            },
            {
                id: 3,
                name: 'Fone de Ouvido Bluetooth',
                price: 299.99,
                image: 'https://via.placeholder.com/300x200?text=Fone'
            },
            {
                id: 4,
                name: 'Smart TV 55" 4K',
                price: 3499.99,
                image: 'https://via.placeholder.com/300x200?text=Smart+TV'
            }
        ];
    };
    
    // Carregar estatísticas
    $scope.loadStats = function() {
        // Dados de exemplo - em produção viriam da API
        $scope.stats = {
            products: 15420,
            sellers: 1250,
            customers: 45680,
            orders: 89234
        };
    };
    
    // Adicionar produto ao carrinho
    $scope.addToCart = function(product) {
        CartService.addItem(product);
        $scope.updateCartInfo();
        $scope.showMessage('Produto adicionado ao carrinho!', 'success');
    };
    
    // Navegar para categoria
    $scope.navigateToCategory = function(category) {
        if (category !== 'Todas categorias') {
            $location.path('/produtos').search({ category: category });
        } else {
            $location.path('/produtos');
        }
    };
    
    // Inicializar controller
    $scope.init();
}]); 