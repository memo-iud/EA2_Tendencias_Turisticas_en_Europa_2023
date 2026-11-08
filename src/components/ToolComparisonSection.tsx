import React, { useState } from 'react';
import { CheckCircle2, FileText, Layers, ShieldCheck, Zap, AlertCircle, BarChart3, Globe, Code, ArrowRight } from 'lucide-react';

export const ToolComparisonSection: React.FC = () => {
  const [selectedObjective, setSelectedObjective] = useState<number>(1);

  const objectives = [
    {
      id: 1,
      titulo: 'Objetivo 1: Patrones Estacionales de Viaje',
      grafico: 'Gráfico de barras mensual (volumen de viajes por mes, temporadas alta/baja)',
      herramienta: 'Python (Plotly Express + Pandas)',
      justificacion: 'Pandas permite transformar la columna "fecha" a datetime (`pd.to_datetime`), extraer el mes (`dt.month`) y realizar un `value_counts()` ordenado cronológicamente en microsegundos. Con Plotly Express (`px.bar`), se generan barras interactivas con tooltips detallados (incluyendo gasto promedio e intervalos de confianza), coloreando condicionalmente las temporadas alta (abril, mayo, agosto) y baja (febrero, septiembre) sin requerir licencias costosas ni software de escritorio restringido a Windows.',
      factores: {
        complejidad: 'Transformación de series temporales en 10.000 registros y agregación por mes calendario.',
        tipoVisualizacion: 'Barras verticales continuas con categorización cromática de estacionalidad.',
        facilidadUso: 'Sintaxis de 3 líneas con `px.bar(df_monthly, x="mes", y="viajes", color="temporada")`.',
        disponibilidad: '100% Código abierto, ejecutable en Google Colab, Jupyter Notebook o servidores web sin costo de licencia.'
      }
    },
    {
      id: 2,
      titulo: 'Objetivo 2: Destinos Más Populares',
      grafico: 'Gráfico de barras horizontales (Top 10 ciudades con mayor número de visitantes)',
      herramienta: 'Python (Plotly Express + Pandas)',
      justificacion: 'La función `nlargest(10)` de Pandas extrae el ranking exacto de las ciudades sobre 25 destinos. Al presentarlo en orientación horizontal (`orientation="h"`), los nombres largos de ciudades europeas (e.g., "Liverpool", "Florencia", "Frankfurt") se leen con total legibilidad tipográfica sin truncamientos. Plotly permite además mapear la paleta de colores al país de pertenencia, aportando un doble nivel analítico en una sola vista.',
      factores: {
        complejidad: 'Agrupación por ciudad (`groupby`), ordenamiento descendente y filtrado de los 10 primeros.',
        tipoVisualizacion: 'Barras horizontales ordenadas para optimizar la jerarquía de lectura humana.',
        facilidadUso: 'Filtrado y graficación declarativa instantánea con un `DataFrame` preprocesado.',
        disponibilidad: 'Multiplataforma (Linux, Windows, macOS, Cloud) con soporte de exportación en PNG/SVG de alta resolución.'
      }
    },
    {
      id: 3,
      titulo: 'Objetivo 3: Tipo de Alojamiento y Gasto Diario',
      grafico: 'Diagrama de caja y bigotes (Boxplot) de distribución de gasto por categoría',
      herramienta: 'Python (Seaborn / Plotly Boxplot)',
      justificacion: 'Un análisis gerencial no debe limitarse a la media aritmética, pues el gasto diario tiene sesgos y valores atípicos (outliers de hasta €222 en hoteles y apartamentos). Python, mediante `px.box(df, x="tipo_alojamiento", y="gasto_diario", points="outliers")` o `sns.boxplot`, calcula de forma matemáticamente rigurosa el rango intercuartílico (IQR), la mediana (Q2), los percentiles 25 (Q1) y 75 (Q3) y los bigotes Tukey (1.5 × IQR). Power BI requiere configuraciones visuales adicionales de terceros o cálculos DAX complejos para representar boxplots con distribución fidedigna de outliers.',
      factores: {
        complejidad: 'Cálculo de estadísticas no paramétricas y dispersión sobre distribuciones asimétricas continuas.',
        tipoVisualizacion: 'Boxplot estadístico con marcación explícita de valores atípicos y cuartiles.',
        facilidadUso: 'Algoritmos estadísticos nativos integrados en SciPy/Seaborn/Plotly sin extensiones externas.',
        disponibilidad: 'Librerías estándar de Ciencia de Datos reconocidas académicamente para inferencia cuantitativa.'
      }
    },
    {
      id: 4,
      titulo: 'Objetivo 4: Satisfacción del Cliente por País',
      grafico: 'Diagrama de caja interactivo y distribución de valoraciones (1 a 5 estrellas)',
      herramienta: 'Python (Plotly Express / Seaborn)',
      justificacion: 'La variable "valoración" es ordinal discreta (1 a 5). Plotly permite combinar un diagrama de caja con la distribución empírica de frecuencias por estrella. Esto evidencia que, a pesar de que todos los países tienen una media cercana a ~2.98, la dispersión es equilibrada entre todas las categorías de clientes, permitiendo a la agencia identificar si la insatisfacción (1-2 estrellas) está concentrada en una región particular o es transversal.',
      factores: {
        complejidad: 'Datos ordinales discretos con distribución multicategórica entre 5 países.',
        tipoVisualizacion: 'Boxplot interactivo con hover enriquecido que detalla media, mediana y percentiles.',
        facilidadUso: 'Agrupación vectorial sin necesidad de crear medidas DAX complejas.',
        disponibilidad: 'Sin coste de licenciamiento corporativo; ejecutable directamente en el entorno de investigación.'
      }
    },
    {
      id: 5,
      titulo: 'Objetivo 5: Duración Promedio de Estancia por Destino',
      grafico: 'Gráfico de barras interactivo de estancia media (días) por cada una de las 25 ciudades',
      herramienta: 'Python (Plotly / Pandas)',
      justificacion: 'Permite calcular la media de estancia (`duracion_estancia.mean()`) y comparar cada ciudad frente a la media europea global (7.47 días) mediante una línea de referencia (`fig.add_hline`). Los tooltips interactivos permiten al tomador de decisiones inspeccionar cuántos viajes corresponden a escapadas cortas (2-4 días) vs estancias vacacionales largas (10-14 días), facilitando la segmentación de paquetes turísticos.',
      factores: {
        complejidad: 'Agregación bivariada entre variable cualitativa nominal (ciudad) y cuantitativa discreta (días).',
        tipoVisualizacion: 'Gráfico de barras con línea de corte referencial (benchmark promedio continental).',
        facilidadUso: 'Altamente intuitivo con ordenamiento dinámico por duración o por orden alfabético.',
        disponibilidad: 'Compatibilidad total para embeber en tableros ejecutivos Dash, Streamlit o aplicaciones web.'
      }
    },
    {
      id: 6,
      titulo: 'Objetivo 6: Distribución Geográfica de los Viajes',
      grafico: 'Mapa interactivo con coordenadas (latitud, longitud), color por país y radio por estancia',
      herramienta: 'Python con Folium (Leaflet.js) / Plotly Scatter Mapbox',
      justificacion: 'El dataset contiene coordenadas geográficas numéricas exactas (`latitud` y `longitud`). Folium y Leaflet.js integran capas de mosaicos cartográficos reales (OpenStreetMap, CartoDB Positron) sin necesidad de claves API de pago ni consumo de créditos de Azure Maps / Bing Maps. Permite renderizar marcadores de círculos (`CircleMarker`) donde el radio es una función matemática de la duración de estancia y el color hexadecimal identifica el país, ofreciendo zoom, desplazamiento y popups con información turística contextual.',
      factores: {
        complejidad: 'Mapeo geoespacial multidimensional (latitud, longitud, país, duración de estancia, gasto medio).',
        tipoVisualizacion: 'Mapa interactivo de puntos proporcionales con geocodificación de coordenadas y popups.',
        facilidadUso: 'Sintaxis declarativa de Folium: `folium.CircleMarker(location=[lat, lon], radius=r, color=c).add_to(map)`.',
        disponibilidad: 'Open Source total sin límites de peticiones ni costes por geocodificación de API comercial.'
      }
    }
  ];

  return (
    <div className="space-y-10">
      {/* Introduction Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 text-indigo-700 mb-4">
          <FileText className="w-6 h-6" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            1. Investigación y Estado del Arte de Herramientas de Visualización
          </h2>
        </div>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          En el marco de la <strong>Unidad 2: Herramientas de visualización</strong> de la <em>IU Digital de Antioquia</em>, se establece que los cuadros de mando (dashboards) y las librerías especializadas constituyen el puente crítico entre los grandes volúmenes de datos crudos y la toma de decisiones informadas. Para el caso de estudio de las <strong>Tendencias Turísticas en Europa 2023</strong> (dataset de 10.000 observaciones), se investigaron rigurosamente tres de los ecosistemas más consolidados de la industria:
        </p>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tool 1: Power BI */}
          <div className="border border-slate-200 rounded-lg p-5 bg-gradient-to-b from-amber-50/40 to-white hover:border-amber-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded">
                Herramienta 1
              </span>
              <span className="text-xs text-slate-500 font-medium">Microsoft BI</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Power BI</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Plataforma líder en inteligencia empresarial orientada a la toma de decisiones operativas y estratégicas corporativas.
            </p>
            <ul className="text-xs space-y-2 text-slate-700">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Fortaleza:</strong> Motor tabular DAX y Power Query para modelado relacional directo con Excel y SQL Server.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Mapas:</strong> Soporte nativo para ArcGIS y mapas con nombres de ciudades.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Limitación:</strong> Dependiente del sistema operativo Windows para Power BI Desktop y costo de suscripción por usuario (Power BI Pro).</span>
              </li>
            </ul>
          </div>

          {/* Tool 2: Tableau */}
          <div className="border border-slate-200 rounded-lg p-5 bg-gradient-to-b from-blue-50/40 to-white hover:border-blue-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded">
                Herramienta 2
              </span>
              <span className="text-xs text-slate-500 font-medium">Salesforce</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tableau</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Referente en exploración analítica visual con arquitectura drag-and-drop y procesamiento ágil en memoria (Hyper Engine).
            </p>
            <ul className="text-xs space-y-2 text-slate-700">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Fortaleza:</strong> Excelente calidad visual nativa y facilidad para crear cálculos de tabla y parámetros dinámicos.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Cartografía:</strong> Capas geográficas automáticas mediante geocodificación interna de países y ciudades.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Limitación:</strong> Coste elevado de licencias Creator y menor flexibilidad para scripts algorítmicos complejos no lineales.</span>
              </li>
            </ul>
          </div>

          {/* Tool 3: Python Data Science Ecosystem */}
          <div className="border-2 border-indigo-500 rounded-lg p-5 bg-gradient-to-b from-indigo-50/50 to-white shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded">
                Herramienta 3 (Seleccionada)
              </span>
              <span className="text-xs font-semibold text-emerald-600">Open Source</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Python (Plotly + Folium + Pandas)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Ecosistema computacional programático para ciencia de datos, estadística descriptiva e inferencial y visualización interactiva.
            </p>
            <ul className="text-xs space-y-2 text-slate-700">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Pandas + SciPy:</strong> Procesamiento estructurado de 10.000 filas, percentiles exactos y agregación temporal.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Plotly & Folium:</strong> Gráficos D3/WebGL interactivos y mapas con capas Leaflet totalmente configurables.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Reproducibilidad:</strong> Pipelines reproducibles en Google Colab, Jupyter Notebook y despliegue web directo.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Multicriteria Comparison Matrix Table */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 text-slate-900 mb-4">
          <Layers className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Matriz Comparativa Multicriterio de Herramientas
          </h2>
        </div>
        <p className="text-slate-600 text-sm mb-6">
          Evaluación técnica basada en las 4 dimensiones solicitadas por la guía de la Unidad 2: complejidad de los datos, tipo de visualización requerida, facilidad de uso/curva de aprendizaje y disponibilidad/licenciamiento.
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
            <thead className="bg-slate-50 text-slate-700 font-semibold">
              <tr>
                <th className="py-3 px-4 w-1/5">Criterio de Evaluación</th>
                <th className="py-3 px-4 w-1/4">Power BI (Microsoft)</th>
                <th className="py-3 px-4 w-1/4">Tableau (Salesforce)</th>
                <th className="py-3 px-4 w-1/4 bg-indigo-50/80 text-indigo-900">
                  Python (Plotly, Pandas, Folium) ★
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  1. Complejidad de los Datos
                </td>
                <td className="py-3.5 px-4">
                  Excelente para modelos estrella y relaciones dimensionales. Limitado en operaciones vectoriales matriciales no estándar o algoritmos de clustering complejos.
                </td>
                <td className="py-3.5 px-4">
                  Excelente para agregaciones y LOD (Level of Detail Expressions). Dificultades al realizar transformaciones complejas de series de tiempo sin Tableau Prep previo.
                </td>
                <td className="py-3.5 px-4 bg-indigo-50/40 font-medium text-slate-800">
                  Máxima potencia. Maneja 10.000 registros en memoria con NumPy/Pandas en milisegundos. Admite limpieza avanzada, interpolación, agrupaciones multi-índice y geoprocesamiento.
                </td>
              </tr>

              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  2. Tipos de Visualización Requeridos
                </td>
                <td className="py-3.5 px-4">
                  Barras y líneas estándar de alta calidad. El boxplot requiere visuales externos de AppSource o DAX complejo para cuartiles. Mapas limitados por geocodificación.
                </td>
                <td className="py-3.5 px-4">
                  Catálogo nativo de gran estética. Boxplots nativos con cuartiles precisos. Mapas coropléticos automáticos pero con menor control sobre radios matemáticos de círculos.
                </td>
                <td className="py-3.5 px-4 bg-indigo-50/40 font-medium text-slate-800">
                  Soporte completo e ilimitado: barras horizontales/verticales, diagramas de caja y bigotes (Tukey IQR), violines, mapas con capas Leaflet, radio dinámico y marcadores por color.
                </td>
              </tr>

              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  3. Facilidad de Uso y Curva de Aprendizaje
                </td>
                <td className="py-3.5 px-4">
                  Curva media-baja al inicio con interfaz gráfica drag-and-drop amigable; se vuelve compleja al profundizar en lenguaje de fórmulas DAX y contextos de filtro.
                </td>
                <td className="py-3.5 px-4">
                  Curva media. Muy intuitivo en la colocación de píldoras en estantes de columnas/filas; dominar expresiones LOD y cálculos de tabla requiere capacitación técnica.
                </td>
                <td className="py-3.5 px-4 bg-indigo-50/40 font-medium text-slate-800">
                  Curva media para estudiantes de Ingeniería de Software y Datos. Código declarativo legible (Pythonic), modular, reutilizable y fácilmente integrable en pipelines de software.
                </td>
              </tr>

              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  4. Disponibilidad, Costo y Licenciamiento
                </td>
                <td className="py-3.5 px-4">
                  Desktop gratuito pero limitado a Windows. La publicación compartida en la organización requiere suscripción de pago (Power BI Pro / Premium por usuario).
                </td>
                <td className="py-3.5 px-4">
                  Licenciamiento comercial de alto costo (Tableau Creator anual). Tableau Public es gratuito pero obliga a publicar todos los datos de forma abierta en la nube pública.
                </td>
                <td className="py-3.5 px-4 bg-indigo-50/40 font-medium text-slate-800">
                  100% Código Abierto (licencia BSD/MIT). Totalmente gratuito, multiplataforma (Windows, Linux, macOS), ejecutable en la nube (Google Colab) y sin dependencia de proveedores.
                </td>
              </tr>

              <tr className="hover:bg-slate-50/60">
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  5. Reproducibilidad y Automatización
                </td>
                <td className="py-3.5 px-4">
                  Requiere interacción manual en interfaz gráfica o programación de flujos de actualización en Power BI Service.
                </td>
                <td className="py-3.5 px-4">
                  Flujos basados en archivos de libro de trabajo (.twbx). Dificultad para control de versiones en Git.
                </td>
                <td className="py-3.5 px-4 bg-indigo-50/40 font-medium text-slate-800">
                  Control de versiones nativo en Git/GitHub, automatización con scripts de terminal (`.py`, `.ipynb`) y despliegue directo en aplicaciones web (Dash/React).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Connection & Methodology Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 text-slate-900 mb-4">
          <Code className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            2. Selección y Conexión con el Conjunto de Datos
          </h2>
        </div>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          Para conectar y analizar el archivo provisto <code>DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE_8750a031.csv</code> (correspondiente al dataset de turismo en Europa 2023 con 10.000 observaciones), se seleccionó la suite de <strong>Python con Pandas, Plotly Express y Folium</strong>. A continuación se detalla el pipeline de conexión y tipado de variables:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-900 text-slate-200 p-4 rounded-lg font-mono text-xs overflow-x-auto space-y-2 border border-slate-800">
            <div className="text-slate-400">// Pipeline de conexión en Python</div>
            <p className="text-emerald-400">import pandas as pd</p>
            <p className="text-emerald-400">import plotly.express as px</p>
            <p className="text-emerald-400">import folium</p>
            <br />
            <div className="text-slate-400"># 1. Carga del dataset desde almacenamiento local o URL</div>
            <p>df = pd.read_csv("DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE.csv")</p>
            <br />
            <div className="text-slate-400"># 2. Conversión de variables temporales y numéricas</div>
            <p>df['fecha'] = pd.to_datetime(df['fecha'])</p>
            <p>df['mes'] = df['fecha'].dt.month</p>
            <p>df['mes_nombre'] = df['fecha'].dt.month_name()</p>
            <p>df['gasto_total_viaje'] = df['duracion_estancia'] * df['gasto_diario']</p>
            <br />
            <div className="text-slate-400"># 3. Validación de integridad (sin nulos en 10.000 filas)</div>
            <p>print(f"Dimensiones validadas: {`{df.shape}`} filas y columnas")</p>
            <p>print(df.info())</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Estructura de Variables Identificadas</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
                <span className="font-mono text-indigo-700 font-semibold">fecha</span>
                <span className="text-slate-500">Temporal (2023-01-01 a 2023-12-31)</span>
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-medium">Datetime</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
                <span className="font-mono text-indigo-700 font-semibold">pais, ciudad</span>
                <span className="text-slate-500">5 países y 25 ciudades clave</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-medium">Categórica nominal</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
                <span className="font-mono text-indigo-700 font-semibold">latitud, longitud</span>
                <span className="text-slate-500">Georreferenciación decimal (WGS84)</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-medium">Float64</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
                <span className="font-mono text-indigo-700 font-semibold">tipo_alojamiento, transporte, motivo_viaje</span>
                <span className="text-slate-500">Segmentación de viaje</span>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-medium">Categórica</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
                <span className="font-mono text-indigo-700 font-semibold">duracion_estancia, gasto_diario</span>
                <span className="text-slate-500">Días (2 a 14) y euros (€20 a €223)</span>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded font-medium">Numérica continua/discreta</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
                <span className="font-mono text-indigo-700 font-semibold">valoracion</span>
                <span className="text-slate-500">Escala de percepción (1 a 5 estrellas)</span>
                <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-medium">Ordinal discreta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Justification by Specific Objective */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 text-slate-900 mb-2">
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            3. Justificación de la Selección para Cada Objetivo del Análisis
          </h2>
        </div>
        <p className="text-slate-600 text-sm mb-6">
          Haz clic en cada uno de los 6 objetivos del caso de estudio para consultar la justificación técnica pormenorizada según los 4 factores solicitados (complejidad, tipo de visualización, facilidad y disponibilidad):
        </p>

        {/* Objective Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {objectives.map((obj) => (
            <button
              key={obj.id}
              onClick={() => setSelectedObjective(obj.id)}
              className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                selectedObjective === obj.id
                  ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 font-bold shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 font-medium'
              }`}
            >
              <div className="text-[11px] uppercase tracking-wider text-slate-400">Obj {obj.id}</div>
              <div className="text-xs font-semibold truncate mt-0.5">
                {obj.id === 1 && 'Estacionalidad'}
                {obj.id === 2 && 'Top 10 Ciudades'}
                {obj.id === 3 && 'Alojamiento vs Gasto'}
                {obj.id === 4 && 'Satisfacción País'}
                {obj.id === 5 && 'Estancia Destino'}
                {obj.id === 6 && 'Mapa Geoespacial'}
              </div>
            </button>
          ))}
        </div>

        {/* Active Objective Detail Card */}
        {(() => {
          const active = objectives.find((o) => o.id === selectedObjective) || objectives[0];
          return (
            <div className="border border-indigo-200 bg-gradient-to-br from-indigo-50/30 via-white to-slate-50/40 rounded-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-indigo-100 mb-4">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    {active.titulo}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">{active.grafico}</h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-indigo-600 text-white shadow-xs">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{active.herramienta}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Justificación Teórica & Metodológica:
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                    {active.justificacion}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Complejidad de los Datos:
                    </div>
                    <p className="text-xs text-slate-600">{active.factores.complejidad}</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Tipo de Visualización:
                    </div>
                    <p className="text-xs text-slate-600">{active.factores.tipoVisualizacion}</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      Facilidad de Uso:
                    </div>
                    <p className="text-xs text-slate-600">{active.factores.facilidadUso}</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Disponibilidad & Licencia:
                    </div>
                    <p className="text-xs text-slate-600">{active.factores.disponibilidad}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
