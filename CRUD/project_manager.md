2 Listas

Projetos

Categorias


Aplicação para orçar e gerenciar projetos. Cada projeto tem um nome, pertence à uma categoria, data de cadastro e possui o valor do orçamento.

- Criar o layout > 16hrs
- Criar o front
- Criar o backend > 16hrs
  - Autenticação > 4hrs
  - CRUDs
    - Cliente > 3hrs
    - Categoria > 0,75hrs
    - Projeto > 0,75hrs

Banco de Dados >> Tabela >> Colunas e/ou relação entre outras tabelas.

| Projeto |
| Categoria |
| Cliente |

1 Projeto pertence a 1 Categoria
N Projeto pertence a 1 Cliente
1 Cliente tem N Projetos

Departamento X Professor


CREATE DATABASE `project_manager`;

CREATE TABLE `category` (
  category_id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(60),

  ADD CONSTRAINT PK_CATEGORY_ID PRIMARY KEY (category_id)
);

INSERT INTO category (category_name) VALUES ('Portfolio'); // 1
INSERT INTO category (category_name) VALUES ('Jardinagem'); // 2
INSERT INTO category (category_name) VALUES ('Serviço Eletrico'); // 3

CREATE TABLE `client`(
  client_id  INT NOT NULL AUTO_INCREMENT,
  client_name VARCHAR(255) NOT NULL,

  ADD CONSTRAINT PK_PROJECT_ID PRIMARY KEY (project_id),
);

INSERT INTO client (client_name) VALUES ('Jean'); // 1
INSERT INTO client (client_name) VALUES ('Thais'); // 2

CREATE TABLE `project` (
  project_id INT NOT NULL AUTO_INCREMENT,
  project_name VARCHAR(60) NOT NULL,
  project_category_id INT,
  created_at DATE NOT NULL default TODAY(),
  budget DECIMAL(7,2) NOT NULL default 0,

  ADD CONSTRAINT PK_PROJECT_ID PRIMARY KEY (project_id),
  ADD CONSTRAINT FK_PROJECT_CATEGORY_ID FOREIGN KEY (project_category_id) REFERENCES category(category_id)
);

CREATE TABLE `project_client` (
  project_id INT,
  client_id INT,

  ADD CONSTRAINT FK_PROJECT_CLIENT_PROJECT_ID FOREIGN KEY (project_id) REFERENCES project(project_id)
  ADD CONSTRAINT FK_PROJECT_CLIENT_CLIENT_ID FOREIGN KEY (client_id) REFERENCES client(client_id)
)


INSERT INTO `project` (project_name, project_category_id, budget)  VALUES ('projeto do jean', 1, 1500); // 1
INSERT INTO `project` (project_name, project_category_id, budget)  VALUES ('jardin do jean', 2, 5000); // 2
INSERT INTO `project` (project_name, project_category_id, budget) VALUES ( 'projeto da thais', 1, 500); // 3
INSERT INTO `project` (project_name, project_category_id, budget) VALUES ( 'projeto de iluminação da thais', 3, 2500); // 4

INSERT INTO `project_client` VALUES (project_id, client_id) VALUES (1, 1)
INSERT INTO `project_client` VALUES (project_id, client_id) VALUES (2, 1)
INSERT INTO `project_client` VALUES (project_id, client_id) VALUES (3, 2)

INSERT INTO `project_client` VALUES (project_id, client_id) VALUES (4, 2)
INSERT INTO `project_client` VALUES (project_id, client_id) VALUES (4, 1)


SELECT COUNT(*) FROM `project` WHERE project_category_id == 1 // 2

Projeto
 + Nome               | Projeto Jean
 + Categoria          | Portfolio
 + Data               | 2023-06-01
 + Orçamento          | 1500,00
 + Desconto           |



 <!-- + Itens do Projeto:  | R$ 1050,00
    + Nome: Criação do Layout do Site.
    + Valor: R$ 250,00
    + Descrição: Criar o layout
    + Incluído:  false
    + Nome: Criação do Frontend (baseado no layout) R$ 300,00
    + Criação do backend. R$ 500,00 -->

Projeto Jean

---

Non-SQl

const clients = [
  {
    id: 1,
    name: 'Jean'
  },
  {
    id: 2,
    name: 'Thais'
  }
]

const categories = [
  {
    id: 1,
    name: 'portfolio'
  }
]

const projects = [
  {
    id: 1,
    project_name: 'Projeto do Jean',
    clients: [1],
    categories: [1, 2],
    value: 1500,
  },
  {
    id: 2,
    project_name: 'Projeto da Thais',
    clients: [2],
    categories: [1, 2],
    value: 500,
  },
  {
    id: 3,
    project_name: 'Projeto de Iluminação Thais',
    clients: [2, 1],
    categories: [1, 2],
    value: 500,
  }
]


/**
 * GET /api/projects/1
 * {
 *    id: 1,
 *    project_name: 'Projeto do Jean',
 *    clients: [
 *      {
          id: 1,
          name: 'Jean'
 *      }
 *    ],
      categories: [

      ]
 * }
 GET /api/clients/1
 */


 // atack ddos >>
