import React, { useState } from 'react';
import { sampleDataset, TourismRecord } from '../data/processedTourismData';
import { Database, Search, Filter, Download, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

export const DatasetExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [countryFilter, setCountryFilter] = useState<string>('Todos');
  const [accommFilter, setAccommFilter] = useState<string>('Todos');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 12;

  // Filter sample records
  const filtered = sampleDataset.filter((r) => {
    const matchesSearch =
      r.ciudad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.pais.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.transporte.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.motivo_viaje.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCountry = countryFilter === 'Todos' || r.pais === countryFilter;
    const matchesAccomm = accommFilter === 'Todos' || r.tipo_alojamiento === accommFilter;

    return matchesSearch && matchesCountry && matchesAccomm;
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
              Datos Abiertos
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Explorador Tabular
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Explorador Interactivo del Dataset (Muestra de 10.000 Registros)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Inspecciona las variables del archivo <code>DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE_8750a031.csv</code> con filtros dinámicos.
          </p>
        </div>

        <a
          href="/public/assets/aistudio/DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE_8750a031.csv"
          download="DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE.csv"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Descargar Dataset Completo (10K CSV)</span>
        </a>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            placeholder="Buscar por ciudad, país, motivo..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <select
            value={countryFilter}
            onChange={(e) => { setCountryFilter(e.target.value); setCurrentPage(1); }}
            className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Todos">Filtrar por País: Todos</option>
            <option value="Francia">Francia</option>
            <option value="España">España</option>
            <option value="Alemania">Alemania</option>
            <option value="Reino Unido">Reino Unido</option>
            <option value="Italia">Italia</option>
          </select>
        </div>

        <div>
          <select
            value={accommFilter}
            onChange={(e) => { setAccommFilter(e.target.value); setCurrentPage(1); }}
            className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Todos">Filtrar por Alojamiento: Todos</option>
            <option value="Hotel">Hotel</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Hostal">Hostal</option>
            <option value="Casa rural">Casa rural</option>
            <option value="Albergue">Albergue</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left text-xs divide-y divide-slate-200">
          <thead className="bg-slate-50 text-slate-700 font-semibold font-mono">
            <tr>
              <th className="py-2.5 px-3">Fecha</th>
              <th className="py-2.5 px-3">País</th>
              <th className="py-2.5 px-3">Ciudad</th>
              <th className="py-2.5 px-3">Alojamiento</th>
              <th className="py-2.5 px-3 text-right">Estancia (Días)</th>
              <th className="py-2.5 px-3 text-right">Gasto Diario (€)</th>
              <th className="py-2.5 px-3 text-center">Valoración</th>
              <th className="py-2.5 px-3">Transporte</th>
              <th className="py-2.5 px-3">Motivo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-600">
            {paginated.length > 0 ? (
              paginated.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-2 px-3 font-mono text-[11px] text-slate-500">{r.fecha}</td>
                  <td className="py-2 px-3 font-semibold text-slate-800">{r.pais}</td>
                  <td className="py-2 px-3 text-slate-900 font-medium">{r.ciudad}</td>
                  <td className="py-2 px-3">{r.tipo_alojamiento}</td>
                  <td className="py-2 px-3 text-right font-mono">{r.duracion_estancia} d</td>
                  <td className="py-2 px-3 text-right font-mono font-medium text-slate-900">€{r.gasto_diario.toFixed(2)}</td>
                  <td className="py-2 px-3 text-center">
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded font-mono font-bold text-[11px] bg-amber-50 text-amber-800 border border-amber-200">
                      {r.valoracion} ★
                    </span>
                  </td>
                  <td className="py-2 px-3">{r.transporte}</td>
                  <td className="py-2 px-3">{r.motivo_viaje}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="py-8 text-center text-slate-400">
                  No se encontraron registros que coincidan con los filtros.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
        <div>
          Mostrando página <strong className="text-slate-800">{currentPage}</strong> de <strong className="text-slate-800">{totalPages || 1}</strong> ({filtered.length} registros filtrados de muestra)
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
