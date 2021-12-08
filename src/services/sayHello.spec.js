const sayHelloWorld = require('./sayHello');

describe('Say Hello tests', () => {
    it('should say Hello Wolrd', () => {
         const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('should say Hello Erick', () => {
        const response = sayHelloWorld.sayHello('Erick');

       expect(response).toBe('Hello Erick!');
   });
   
});