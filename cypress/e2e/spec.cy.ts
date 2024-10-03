/// <reference types="cypress" />

describe("ToDo App", () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should load the app successfully", () => {
    cy.contains("h2", "Todos App");
  });

  it("GET - Read a todo and verify first item", () => {
    cy.request('GET', `${baseUrl}/todos`).then((response) => {
      expect(response.status).to.eq(200);
      const firstTodo = response.body[0];
      expect(firstTodo).to.have.property('id');
      expect(firstTodo).to.have.property('title');

      cy.get('.todo').first().should('contain', firstTodo.title);
    });
  });

  it("should add a new todo", () => {
    const newTodo = "Sleep";

    cy.get(".form-input").type(newTodo, { delay: 2000 });
    cy.get(".submit-button").click();

    cy.get(".todo").first().should("contain", newTodo);
  });

  it("should delete a todo", () => {
    const newTodo = "Sleep";
    cy.get(".form-input").type(newTodo);
    cy.get(".submit-button").click();
    cy.get(".todo").first().should("contain", newTodo);
  
    cy.get(".todo").first().find("button").click();
  
    cy.get(".todo").should("not.contain", newTodo);
  });
});

// describe('JSONPlaceholder API Testing with Cypress', () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';

//   it('GET - Read a todo', () => {
//     cy.request('GET', `${baseUrl}/todos/1`).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body).to.have.property('id', 1);
//       expect(response.body).to.have.property('title');
//     });
//   });

//   it('POST - Create a new todo', () => {
//     cy.request('POST', `${baseUrl}/todos`, {
//       title: 'New Todo',
//       completed: false,
//       userId: 1,
//     }).then((response) => {
//       expect(response.status).to.eq(201);
//       expect(response.body).to.have.property('title', 'New Todo');
//       expect(response.body).to.have.property('completed', false);
//       expect(response.body).to.have.property('userId', 1);
//     });
//   });

//   it('PUT - Update a todo', () => {
//     cy.request('PUT', `${baseUrl}/todos/1`, {
//       id: 1,
//       title: 'Updated Title',
//       completed: false,
//       userId: 1,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body).to.have.property('title', 'Updated Title');
//       expect(response.body).to.have.property('completed', false);
//     });
//   });

//   it('DELETE - Delete a todo', () => {
//     cy.request('DELETE', `${baseUrl}/todos/1`)
//       .its('status')
//       .should('eq', 200);
//   });
// });
