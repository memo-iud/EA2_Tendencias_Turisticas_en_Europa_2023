import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, Play, Sparkles } from 'lucide-react';

export const PythonCodeSection: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const codeSnippets = [
    {
      title: 'Script Integral: Carga y Las 6 Visualizaciones en Plotly & Folium',
      description: 'Código Python completo ejecutable en Google Colab o Jupyter Notebook con Pandas, Plotly Express y Folium para generar los 6 gráficos del estudio.',
      code: `"""
Caso de Estudio: Análisis de Tendencias Turísticas en Europa 2023
Institución Universitaria Digital de Antioquia - IU Digital
Asignatura: Visualización para Toma de Decisiones - Unidad 2
Autores: Guillermo León Loaiza Mesa, Jaider Morales Bautista
Período Académico: 2026-2
Contacto: guillermo.loaiza@est.iudigital.edu.co
"""

import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import folium

# 1. Carga del conjunto de datos
csv_path = "DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE.csv"
df = pd.read_csv(csv_path)

# 2. Conversión de tipos y enriquecimiento temporal
df['fecha'] = pd.to_datetime(df['fecha'])
df['mes'] = df['fecha'].dt.month
df['mes_nombre'] = df['fecha'].dt.strftime('%B')

print("Resumen inicial del dataset:")
print(df.info())
print(df.describe())

# ==============================================================================
# VISUALIZACIÓN 1: PATRONES ESTACIONALES DE VIAJE
# ==============================================================================
monthly_trips = df.groupby(['mes']).size().reset_index(name='num_viajes')
month_map = {1:'Enero', 2:'Febrero', 3:'Marzo', 4:'Abril', 5:'Mayo', 6:'Junio',
             7:'Julio', 8:'Agosto', 9:'Septiembre', 10:'Octubre', 11:'Noviembre', 12:'Diciembre'}
monthly_trips['mes_label'] = monthly_trips['mes'].map(month_map)

fig1 = px.bar(
    monthly_trips,
    x='mes_label',
    y='num_viajes',
    title="1. Patrones Estacionales de Viaje en Europa 2023",
    labels={'mes_label': 'Mes', 'num_viajes': 'Número de Viajes'},
    text='num_viajes',
    color='num_viajes',
    color_continuous_scale='Blues'
)
fig1.update_layout(xaxis_tickangle=-45, template="plotly_white")
fig1.show()

# ==============================================================================
# VISUALIZACIÓN 2: DESTINOS MÁS POPULARES (TOP 10 CIUDADES)
# ==============================================================================
top_cities = df.groupby(['ciudad', 'pais']).size().reset_index(name='total_viajes')
top10_cities = top_cities.nlargest(10, 'total_viajes').sort_values('total_viajes', ascending=True)

fig2 = px.bar(
    top10_cities,
    x='total_viajes',
    y='ciudad',
    orientation='h',
    color='pais',
    title="2. Top 10 Destinos Más Populares en Europa 2023",
    labels={'total_viajes': 'Total de Viajes', 'ciudad': 'Ciudad Destino'},
    text='total_viajes',
    template="plotly_white"
)
fig2.show()

# ==============================================================================
# VISUALIZACIÓN 3: TIPO DE ALOJAMIENTO Y GASTO DIARIO (BOXPLOT)
# ==============================================================================
fig3 = px.box(
    df,
    x='tipo_alojamiento',
    y='gasto_diario',
    color='tipo_alojamiento',
    points="outliers",
    title="3. Distribución del Gasto Diario por Tipo de Alojamiento",
    labels={'tipo_alojamiento': 'Tipo de Alojamiento', 'gasto_diario': 'Gasto Diario (€)'},
    template="plotly_white"
)
fig3.show()

# ==============================================================================
# VISUALIZACIÓN 4: SATISFACCIÓN DEL CLIENTE POR PAÍS
# ==============================================================================
fig4 = px.box(
    df,
    x='pais',
    y='valoracion',
    color='pais',
    title="4. Distribución de Valoraciones del Cliente por País",
    labels={'pais': 'País', 'valoracion': 'Puntuación (1 a 5 Estrellas)'},
    template="plotly_white"
)
fig4.show()

# ==============================================================================
# VISUALIZACIÓN 5: DURACIÓN PROMEDIO DE ESTANCIA POR DESTINO
# ==============================================================================
avg_stay = df.groupby(['ciudad', 'pais'])['duracion_estancia'].mean().reset_index()
avg_stay = avg_stay.sort_values('duracion_estancia', ascending=False)
mean_europe = df['duracion_estancia'].mean()

fig5 = px.bar(
    avg_stay,
    x='ciudad',
    y='duracion_estancia',
    color='pais',
    title="5. Duración Promedio de Estancia por Ciudad Destino",
    labels={'ciudad': 'Ciudad', 'duracion_estancia': 'Estancia Promedio (Días)'},
    template="plotly_white"
)
fig5.add_hline(y=mean_europe, line_dash="dash", line_color="red",
               annotation_text=f"Promedio Europa: {mean_europe:.2f} días")
fig5.update_layout(xaxis_tickangle=-45)
fig5.show()

# ==============================================================================
# VISUALIZACIÓN 6: DISTRIBUCIÓN GEOGRÁFICA DE LOS VIAJES (FOLIUM MAP)
# ==============================================================================
# Agregación a nivel de ciudad para optimizar marcadores con radio y métricas
city_geo = df.groupby(['ciudad', 'pais', 'latitud', 'longitud']).agg(
    viajes=('duracion_estancia', 'count'),
    estancia_promedio=('duracion_estancia', 'mean'),
    gasto_promedio=('gasto_diario', 'mean'),
    valoracion_promedio=('valoracion', 'mean')
).reset_index()

# Coordenadas centrales de Europa
mapa_europa = folium.Map(location=[48.0, 5.0], zoom_start=5, tiles="CartoDB positron")

country_palette = {
    'Francia': '#3b82f6',
    'España': '#f59e0b',
    'Alemania': '#10b981',
    'Reino Unido': '#6366f1',
    'Italia': '#f43f5e'
}

for _, row in city_geo.iterrows():
    popup_html = f"""
    <div style='font-family:sans-serif; min-width:140px;'>
        <b>{row['ciudad']} ({row['pais']})</b><br>
        Viajes: {row['viajes']}<br>
        Estancia Media: {row['estancia_promedio']:.1f} días<br>
        Gasto Diario: €{row['gasto_promedio']:.2f}<br>
        Valoración: {row['valoracion_promedio']:.2f} ★
    </div>
    """
    folium.CircleMarker(
        location=[row['latitud'], row['longitud']],
        radius=row['estancia_promedio'] * 1.5,
        popup=folium.Popup(popup_html, max_width=250),
        tooltip=f"{row['ciudad']}: {row['viajes']} viajes",
        color='#ffffff',
        weight=1.5,
        fill=True,
        fill_color=country_palette.get(row['pais'], '#333333'),
        fill_opacity=0.8
    ).add_to(mapa_europa)

# Guardar mapa en archivo HTML interactivo
mapa_europa.save("mapa_turismo_europa_2023.html")
print("¡Las 6 visualizaciones y el mapa Folium se han generado exitosamente!")
`
    },
    {
      title: 'Alternativa Estadística: Seaborn & Matplotlib (Boxplots y Estacionalidad)',
      description: 'Implementación con Seaborn y Matplotlib para generar gráficos estáticos de alta resolución aptos para publicaciones académicas y tesis.',
      code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Configuración visual académica
sns.set_theme(style="whitegrid", font="sans-serif")
plt.rcParams['font.size'] = 11

df = pd.read_csv("DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE.csv")

# 1. Boxplot con Seaborn: Alojamiento vs Gasto Diario
plt.figure(figsize=(10, 6))
palette = sns.color_palette("muted")
ax = sns.boxplot(
    data=df,
    x="tipo_alojamiento",
    y="gasto_diario",
    palette=palette,
    boxprops=dict(alpha=0.8),
    fliersize=3
)
plt.title("Distribución de Gasto Diario por Tipo de Alojamiento (Europa 2023)", fontsize=13, fontweight='bold', pad=15)
plt.xlabel("Tipo de Alojamiento", fontweight='bold')
plt.ylabel("Gasto Diario (€)", fontweight='bold')
plt.tight_layout()
plt.savefig("boxplot_alojamiento_seaborn.png", dpi=300)
plt.show()

# 2. Boxplot de Satisfacción por País
plt.figure(figsize=(10, 6))
sns.boxplot(
    data=df,
    x="pais",
    y="valoracion",
    palette="Set2"
)
plt.title("Calificación de Clientes por País de Destino", fontsize=13, fontweight='bold', pad=15)
plt.xlabel("País", fontweight='bold')
plt.ylabel("Valoración (1 a 5 Estrellas)", fontweight='bold')
plt.tight_layout()
plt.savefig("satisfaccion_pais_seaborn.png", dpi=300)
plt.show()
`
    }
  ];

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
              Código Fuente
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Reproducibilidad Académica
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Scripts Python Reproducibles (Google Colab / VS Code)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Código modular para reproducir de forma 100% idéntica las 6 visualizaciones y el mapa de la Unidad 2 en un entorno de Ciencia de Datos.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 0 ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Plotly & Folium (Interactivo)
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 1 ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Seaborn & Matplotlib (Estático)
          </button>
        </div>
      </div>

      {/* Snippet Card */}
      {(() => {
        const item = codeSnippets[activeTab];
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">{item.description}</span>
              <button
                onClick={() => handleCopy(item.code, activeTab)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors cursor-pointer"
              >
                {copiedIndex === activeTab ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Código</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-200">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="ml-2">{activeTab === 0 ? 'analisis_turismo_plotly_folium.py' : 'analisis_turismo_seaborn.py'}</span>
                </div>
                <span className="text-[11px] text-slate-500">Python 3.10+ • Pandas • Plotly</span>
              </div>

              <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed max-h-[460px] scrollbar-thin">
                <code>{item.code}</code>
              </pre>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
