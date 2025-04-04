describe('OrangeHRM', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin') // Username
    cy.get("[name='password']").type('admin123') // Password
    cy.get("[type='submit']").click() // Click login button
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') // Verifica se está no dashboard
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard')// Verifica se está na página correta
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('test')
    cy.get("[name='password']").type('test')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert')
  })
})