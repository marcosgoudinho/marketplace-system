# 🛒 Market System - AngularJS

Um sistema de marketplace completo desenvolvido com AngularJS 1.8.3.

## 🚀 Como Começar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento:**
```bash
npm start
```

3. **Acessar a aplicação:**
Abra seu navegador e acesse: `http://localhost:8080`

## 📁 Estrutura do Projeto

```
frontend/
├── index.html              # Arquivo principal da aplicação
├── package.json            # Configurações e dependências
├── css/
│   └── style.css          # Estilos personalizados
├── js/
│   ├── app.js             # Configuração principal do AngularJS
│   ├── controllers/
│   │   └── homeController.js  # Controller da página inicial
│   └── services/
│       ├── apiService.js      # Service para comunicação com API
│       └── cartService.js     # Service para gerenciamento do carrinho
└── views/
    └── home.html          # Template da página inicial
```

## 🛠️ Tecnologias Utilizadas

- **AngularJS 1.8.3** - Framework JavaScript
- **Angular Route** - Roteamento da aplicação
- **Angular Resource** - Comunicação com APIs REST
- **http-server** - Servidor de desenvolvimento

## 🎯 Funcionalidades Implementadas

### Header Interativo
- ✅ Seletor de moeda (BRL, USD, EUR)
- ✅ Seletor de idioma (Português, Inglês, Espanhol)
- ✅ Links de login e registro
- ✅ Menu de navegação
- ✅ Ícones de favoritos, comparação e carrinho
- ✅ Barra de pesquisa com categorias
- ✅ Contador de itens no carrinho
- ✅ Total do carrinho em tempo real

### Sistema de Carrinho
- ✅ Adicionar produtos ao carrinho
- ✅ Remover produtos do carrinho
- ✅ Atualizar quantidades
- ✅ Cálculo automático de totais
- ✅ Persistência no localStorage
- ✅ Aplicação de cupons de desconto
- ✅ Cálculo de frete
- ✅ Validação para checkout
- ✅ Histórico de carrinhos
- ✅ Exportar/importar carrinho

### Comunicação com API
- ✅ Service completo para todas as operações CRUD
- ✅ Métodos para produtos, categorias, usuários
- ✅ Sistema de autenticação
- ✅ Upload de arquivos
- ✅ Gestão de pedidos
- ✅ Sistema de avaliações
- ✅ Gestão de favoritos e comparação
- ✅ Sistema de cupons
- ✅ Gestão de endereços e pagamentos
- ✅ Relatórios e estatísticas

### Página Inicial
- ✅ Banner de boas-vindas
- ✅ Produtos em destaque
- ✅ Categorias populares
- ✅ Estatísticas do marketplace
- ✅ Design responsivo

## 🔧 Configuração da API

A aplicação está configurada para se comunicar com uma API REST em:
```
http://localhost:3000/api
```

### Endpoints Principais:
- `GET /api/produtos` - Listar produtos
- `POST /api/auth/login` - Login de usuário
- `GET /api/categorias` - Listar categorias
- `POST /api/pedidos` - Criar pedido

## 🎨 Personalização

### Cores Principais:
- **Vermelho Principal:** `#ff3c3c`
- **Vermelho Escuro:** `#e60000`
- **Cinza Claro:** `#f8f9fa`
- **Cinza Médio:** `#e9ecef`

### Estilos Responsivos:
- Breakpoint principal: `768px`
- Grid adaptativo para produtos e categorias
- Header responsivo com menu colapsável

## 📱 Funcionalidades do Header

### Seletor de Moeda
```javascript
$scope.selectedCurrency = 'BRL'; // BRL, USD, EUR
```

### Seletor de Idioma
```javascript
$scope.selectedLanguage = 'pt-BR'; // pt-BR, en, es
```

### Barra de Pesquisa
```javascript
$scope.performSearch = function() {
    // Implementação da busca
};
```

### Carrinho
```javascript
CartService.addItem(product);
CartService.getCartCount();
CartService.getCartTotal();
```

## 🔄 Próximos Passos

### Funcionalidades Planejadas:
- [ ] Página de produtos com filtros
- [ ] Sistema de login/registro
- [ ] Página do carrinho
- [ ] Checkout completo
- [ ] Perfil do usuário
- [ ] Área do vendedor
- [ ] Sistema de avaliações
- [ ] Blog e páginas informativas
- [ ] Sistema de notificações
- [ ] PWA (Progressive Web App)

### Melhorias Técnicas:
- [ ] Implementar testes unitários
- [ ] Otimização de performance
- [ ] Lazy loading de módulos
- [ ] Cache inteligente
- [ ] SEO optimization
- [ ] Acessibilidade (WCAG)

## 🐛 Solução de Problemas

### Erro de CORS:
Se encontrar erros de CORS, configure o backend para aceitar requisições de `http://localhost:8080`.

### Problemas de Roteamento:
Certifique-se de que o servidor está configurado para servir `index.html` para todas as rotas.

### Problemas de Dependências:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 Licença

Este projeto está sob a licença ISC.

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, envie um email para: marketsystem@support.com

---

**Desenvolvido com ❤️ usando AngularJS** 