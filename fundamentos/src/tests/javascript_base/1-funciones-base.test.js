import {saludo, sumar, par, obtenerObjeto, obtenerArray, crearPromesa} from '../../javascript_base/1-funciones-base'

describe('Tests del archivo 1-funciones-base.js', ()=>{
    describe('Tests de la función saludar', ()=>{
        test('Testar funcion saludar pasándole un parámetro de nombre', () =>{
            const nombre = 'Roberto'
            const esperado = 'Hola '+nombre+'!'
            expect(saludo(nombre)).toBe(esperado)
        
        })
        
        test('Testar funcion saludar sin pasar parámetro', () =>{
            
            const esperado = 'Hola Mundo!'
            expect(saludo()).toBe(esperado)
        
        })
    
    })

    describe('Tests de la función sumar', ()=>{
        test('Testar funcion saludar pasándole dos parámetros', () =>{
            const num_uno = 5
            const num_dos = 6
            const esperado = num_uno + num_dos
            expect(sumar(num_uno, num_dos)).toBe(esperado)
        
        })
        
        test('Testar funcion saludar pasándole el primer parámetro, el otro no', () =>{
            const num_uno = 5
            const esperado = num_uno
            expect(sumar(num_uno)).toBe(esperado)
        
        }) 
    
    })

    describe('Tests de la función par', ()=>{
        test('Testar si un número impar es impar', () =>{
            const numero = 5
            const esperado = 'Impar'
            expect(par(numero)).toBe(esperado)
        
        })
        
        test('Testar si un número par es par', () =>{
            const numero = 6
            const esperado = 'Par'
            expect(par(numero)).toBe(esperado)
        
        })

        test('Testar si 0 es Cero (ni par ni impar)', () =>{
            const numero = 0
            const esperado = 'Cero'
            expect(par(numero)).toEqual(esperado)
        
        })
    
    })

    describe('Tests de la función obtenerObjeto', ()=>{
        test('Testar si los objetos son iguales', () =>{
            const esperado = {nombre: 'Roberto', apellido: 'Morales'}
            expect(obtenerObjeto()).toEqual(esperado)
        })
    
    })

    describe('Tests de la función obtenerArray', ()=>{
        test('Testar si los array son iguales', () =>{
            const esperado = ['Roberto','Morales']
            expect(obtenerArray()).toEqual(esperado)
        })
    
    })

    describe('Testar promesa', ()=>{
        test('Testear respuesta promesa', (done) =>{
            const esperado = {nombre: 'Roberto', apellido: 'Morales'}
            crearPromesa().then(resultado =>{
                expect(resultado).toEqual(esperado)
                done()
            });       
        })
    })
})


