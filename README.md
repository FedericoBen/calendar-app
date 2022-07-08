# Calendar APP

Esta es una aplicación para poder gestionar horarios, citas o eventos que el usuario requiera.

para ella se ha utilizado:

<ul>
<li>Bootstrap</li>
<li>React-redux</li>
<ul>
<li> una aclaración en esta implementación de redux se utilizó el redux toolkit, ya que ofrece mas facilidades y permite hacer código mutante y en vez de realizar tunks, se crearon hooks especializados en realizar la llamada de terceros</li>
</ul>
<li>Node</li>
</ul>

La getion se hace de manera individual para cada usuario.


## Pasos de desarrolador:

1. Renombrar el archivo .env.template por .env
2. Hacer los cambios respectivos en las variables de entorno

```
VITE_API_URL=http://localhost:4000/api
```

Cabe aclarar que ya que vite aun posee ciertos inconvenientes a la hora de manejar sus variables de entorno, es necesario definir en env.production el endpoint donde se queda alojado, y asi al generar el build de la app tenga la ubicación.

## Demo:

https://mern-calendar-backend-fb.herokuapp.com/auth/login


