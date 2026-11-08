import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { citiesAnalytics, CityData } from '../data/processedTourismData';
import { Globe, MapPin, ZoomIn, ZoomOut, Filter, Info, Compass, Calendar, DollarSign, Star } from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const [selectedCountry, setSelectedCountry] = useState<string>('Todos');
  const [sizeBy, setSizeBy] = useState<'stay' | 'count' | 'spend'>('stay');
  const [activeCity, setActiveCity] = useState<CityData | null>(citiesAnalytics[0]);

  // Country color mapping
  const countryStyles: Record<string, { hex: string; bg: string; text: string }> = {
    Francia: { hex: '#3b82f6', bg: 'bg-blue-100', text: 'text-blue-800' },
    España: { hex: '#f59e0b', bg: 'bg-amber-100', text: 'text-amber-800' },
    Alemania: { hex: '#10b981', bg: 'bg-emerald-100', text: 'text-emerald-800' },
    'Reino Unido': { hex: '#6366f1', bg: 'bg-indigo-100', text: 'text-indigo-800' },
    Italia: { hex: '#f43f5e', bg: 'bg-rose-100', text: 'text-rose-800' }
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Create map centered in Central Europe
      const map = L.map(mapContainerRef.current, {
        center: [48.0, 5.0],
        zoom: 5,
        zoomControl: false,
        attributionControl: true
      });

      // CartoDB Voyager TileLayer - clean, modern, high aesthetic
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
        maxZoom: 18,
        minZoom: 3
      }).addTo(map);

      // Add custom zoom control in bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      markersLayerRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }

    return () => {
      // Cleanup on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers whenever filters or sizing mode change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layer = markersLayerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    const filtered = citiesAnalytics.filter(
      (c) => selectedCountry === 'Todos' || c.pais === selectedCountry
    );

    filtered.forEach((city) => {
      const countryMeta = countryStyles[city.pais] || { hex: '#6366f1' };

      // Compute radius based on chosen dimension
      let radius = 12;
      if (sizeBy === 'stay') {
        // Average stay ranges from ~7.7 to ~8.3 -> amplify difference for visual impact
        radius = Math.max(8, Math.round((city.avgStay - 7.5) * 20 + 8));
      } else if (sizeBy === 'count') {
        // City count ranges from ~360 to ~467
        radius = Math.max(8, Math.round(((city.count - 350) / 120) * 16 + 8));
      } else if (sizeBy === 'spend') {
        radius = Math.max(8, Math.round(((city.avgSpend - 95) / 10) * 10 + 10));
      }

      const marker = L.circleMarker([city.latitud, city.longitud], {
        radius: radius,
        fillColor: countryMeta.hex,
        color: '#ffffff',
        weight: 2,
        opacity: 0.95,
        fillOpacity: 0.75
      });

      // Tooltip / Popup
      const popupContent = `
        <div style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif; min-width: 180px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <strong style="font-size: 14px; color: #0f172a;">${city.ciudad}</strong>
            <span style="font-size: 10px; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; color: #475569;">${city.pais}</span>
          </div>
          <div style="font-size: 11px; color: #475569; line-height: 1.5;">
            <div><strong>Viajes totales:</strong> ${city.count}</div>
            <div><strong>Estancia promedio:</strong> ${city.avgStay} días</div>
            <div><strong>Gasto diario medio:</strong> €${city.avgSpend.toFixed(2)}</div>
            <div><strong>Valoración:</strong> ${city.avgRating.toFixed(2)} ★</div>
            <div style="margin-top: 4px; font-size: 10px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 4px;">
              Top Alojamiento: <strong>${city.topAlojamiento}</strong>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('click', () => {
        setActiveCity(city);
      });

      layer.addLayer(marker);
    });
  }, [selectedCountry, sizeBy]);

  const handleFlyTo = (city: CityData) => {
    setActiveCity(city);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([city.latitud, city.longitud], 8, { duration: 1.2 });
    }
  };

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([48.0, 5.0], 5, { duration: 1.2 });
    }
  };

  return (
    <div id="vis-6" className="space-y-6">
      {/* Title & Controls Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
                Visualización 6
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Análisis Geoespacial y Cartografía
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Distribución Geográfica de los Viajes en Europa 2023
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Mapa interactivo con georreferenciación de coordenadas (latitud/longitud), color por país y radio proporcional a la duración de estancia o métrica analítica.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Country filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Filter className="w-3.5 h-3.5 text-indigo-600" />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 font-medium focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Todos">Todos los Países (5)</option>
                <option value="Francia">Francia (5 ciudades)</option>
                <option value="España">España (5 ciudades)</option>
                <option value="Alemania">Alemania (5 ciudades)</option>
                <option value="Reino Unido">Reino Unido (5 ciudades)</option>
                <option value="Italia">Italia (5 ciudades)</option>
              </select>
            </div>

            {/* Sizing toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
              <span className="text-slate-400 px-1 text-[11px]">Radio por:</span>
              <button
                onClick={() => setSizeBy('stay')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  sizeBy === 'stay' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Duración Estancia
              </button>
              <button
                onClick={() => setSizeBy('count')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  sizeBy === 'count' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Total Viajes
              </button>
              <button
                onClick={() => setSizeBy('spend')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  sizeBy === 'spend' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Gasto Diario
              </button>
            </div>

            <button
              onClick={handleResetView}
              className="px-2.5 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-300 transition-colors"
            >
              Resetear Vista
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-500 font-semibold">Código cromático por país:</span>
            {Object.entries(countryStyles).map(([pais, style]) => (
              <span key={pais} className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: style.hex }}></span>
                <span className="text-slate-700">{pais}</span>
              </span>
            ))}
          </div>
          <div className="text-[11px] text-slate-500 font-mono">
            Mostrando: <strong>{citiesAnalytics.filter(c => selectedCountry === 'Todos' || c.pais === selectedCountry).length} ciudades</strong>
          </div>
        </div>

        {/* Map Layout Grid: Map Canvas + City Inspector Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pt-4">
          {/* Map Canvas (3 cols) */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-slate-300 relative h-[520px] shadow-inner">
            <div ref={mapContainerRef} className="w-full h-full z-0" />

            {/* Floating Map Overlay Info Badge */}
            <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200 shadow-sm text-xs pointer-events-none max-w-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-600" />
                <span>Geolocalización en Europa</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Haz clic en cualquier punto para enfocar la ciudad y ver sus estadísticas de viaje.
              </p>
            </div>
          </div>

          {/* Active City Inspector Drawer (1 col) */}
          <div className="lg:col-span-1 bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
            {activeCity ? (
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold text-indigo-600">
                      Detalle del Destino
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${countryStyles[activeCity.pais]?.bg} ${countryStyles[activeCity.pais]?.text}`}>
                      {activeCity.pais}
                    </span>
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 mt-1">{activeCity.ciudad}</h4>
                  <div className="font-mono text-[11px] text-slate-400">
                    {activeCity.latitud.toFixed(4)}° N, {activeCity.longitud.toFixed(4)}° E
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500" /> Total Viajes:
                    </span>
                    <span className="font-mono font-bold text-slate-900">{activeCity.count}</span>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" /> Estancia Media:
                    </span>
                    <span className="font-mono font-bold text-slate-900">{activeCity.avgStay} días</span>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-500" /> Gasto Diario:
                    </span>
                    <span className="font-mono font-bold text-slate-900">€{activeCity.avgSpend.toFixed(2)}</span>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-500" /> Satisfacción:
                    </span>
                    <span className="font-mono font-bold text-amber-600">{activeCity.avgRating.toFixed(2)} ★</span>
                  </div>
                </div>

                {/* Segmentation Preferences */}
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-2">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Alojamiento Predilecto</span>
                    <span className="font-semibold text-slate-800">{activeCity.topAlojamiento}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Motivo de Viaje Frecuente</span>
                    <span className="font-semibold text-slate-800">{activeCity.topMotivo}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleFlyTo(activeCity)}
                  className="w-full py-2 px-3 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Centrar Mapa en {activeCity.ciudad}
                </button>
              </div>
            ) : (
              <div className="text-center py-10 text-slate-400 text-xs">
                Selecciona una ciudad en el mapa
              </div>
            )}

            {/* Quick List of Top 5 destinations */}
            <div className="pt-4 border-t border-slate-200 mt-4">
              <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                Accesos Directos a Ciudades:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {citiesAnalytics.slice(0, 8).map((c) => (
                  <button
                    key={c.ciudad}
                    onClick={() => handleFlyTo(c)}
                    className="text-[10px] px-2 py-1 rounded bg-white hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 font-medium transition-colors cursor-pointer"
                  >
                    {c.ciudad}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytical Findings for Chart 6 */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Info className="w-4 h-4 text-indigo-600" />
            <span>Hallazgos e Insights de Decisión (Objetivo 6):</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Corredor Turístico Transversal:</strong> La representación geoespacial confirma la existencia de clusters consolidados: el eje atlántico-francés (París, Burdeos, Lyon), el corredor mediterráneo español e italiano (Barcelona, Valencia, Málaga, Nápoles, Roma, Florencia) y el eje industrial-cultural centroeuropeo (Frankfurt, Múnich, Berlín, Hamburgo).
          </p>
          <p className="leading-relaxed">
            • <strong>Implicaciones de Transporte y Logística:</strong> La cercanía entre destinos como Lyon-Marsella-Niza o Florencia-Roma-Venecia ofrece una oportunidad directa para que la agencia diseñe <em>circuitos combinados por tren de alta velocidad</em>, capitalizando que el tren es uno de los medios preferidos de transporte con menor huella de carbono.
          </p>
        </div>
      </div>
    </div>
  );
};
