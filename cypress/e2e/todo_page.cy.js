describe('todopage pruebas', () => {
  it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click();

    cy.get('[data-testid="text-input"]').type("tirar la basura{enter}")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click();


    cy.get('[data-testid="text-input"]').type("sacar al perro{enter}")
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').dblclick()

   cy.get('.view > .input-container > [data-testid="text-input"]').clear()
   cy.get('.view > .input-container > [data-testid="text-input"]').type("sacar al gato{enter}")

    cy.get('[data-testid="text-input"]').type("hacer tareas{enter}")
    cy.contains('[data-testid="todo-item-label"]', 'hacer tareas')
      .parent()
      .find('[data-testid="todo-item-button"]')
      .click({ force: true });
    cy.contains('[data-testid="todo-item-label"]', 'hacer tareas')
      .should('not.exist');
  


  })
})


