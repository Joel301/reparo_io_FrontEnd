# Readme

#El Why de esta estructura
Fuente: https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/

- Existen dos formas de presentar la estructura: function-first que seria segun el proposito de su contenido (componentes, paginas) y feature-first segun las diferentes funcionalidades de la app (carrito de compras, sesiones, lista de productos). Ambas tienen ventajas y desventajas.
- Es modelo del articulo usa las dos aunado al acercamiento "ducks" y de ahi el nombre de la carpeta.
- La carpeta _view_ seria para React mientras que _state_ seria para Redux. Los nombres no se usan directamente para hacerlos universal y no estar atados a ninguna libreria (en nombre solamente).
- _views_ estaria estructurado function-first mientras que _state_ dentro de su carpeta _ducks_ estaria de manera featured-first.
- El objetivo principal es mantener un escalamiento sostenible en el tiempo.
- Esto esta sometido a prueba, lo que resulte mas facil de entender para todos.
