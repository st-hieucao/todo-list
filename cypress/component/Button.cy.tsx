import React from 'react';
import Button from '../../src/components/Button';

describe('Button component', () => {
  it('should render correctly', () => {
    cy.mount(<Button label='Submit' onClick={() => console.log('click btn')} />);
  });
})
