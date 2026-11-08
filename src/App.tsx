import React, { useState } from 'react';
import { ReportHeader } from './components/ReportHeader';
import { ToolComparisonSection } from './components/ToolComparisonSection';
import { VisualizationsSection } from './components/VisualizationsSection';
import { InteractiveMap } from './components/InteractiveMap';
import { PythonCodeSection } from './components/PythonCodeSection';
import { BusinessInsightsSection } from './components/BusinessInsightsSection';
import { DatasetExplorer } from './components/DatasetExplorer';
import { ReportFooter } from './components/ReportFooter';
import { FileText, BarChart3, Globe, Code, Target, Database, Eye, Printer, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('informe');
  const [fullDocumentMode, setFullDocumentMode] = useState<boolean>(false);

  const handlePrint = () => {
    setFullDocumentMode(true);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Academic Header */}
      <ReportHeader
        onPrint={handlePrint}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setFullDocumentMode(false);
          setActiveTab(tab);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* View Mode Toggle Banner (No print) */}
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-700">
            <span className="font-semibold">Modo de Visualización:</span>
            <span className="text-slate-500">
              {fullDocumentMode
                ? 'Documento Completo Continuo (Formato Informe Académico)'
                : 'Navegación Interactiva por Módulos'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFullDocumentMode(!fullDocumentMode)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                fullDocumentMode
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{fullDocumentMode ? 'Volver a Pestañas' : 'Ver Todo en Modo Documento'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-800 hover:bg-slate-900 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>

        {/* Content Rendering */}
        {fullDocumentMode ? (
          // FULL ACADEMIC DOCUMENT MODE (Prints or displays all sections sequentially)
          <div className="space-y-16">
            <section className="print-break-inside-avoid">
              <ToolComparisonSection />
            </section>

            <section className="print-page-break">
              <VisualizationsSection />
            </section>

            <section className="print-page-break">
              <InteractiveMap />
            </section>

            <section className="print-page-break">
              <BusinessInsightsSection />
            </section>

            <section className="print-page-break">
              <PythonCodeSection />
            </section>

            <section className="print-page-break">
              <DatasetExplorer />
            </section>
          </div>
        ) : (
          // TABBED INTERACTIVE MODE
          <div>
            {activeTab === 'informe' && <ToolComparisonSection />}
            {activeTab === 'visualizaciones' && <VisualizationsSection />}
            {activeTab === 'mapa' && <InteractiveMap />}
            {activeTab === 'codigo' && <PythonCodeSection />}
            {activeTab === 'insights' && <BusinessInsightsSection />}
            {activeTab === 'dataset' && <DatasetExplorer />}
          </div>
        )}
      </main>

      {/* Institutional Academic Footer */}
      <ReportFooter />
    </div>
  );
}
