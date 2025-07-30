// Service para gerenciamento do carrinho de compras
app.service('CartService', ['$rootScope', function($rootScope) {
    
    // Chave para localStorage
    var CART_STORAGE_KEY = 'marketplace_cart';
    
    // Carrinho atual
    var cart = {
        items: [],
        total: 0,
        count: 0
    };
    
    // Inicializar carrinho do localStorage
    this.init = function() {
        var savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
            try {
                cart = JSON.parse(savedCart);
                this.updateTotals();
            } catch (e) {
                console.error('Erro ao carregar carrinho:', e);
                this.clearCart();
            }
        }
    };
    
    // Adicionar item ao carrinho
    this.addItem = function(product, quantity) {
        quantity = quantity || 1;
        
        // Verificar se o produto já está no carrinho
        var existingItem = this.findItem(product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }
        
        this.updateTotals();
        this.saveToStorage();
        this.notifyChange();
        
        return cart;
    };
    
    // Remover item do carrinho
    this.removeItem = function(productId) {
        cart.items = cart.items.filter(function(item) {
            return item.id !== productId;
        });
        
        this.updateTotals();
        this.saveToStorage();
        this.notifyChange();
        
        return cart;
    };
    
    // Atualizar quantidade de um item
    this.updateQuantity = function(productId, quantity) {
        var item = this.findItem(productId);
        
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.updateTotals();
                this.saveToStorage();
                this.notifyChange();
            }
        }
        
        return cart;
    };
    
    // Limpar carrinho
    this.clearCart = function() {
        cart.items = [];
        cart.total = 0;
        cart.count = 0;
        
        this.saveToStorage();
        this.notifyChange();
        
        return cart;
    };
    
    // Obter carrinho completo
    this.getCart = function() {
        return cart;
    };
    
    // Obter contagem de itens
    this.getCartCount = function() {
        return cart.count;
    };
    
    // Obter total do carrinho
    this.getCartTotal = function() {
        return cart.total;
    };
    
    // Verificar se carrinho está vazio
    this.isEmpty = function() {
        return cart.items.length === 0;
    };
    
    // Encontrar item no carrinho
    this.findItem = function(productId) {
        return cart.items.find(function(item) {
            return item.id === productId;
        });
    };
    
    // Verificar se produto está no carrinho
    this.isInCart = function(productId) {
        return this.findItem(productId) !== undefined;
    };
    
    // Obter quantidade de um produto no carrinho
    this.getItemQuantity = function(productId) {
        var item = this.findItem(productId);
        return item ? item.quantity : 0;
    };
    
    // Aplicar cupom de desconto
    this.applyCoupon = function(couponCode) {
        // Aqui você pode implementar a lógica de cupons
        cart.coupon = {
            code: couponCode,
            discount: 0.10 // 10% de desconto
        };
        
        this.updateTotals();
        this.saveToStorage();
        this.notifyChange();
        
        return cart;
    };
    
    // Remover cupom
    this.removeCoupon = function() {
        delete cart.coupon;
        
        this.updateTotals();
        this.saveToStorage();
        this.notifyChange();
        
        return cart;
    };
    
    // Calcular frete
    this.calculateShipping = function(zipCode) {
        // Aqui você pode implementar cálculo de frete
        cart.shipping = {
            zipCode: zipCode,
            cost: 15.00,
            estimatedDays: 3
        };
        
        this.updateTotals();
        this.saveToStorage();
        this.notifyChange();
        
        return cart;
    };
    
    // Remover frete
    this.removeShipping = function() {
        delete cart.shipping;
        
        this.updateTotals();
        this.saveToStorage();
        this.notifyChange();
        
        return cart;
    };
    
    // Atualizar totais
    this.updateTotals = function() {
        var subtotal = 0;
        var count = 0;
        
        cart.items.forEach(function(item) {
            subtotal += item.price * item.quantity;
            count += item.quantity;
        });
        
        cart.subtotal = subtotal;
        cart.count = count;
        
        // Aplicar desconto do cupom
        if (cart.coupon) {
            cart.discount = subtotal * cart.coupon.discount;
        } else {
            cart.discount = 0;
        }
        
        // Calcular total com frete
        var totalWithDiscount = subtotal - cart.discount;
        cart.shippingCost = cart.shipping ? cart.shipping.cost : 0;
        cart.total = totalWithDiscount + cart.shippingCost;
    };
    
    // Salvar no localStorage
    this.saveToStorage = function() {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        } catch (e) {
            console.error('Erro ao salvar carrinho:', e);
        }
    };
    
    // Notificar mudanças
    this.notifyChange = function() {
        $rootScope.$broadcast('cartUpdated', cart);
    };
    
    // Obter resumo do carrinho
    this.getSummary = function() {
        return {
            itemCount: cart.count,
            subtotal: cart.subtotal || 0,
            discount: cart.discount || 0,
            shipping: cart.shippingCost || 0,
            total: cart.total || 0,
            coupon: cart.coupon,
            shipping: cart.shipping
        };
    };
    
    // Validar carrinho antes do checkout
    this.validateForCheckout = function() {
        var errors = [];
        
        if (this.isEmpty()) {
            errors.push('Carrinho está vazio');
        }
        
        // Verificar se todos os itens ainda estão disponíveis
        cart.items.forEach(function(item) {
            if (!item.price || item.price <= 0) {
                errors.push('Produto ' + item.name + ' com preço inválido');
            }
        });
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    };
    
    // Processar checkout
    this.checkout = function(checkoutData) {
        var validation = this.validateForCheckout();
        
        if (!validation.isValid) {
            return Promise.reject({
                success: false,
                errors: validation.errors
            });
        }
        
        var orderData = {
            items: cart.items,
            summary: this.getSummary(),
            customer: checkoutData.customer,
            shipping: checkoutData.shipping,
            payment: checkoutData.payment
        };
        
        // Aqui você faria a chamada para a API
        return Promise.resolve({
            success: true,
            orderId: 'ORD-' + Date.now(),
            data: orderData
        });
    };
    
    // Obter histórico de carrinhos
    this.getCartHistory = function() {
        var history = localStorage.getItem('cart_history');
        return history ? JSON.parse(history) : [];
    };
    
    // Salvar carrinho no histórico
    this.saveToHistory = function() {
        if (!this.isEmpty()) {
            var history = this.getCartHistory();
            history.push({
                cart: angular.copy(cart),
                timestamp: new Date().toISOString()
            });
            
            // Manter apenas os últimos 10 carrinhos
            if (history.length > 10) {
                history = history.slice(-10);
            }
            
            localStorage.setItem('cart_history', JSON.stringify(history));
        }
    };
    
    // Restaurar carrinho do histórico
    this.restoreFromHistory = function(index) {
        var history = this.getCartHistory();
        
        if (history[index]) {
            cart = angular.copy(history[index].cart);
            this.saveToStorage();
            this.notifyChange();
            return true;
        }
        
        return false;
    };
    
    // Exportar carrinho
    this.exportCart = function() {
        return {
            items: cart.items,
            summary: this.getSummary(),
            exportDate: new Date().toISOString()
        };
    };
    
    // Importar carrinho
    this.importCart = function(cartData) {
        if (cartData && cartData.items) {
            cart.items = cartData.items;
            this.updateTotals();
            this.saveToStorage();
            this.notifyChange();
            return true;
        }
        return false;
    };
    
    // Inicializar o service
    this.init();
}]); 