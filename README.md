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

- **Cultos guardados por fecha:** crea, duplica y reordena cultos (alabanzas, pasajes, sermones, medios, anuncios). Pulsa **▶ Empezar** y con → avanza solo al siguiente elemento.
- **Control desde el celular:** botón **Celular**, escanea el código QR y controla la proyección desde el teléfono (siguiente, negro, logo, elegir diapositiva o elemento del culto). Necesita internet en ambos.
- **Pantalla para músicos y predicador:** botón **Músicos** abre una ventana con la letra actual en grande, lo que sigue, la hora, el tiempo de cada parte y el tiempo que le queda al sermón (se ajusta en **Ajustes**). Muestra los acordes y permite subir o bajar el tono.
- **Acordes:** escribe los acordes dentro de la letra, como `[G]Cuán grande es [C]Él`, o en una línea propia (`G  C  D`). Solo se ven en la ventana de músicos; la congregación ve la letra limpia.
- **Transmisión en vivo:** botón **En vivo** abre una ventana con la letra abajo sobre fondo verde (o azul/negro). En OBS: *Captura de ventana* + filtro *Croma*.
- **Peticiones de oración y cumpleaños:** en **Anuncios**, escribe un nombre por línea y se crean las diapositivas.
- **Alabanzas:** cada estrofa (separada por una línea en blanco) es una diapositiva; `[Coro]` sirve de etiqueta. Búsqueda, autor e **Importar varias**.
- **Biblia:** Reina-Valera 1909, Reina-Valera 1865 y King James (inglés), con modo bilingüe; de 1 a 4 versículos por diapositiva y búsqueda por palabra.
- **Sermón:** escribe tus puntos; un párrafo que sea solo una cita (ej. `Juan 3:16-18`) se proyecta con el texto bíblico; `#` marca un título.
- **Medios:** videos de YouTube (pega el link o usa la lista sugerida de alabanzas), fotos y videos propios, con control de pausa y sonido. Un video propio puede usarse como fondo en movimiento.
- **Fondos en movimiento:** luces suaves, aurora y cielo con nubes, además de colores, imagen propia y verde croma.
- **Extras:** cuenta regresiva, pantalla de logo de la iglesia y texto libre. **Mensaje rápido** en una franja sobre la proyección.
- **Ajustes:** tamaño y tipo de letra, texto al centro o abajo para transmisión, mayúsculas, oscurecer fondo, transición suave.
- **Imprimir o compartir el culto:** en **Culto**, 🖨 Imprimir saca una hoja con letras y acordes (o PDF); Compartir manda el orden por WhatsApp.
- **Historial de alabanzas:** cada alabanza proyectada se anota; se ve cuándo se cantó, las más cantadas y las olvidadas (en **Extras**).
- **Extras:** nombre del predicador en pantalla, momento de ofrenda con versículos y música de fondo, y lectura bíblica del año (unos 3 capítulos por día).
- **Copias automáticas:** cada día se guarda una copia en la computadora (últimos 7 días); se restaura desde **Respaldo**.
- **Sincronizar entre computadoras:** en **Respaldo**, crea un archivo dentro de OneDrive, Google Drive o Dropbox y úsalo en cada computadora (Edge o Chrome).
- Atajos: `→`/espacio siguiente, `←` anterior, `1`–`9` ir a diapositiva, `B` negro, `C` ocultar texto, `L` logo, `M` mensaje, `P` proyector, `K` pausar video.

Los datos (alabanzas, anuncios, orden del culto) se guardan en el navegador de la computadora donde se usa. Haz respaldos con el botón **Respaldo**.

## Archivos

- `index.html` — la app completa.
- `biblia-rv1909.js`, `biblia-rv1865.js`, `bible-kjv.js` — Biblias de dominio público (Reina-Valera 1909, Reina-Valera 1865, King James), tomadas de [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases).
- `lib/` — [PeerJS](https://peerjs.com) y [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) (licencia MIT) para el control desde el celular.
