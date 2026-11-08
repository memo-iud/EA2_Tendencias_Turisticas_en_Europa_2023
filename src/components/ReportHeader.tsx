import React from 'react';
import { generalKPIs } from '../data/processedTourismData';
import { Calendar, Compass, DollarSign, MapPin, Star, Users, Award, BookOpen, Printer, Download } from 'lucide-react';

interface ReportHeaderProps {
  onPrint: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ReportHeader: React.FC<ReportHeaderProps> = ({ onPrint, activeTab, setActiveTab }) => {
  return (
    <header className="bg-white border-b border-slate-200">
      {/* Top Academic Banner */}
      <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold tracking-wide">Institución Universitaria Digital de Antioquia (IU Digital)</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Ingeniería de Software y Datos</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Asignatura: <strong className="text-white">Visualización para Toma de Decisiones</strong></span>
            <span className="text-slate-500">•</span>
            <span>Unidad 2: <strong className="text-emerald-300">Actividad Evaluativa 2</strong></span>
          </div>
        </div>
      </div>

      {/* Main Header / Institutional Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <BookOpen className="w-3.5 h-3.5" />
                Informe Académico y Cuadro de Mando
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Award className="w-3.5 h-3.5" />
                Caso de Estudio: Tendencias Turísticas Europa 2023
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                Dataset: 10.000 Registros
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Análisis y Visualización de Tendencias Turísticas en Europa 2023 para la Toma de Decisiones
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Investigación comparativa de herramientas de Business Intelligence y Ciencia de Datos (Power BI, Tableau, Python con Plotly y Folium), selección y justificación metodológica por objetivo, implementación interactiva de los 6 cuadros de visualización e informe técnico con recomendaciones estratégicas para agencias de turismo.
            </p>

            {/* Author and Metadata Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800">Autores:</span>
                <span className="text-indigo-900 font-semibold">Guillermo León Loaiza Mesa</span>
                <span className="text-slate-400">•</span>
                <span className="text-indigo-900 font-semibold">Jaider Morales Bautista</span>
                <span className="font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">guillermo.loaiza@est.iudigital.edu.co</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800">Período Académico:</span>
                <span className="font-medium text-slate-900 bg-slate-100 px-2 py-0.5 rounded">2026-2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800">Ponderación:</span>
                <span className="font-medium text-amber-700">20% (Semanas 4 y 5)</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
            <button
              onClick={onPrint}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors cursor-pointer"
              title="Formato listo para exportar a PDF o imprimir"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Exportar PDF</span>
            </button>
            <a
              href="/public/assets/aistudio/DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE_8750a031.csv"
              download="DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE.csv"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar CSV Original</span>
            </a>
          </div>
        </div>

        {/* Global Executive KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Total Viajes</span>
              <Users className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              {generalKPIs.totalTrips.toLocaleString('es-CO')}
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">Europa 2023 completo</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Destinos</span>
              <MapPin className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              25 <span className="text-xs text-slate-500 font-sans">ciudades</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">5 países clave</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Gasto Diario</span>
              <DollarSign className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              €{generalKPIs.avgSpend.toFixed(2)}
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">Mediana global: €100.1</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Estancia Media</span>
              <Calendar className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              {generalKPIs.avgStay.toFixed(1)} <span className="text-xs text-slate-500 font-sans">días</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">Rango: 2 a 14 días</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Satisfacción</span>
              <Star className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              {generalKPIs.avgRating.toFixed(2)} <span className="text-xs text-slate-500 font-sans">/ 5</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">Escala Likert de 1 a 5</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Volumen Estimado</span>
              <Compass className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              €{(generalKPIs.totalRevenue / 1000000).toFixed(2)}M
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">Impacto económico bruto</p>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-slate-100 border-t border-slate-200 px-4 sm:px-6 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto py-2">
          <nav className="flex space-x-1 sm:space-x-2">
            {[
              { id: 'informe', label: '1. Informe Teórico & Justificación' },
              { id: 'visualizaciones', label: '2. Cuadro de Visualizaciones (6 Objetivos)' },
              { id: 'mapa', label: '3. Mapa Geoespacial Interactivo' },
              { id: 'codigo', label: '4. Scripts Python Reproducibles' },
              { id: 'insights', label: '5. Decisiones Estratégicas' },
              { id: 'dataset', label: '6. Explorador de Datos (10K)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
