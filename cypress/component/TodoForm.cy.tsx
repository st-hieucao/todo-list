import React from 'react';
import TodoForm from '../../src/components/TodoForm';
describe('TodoForm.cy.tsx', () => {
  it('should render correctly', () => {
    cy.mount(<TodoForm />);
    cy.get('input').should('exist');
    cy.get('input').should('contain', 'Add');
  });

  it('should allow typing and submission', () => {
    const addTodo = cy.stub().as('addTodo');
    cy.mount(<TodoForm addTodo={addTodo} />);
    
    cy.get('input.form-input').type('New Todo');
    cy.get('input.submit-button').click();
    
    cy.get('@addTodo').should('have.been.calledOnce');
    cy.get('@addTodo').should('have.been.calledWithMatch', {id: 101, title: 'New Todo'});
  });
})