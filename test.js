// Archivo: pruebas.js
const assert = require('assert');
const { sumaArray } = require('./funciones'); 

describe('Pruebas de funciones', () => {
  
  describe('sumaArray', () => {
    it('debería devolver la suma de los elementos del array', () => {

      const array1 = [1, 2, 3, 4, 5];
      const array2 = [10, 20, 30];

      const resultado1 = sumaArray(array1);
      const resultado2 = sumaArray(array2);
    
      assert.strictEqual(resultado1, 15);
      assert.strictEqual(resultado2, 60); 
    });

    it('debería devolver 0 para un array vacío', () => {
      const arrayVacio = [];
 
      const resultado = sumaArray(arrayVacio);

      assert.strictEqual(resultado, 0);
    });
  });
});
