-- Popula a tabela status
INSERT INTO status (descricao) VALUES
  ('Ativo'),
  ('Inativo');

-- Popula alguns usuários (com status ativo)
INSERT INTO usuarios (nome, email, senha_hash, status_id) VALUES
  ('Marcos Goudinho', 'marcos@example.com', 'hash_da_senha_123', 1),
  ('João Silva', 'joao@example.com', 'hash_da_senha_456', 1);

-- Popula alguns produtos (ligados a usuários e status ativo)
INSERT INTO produtos (usuario_id, status_id, titulo, descricao, preco, imagem_url) VALUES
  (1, 1, 'Bicicleta usada', 'Bicicleta mountain bike em bom estado', 500.00, 'https://example.com/bike.jpg'),
  (2, 1, 'Celular Xiaomi Redmi', 'Smartphone Xiaomi Redmi Note 10', 1200.00, 'https://example.com/celular.jpg');
