# Portafolio Personal - José Sanchez

## Sitio publicado
https://portafolio-jose-sanchez.vercel.app/

## Descripción
Este repositorio contiene mi portafolio personal como desarrollador. El proyecto está enfocado en presentar de forma clara mi perfil, tecnologías, proyectos destacados, medios de contacto y currículum, manteniendo una experiencia visual cuidada, responsive y con modo oscuro.

## Qué incluye
- Sección `Sobre mí` con perfil, experiencia breve, tecnologías clave y acciones rápidas.
- Sección `Tecnologías` con herramientas y stack principal.
- Sección `Proyectos` con tarjetas, vista de detalle y descripción técnica de proyectos seleccionados.
- Sección `Contacto` con formulario integrado y enlaces directos.
- Modo oscuro.
- Currículum en PDF enlazado desde la interfaz.

## Tecnologías utilizadas
- React
- Vite
- JavaScript
- CSS
- Docker
- ESLint
- Web3Forms
- Nginx
- Vercel


## Cómo levantarlo localmente

Primero hay que clonar el repositorio:

  ```bash
   git clone https://github.com/josesan28/portafolio.git
   ```


### Opción 1: con Node.js
1. Entra a la carpeta del proyecto frontend:
   
   ```bash
   cd portafolio
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre en el navegador la URL que muestre Vite, normalmente:
   ```text
   http://localhost:5173
   ```

### Opción 2: con Docker
1. Desde un .env en la raíz del proyecto, define el puerto que quieres usar:
   ```bash
   HOST_PORT=
   ```

2. Levanta el contenedor:
   ```bash
   docker compose up --build
   ```
3. Abre en el navegador:
   ```text
   http://localhost:el_puerto_que_indicaste
   ```

## Configuración del formulario de contacto
El formulario usa Web3Forms. Para ejecutar el proyecto localmente, debes crear manualmente un .env con la siguiente variable:

```text
VITE_WEB3FORMS_ACCESS_KEY=tu_access_key
```

Esta variable se menciona únicamente por motivos académicos y para que el proyecto pueda ejecutarse correctamente en entorno local si se desea. Igualmente no es vital, solo es útil si se quiere probar la función del envío de formulario localmente.

## Notas
- El proyecto está configurado para funcionar como SPA, tanto en desarrollo como en despliegue.
- El archivo PDF del currículum debe mantenerse dentro de `portafolio/public/` para que pueda abrirse directamente desde la web.