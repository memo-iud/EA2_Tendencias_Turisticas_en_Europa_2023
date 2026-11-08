import React from 'react';
import { Target, TrendingUp, Award, Compass, DollarSign, Users, AlertTriangle, Lightbulb, CheckSquare } from 'lucide-react';
import { transportDistribution, purposeDistribution } from '../data/processedTourismData';

export const BusinessInsightsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Executive Intro */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Target className="w-4 h-4" />
          <span>Toma de Decisiones Estratégicas</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Recomendaciones y Plan de Acción para la Agencia de Turismo
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 max-w-4xl">
          A partir de los 6 cuadros de visualización analítica desarrollados, se sintetizan las decisiones gerenciales más rentables para optimizar la oferta turística, incrementar el ticket promedio por viajero y fidelizar clientes en el mercado europeo durante el período 2026–2027.
        </p>

        {/* Transport & Purpose mini-stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-600" />
              Preferencia de Medios de Transporte
            </h4>
            <div className="space-y-1.5 text-xs">
              {transportDistribution.map((t) => (
                <div key={t.tipo} className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium">{t.tipo}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-900">{t.conteo.toLocaleString()}</span>
                    <span className="text-slate-400 font-mono text-[11px]">({t.porcentaje}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              Motivo Principal de Viaje
            </h4>
            <div className="space-y-1.5 text-xs">
              {purposeDistribution.map((p) => (
                <div key={p.motivo} className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium">{p.motivo}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-900">{p.conteo.toLocaleString()}</span>
                    <span className="text-slate-400 font-mono text-[11px]">({p.porcentaje}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Estrategia de Desestacionalización Dinámica
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Los meses de <strong>Febrero (759 viajes)</strong> y <strong>Septiembre (780 viajes)</strong> registran caídas de demanda de hasta un 13% respecto al pico de Abril (869 viajes).
            </p>
            <div className="p-3 bg-indigo-50/50 rounded-lg text-xs text-indigo-900 space-y-1 border border-indigo-100">
              <strong className="block font-semibold">Acción Inmediata:</strong>
              <p>Lanzar campañas "Early Bird" y paquetes temáticos (gastronomía en vendimias de septiembre, escapadas de carnaval en febrero) con tarifas dinámicas descontadas.</p>
            </div>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Upselling en Hoteles y Apartamentos Prémium
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              El análisis de dispersión reveló que los hoteles y apartamentos concentran el 71% del volumen total de hospedajes y capturan a los viajeros de alto gasto (€180 - €223/día).
            </p>
            <div className="p-3 bg-emerald-50/50 rounded-lg text-xs text-emerald-900 space-y-1 border border-emerald-100">
              <strong className="block font-semibold">Acción Inmediata:</strong>
              <p>Estructurar paquetes VIP con servicios de valor agregado: tours privados, traslados en Mercedes/Tesla y reservas preferentes en restaurantes Michelin.</p>
            </div>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-amber-300 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Rutas Multidestino por Tren de Alta Velocidad
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              La cercanía geográfica entre destinos de alto volumen como Lyon, Marsella, Burdeos y París (Francia) o Florencia, Roma y Nápoles (Italia) permite crear corredores terrestres sostenibles.
            </p>
            <div className="p-3 bg-amber-50/50 rounded-lg text-xs text-amber-900 space-y-1 border border-amber-100">
              <strong className="block font-semibold">Acción Inmediata:</strong>
              <p>Alianzas con operadores ferroviarios (Renfe, SNCF, Trenitalia, Eurostar) para comercializar pases interurbanos "Grand Tour Europa" de 10 a 14 días.</p>
            </div>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold">
              04
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Plan de Choque para Calificaciones de 1 y 2 Estrellas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Un 40% acumulado de valoraciones en los 5 países se encuentra entre 1 y 2 estrellas, revelando puntos de fricción graves en la experiencia del viajero (overbooking, retrasos).
            </p>
            <div className="p-3 bg-rose-50/50 rounded-lg text-xs text-rose-900 space-y-1 border border-rose-100">
              <strong className="block font-semibold">Acción Inmediata:</strong>
              <p>Implementar encuestas automáticas post-check-in vía WhatsApp y un protocolo de compensación instantánea para mitigar quejas antes de la reseña pública.</p>
            </div>
          </div>
        </div>

        {/* Pillar 5 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-purple-300 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 font-bold">
              05
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Segmentación por Duración de Estancia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ciudades como Birmingham (7.14 d), Milán (7.20 d) o Madrid (7.25 d) se comportan predominantemente como destinos de escapada breve (2-4 días), mientras que Venecia (7.93 d), Florencia (7.87 d), Lyon (7.74 d) y Sevilla (7.73 d) superan el promedio continental de 7.47 días.
            </p>
            <div className="p-3 bg-purple-50/50 rounded-lg text-xs text-purple-900 space-y-1 border border-purple-100">
              <strong className="block font-semibold">Acción Inmediata:</strong>
              <p>Segmentar el catálogo en dos líneas claras: <em>"City Breaks de Fin de Semana"</em> (3 días con transporte incluido) y <em>"Vacaciones Inmersivas"</em> (10 a 14 días con alquiler de vehículo y casa rural).</p>
            </div>
          </div>
        </div>

        {/* Pillar 6 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">
              06
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Adopción Tecnológica y Cuadro de Mando en Producción
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              La selección de Python, Plotly y Folium dota a la empresa de una solución analítica propia sin incurrir en cuotas recurrentes de software propietario por cada agente.
            </p>
            <div className="p-3 bg-blue-50/50 rounded-lg text-xs text-blue-900 space-y-1 border border-blue-100">
              <strong className="block font-semibold">Acción Inmediata:</strong>
              <p>Desplegar este tablero interactivo en la intranet de la agencia para que el equipo comercial consulte métricas en tiempo real durante la cotización a clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
