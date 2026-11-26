# SmartChurch · Proyección para la iglesia

App web para proyectar alabanzas, textos bíblicos y anuncios durante el culto. Funciona sin internet, directamente en el navegador.

## Instalar la app

- **Como app desde el navegador (recomendado):** abre https://sinaloa69522-cmd.github.io/Smartchurch/ en Edge o Chrome y pulsa **Instalar** (ícono al final de la barra de direcciones). Funciona sin internet y se actualiza sola.
- **Instalador clásico de Windows:** descarga el instalador [SmartChurch-Setup.exe](https://github.com/sinaloa69522-cmd/Smartchurch/releases/latest/download/SmartChurch-Setup.exe), ábrelo y sigue los pasos. Queda el ícono en el escritorio y en el menú Inicio. Si hay un proyector conectado, la ventana del proyector se abre sola en esa pantalla y en pantalla completa.
- Dentro de la app, el botón verde **⤓ Instalar app** la instala desde el navegador (Chrome/Edge).
- Cada cambio en `main` (y cada etiqueta `v*`) genera el instalador con GitHub Actions (workflow *Desktop app (Windows)*) y lo publica en *Releases* con la versión de `package.json`.
- Para probar en tu PC con Node instalado: `npm install` y luego `npm start`.

## Usarla sin instalar

1. Descarga el repositorio (botón **Code → Download ZIP**) y descomprímelo.
2. Abre `index.html` en Chrome o Edge.
3. Pulsa **Abrir proyector**. Arrastra la ventana nueva a la pantalla del proyector y haz doble clic para pantalla completa.

## Funciones

- **Orden del culto:** arma la lista (alabanzas, pasajes, anuncios), reordénala y pulsa **▶ Empezar**. Al terminar un elemento, → pasa solo al siguiente.
- **Alabanzas:** cada estrofa (separada por una línea en blanco) es una diapositiva; `[Coro]` sirve de etiqueta. Búsqueda por título o letra, autor, e **Importar varias** (pegar con `---` entre alabanzas o archivos `.txt`).
- **Biblia Reina-Valera 1909** completa: `Juan 3:16`, `Sal 23`, `Ro 8:28-39`, búsqueda por palabra y de 1 a 4 versículos por diapositiva.
- **Extras:** cuenta regresiva antes del culto, pantalla de logo de la iglesia y texto libre al momento.
- **Mensaje rápido** en una franja sobre lo que se proyecta (avisos a padres, etc.).
- **Ajustes:** fondos (incluye imagen propia y verde croma), oscurecer fondo, tamaño y tipo de letra, texto al centro o abajo para transmisión en vivo, mayúsculas, transición suave.
- **Proyector:** se abre en la segunda pantalla cuando el navegador lo permite; doble clic para pantalla completa. Indicador de conexión y reloj.
- Atajos: `→`/espacio siguiente, `←` anterior, `1`–`9` ir a diapositiva, `B` negro, `C` ocultar texto, `L` logo, `M` mensaje, `P` proyector.
- **Respaldo** de todo (incluye ajustes) para pasarlo a otra computadora.

Los datos (alabanzas, anuncios, orden del culto) se guardan en el navegador de la computadora donde se usa. Haz respaldos con el botón **Respaldo**.

## Archivos

- `index.html` — la app completa.
- `biblia-rv1909.js` — texto de la Biblia Reina-Valera 1909 (dominio público), tomado de [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases).
