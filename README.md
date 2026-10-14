Actividad 4 - Fundamentos de React

Este proyecto es una mini aplicación que funciona como una tarjeta de perfil de desarrollador interactiva. Fue creada utilizando React y Vite. La aplicación incluye un encabezado funcional simple, una tarjeta de perfil que recibe datos a través de `props`, una lista de tecnologías renderizada dinámicamente con el método `.map()`, y un contador de proyectos completados que utiliza el hook `useState`.

Cuestionario

**a) ¿Qué diferencia hay entre props y state en React?**
Las *props* (propiedades) son argumentos de solo lectura que se pasan de un componente padre a un componente hijo; el hijo no puede modificarlas. Por el contrario, el *state* (estado) es información local y privada que le pertenece y es gestionada internamente por el propio componente; cuando el estado cambia (generalmente por la interacción del usuario), el componente se vuelve a renderizar para actualizar la interfaz.

b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
React utiliza la propiedad `key` para identificar de forma única cada elemento dentro de una lista. Esto le permite llevar un seguimiento exacto de qué elementos han cambiado, se han agregado o se han eliminado. Sin una *key* única, React tendría que volver a renderizar toda la lista ante cualquier cambio, lo cual afecta negativamente el rendimiento y puede causar problemas visuales al actualizar la interfaz.

c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**
`useState` es un Hook que nos permite agregar memoria (estado) a un componente funcional. Al llamarlo, nos devuelve un arreglo con dos cosas: el valor actual de nuestro estado y una función que sirve específicamente para actualizar ese valor. 
En mi aplicación, lo usé en el componente `Counter`:
`const [count, setCount] = useState(0);`
Aquí, `count` inicia en 0 y guarda la cantidad de proyectos completados. Cuando el usuario hace clic en el botón, se llama a la función `setCount(count + 1)` para actualizar la cantidad y reflejar el cambio en la pantalla.

Enlaces

d) Enlace del repositorio de GitHub:
https://github.com/MarioGrajales2004/t3_act4_react

e) Enlace del proyecto desplegado en GitHub Pages:
https://MarioGrajales2004.github.io/t3_act4_react/