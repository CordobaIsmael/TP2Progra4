1) EXPLICACION CICLO ROJO - VERDE - REFACTOR
El ciclo ROJO - VERDE - REFACTOR es una practica para realizar pruebas de test.

Que arranca con el ciclo ROJO, en el cual se escribe una prueba que falla porque no esta la funcionalidad creada.
El objetivo es definir que va a hacer el codigo, este fallo confirma que la prueba esta bien escrita.

Despues tenemos el ciclo VERDE, en el cual se escribe el codigo necesario para que la prueba pase(lo mas importante es que pase, no importa el codigo), Esto valida que el sistema puede cumplir el requisito.

Y por ultimo el ciclo REFACTORIZADOR, Es para mejorar el cidog sin cambiar su comportamiento. Las pruebas sirven para asegurarte que no rompiste nada durante el proceso


El tamaño de los pasos es importante porque evita errores dificiles de rastrear ya que si haces cambios grandes entre pasos es mas dificil saber que rompio el sistema esto facilita el diagnostico porque cuando una prueba falla , ya sabes que lo ultimo que hiciste es lo que lo causo.


2) DIFERENCIA ENTRE TEST UNITARIOS , DE INTEGRACION Y E2E.
Los test unitarios verifican la funcionalidad de un componente aislado,son los primeros test que se hacen, esto es rapido y facil de ejecutar.
Los test de integracion verifican que multiples componentes trabajen bien jutos(bases de datos, servicios externos o capas intermedias) son los segundos test que se hacen, esto detecta errores en la conexion entre modulos, validan configuraciones reales (ORM, rutas, middlewares) y se acemejan a escenarios mas reales.
Los test E2E(End-to-End), simulan el flujo completo de uso desde el punto de vista del usuario, son los ultimos test que se hacen, esto validan la experiencia real del usuario, detectan errores en toda la cadena y son utiles para detectar regresion.

3) QUE ES UN DOBLE DE PRUEBA.
Un doble de prueba es una simulacion de comportamientos de dependencias reales, esto facilita el testeo de codigo permitiendo aislar el componente bajo prueba y controlar su entorno.
Un STUB devuelve respuestas predefinidas a llamadas especificas , sin su logica interna. Este doble de prueba se utiliza cuando uno quiere hacer un test sin importar como se comporta la dependencia. por ejemplo al simular una base de datos sin conectarse a ella en realidad.
Un MOCK simula una dependencia y verifica que se haya usado correctamente. Este doble de prueba se utiliza cuando quieres validar la interaccion entre componentes , como por ejemplo si queres asegurarte de que un controlador llama al servicio de autenticacion con el token correcto.
Un SPY es como un mock , pero observa el comportamiento real del objeto, puede contabilizar llamadas y resultado, pero este ejecuta la logica original. Este doble de prueba es utilizaco cuando queres ver como se comporta una funcion real sin modificarla, como por ejemplo para observar cómo se registran logs o métricas sin alterar el sistema
