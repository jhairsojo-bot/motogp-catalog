# Figma replica spec - MotoGP Catalog

## Source files

- Page shell: `index.html`
- Visual system: `css/styles.css`
- Rendered content: `js/ui.js`
- Data/cards: `data/data.json`
- Image assets: `images/*.jpg`

## Global frame

- Desktop frame target: 1440 x 1024 px
- Main content width: max 1160 px
- Side margin: 16 px minimum
- Body background:
  - Base: `#07090d`
  - Radial accent top-left: `rgba(255, 47, 63, 0.18)`, fades by 512 px
  - Radial accent top-right: `rgba(31, 182, 255, 0.14)`, fades by 480 px
- Font: Arial / Helvetica fallback
- Text color: `#f5f7fb`
- Muted text: `#9aa6b7`

## Color tokens

- `bg`: `#07090d`
- `panel`: `#111722`
- `panel-2`: `#171f2d`
- `text`: `#f5f7fb`
- `muted`: `#9aa6b7`
- `line`: `#263244`
- `red`: `#ff2f3f`
- `orange`: `#ff8a1f`
- `blue`: `#1fb6ff`
- Shadow: `0 18 40 rgba(0, 0, 0, 0.34)`

## Header / navbar

- Sticky top header height: 72 px
- Header fill: `rgba(7, 9, 13, 0.88)`
- Border bottom: 1 px `rgba(255, 255, 255, 0.08)`
- Blur: 14 px
- Navbar width: 1160 px centered
- Navbar layout: horizontal, align center, space-between, gap 24 px

### Brand

- Layout: inline horizontal, gap 10 px
- Font weight: 800
- Mark: 28 x 28 px, radius 6 px
- Mark fill: linear 135 deg from `#ff2f3f` to `#ff8a1f`
- Mark shadow: `0 0 20 rgba(255, 47, 63, 0.45)`
- Label: `MotoGP Catalog`

### Nav links

- Items: Home, Features, Dashboard
- Height: 40 px
- Horizontal padding: 14 px
- Radius: 8 px
- Default color: `#9aa6b7`
- Active/hover fill: `rgba(255, 47, 63, 0.14)`
- Active/hover text: `#f5f7fb`
- Font weight: 700

## Home frame

### Hero section

- Section width: 1160 px centered
- Top/bottom padding: 72 px
- Min height: viewport height minus 72 px header
- Grid columns: `1.08fr 0.92fr`
- Gap: 34 px
- Align center

### Hero left content

- Eyebrow:
  - Text: `MotoGP racing catalog`
  - Height: 30 px
  - Padding horizontal: 10 px
  - Radius: 999 px
  - Border: 1 px `rgba(255, 47, 63, 0.35)`
  - Fill: `rgba(255, 47, 63, 0.09)`
  - Text: `#ffc3c8`, 14.4 px, weight 800
- H1:
  - Text: `Motos prototipo por equipo y livery`
  - Size desktop: up to 76.8 px
  - Line height: 1
  - Margin bottom: 16 px
- Paragraph:
  - Max width: 680 px
  - Size: 17.28 px
  - Line height: 1.7
  - Color: `#9aa6b7`
  - Margin bottom: 26 px
- Buttons:
  - Height: 46 px
  - Padding horizontal: 18 px
  - Radius: 8 px
  - Font weight: 800
  - Primary fill: linear 135 deg `#ff2f3f` to `#ff8a1f`
  - Primary shadow: `0 0 22 rgba(255, 47, 63, 0.28)`
  - Secondary fill: `rgba(255, 255, 255, 0.04)`
  - Secondary stroke: `#263244`

### Hero board

- Border: 1 px `#263244`
- Radius: 8 px
- Fill: vertical gradient `rgba(23, 31, 45, 0.92)` to `rgba(17, 23, 34, 0.92)`
- Shadow: `0 18 40 rgba(0, 0, 0, 0.34)`
- Rows: 3
- Row layout: grid, text left and number right
- Row padding: 18 px
- Row gap: 16 px
- Row divider: 1 px `#263244`
- Number color: `#1fb6ff`
- Number size: 23.2 px
- Number weight: 900

Rows:

1. `Equipos reales` / `Ducati, Honda, KTM, Yamaha y Aprilia` / `11`
2. `Algoritmos` / `Busqueda lineal y ordenamiento burbuja` / `2`
3. `Datos JSON` / `Consumidos con fetch y async/await` / `JS`

## Features frame

- Section width: 1160 px
- Padding: 72 px top/bottom
- Eyebrow text: `Features`
- Title: `Funciones del proyecto`
- Title size desktop: up to 76.8 px
- Intro max width: 680 px
- Card grid: 3 columns, gap 18 px
- Card fill: `rgba(17, 23, 34, 0.92)`
- Card stroke: `#263244`
- Card radius: 8 px
- Card shadow: `0 18 40 rgba(0, 0, 0, 0.34)`
- Card padding: 22 px

Cards:

1. `SPA sin recarga` - `La navegacion usa hash routes y JavaScript para cambiar la vista mostrada.`
2. `Datos externos` - `El catalogo se carga desde data.json usando fetch con async/await.`
3. `Busqueda y orden` - `Incluye busqueda lineal y burbuja para ordenar por año o velocidad.`

## Dashboard frame

- Section width: 1160 px
- Padding: 72 px top/bottom
- Title block layout: horizontal, space-between, align flex-end, gap 20 px
- Eyebrow text: `Dashboard`
- H1: `Catalogo MotoGP`
- H1 size: up to 52.8 px
- Description: `Filtra por nombre, equipo o marca. Ordena por año o velocidad maxima.`
- Counter:
  - Min width: 130 px
  - Padding: 12 px vertical, 14 px horizontal
  - Stroke: 1 px `rgba(31, 182, 255, 0.32)`
  - Fill: `rgba(31, 182, 255, 0.08)`
  - Text: `#d8f3ff`, weight 800, centered

### Controls

- Layout: horizontal flex, gap 12 px, wrap
- Padding: 16 px
- Margin bottom: 22 px
- Radius: 8 px
- Stroke: `#263244`
- Fill: `rgba(17, 23, 34, 0.92)`
- Search input:
  - Height: 44 px
  - Width behavior: flex, min 280 px
  - Fill: `#0b1018`
  - Stroke: `#263244`
  - Radius: 8 px
  - Padding horizontal: 12 px
- Select:
  - Height: 44 px
  - Width: 220 px
  - Same fill/stroke/radius as input

### Moto cards

- Grid: 3 columns, gap 18 px
- Card radius: 8 px
- Stroke: `#263244`
- Fill: `rgba(17, 23, 34, 0.92)`
- Shadow: `0 18 40 rgba(0, 0, 0, 0.34)`
- Image area aspect ratio: 16:10
- Image fit: cover
- Image placeholder fill: linear 135 deg `rgba(255, 47, 63, 0.12)` to `rgba(31, 182, 255, 0.1)`, over `#0c111a`
- Content padding: 18 px
- Top row: title left, year badge right
- Title size: 17.28 px, line height 1.3
- Year badge:
  - Height: 28 px
  - Padding horizontal: 10 px
  - Radius: 999 px
  - Fill: `rgba(255, 138, 31, 0.16)`
  - Text: `#ffe7d1`, weight 800
- Info text color: `#9aa6b7`
- Speed text: `#d8f3ff`, weight 800

## Footer

- Top border: 1 px `#263244`
- Fill: `rgba(7, 9, 13, 0.78)`
- Content width: 1160 px centered
- Padding: 28 px top/bottom
- Layout: horizontal, space-between, wrap, gap 16 px
- Text color: `#9aa6b7`
- Texts:
  - `Proyecto MotoGP Catalog`
  - `Erickson Sojo, Jose Perea, Ashley Ruiz, Andres Soto`

## Responsive notes

- At width <= 900 px:
  - Show hamburger button, hide nav links until open
  - Hero, features grid and cards grid become 1 column
  - Dashboard title stacks vertically and aligns left
- At width <= 540 px:
  - Section padding becomes 48 px top/bottom
  - Inputs/selects take full width

## Fidelity notes for Figma

- The CSS is necessary but not sufficient by itself. For an accurate replica, use CSS plus the rendered HTML from `js/ui.js`, the actual image assets, and desktop/mobile screenshots.
- Figma cannot directly reproduce browser-only behavior like sticky blur, hover transforms, localStorage, search, sorting or `fetch`; represent those as static variants/prototypes.
- Use the images from the local `images` folder as real card media, not placeholders.
