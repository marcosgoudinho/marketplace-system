# Marketplace de Produtos Usados

Este é um projeto **fullstack** que simula uma plataforma de compra e venda de produtos de segunda mão, inspirado em sites como OLX. O sistema permite que usuários se cadastrem, publiquem anúncios com fotos, filtrem por categoria/localização, e gerenciem seus próprios produtos.

---

## Tecnologias Utilizadas

- **Frontend**: Angular, HTML, CSS, Bootstrap
- **Backend**: Node.js, Express.js, JWT, Multer
- **Banco de Dados**: PostgreSQL
- **DevOps**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Outros**: Upload de imagens, autenticação JWT, variáveis de ambiente com `.env`

---

## Funcionalidades

- [ ] Cadastro e login de usuários
- [ ] Publicação de produtos com título, descrição, imagem, preço, local e categoria
- [ ] Upload de imagem para cada anúncio
- [ ] Visualização de todos os produtos cadastrados
- [ ] Filtro de busca por nome, categoria, localização
- [ ] Área do usuário para editar/excluir seus anúncios
- [ ] Marcar produto como vendido
- [ ] Painel administrativo (em breve)

---

## Estrutura de Pastas

```bash
/marketplace-system
├── backend/             # API Node.js + Express
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── app.js
│
├── frontend/            # Frontend Angular
│   └── src/app/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── app.module.ts
│
├── database/            # Scripts SQL
│   └── init.sql
│
├── docker/              # Dockerfiles e Compose
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml
│
├── .github/workflows/   # CI/CD (GitHub Actions)
│   └── ci.yml
│
├── README.md
└── .env
