import React from 'react';
import { BookOpen, GraduationCap, Award, ExternalLink } from 'lucide-react';

export const ReportFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Top Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Institución Universitaria Digital de Antioquia</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Facultad de Ingeniería y Ciencias Aplicadas.<br />
              Programa de <strong>Ingeniería de Software y Datos</strong>.<br />
              Asignatura: <em>Visualización para Toma de Decisiones</em>.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>Evidencia de Aprendizaje EA2</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              <strong>Caso de Estudio:</strong> Análisis de tendencias turísticas en Europa 2023.<br />
              <strong>Autores:</strong> Guillermo León Loaiza Mesa y Jaider Morales Bautista<br />
              <strong>Correo institucional:</strong> guillermo.loaiza@est.iudigital.edu.co<br />
              <strong>Período Académico:</strong> 2026-2 | <strong>Ponderación:</strong> 20%
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Ecosistema de Visualización Empleado</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Python 3.10+ (Pandas, Plotly Express, Folium, Leaflet.js, Seaborn, Matplotlib) junto con cuadro de mando web interactivo de alta fidelidad basado en estándares de la Unidad 2.
            </p>
          </div>
        </div>

        {/* References / Bibliografía de la Unidad 2 */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">
            Bibliografía y Referencias de la Unidad 2 (IU Digital de Antioquia)
          </h4>
          <ul className="space-y-1.5 text-slate-400 text-[11px] leading-relaxed">
            <li>
              • <strong>Emilio, N. (s. f.).</strong> <em>¿Qué es un Cuadro de Mando operativo (CMO) y cómo crearlo en 5 pasos?</em> Blog Bismart.
            </li>
            <li>
              • <strong>McKinney, W. (2023).</strong> <em>Python para análisis de datos: manipulación de datos con pandas, NumPy y Jupyter.</em> O'Reilly Media.
            </li>
            <li>
              • <strong>IU Digital de Antioquia (2025).</strong> <em>Unidad 2: Herramientas de visualización. Cuadros de mandos, librerías de visualización y visualizaciones con mapas.</em> Medellín, Colombia.
            </li>
            <li>
              • <strong>Olivares, C. (2021).</strong> <em>Cómo hacer un mapa coroplético interactivo en Python y Folium.</em>
            </li>
            <li>
              • <strong>Toscano, D. (2023).</strong> <em>Crear un DASHBOARD con POWER BI y análisis de datos.</em>
            </li>
            <li>
              • <strong>Código Máquina (2021).</strong> <em>Visualización de Datos usando Matplotlib de Python: Curso introductorio a la creación de gráficas.</em>
            </li>
          </ul>
        </div>

        {/* Bottom copyright / Creative Commons */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            Esta obra está bajo una Licencia Creative Commons Atribución-NoComercial (CC BY-NC) de la IU Digital de Antioquia.
          </div>
          <div className="font-mono">
            Versión Académica Final • Noviembre 2026
          </div>
        </div>
      </div>
    </footer>
  );
};
