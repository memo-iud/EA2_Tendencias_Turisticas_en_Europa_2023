import React, { useState } from 'react';
import {
  monthlyTripStats,
  citiesAnalytics,
  accommodationSpendBoxplots,
  countryRatingStats,
  generalKPIs,
  CityData
} from '../data/processedTourismData';
import {
  BarChart2,
  TrendingUp,
  MapPin,
  Building,
  Star,
  Clock,
  Sparkles,
  Info,
  Calendar,
  Layers
} from 'lucide-react';

export const VisualizationsSection: React.FC = () => {
  // Chart 1 state
  const [seasonalMetric, setSeasonalMetric] = useState<'viajes' | 'avgSpend' | 'avgStay'>('viajes');
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  // Chart 2 state
  const [topCitiesLimit, setTopCitiesLimit] = useState<10 | 25>(10);
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('Todos');

  // Chart 3 state
  const [selectedAccomm, setSelectedAccomm] = useState<string | null>(null);

  // Chart 4 state
  const [selectedCountryRating, setSelectedCountryRating] = useState<string | null>(null);

  // Chart 5 state
  const [sortStayBy, setSortStayBy] = useState<'stay' | 'name'>('stay');
  const [stayScaleMode, setStayScaleMode] = useState<'focused' | 'full'>('focused');

  // Helper for country colors
  const countryColors: Record<string, { bg: string; border: string; hex: string; text: string }> = {
    Francia: { bg: 'bg-blue-100', border: 'border-blue-400', hex: '#3b82f6', text: 'text-blue-700' },
    España: { bg: 'bg-amber-100', border: 'border-amber-400', hex: '#f59e0b', text: 'text-amber-700' },
    Alemania: { bg: 'bg-emerald-100', border: 'border-emerald-400', hex: '#10b981', text: 'text-emerald-700' },
    'Reino Unido': { bg: 'bg-indigo-100', border: 'border-indigo-400', hex: '#6366f1', text: 'text-indigo-700' },
    Italia: { bg: 'bg-rose-100', border: 'border-rose-400', hex: '#f43f5e', text: 'text-rose-700' }
  };

  // Filtered cities for Chart 2
  const filteredCities = citiesAnalytics
    .filter(c => selectedCountryFilter === 'Todos' || c.pais === selectedCountryFilter)
    .slice(0, topCitiesLimit);

  // Sorted cities for Chart 5
  const sortedStayCities = [...citiesAnalytics].sort((a, b) => {
    if (sortStayBy === 'stay') return b.avgStay - a.avgStay;
    return a.ciudad.localeCompare(b.ciudad);
  });

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Evidencia Práctica - Cuadro de Mando Integral</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Visualizaciones Analíticas de Tendencias Turísticas Europa 2023
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-3xl">
              Implementación interactiva de las visualizaciones especificadas en la Unidad 2 y el caso de estudio. Cada visualización cuenta con métricas explorables, estadísticas descriptivas rigurosas e interpretación gerencial para la toma de decisiones.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Dataset sincronizado (10.000 observaciones)</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VISUALIZACIÓN 1: PATRONES ESTACIONALES DE VIAJE */}
      {/* ======================================================== */}
      <div id="vis-1" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
                Visualización 1
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Análisis Temporal
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Patrones Estacionales de Viaje en Europa (Enero - Diciembre 2023)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Gráfico de barras mensual para identificar períodos de temporada alta, media y baja a lo largo del año.
            </p>
          </div>

          {/* Metric Selector Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg text-xs font-medium">
            <button
              onClick={() => setSeasonalMetric('viajes')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                seasonalMetric === 'viajes' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Volumen de Viajes
            </button>
            <button
              onClick={() => setSeasonalMetric('avgSpend')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                seasonalMetric === 'avgSpend' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gasto Diario Medio (€)
            </button>
            <button
              onClick={() => setSeasonalMetric('avgStay')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                seasonalMetric === 'avgStay' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Estancia Media (Días)
            </button>
          </div>
        </div>

        {/* Legend & Stats Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-medium">Clasificación Estacional:</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
              <span className="w-3 h-3 rounded-xs bg-emerald-500"></span> Temporada Alta (Abril, Mayo, Agosto, Enero)
            </span>
            <span className="inline-flex items-center gap-1.5 text-indigo-700 font-semibold">
              <span className="w-3 h-3 rounded-xs bg-indigo-500"></span> Temporada Media (Mar, Jun, Jul, Oct, Nov, Dic)
            </span>
            <span className="inline-flex items-center gap-1.5 text-amber-700 font-semibold">
              <span className="w-3 h-3 rounded-xs bg-amber-500"></span> Temporada Baja (Febrero, Septiembre)
            </span>
          </div>

          <div className="text-slate-500 font-mono">
            Pico máx: <strong className="text-slate-900">Abril (869 viajes)</strong> | Valle mín: <strong className="text-slate-900">Febrero (759 viajes)</strong>
          </div>
        </div>

        {/* Interactive SVG Bar Chart */}
        <div className="h-72 w-full pt-4 pb-2">
          {(() => {
            const maxVal = seasonalMetric === 'viajes' ? 950 : seasonalMetric === 'avgSpend' ? 120 : 10;
            const minBase = seasonalMetric === 'viajes' ? 600 : seasonalMetric === 'avgSpend' ? 80 : 5;

            return (
              <div className="h-full flex items-end gap-2 sm:gap-4 relative pt-6 border-b border-slate-200">
                {/* Horizontal reference lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400 font-mono">
                  <div className="border-b border-dashed border-slate-200 pb-0.5">{maxVal} {seasonalMetric === 'viajes' ? 'viajes' : seasonalMetric === 'avgSpend' ? '€' : 'días'}</div>
                  <div className="border-b border-dashed border-slate-200 pb-0.5">{Math.round((maxVal + minBase) / 2)}</div>
                  <div className="border-b border-slate-300 pb-0.5">{minBase}</div>
                </div>

                {/* Bars */}
                {monthlyTripStats.map((m) => {
                  const val = seasonalMetric === 'viajes' ? m.viajes : seasonalMetric === 'avgSpend' ? m.avgSpend : m.avgStay;
                  const heightPercent = Math.max(10, Math.min(100, ((val - minBase) / (maxVal - minBase)) * 100));

                  const isHovered = hoveredMonth === m.mesNum;
                  let barColor = 'bg-indigo-500 hover:bg-indigo-600';
                  if (m.temporada === 'Alta') barColor = 'bg-emerald-500 hover:bg-emerald-600';
                  if (m.temporada === 'Baja') barColor = 'bg-amber-500 hover:bg-amber-600';

                  return (
                    <div
                      key={m.mesNum}
                      className="flex-1 flex flex-col items-center h-full justify-end group relative z-10 cursor-pointer"
                      onMouseEnter={() => setHoveredMonth(m.mesNum)}
                      onMouseLeave={() => setHoveredMonth(null)}
                    >
                      {/* Tooltip */}
                      {isHovered && (
                        <div className="absolute -top-20 z-30 bg-slate-900 text-white p-2.5 rounded-lg shadow-lg text-xs whitespace-nowrap pointer-events-none transform -translate-x-1/2 left-1/2">
                          <div className="font-bold border-b border-slate-700 pb-1 mb-1 flex items-center justify-between gap-3">
                            <span>{m.nombre} 2023</span>
                            <span className={`px-1.5 py-0.2 rounded text-[10px] font-semibold ${
                              m.temporada === 'Alta' ? 'bg-emerald-500/20 text-emerald-300' : m.temporada === 'Baja' ? 'bg-amber-500/20 text-amber-300' : 'bg-indigo-500/20 text-indigo-300'
                            }`}>
                              Temp. {m.temporada}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[11px] font-mono">
                            <span className="text-slate-400">Viajes:</span>
                            <span className="text-right text-white font-bold">{m.viajes}</span>
                            <span className="text-slate-400">Gasto diario:</span>
                            <span className="text-right text-white">€{m.avgSpend.toFixed(2)}</span>
                            <span className="text-slate-400">Estancia:</span>
                            <span className="text-right text-white">{m.avgStay.toFixed(1)} días</span>
                            <span className="text-slate-400">Satisfacción:</span>
                            <span className="text-right text-amber-400 font-bold">{m.avgRating.toFixed(2)} ★</span>
                          </div>
                        </div>
                      )}

                      {/* Bar Value Header */}
                      <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-700 mb-1 group-hover:text-indigo-600 transition-colors">
                        {seasonalMetric === 'viajes' ? m.viajes : seasonalMetric === 'avgSpend' ? `€${m.avgSpend.toFixed(0)}` : `${m.avgStay.toFixed(1)}d`}
                      </span>

                      {/* Bar */}
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className={`w-full max-w-[42px] rounded-t-md transition-all duration-300 ${barColor} ${
                          isHovered ? 'ring-2 ring-slate-900 ring-offset-1' : ''
                        }`}
                      />

                      {/* X Label */}
                      <div className="text-center mt-2">
                        <span className="block text-xs font-bold text-slate-800">{m.abrev}</span>
                        <span className="hidden sm:block text-[10px] text-slate-400">{m.temporada.slice(0, 3)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>

        {/* Analytical Business Insights for Chart 1 */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Info className="w-4 h-4 text-indigo-600" />
            <span>Hallazgos e Insights de Decisión (Objetivo 1):</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Picos de Demanda (Temporada Alta):</strong> Los meses con mayor afluencia son <strong>Abril (869 viajes)</strong>, <strong>Mayo (866 viajes)</strong> y <strong>Enero (863 viajes)</strong>, seguidos por <strong>Agosto (858 viajes)</strong>. Esto demuestra dos momentos estratégicos de contratación: la primavera europea (Semana Santa / escapadas urbanas) y el período estival/invernal.
          </p>
          <p className="leading-relaxed">
            • <strong>Valle Estacional (Temporada Baja):</strong> <strong>Febrero (759 viajes)</strong> y <strong>Septiembre (780 viajes)</strong> registran los menores flujos turísticos. La agencia de viajes debe diseñar promociones dinámicas y paquetes corporativos para amortiguar estos períodos de baja ocupación hotelera.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VISUALIZACIÓN 2: DESTINOS MÁS POPULARES (TOP CIUDADES) */}
      {/* ======================================================== */}
      <div id="vis-2" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
                Visualización 2
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Distribución Territorial
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Destinos Más Populares en Europa (Top Ciudades más Visitadas)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Gráfico de barras horizontales que clasifica el volumen de turistas recibidos por ciudad y su país de pertenencia.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Country Filter */}
            <select
              value={selectedCountryFilter}
              onChange={(e) => setSelectedCountryFilter(e.target.value)}
              className="text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Todos">Todos los países (5)</option>
              <option value="Francia">Francia</option>
              <option value="España">España</option>
              <option value="Alemania">Alemania</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="Italia">Italia</option>
            </select>

            {/* Limit toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
              <button
                onClick={() => setTopCitiesLimit(10)}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  topCitiesLimit === 10 ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Top 10
              </button>
              <button
                onClick={() => setTopCitiesLimit(25)}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  topCitiesLimit === 25 ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Todas (25)
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Bars Container */}
        <div className="space-y-3 pt-2">
          {filteredCities.map((c, index) => {
            const maxCityCount = 467; // Burdeos has 467
            const widthPercent = (c.count / maxCityCount) * 100;
            const countryMeta = countryColors[c.pais] || { bg: 'bg-indigo-100', border: 'border-indigo-400', hex: '#6366f1', text: 'text-indigo-700' };

            return (
              <div key={c.ciudad} className="group relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
                {/* Ranking & City Name */}
                <div className="sm:w-44 flex items-center gap-2 shrink-0">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    index < 3 ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-xs sm:text-sm">
                    {c.ciudad}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${countryMeta.bg} ${countryMeta.text}`}>
                    {c.pais}
                  </span>
                </div>

                {/* Bar representation */}
                <div className="flex-1 bg-slate-100 rounded-full h-6 p-0.5 relative overflow-hidden flex items-center">
                  <div
                    style={{ width: `${widthPercent}%`, backgroundColor: countryMeta.hex }}
                    className="h-full rounded-full transition-all duration-500 relative flex items-center justify-end px-3"
                  >
                    <span className="text-[11px] font-mono font-bold text-white drop-shadow-xs">
                      {c.count} viajes
                    </span>
                  </div>
                </div>

                {/* Secondary Metrics */}
                <div className="sm:w-48 flex items-center justify-between sm:justify-end gap-3 text-[11px] text-slate-500 font-mono shrink-0">
                  <span>{( (c.count / 10000) * 100 ).toFixed(1)}% total</span>
                  <span className="text-slate-300">|</span>
                  <span>Estancia: <strong>{c.avgStay.toFixed(1)}d</strong></span>
                  <span className="text-slate-300">|</span>
                  <span className="text-amber-600 font-bold">{c.avgRating.toFixed(1)} ★</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytical Findings for Chart 2 */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Info className="w-4 h-4 text-indigo-600" />
            <span>Hallazgos e Insights de Decisión (Objetivo 2):</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Liderazgo de Destinos:</strong> La ciudad con mayor concurrencia de toda Europa en 2023 fue <strong>Burdeos (Francia) con 467 viajes</strong>, seguida de <strong>Liverpool (Reino Unido, 432 viajes)</strong>, <strong>Florencia (Italia, 425 viajes)</strong> y <strong>Frankfurt (Alemania, 422 viajes)</strong>.
          </p>
          <p className="leading-relaxed">
            • <strong>Equilibrio Territorial:</strong> Las 25 ciudades del estudio mantienen una distribución notablemente equilibrada (entre 360 y 467 viajes cada una), lo que indica una demanda diversificada que no se concentra exclusivamente en las grandes capitales tradicionales (París, Londres, Madrid), sino que premia ciudades con fuerte atractivo cultural y enoturístico.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VISUALIZACIÓN 3: TIPO DE ALOJAMIENTO Y GASTO DIARIO (BOXPLOT) */}
      {/* ======================================================== */}
      <div id="vis-3" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
                Visualización 3
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Estadística Descriptiva y Dispersión
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Relación entre Tipo de Alojamiento y Gasto Diario (€)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Diagrama de caja y bigotes (Boxplot) que compara la distribución, mediana (Q2), rango intercuartílico (IQR) y valores atípicos.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
            Metodología: <strong className="text-slate-800">Tukey Boxplot (Bigotes en 1.5 × IQR)</strong>
          </div>
        </div>

        {/* Boxplot Visual Canvas */}
        <div className="space-y-6 pt-2">
          {/* Axis Scale Legend */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-200 pb-1">
            <span>€0</span>
            <span>€50</span>
            <span>€100 (Mediana Global)</span>
            <span>€150</span>
            <span>€200</span>
            <span>€250 (Gasto Máximo)</span>
          </div>

          {/* Boxplots Rows */}
          <div className="space-y-5">
            {accommodationSpendBoxplots.map((acc) => {
              const maxScale = 230; // Max expense is ~223
              const leftQ1 = (acc.q1 / maxScale) * 100;
              const widthBox = ((acc.q3 - acc.q1) / maxScale) * 100;
              const leftMedian = (acc.median / maxScale) * 100;
              const leftLower = (acc.lowerWhisker / maxScale) * 100;
              const rightUpper = (acc.upperWhisker / maxScale) * 100;
              const isSelected = selectedAccomm === acc.tipo;

              return (
                <div
                  key={acc.tipo}
                  onClick={() => setSelectedAccomm(isSelected ? null : acc.tipo || null)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    isSelected ? 'border-indigo-500 bg-indigo-50/40 shadow-xs' : 'border-slate-200 hover:border-slate-300 bg-slate-50/30'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-indigo-600" />
                      <span className="font-bold text-slate-900 text-sm">{acc.tipo}</span>
                      <span className="text-slate-500 font-mono">({acc.n.toLocaleString()} registros)</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-slate-600">
                      <span>Mín: <strong>€{acc.min}</strong></span>
                      <span>Q1 (25%): <strong>€{acc.q1}</strong></span>
                      <span className="text-indigo-700 font-bold bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                        Mediana: €{acc.median}
                      </span>
                      <span>Media: <strong>€{acc.mean}</strong></span>
                      <span>Q3 (75%): <strong>€{acc.q3}</strong></span>
                      <span>Máx: <strong>€{acc.max}</strong></span>
                    </div>
                  </div>

                  {/* The Boxplot Graphic */}
                  <div className="relative h-9 w-full bg-slate-100 rounded flex items-center px-1">
                    {/* Background Grid markers at 50, 100, 150, 200 */}
                    <div className="absolute left-[21.7%] top-0 bottom-0 w-px bg-slate-300 pointer-events-none" />
                    <div className="absolute left-[43.5%] top-0 bottom-0 w-px bg-slate-300 pointer-events-none" />
                    <div className="absolute left-[65.2%] top-0 bottom-0 w-px bg-slate-300 pointer-events-none" />
                    <div className="absolute left-[86.9%] top-0 bottom-0 w-px bg-slate-300 pointer-events-none" />

                    {/* Whisker Line (from lower to upper whisker) */}
                    <div
                      style={{
                        left: `${leftLower}%`,
                        width: `${rightUpper - leftLower}%`
                      }}
                      className="absolute h-0.5 bg-slate-700"
                    />

                    {/* Lower Whisker Cap */}
                    <div
                      style={{ left: `${leftLower}%` }}
                      className="absolute w-1.5 h-4 bg-slate-700 transform -translate-x-1/2"
                    />

                    {/* Upper Whisker Cap */}
                    <div
                      style={{ left: `${rightUpper}%` }}
                      className="absolute w-1.5 h-4 bg-slate-700 transform -translate-x-1/2"
                    />

                    {/* Interquartile Range (IQR Box) */}
                    <div
                      style={{
                        left: `${leftQ1}%`,
                        width: `${widthBox}%`
                      }}
                      className="absolute h-6 rounded-xs bg-indigo-500/80 border-2 border-indigo-700 z-10 flex items-center justify-center shadow-xs"
                    >
                      <span className="text-[10px] font-bold text-white drop-shadow-xs">
                        IQR: €{acc.iqr}
                      </span>
                    </div>

                    {/* Median Line */}
                    <div
                      style={{ left: `${leftMedian}%` }}
                      className="absolute h-8 w-1 bg-amber-400 z-20 transform -translate-x-1/2 shadow-xs"
                      title={`Mediana: €${acc.median}`}
                    />

                    {/* Outliers dots beyond upper whisker */}
                    {acc.max > acc.upperWhisker && (
                      <div
                        style={{ left: `${(acc.max / maxScale) * 100}%` }}
                        className="absolute w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white z-20 transform -translate-x-1/2"
                        title={`Outlier superior extremo: €${acc.max}`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Analytical Findings for Chart 3 */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Info className="w-4 h-4 text-indigo-600" />
            <span>Hallazgos e Insights de Decisión (Objetivo 3):</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Homogeneidad en la Mediana del Gasto:</strong> Sorprendentemente, la mediana del gasto diario es casi idéntica en todas las tipologías de hospedaje (fluctúa entre <strong>€98.56 en Casas Rurales</strong> y <strong>€101.01 en Hoteles</strong>).
          </p>
          <p className="leading-relaxed">
            • <strong>Dispersión y Valores Extremos:</strong> Aunque las medianas convergen en ~€100, la dispersión hacia arriba es notable en los <strong>Hoteles (con outliers de hasta €222.98 diarios)</strong> y <strong>Apartamentos (hasta €216.74 diarios)</strong>. Esto demuestra que los hoteles capturan a los viajeros prémium de alto poder adquisitivo, justificando la creación de paquetes de lujo con servicios complementarios (gastronomía, traslados privados).
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VISUALIZACIÓN 4: SATISFACCIÓN DEL CLIENTE POR PAÍS */}
      {/* ======================================================== */}
      <div id="vis-4" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
                Visualización 4
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Experiencia del Usuario y Calidad
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Satisfacción del Cliente por País (Distribución de Valoraciones 1 a 5)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Diagrama interactivo de cajas y desglose porcentual de puntuaciones en la escala Likert.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <span>Escala:</span>
            <span className="text-rose-600">1 (Mala)</span>
            <span>→</span>
            <span className="text-emerald-600">5 (Excelente)</span>
          </div>
        </div>

        {/* Country Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
          {countryRatingStats.map((c) => {
            const countryMeta = countryColors[c.pais] || { bg: 'bg-indigo-100', border: 'border-indigo-400', hex: '#6366f1', text: 'text-indigo-700' };
            const isSelected = selectedCountryRating === c.pais;

            return (
              <div
                key={c.pais}
                onClick={() => setSelectedCountryRating(isSelected ? null : c.pais)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-base">{c.pais}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${countryMeta.bg} ${countryMeta.text}`}>
                      {c.n.toLocaleString()} viajes
                    </span>
                  </div>

                  {/* Rating Big Stat */}
                  <div className="flex items-baseline gap-1 my-2">
                    <span className="text-3xl font-extrabold text-slate-900 font-mono">
                      {c.mean.toFixed(2)}
                    </span>
                    <span className="text-amber-500 font-bold text-lg">★</span>
                    <span className="text-xs text-slate-400 font-sans ml-1">promedio</span>
                  </div>

                  {/* Boxplot Stats details */}
                  <div className="text-[11px] font-mono text-slate-600 space-y-0.5 border-y border-slate-100 py-2 my-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Mediana (Q2):</span>
                      <strong className="text-indigo-700">{c.median} estrellas</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Rango Q1 - Q3:</span>
                      <span>2 - 4 estrellas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Gasto diario:</span>
                      <span>€{c.avgSpend.toFixed(1)}/día</span>
                    </div>
                  </div>
                </div>

                {/* Star Distribution Stack */}
                <div className="space-y-1 pt-2">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Desglose por Estrellas:
                  </div>
                  {c.distribucion.map((d) => (
                    <div key={d.estrellas} className="flex items-center gap-1.5 text-[10px]">
                      <span className="w-5 text-slate-500 font-mono">{d.estrellas}★</span>
                      <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          style={{ width: `${d.porcentaje * 2.5}%` }}
                          className={`h-full rounded-full ${
                            d.estrellas >= 4 ? 'bg-emerald-500' : d.estrellas === 3 ? 'bg-amber-400' : 'bg-rose-400'
                          }`}
                        />
                      </div>
                      <span className="w-8 text-right font-mono text-slate-600">{d.porcentaje}%</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytical Findings for Chart 4 */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Info className="w-4 h-4 text-indigo-600" />
            <span>Hallazgos e Insights de Decisión (Objetivo 4):</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Consistencia en la Satisfacción:</strong> <strong>Italia lidera levemente la satisfacción con un promedio de 3.04 ★</strong>, mientras que <strong>Reino Unido se sitúa en 2.95 ★</strong>, <strong>Francia en 2.97 ★</strong>, <strong>España en 2.99 ★</strong> y <strong>Alemania en 2.99 ★</strong>.
          </p>
          <p className="leading-relaxed">
            • <strong>Distribución Plana de Calificaciones:</strong> La mediana en los 5 países es exactamente de 3 estrellas con un rango intercuartílico de [2, 4]. Aproximadamente un 20% de los viajeros califica con 1 estrella y otro 20% con 5 estrellas, lo que refleja que la satisfacción del cliente depende más de factores puntuales de la experiencia de servicio (retrasos en transporte, calidad de atención) que del país de destino en sí.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VISUALIZACIÓN 5: DURACIÓN PROMEDIO DE ESTANCIA POR DESTINO */}
      {/* ======================================================== */}
      <div id="vis-5" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
                Visualización 5
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Patrones de Comportamiento Turístico
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Duración Promedio de Estancia por Destino (25 Ciudades Europeas)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Gráfico de barras comparativo de días promedio de permanencia por ciudad frente al promedio continental europeo ({generalKPIs.avgStay.toFixed(2)} días).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Scale toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
              <span className="text-slate-500 text-[11px] px-1 font-semibold">Escala:</span>
              <button
                onClick={() => setStayScaleMode('focused')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  stayScaleMode === 'focused' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
                title="Escala enfocada de 6.5 a 8.2 días para apreciar con claridad la diferencia entre destinos"
              >
                Enfocada (6.5 - 8.2 d)
              </button>
              <button
                onClick={() => setStayScaleMode('full')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  stayScaleMode === 'full' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
                title="Escala base cero de 0 a 10 días"
              >
                Base Cero (0 - 10 d)
              </button>
            </div>

            {/* Sort toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
              <span className="text-slate-500 text-[11px] px-1 font-semibold">Orden:</span>
              <button
                onClick={() => setSortStayBy('stay')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  sortStayBy === 'stay' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Mayor Estancia
              </button>
              <button
                onClick={() => setSortStayBy('name')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  sortStayBy === 'name' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Nombre A-Z
              </button>
            </div>
          </div>
        </div>

        {/* Global Benchmark Indicator and City Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 flex items-center gap-3 p-3 bg-indigo-50/60 rounded-lg border border-indigo-100 text-xs text-indigo-950">
            <Calendar className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <strong>Promedio Continental Exacto: {generalKPIs.avgStay.toFixed(2)} días</strong>.
              <span className="block text-slate-600 text-[11px] mt-0.5">
                Calculado a partir de la totalidad de los 10.000 viajes registrados en el dataset. Las barras en color representan ciudades con estancia superior al promedio europeo; las barras en gris identifican destinos con estancia menor.
              </span>
            </div>
          </div>

          <div className="flex items-center justify-around p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-center font-mono">
            <div>
              <span className="text-[10px] text-slate-500 uppercase block font-sans">Sobre promedio</span>
              <strong className="text-emerald-700 text-base">
                {citiesAnalytics.filter(c => c.avgStay >= generalKPIs.avgStay).length} ciudades
              </strong>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase block font-sans">Bajo promedio</span>
              <strong className="text-slate-600 text-base">
                {citiesAnalytics.filter(c => c.avgStay < generalKPIs.avgStay).length} ciudades
              </strong>
            </div>
          </div>
        </div>

        {/* Visual Chart with Y-Axis and Dedicated Plot Area */}
        {(() => {
          const avgEurope = generalKPIs.avgStay; // 7.47
          const minScale = stayScaleMode === 'focused' ? 6.5 : 0;
          const maxScale = stayScaleMode === 'focused' ? 8.2 : 10;
          const benchmarkBottomPercent = Math.max(0, Math.min(100, ((avgEurope - minScale) / (maxScale - minScale)) * 100));

          // Y-axis tick values
          const ticks = stayScaleMode === 'focused'
            ? [8.2, 8.0, 7.8, 7.5, 7.2, 7.0, 6.5]
            : [10, 8, 6, 4, 2, 0];

          return (
            <div className="pt-2 pb-2 overflow-x-auto">
              <div className="min-w-[860px]">
                {/* Chart Header Info */}
                <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono mb-2 px-10">
                  <span>Eje Y: Estancia Media (Días)</span>
                  <span className="text-rose-600 font-semibold">--- Línea roja: Benchmark Europa ({avgEurope.toFixed(2)} d)</span>
                </div>

                <div className="flex">
                  {/* Left Y-Axis labels */}
                  <div className="w-12 h-64 flex flex-col justify-between items-end pr-2 text-[10px] font-mono text-slate-400 select-none border-r border-slate-300">
                    {ticks.map((t) => (
                      <span key={t}>{t.toFixed(1)}d</span>
                    ))}
                  </div>

                  {/* Plot Canvas */}
                  <div className="flex-1 h-64 relative border-b border-slate-300 bg-slate-50/30">
                    {/* Background horizontal grid lines */}
                    {ticks.map((t) => {
                      const posPercent = ((t - minScale) / (maxScale - minScale)) * 100;
                      return (
                        <div
                          key={t}
                          style={{ bottom: `${posPercent}%` }}
                          className="absolute left-0 right-0 border-b border-dashed border-slate-200 pointer-events-none"
                        />
                      );
                    })}

                    {/* Benchmark line at exactly 7.47 days */}
                    <div
                      style={{ bottom: `${benchmarkBottomPercent}%` }}
                      className="absolute left-0 right-0 border-b-2 border-dashed border-rose-500 z-20 pointer-events-none flex items-center justify-end pr-2"
                    >
                      <span className="text-[10px] font-bold bg-rose-500 text-white px-2 py-0.5 rounded shadow-xs font-mono -translate-y-1/2">
                        Promedio Europa: {avgEurope.toFixed(2)} d
                      </span>
                    </div>

                    {/* Bars Container */}
                    <div className="absolute inset-0 flex items-end gap-1.5 sm:gap-2 px-2">
                      {sortedStayCities.map((c) => {
                        const barHeightPercent = Math.max(3, Math.min(100, ((c.avgStay - minScale) / (maxScale - minScale)) * 100));
                        const isAboveAvg = c.avgStay >= avgEurope;
                        const countryMeta = countryColors[c.pais] || { bg: 'bg-indigo-100', border: 'border-indigo-400', hex: '#6366f1', text: 'text-indigo-700' };

                        return (
                          <div
                            key={c.ciudad}
                            className="flex-1 flex flex-col items-center justify-end h-full group relative cursor-pointer"
                          >
                            {/* Hover Tooltip */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-16 z-30 bg-slate-900 text-white p-2.5 rounded-lg shadow-xl text-[11px] whitespace-nowrap pointer-events-none transform -translate-x-1/2 left-1/2">
                              <div className="font-bold flex items-center gap-1.5">
                                <span>{c.ciudad}</span>
                                <span className="text-slate-300 font-normal">({c.pais})</span>
                              </div>
                              <div className="text-slate-300 font-mono mt-0.5">
                                Estancia media: <strong className="text-white">{c.avgStay.toFixed(2)} días</strong>
                              </div>
                              <div className="text-[10px] font-mono mt-0.5">
                                {isAboveAvg ? (
                                  <span className="text-emerald-400 font-semibold">
                                    +{(c.avgStay - avgEurope).toFixed(2)} días sobre promedio europeo
                                  </span>
                                ) : (
                                  <span className="text-amber-400 font-semibold">
                                    -{(avgEurope - c.avgStay).toFixed(2)} días bajo promedio europeo
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Value Label above Bar */}
                            <span className={`text-[10px] font-mono font-bold mb-1 transition-colors ${
                              isAboveAvg ? 'text-slate-900' : 'text-slate-500'
                            }`}>
                              {c.avgStay.toFixed(2)}
                            </span>

                            {/* Bar Column */}
                            <div
                              style={{
                                height: `${barHeightPercent}%`,
                                backgroundColor: isAboveAvg ? countryMeta.hex : '#94a3b8'
                              }}
                              className={`w-full rounded-t-sm transition-all duration-300 group-hover:brightness-110 ${
                                isAboveAvg ? 'ring-1 ring-black/10' : 'opacity-85'
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* X-Axis City Labels Row */}
                <div className="flex ml-12 px-2 pt-2">
                  {sortedStayCities.map((c) => {
                    const isAboveAvg = c.avgStay >= avgEurope;
                    return (
                      <div key={c.ciudad} className="flex-1 h-20 flex items-start justify-center">
                        <span
                          className={`text-[10px] font-semibold whitespace-nowrap transform -rotate-45 origin-top-left transition-colors ${
                            isAboveAvg ? 'text-slate-900 font-bold' : 'text-slate-500'
                          }`}
                          title={`${c.ciudad} (${c.pais}): ${c.avgStay.toFixed(2)} días`}
                        >
                          {c.ciudad}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Analytical Findings for Chart 5 */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2.5">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Info className="w-4 h-4 text-indigo-600" />
            <span>Hallazgos e Insights Cuantitativos (Objetivo 5):</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Promedio Continental Real:</strong> La estancia promedio global de los 10.000 registros turísticos es exactamente de <strong>{generalKPIs.avgStay.toFixed(2)} días</strong>. En la gráfica se observa la dispersión entre el destino de máxima estancia (<strong>Venecia, 7.93 días</strong>) y el de menor estancia (<strong>Birmingham, 7.14 días</strong>).
          </p>
          <p className="leading-relaxed">
            • <strong>Destinos de Mayor Permanencia (Por encima de {generalKPIs.avgStay.toFixed(2)} días):</strong> Sobresalen <strong>Venecia (7.93 d)</strong>, <strong>Florencia (7.87 d)</strong>, <strong>Lyon (7.74 d)</strong>, <strong>Sevilla (7.73 d)</strong>, <strong>Niza (7.67 d)</strong>, <strong>Manchester (7.61 d)</strong>, <strong>Colonia (7.60 d)</strong> y <strong>Edimburgo (7.57 d)</strong>. Son plazas con alta oferta artística y regional idóneas para comercializar paquetes completos vacacionales de 8 a 14 días.
          </p>
          <p className="leading-relaxed">
            • <strong>Destinos de Menor Permanencia (Por debajo de {generalKPIs.avgStay.toFixed(2)} días):</strong> Ciudades como <strong>Birmingham (7.14 d)</strong>, <strong>Milán (7.20 d)</strong>, <strong>Madrid (7.25 d)</strong>, <strong>Londres (7.28 d)</strong>, <strong>Berlín (7.32 d)</strong> y <strong>Múnich (7.36 d)</strong> presentan estancias más reducidas, reflejando su perfil como grandes centros metropolitanos de negocios, congresos y escapadas cortas de fin de semana (<em>city breaks</em>) de 2 a 4 días.
          </p>
        </div>
      </div>
    </div>
  );
};
