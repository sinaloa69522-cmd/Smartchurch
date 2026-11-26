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

- **Alabanzas:** cada estrofa (separada por una línea en blanco) es una diapositiva. Una línea como `[Coro]` sirve de etiqueta y no se proyecta.
- **Biblia Reina-Valera 1909** completa (dominio público): escribe `Juan 3:16`, `Sal 23` o `Ro 8:28-39`, o busca por palabra.
- **Anuncios** y **orden del culto**.
- Pantalla negra (`B`), ocultar texto (`C`), avanzar con `→` / espacio, retroceder con `←`.
- Fondos predefinidos o una imagen propia, y tamaño de letra ajustable.
- Respaldo e importación de alabanzas (archivos `.json` o `.txt`).

Los datos (alabanzas, anuncios, orden del culto) se guardan en el navegador de la computadora donde se usa. Haz respaldos con el botón **Respaldo**.

## Archivos

- `index.html` — la app completa.
- `biblia-rv1909.js` — texto de la Biblia Reina-Valera 1909 (dominio público), tomado de [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases).
