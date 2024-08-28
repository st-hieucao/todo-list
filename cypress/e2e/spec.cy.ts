describe("ToDo App", () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should load the app successfully", () => {
    cy.contains("h2", "Todos App");
  });

  it("GET - Read a post and verify first item", () => {
    cy.request('GET', `${baseUrl}/posts`).then((response) => {
      expect(response.status).to.eq(200);
      const firstPost = response.body[0];
      expect(firstPost).to.have.property('id');
      expect(firstPost).to.have.property('title');

      cy.get('.todo').first().should('contain', firstPost.title);
    });
  });

  it("should add a new todo", () => {
    const newTodo = "Sleep";

    cy.get(".form-input").type(newTodo);
    cy.get(".submit-button").click();

    cy.get(".todo").should("contain", newTodo);
  });

  it("should delete a todo", () => {
    const newTodo = "Sleep";
    cy.get(".form-input").type(newTodo);
    cy.get(".submit-button").click();
    cy.get(".todo").should("contain", newTodo);
  
    cy.get(".todo").first().find("button").click();
  
    cy.get(".todo").should("not.contain", newTodo);
  });
});

describe('JSONPlaceholder API Testing with Cypress', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('GET - Read a post', () => {
    cy.request('GET', `${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title');
    });
  });

  it('POST - Create a new post', () => {
    cy.request('POST', `${baseUrl}/posts`, {
      title: 'New Post',
      body: 'This is the body of the new post.',
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'New Post');
      expect(response.body).to.have.property('body', 'This is the body of the new post.');
      expect(response.body).to.have.property('userId', 1);
    });
  });

  it('PUT - Update a post', () => {
    cy.request('PUT', `${baseUrl}/posts/1`, {
      id: 1,
      title: 'Updated Title',
      body: 'This is the updated body of the post.',
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'Updated Title');
      expect(response.body).to.have.property('body', 'This is the updated body of the post.');
    });
  });

  it('DELETE - Delete a post', () => {
    cy.request('DELETE', `${baseUrl}/posts/1`)
      .its('status')
      .should('eq', 200);
  });
});
