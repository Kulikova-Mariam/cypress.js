describe('Автотесты на авторизацию', function () {
    
    it('Проверку на позитивный кейс авторизации правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик

         })



 it('Проверку восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click();  // Нажали забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел логин
        cy.get('#restoreEmailButton').click(); // клик отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
        
         })



 it('Проверку правильный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get('#pass').type('iLoveqastudio2'); // ввел неверный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
        
         })
     
 it('Проверку неверный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('erman@dolnikov.ru'); // ввел неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел правильный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
        
         })

it('Проверку валидации', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.ru'); // ввел неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел правильный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
        
         })

it('проверку на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('gGerMan@Dolnikov.ru'); // ввел логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел правильный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
        
         })

})