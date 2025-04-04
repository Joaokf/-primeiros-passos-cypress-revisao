describe('OrangeHRM', () => {
  
  const selectorsList ={
    usernameField: "[name='username']",
    passwoedField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialsAlert: ".oxd-alert"
  }
  
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin') // Username
    cy.get(selectorsList.passwoedField).type('admin123') // Password
    cy.get(selectorsList.loginButton).click() // Click login button
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') // Verifica se está no dashboard
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')// Verifica se está na página correta
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwoedField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert)
  })
})