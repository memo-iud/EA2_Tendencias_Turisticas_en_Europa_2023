# Tendencias turísticas en Europa 2023

Dashboard e informe académico para explorar 10.000 registros de viajes en Europa durante 2023. El proyecto presenta indicadores, visualizaciones interactivas, un mapa de destinos y recomendaciones para la toma de decisiones.

## Construcción del proyecto

El desarrollo se organizó en las siguientes etapas:

1. **Definir el objetivo del análisis.** Se planteó estudiar la demanda turística, los destinos, el gasto, la duración de las estancias y las valoraciones de los viajeros para convertir los datos en información útil para una agencia de turismo.
2. **Identificar y preparar los datos.** Se utilizó el archivo CSV de 10.000 viajes, con variables como fecha, país, ciudad, coordenadas, alojamiento, duración, gasto diario, valoración, transporte y motivo del viaje. El script de análisis presentado en la aplicación muestra cómo cargar el CSV con Pandas, convertir la fecha y derivar el mes.
3. **Calcular indicadores y agregaciones.** Se consolidaron medidas generales y resúmenes por mes, ciudad, alojamiento y país. Estos resultados están organizados en `src/data/processedTourismData.ts`, que sirve como fuente de datos para los módulos del dashboard.
4. **Diseñar las visualizaciones analíticas.** Se definieron seis análisis: estacionalidad de los viajes, destinos más populares, gasto por tipo de alojamiento, valoraciones por país, duración de las estancias por destino y distribución geográfica de los viajes.
5. **Construir la interfaz del informe.** Con React y TypeScript, se separó la experiencia en componentes: comparación de herramientas, visualizaciones, mapa interactivo, código Python, hallazgos de negocio y explorador del dataset.
6. **Añadir interacción y navegación.** El dashboard permite cambiar de sección, filtrar y consultar registros, explorar el mapa por país y métrica, alternar entre pestañas y documento completo, e imprimir o guardar el informe como PDF desde el navegador.
7. **Interpretar los resultados.** Se incorporaron recomendaciones de negocio derivadas de los análisis, como acciones para gestionar la estacionalidad y diseñar ofertas según el gasto y las preferencias de alojamiento.
8. **Verificar la aplicación.** Se ejecutan las comprobaciones de TypeScript y la compilación de producción antes de publicar o compartir el proyecto.

## Estructura principal

- `src/App.tsx`: composición de las secciones, navegación y modo de documento.
- `src/components/`: componentes del informe, gráficos, mapa, explorador de datos y recomendaciones.
- `src/data/processedTourismData.ts`: tipos, registros de muestra, indicadores y datos agregados que consume la interfaz.
- `public/assets/aistudio/`: archivo CSV completo disponible para descarga desde el explorador.
- `src/components/PythonCodeSection.tsx`: ejemplos de análisis reproducibles en Python con Pandas, Plotly y Folium, además de una alternativa con Seaborn y Matplotlib.

> La aplicación web consume los indicadores y agregaciones definidos en TypeScript. El código Python que aparece en el informe es material de apoyo para reproducir el análisis; no se ejecuta automáticamente al iniciar el dashboard. Python no es un requisito para ejecutar la aplicación web.

## Requisitos

- Node.js compatible con la versión de Vite del proyecto.
- npm.

No se requiere configurar `GEMINI_API_KEY` para ejecutar este dashboard.

## Instalación y ejecución

Desde la carpeta del proyecto:

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Iniciar el servidor local de desarrollo:

   ```bash
   npm run dev
   ```

3. Abrir en el navegador la dirección que indique Vite (por defecto, `http://localhost:3000`).

## Comprobaciones y compilación

Verificar los tipos de TypeScript:

```bash
npm run lint
```

Generar la versión optimizada para producción:

```bash
npm run build
```

La salida de producción se genera en `dist/`. Para previsualizarla localmente:

```bash
npm run preview
```

## Uso del informe

- Navega por las secciones desde las pestañas del encabezado.
- Usa **Ver Todo en Modo Documento** para consultar todas las secciones de forma continua.
- Usa **Imprimir / PDF** para imprimir el informe o guardarlo como PDF.
- En el explorador, busca registros y aplica filtros por país y tipo de alojamiento; desde allí también puedes descargar el CSV completo.
- En el mapa, filtra los destinos por país y cambia la métrica usada para representar las ciudades.
