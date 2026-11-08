/**
 * Precalculated analytics and dataset aggregations from DOC03_Datos_U2_IDSD_VIS_TOM_DEC_542_CE_8750a031.csv
 * 10,000 tourism trip records in Europe during 2023.
 */

export interface MonthlyTripData {
  mesNum: number;
  nombre: string;
  abrev: string;
  viajes: number;
  avgSpend: number;
  avgStay: number;
  avgRating: number;
  temporada: "Alta" | "Media" | "Baja";
}

export interface CityData {
  ciudad: string;
  pais: string;
  latitud: number;
  longitud: number;
  count: number;
  avgStay: number;
  avgSpend: number;
  avgRating: number;
  ratingDist: number[];
  topAlojamiento: string;
  topMotivo: string;
}

export interface BoxplotStats {
  tipo?: string;
  pais?: string;
  n: number;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  iqr: number;
  lowerWhisker: number;
  upperWhisker: number;
  mean: number;
  outliersCount: number;
}

export interface CountryRatingData extends BoxplotStats {
  pais: string;
  avgStay: number;
  avgSpend: number;
  distribucion: { estrellas: number; conteo: number; porcentaje: number }[];
}

export interface TourismRecord {
  fecha: string;
  mes: number;
  pais: string;
  ciudad: string;
  latitud: number;
  longitud: number;
  tipo_alojamiento: string;
  duracion_estancia: number;
  gasto_diario: number;
  valoracion: number;
  transporte: string;
  motivo_viaje: string;
}

export const generalKPIs = {
  "totalTrips": 10000,
  "totalDays": 74733,
  "avgStay": 7.47,
  "avgSpend": 100.07,
  "avgRating": 2.99,
  "totalRevenue": 7472923.48
};

export const monthlyTripStats: MonthlyTripData[] = [
  {
    "mesNum": 1,
    "nombre": "Enero",
    "abrev": "Ene",
    "viajes": 863,
    "avgSpend": 98.47,
    "avgStay": 7.5,
    "avgRating": 3,
    "temporada": "Alta"
  },
  {
    "mesNum": 2,
    "nombre": "Febrero",
    "abrev": "Feb",
    "viajes": 759,
    "avgSpend": 101.44,
    "avgStay": 7.62,
    "avgRating": 2.98,
    "temporada": "Baja"
  },
  {
    "mesNum": 3,
    "nombre": "Marzo",
    "abrev": "Mar",
    "viajes": 826,
    "avgSpend": 99.7,
    "avgStay": 7.37,
    "avgRating": 2.99,
    "temporada": "Media"
  },
  {
    "mesNum": 4,
    "nombre": "Abril",
    "abrev": "Abr",
    "viajes": 869,
    "avgSpend": 99.76,
    "avgStay": 7.53,
    "avgRating": 2.94,
    "temporada": "Alta"
  },
  {
    "mesNum": 5,
    "nombre": "Mayo",
    "abrev": "May",
    "viajes": 866,
    "avgSpend": 100,
    "avgStay": 7.58,
    "avgRating": 2.97,
    "temporada": "Alta"
  },
  {
    "mesNum": 6,
    "nombre": "Junio",
    "abrev": "Jun",
    "viajes": 842,
    "avgSpend": 100.42,
    "avgStay": 7.24,
    "avgRating": 3,
    "temporada": "Media"
  },
  {
    "mesNum": 7,
    "nombre": "Julio",
    "abrev": "Jul",
    "viajes": 841,
    "avgSpend": 98.58,
    "avgStay": 7.78,
    "avgRating": 2.96,
    "temporada": "Media"
  },
  {
    "mesNum": 8,
    "nombre": "Agosto",
    "abrev": "Ago",
    "viajes": 858,
    "avgSpend": 100.84,
    "avgStay": 7.48,
    "avgRating": 3.01,
    "temporada": "Alta"
  },
  {
    "mesNum": 9,
    "nombre": "Septiembre",
    "abrev": "Sep",
    "viajes": 780,
    "avgSpend": 101.38,
    "avgStay": 7.47,
    "avgRating": 3.05,
    "temporada": "Baja"
  },
  {
    "mesNum": 10,
    "nombre": "Octubre",
    "abrev": "Oct",
    "viajes": 840,
    "avgSpend": 99.85,
    "avgStay": 7.32,
    "avgRating": 2.95,
    "temporada": "Media"
  },
  {
    "mesNum": 11,
    "nombre": "Noviembre",
    "abrev": "Nov",
    "viajes": 842,
    "avgSpend": 100.73,
    "avgStay": 7.36,
    "avgRating": 3,
    "temporada": "Media"
  },
  {
    "mesNum": 12,
    "nombre": "Diciembre",
    "abrev": "Dic",
    "viajes": 814,
    "avgSpend": 99.94,
    "avgStay": 7.44,
    "avgRating": 3.01,
    "temporada": "Media"
  }
];

export const citiesAnalytics: CityData[] = [
  {
    "ciudad": "Burdeos",
    "pais": "Francia",
    "latitud": 44.8378,
    "longitud": -0.5792,
    "count": 467,
    "avgStay": 7.44,
    "avgSpend": 100.47,
    "avgRating": 2.99,
    "ratingDist": [
      102,
      82,
      102,
      83,
      98
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Liverpool",
    "pais": "Reino Unido",
    "latitud": 53.4084,
    "longitud": -2.9916,
    "count": 432,
    "avgStay": 7.34,
    "avgSpend": 100.7,
    "avgRating": 3,
    "ratingDist": [
      90,
      78,
      86,
      96,
      82
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Florencia",
    "pais": "Italia",
    "latitud": 43.7696,
    "longitud": 11.2558,
    "count": 425,
    "avgStay": 7.87,
    "avgSpend": 102.89,
    "avgRating": 3.05,
    "ratingDist": [
      79,
      88,
      77,
      94,
      87
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Frankfurt",
    "pais": "Alemania",
    "latitud": 50.1109,
    "longitud": 8.6821,
    "count": 422,
    "avgStay": 7.39,
    "avgSpend": 97.37,
    "avgRating": 3.13,
    "ratingDist": [
      74,
      82,
      79,
      91,
      96
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Madrid",
    "pais": "España",
    "latitud": 40.4168,
    "longitud": -3.7038,
    "count": 412,
    "avgStay": 7.25,
    "avgSpend": 97.9,
    "avgRating": 3.06,
    "ratingDist": [
      71,
      84,
      84,
      95,
      78
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "París",
    "pais": "Francia",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "count": 410,
    "avgStay": 7.5,
    "avgSpend": 102.9,
    "avgRating": 2.98,
    "ratingDist": [
      94,
      76,
      67,
      89,
      84
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Marsella",
    "pais": "Francia",
    "latitud": 43.2965,
    "longitud": 5.3698,
    "count": 409,
    "avgStay": 7.38,
    "avgSpend": 97.25,
    "avgRating": 2.93,
    "ratingDist": [
      90,
      82,
      79,
      82,
      76
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Valencia",
    "pais": "España",
    "latitud": 39.4699,
    "longitud": -0.3763,
    "count": 409,
    "avgStay": 7.38,
    "avgSpend": 99.89,
    "avgRating": 3.05,
    "ratingDist": [
      76,
      84,
      80,
      82,
      87
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Berlín",
    "pais": "Alemania",
    "latitud": 52.52,
    "longitud": 13.405,
    "count": 409,
    "avgStay": 7.32,
    "avgSpend": 98.8,
    "avgRating": 2.96,
    "ratingDist": [
      82,
      88,
      80,
      83,
      76
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Nápoles",
    "pais": "Italia",
    "latitud": 40.8518,
    "longitud": 14.2681,
    "count": 409,
    "avgStay": 7.47,
    "avgSpend": 99.95,
    "avgRating": 2.97,
    "ratingDist": [
      82,
      87,
      79,
      84,
      77
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Manchester",
    "pais": "Reino Unido",
    "latitud": 53.4808,
    "longitud": -2.2426,
    "count": 406,
    "avgStay": 7.61,
    "avgSpend": 99.51,
    "avgRating": 2.87,
    "ratingDist": [
      90,
      85,
      87,
      76,
      68
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Birmingham",
    "pais": "Reino Unido",
    "latitud": 52.4862,
    "longitud": -1.8904,
    "count": 405,
    "avgStay": 7.14,
    "avgSpend": 101.25,
    "avgRating": 3.05,
    "ratingDist": [
      84,
      73,
      68,
      97,
      83
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Edimburgo",
    "pais": "Reino Unido",
    "latitud": 55.9533,
    "longitud": -3.1883,
    "count": 405,
    "avgStay": 7.57,
    "avgSpend": 98.25,
    "avgRating": 2.93,
    "ratingDist": [
      92,
      80,
      86,
      59,
      88
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Colonia",
    "pais": "Alemania",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "count": 403,
    "avgStay": 7.6,
    "avgSpend": 101.38,
    "avgRating": 3.06,
    "ratingDist": [
      78,
      77,
      79,
      81,
      88
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Sevilla",
    "pais": "España",
    "latitud": 37.3891,
    "longitud": -5.9845,
    "count": 395,
    "avgStay": 7.73,
    "avgSpend": 100.6,
    "avgRating": 2.95,
    "ratingDist": [
      79,
      88,
      74,
      83,
      71
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Málaga",
    "pais": "España",
    "latitud": 36.7213,
    "longitud": -4.4214,
    "count": 394,
    "avgStay": 7.39,
    "avgSpend": 101.09,
    "avgRating": 3.07,
    "ratingDist": [
      75,
      68,
      82,
      93,
      76
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Londres",
    "pais": "Reino Unido",
    "latitud": 51.5074,
    "longitud": -0.1278,
    "count": 393,
    "avgStay": 7.28,
    "avgSpend": 99.44,
    "avgRating": 2.89,
    "ratingDist": [
      86,
      85,
      74,
      82,
      66
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Barcelona",
    "pais": "España",
    "latitud": 41.3851,
    "longitud": 2.1734,
    "count": 390,
    "avgStay": 7.43,
    "avgSpend": 100.77,
    "avgRating": 2.83,
    "ratingDist": [
      93,
      81,
      80,
      73,
      63
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Múnich",
    "pais": "Alemania",
    "latitud": 48.1351,
    "longitud": 11.582,
    "count": 389,
    "avgStay": 7.36,
    "avgSpend": 100.91,
    "avgRating": 2.84,
    "ratingDist": [
      91,
      87,
      76,
      65,
      70
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Lyon",
    "pais": "Francia",
    "latitud": 45.764,
    "longitud": 4.8357,
    "count": 386,
    "avgStay": 7.74,
    "avgSpend": 99.25,
    "avgRating": 2.93,
    "ratingDist": [
      72,
      93,
      79,
      73,
      69
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Milán",
    "pais": "Italia",
    "latitud": 45.4642,
    "longitud": 9.19,
    "count": 378,
    "avgStay": 7.2,
    "avgSpend": 101.05,
    "avgRating": 3.19,
    "ratingDist": [
      66,
      65,
      67,
      91,
      89
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Niza",
    "pais": "Francia",
    "latitud": 43.7102,
    "longitud": 7.262,
    "count": 366,
    "avgStay": 7.67,
    "avgSpend": 100.02,
    "avgRating": 3.02,
    "ratingDist": [
      69,
      68,
      81,
      83,
      65
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Venecia",
    "pais": "Italia",
    "latitud": 45.4408,
    "longitud": 12.3155,
    "count": 364,
    "avgStay": 7.93,
    "avgSpend": 98.47,
    "avgRating": 3.04,
    "ratingDist": [
      75,
      69,
      68,
      70,
      82
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Hamburgo",
    "pais": "Alemania",
    "latitud": 53.5511,
    "longitud": 9.9937,
    "count": 363,
    "avgStay": 7.47,
    "avgSpend": 100.81,
    "avgRating": 2.93,
    "ratingDist": [
      80,
      79,
      63,
      68,
      73
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  },
  {
    "ciudad": "Roma",
    "pais": "Italia",
    "latitud": 41.9028,
    "longitud": 12.4964,
    "count": 359,
    "avgStay": 7.41,
    "avgSpend": 100.89,
    "avgRating": 2.97,
    "ratingDist": [
      66,
      86,
      70,
      66,
      71
    ],
    "topAlojamiento": "Hotel",
    "topMotivo": "Vacaciones"
  }
];

export const accommodationSpendBoxplots: BoxplotStats[] = [
  {
    "tipo": "Hotel",
    "n": 4055,
    "min": 20,
    "q1": 80.4,
    "median": 101.01,
    "q3": 120.94,
    "max": 222.98,
    "iqr": 40.54,
    "lowerWhisker": 20,
    "upperWhisker": 181.75,
    "mean": 100.66,
    "outliersCount": 13
  },
  {
    "tipo": "Hostal",
    "n": 1469,
    "min": 20,
    "q1": 80.16,
    "median": 100.14,
    "q3": 118.35,
    "max": 189.6,
    "iqr": 38.19,
    "lowerWhisker": 22.88,
    "upperWhisker": 175.63,
    "mean": 99.78,
    "outliersCount": 9
  },
  {
    "tipo": "Apartamento",
    "n": 3053,
    "min": 20,
    "q1": 79.13,
    "median": 99.52,
    "q3": 119.28,
    "max": 216.74,
    "iqr": 40.15,
    "lowerWhisker": 20,
    "upperWhisker": 179.5,
    "mean": 99.73,
    "outliersCount": 11
  },
  {
    "tipo": "Casa rural",
    "n": 920,
    "min": 20,
    "q1": 80.81,
    "median": 98.56,
    "q3": 119.66,
    "max": 202.21,
    "iqr": 38.85,
    "lowerWhisker": 22.53,
    "upperWhisker": 177.94,
    "mean": 99.66,
    "outliersCount": 8
  },
  {
    "tipo": "Albergue",
    "n": 503,
    "min": 20,
    "q1": 79.04,
    "median": 99.28,
    "q3": 117.75,
    "max": 174.31,
    "iqr": 38.71,
    "lowerWhisker": 20.98,
    "upperWhisker": 174.31,
    "mean": 98.97,
    "outliersCount": 2
  }
];

export const countryRatingStats: CountryRatingData[] = [
  {
    "pais": "Italia",
    "n": 1935,
    "min": 1,
    "q1": 2,
    "median": 3,
    "q3": 4,
    "max": 5,
    "iqr": 2,
    "lowerWhisker": 1,
    "upperWhisker": 5,
    "mean": 3.04,
    "outliersCount": 0,
    "avgStay": 7.58,
    "avgSpend": 100.71,
    "distribucion": [
      {
        "estrellas": 1,
        "conteo": 368,
        "porcentaje": 19
      },
      {
        "estrellas": 2,
        "conteo": 395,
        "porcentaje": 20.4
      },
      {
        "estrellas": 3,
        "conteo": 361,
        "porcentaje": 18.7
      },
      {
        "estrellas": 4,
        "conteo": 405,
        "porcentaje": 20.9
      },
      {
        "estrellas": 5,
        "conteo": 406,
        "porcentaje": 21
      }
    ]
  },
  {
    "pais": "España",
    "n": 2000,
    "min": 1,
    "q1": 2,
    "median": 3,
    "q3": 4,
    "max": 5,
    "iqr": 2,
    "lowerWhisker": 1,
    "upperWhisker": 5,
    "mean": 2.99,
    "outliersCount": 0,
    "avgStay": 7.43,
    "avgSpend": 100.03,
    "distribucion": [
      {
        "estrellas": 1,
        "conteo": 394,
        "porcentaje": 19.7
      },
      {
        "estrellas": 2,
        "conteo": 405,
        "porcentaje": 20.3
      },
      {
        "estrellas": 3,
        "conteo": 400,
        "porcentaje": 20
      },
      {
        "estrellas": 4,
        "conteo": 426,
        "porcentaje": 21.3
      },
      {
        "estrellas": 5,
        "conteo": 375,
        "porcentaje": 18.8
      }
    ]
  },
  {
    "pais": "Alemania",
    "n": 1986,
    "min": 1,
    "q1": 2,
    "median": 3,
    "q3": 4,
    "max": 5,
    "iqr": 2,
    "lowerWhisker": 1,
    "upperWhisker": 5,
    "mean": 2.99,
    "outliersCount": 0,
    "avgStay": 7.43,
    "avgSpend": 99.8,
    "distribucion": [
      {
        "estrellas": 1,
        "conteo": 405,
        "porcentaje": 20.4
      },
      {
        "estrellas": 2,
        "conteo": 413,
        "porcentaje": 20.8
      },
      {
        "estrellas": 3,
        "conteo": 377,
        "porcentaje": 19
      },
      {
        "estrellas": 4,
        "conteo": 388,
        "porcentaje": 19.5
      },
      {
        "estrellas": 5,
        "conteo": 403,
        "porcentaje": 20.3
      }
    ]
  },
  {
    "pais": "Francia",
    "n": 2038,
    "min": 1,
    "q1": 2,
    "median": 3,
    "q3": 4,
    "max": 5,
    "iqr": 2,
    "lowerWhisker": 1,
    "upperWhisker": 5,
    "mean": 2.97,
    "outliersCount": 0,
    "avgStay": 7.54,
    "avgSpend": 100,
    "distribucion": [
      {
        "estrellas": 1,
        "conteo": 427,
        "porcentaje": 21
      },
      {
        "estrellas": 2,
        "conteo": 401,
        "porcentaje": 19.7
      },
      {
        "estrellas": 3,
        "conteo": 408,
        "porcentaje": 20
      },
      {
        "estrellas": 4,
        "conteo": 410,
        "porcentaje": 20.1
      },
      {
        "estrellas": 5,
        "conteo": 392,
        "porcentaje": 19.2
      }
    ]
  },
  {
    "pais": "Reino Unido",
    "n": 2041,
    "min": 1,
    "q1": 2,
    "median": 3,
    "q3": 4,
    "max": 5,
    "iqr": 2,
    "lowerWhisker": 1,
    "upperWhisker": 5,
    "mean": 2.95,
    "outliersCount": 0,
    "avgStay": 7.39,
    "avgSpend": 99.84,
    "distribucion": [
      {
        "estrellas": 1,
        "conteo": 442,
        "porcentaje": 21.7
      },
      {
        "estrellas": 2,
        "conteo": 401,
        "porcentaje": 19.6
      },
      {
        "estrellas": 3,
        "conteo": 401,
        "porcentaje": 19.6
      },
      {
        "estrellas": 4,
        "conteo": 410,
        "porcentaje": 20.1
      },
      {
        "estrellas": 5,
        "conteo": 387,
        "porcentaje": 19
      }
    ]
  }
];

export const transportDistribution = [
  {
    "tipo": "Tren",
    "conteo": 2542,
    "porcentaje": 25.4
  },
  {
    "tipo": "Autobús",
    "conteo": 2496,
    "porcentaje": 25
  },
  {
    "tipo": "Avión",
    "conteo": 2491,
    "porcentaje": 24.9
  },
  {
    "tipo": "Coche",
    "conteo": 2471,
    "porcentaje": 24.7
  }
];

export const purposeDistribution = [
  {
    "motivo": "Vacaciones",
    "conteo": 6990,
    "porcentaje": 69.9
  },
  {
    "motivo": "Negocios",
    "conteo": 1492,
    "porcentaje": 14.9
  },
  {
    "motivo": "Visita familiar",
    "conteo": 997,
    "porcentaje": 10
  },
  {
    "motivo": "Estudios",
    "conteo": 521,
    "porcentaje": 5.2
  }
];

export const sampleDataset: TourismRecord[] = [
  {
    "fecha": "2023-04-13",
    "mes": 4,
    "pais": "Francia",
    "ciudad": "Lyon",
    "latitud": 45.764,
    "longitud": 4.8357,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 9,
    "gasto_diario": 76.14,
    "valoracion": 1,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-15",
    "mes": 12,
    "pais": "España",
    "ciudad": "Málaga",
    "latitud": 36.7213,
    "longitud": -4.4214,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 6,
    "gasto_diario": 83.41,
    "valoracion": 2,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-09-28",
    "mes": 9,
    "pais": "Francia",
    "ciudad": "Burdeos",
    "latitud": 44.8378,
    "longitud": -0.5792,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 14,
    "gasto_diario": 90.19,
    "valoracion": 5,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-04-17",
    "mes": 4,
    "pais": "España",
    "ciudad": "Sevilla",
    "latitud": 37.3891,
    "longitud": -5.9845,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 11,
    "gasto_diario": 124.97,
    "valoracion": 3,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-03-13",
    "mes": 3,
    "pais": "Francia",
    "ciudad": "Lyon",
    "latitud": 45.764,
    "longitud": 4.8357,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 13,
    "gasto_diario": 97.39,
    "valoracion": 5,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-07-08",
    "mes": 7,
    "pais": "Francia",
    "ciudad": "Marsella",
    "latitud": 43.2965,
    "longitud": 5.3698,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 10,
    "gasto_diario": 90.81,
    "valoracion": 3,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-01-21",
    "mes": 1,
    "pais": "España",
    "ciudad": "Barcelona",
    "latitud": 41.3851,
    "longitud": 2.1734,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 3,
    "gasto_diario": 100.15,
    "valoracion": 3,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-04-13",
    "mes": 4,
    "pais": "Francia",
    "ciudad": "Lyon",
    "latitud": 45.764,
    "longitud": 4.8357,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 13,
    "gasto_diario": 83.04,
    "valoracion": 2,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-05-02",
    "mes": 5,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 12,
    "gasto_diario": 146.68,
    "valoracion": 2,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-08-03",
    "mes": 8,
    "pais": "Reino Unido",
    "ciudad": "Liverpool",
    "latitud": 53.4084,
    "longitud": -2.9916,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 2,
    "gasto_diario": 79.1,
    "valoracion": 5,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-11-27",
    "mes": 11,
    "pais": "Italia",
    "ciudad": "Roma",
    "latitud": 41.9028,
    "longitud": 12.4964,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 6,
    "gasto_diario": 100.8,
    "valoracion": 4,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-03-29",
    "mes": 3,
    "pais": "Francia",
    "ciudad": "París",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 10,
    "gasto_diario": 118.52,
    "valoracion": 4,
    "transporte": "Avión",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-04-10",
    "mes": 4,
    "pais": "Francia",
    "ciudad": "Marsella",
    "latitud": 43.2965,
    "longitud": 5.3698,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 6,
    "gasto_diario": 120.25,
    "valoracion": 5,
    "transporte": "Avión",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-12-26",
    "mes": 12,
    "pais": "Italia",
    "ciudad": "Roma",
    "latitud": 41.9028,
    "longitud": 12.4964,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 14,
    "gasto_diario": 88.33,
    "valoracion": 3,
    "transporte": "Coche",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-06-01",
    "mes": 6,
    "pais": "Francia",
    "ciudad": "Burdeos",
    "latitud": 44.8378,
    "longitud": -0.5792,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 12,
    "gasto_diario": 132.89,
    "valoracion": 2,
    "transporte": "Avión",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-05-11",
    "mes": 5,
    "pais": "Italia",
    "ciudad": "Florencia",
    "latitud": 43.7696,
    "longitud": 11.2558,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 12,
    "gasto_diario": 164.29,
    "valoracion": 5,
    "transporte": "Avión",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-05-30",
    "mes": 5,
    "pais": "España",
    "ciudad": "Barcelona",
    "latitud": 41.3851,
    "longitud": 2.1734,
    "tipo_alojamiento": "Albergue",
    "duracion_estancia": 9,
    "gasto_diario": 154.06,
    "valoracion": 4,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-11-05",
    "mes": 11,
    "pais": "Alemania",
    "ciudad": "Múnich",
    "latitud": 48.1351,
    "longitud": 11.582,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 5,
    "gasto_diario": 25.6,
    "valoracion": 3,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-09-15",
    "mes": 9,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 11,
    "gasto_diario": 97.5,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-10",
    "mes": 12,
    "pais": "Reino Unido",
    "ciudad": "Londres",
    "latitud": 51.5074,
    "longitud": -0.1278,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 12,
    "gasto_diario": 80.14,
    "valoracion": 3,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-10-21",
    "mes": 10,
    "pais": "Francia",
    "ciudad": "Lyon",
    "latitud": 45.764,
    "longitud": 4.8357,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 9,
    "gasto_diario": 116.68,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-07-11",
    "mes": 7,
    "pais": "Reino Unido",
    "ciudad": "Londres",
    "latitud": 51.5074,
    "longitud": -0.1278,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 13,
    "gasto_diario": 131.56,
    "valoracion": 1,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-10-04",
    "mes": 10,
    "pais": "España",
    "ciudad": "Málaga",
    "latitud": 36.7213,
    "longitud": -4.4214,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 5,
    "gasto_diario": 65.52,
    "valoracion": 3,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-06-10",
    "mes": 6,
    "pais": "Alemania",
    "ciudad": "Múnich",
    "latitud": 48.1351,
    "longitud": 11.582,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 2,
    "gasto_diario": 126.04,
    "valoracion": 3,
    "transporte": "Coche",
    "motivo_viaje": "Estudios"
  },
  {
    "fecha": "2023-11-10",
    "mes": 11,
    "pais": "España",
    "ciudad": "Sevilla",
    "latitud": 37.3891,
    "longitud": -5.9845,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 1,
    "gasto_diario": 99.21,
    "valoracion": 3,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-01-22",
    "mes": 1,
    "pais": "España",
    "ciudad": "Valencia",
    "latitud": 39.4699,
    "longitud": -0.3763,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 9,
    "gasto_diario": 92.13,
    "valoracion": 1,
    "transporte": "Autobús",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-09-10",
    "mes": 9,
    "pais": "Francia",
    "ciudad": "París",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 10,
    "gasto_diario": 115.86,
    "valoracion": 1,
    "transporte": "Tren",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-08-24",
    "mes": 8,
    "pais": "España",
    "ciudad": "Madrid",
    "latitud": 40.4168,
    "longitud": -3.7038,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 7,
    "gasto_diario": 95.64,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-11",
    "mes": 12,
    "pais": "Alemania",
    "ciudad": "Berlín",
    "latitud": 52.52,
    "longitud": 13.405,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 3,
    "gasto_diario": 133.99,
    "valoracion": 2,
    "transporte": "Avión",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-02-18",
    "mes": 2,
    "pais": "Reino Unido",
    "ciudad": "Londres",
    "latitud": 51.5074,
    "longitud": -0.1278,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 12,
    "gasto_diario": 88.19,
    "valoracion": 4,
    "transporte": "Avión",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-02-28",
    "mes": 2,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Albergue",
    "duracion_estancia": 6,
    "gasto_diario": 140,
    "valoracion": 3,
    "transporte": "Tren",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-06-19",
    "mes": 6,
    "pais": "Francia",
    "ciudad": "Burdeos",
    "latitud": 44.8378,
    "longitud": -0.5792,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 10,
    "gasto_diario": 99.36,
    "valoracion": 3,
    "transporte": "Autobús",
    "motivo_viaje": "Estudios"
  },
  {
    "fecha": "2023-07-07",
    "mes": 7,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 4,
    "gasto_diario": 28.68,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-09-28",
    "mes": 9,
    "pais": "Italia",
    "ciudad": "Nápoles",
    "latitud": 40.8518,
    "longitud": 14.2681,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 14,
    "gasto_diario": 75.91,
    "valoracion": 5,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-07-09",
    "mes": 7,
    "pais": "Reino Unido",
    "ciudad": "Manchester",
    "latitud": 53.4808,
    "longitud": -2.2426,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 9,
    "gasto_diario": 96.86,
    "valoracion": 2,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-06-24",
    "mes": 6,
    "pais": "Italia",
    "ciudad": "Nápoles",
    "latitud": 40.8518,
    "longitud": 14.2681,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 2,
    "gasto_diario": 111.09,
    "valoracion": 1,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-02-20",
    "mes": 2,
    "pais": "Italia",
    "ciudad": "Milán",
    "latitud": 45.4642,
    "longitud": 9.19,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 14,
    "gasto_diario": 97.04,
    "valoracion": 2,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-30",
    "mes": 12,
    "pais": "Francia",
    "ciudad": "Marsella",
    "latitud": 43.2965,
    "longitud": 5.3698,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 11,
    "gasto_diario": 79.08,
    "valoracion": 5,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-02-24",
    "mes": 2,
    "pais": "España",
    "ciudad": "Málaga",
    "latitud": 36.7213,
    "longitud": -4.4214,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 12,
    "gasto_diario": 153.43,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-09-01",
    "mes": 9,
    "pais": "Italia",
    "ciudad": "Venecia",
    "latitud": 45.4408,
    "longitud": 12.3155,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 12,
    "gasto_diario": 142.12,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-11-16",
    "mes": 11,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 4,
    "gasto_diario": 63.79,
    "valoracion": 3,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-05-11",
    "mes": 5,
    "pais": "España",
    "ciudad": "Sevilla",
    "latitud": 37.3891,
    "longitud": -5.9845,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 1,
    "gasto_diario": 74.73,
    "valoracion": 4,
    "transporte": "Avión",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-11-03",
    "mes": 11,
    "pais": "Alemania",
    "ciudad": "Frankfurt",
    "latitud": 50.1109,
    "longitud": 8.6821,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 7,
    "gasto_diario": 109.57,
    "valoracion": 5,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-05-15",
    "mes": 5,
    "pais": "Alemania",
    "ciudad": "Hamburgo",
    "latitud": 53.5511,
    "longitud": 9.9937,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 14,
    "gasto_diario": 95.43,
    "valoracion": 4,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-01-21",
    "mes": 1,
    "pais": "España",
    "ciudad": "Barcelona",
    "latitud": 41.3851,
    "longitud": 2.1734,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 4,
    "gasto_diario": 20,
    "valoracion": 4,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-11-25",
    "mes": 11,
    "pais": "España",
    "ciudad": "Madrid",
    "latitud": 40.4168,
    "longitud": -3.7038,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 5,
    "gasto_diario": 78.43,
    "valoracion": 5,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-06-16",
    "mes": 6,
    "pais": "Alemania",
    "ciudad": "Hamburgo",
    "latitud": 53.5511,
    "longitud": 9.9937,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 12,
    "gasto_diario": 121.99,
    "valoracion": 1,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-10-01",
    "mes": 10,
    "pais": "Francia",
    "ciudad": "París",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 1,
    "gasto_diario": 103.36,
    "valoracion": 2,
    "transporte": "Avión",
    "motivo_viaje": "Estudios"
  },
  {
    "fecha": "2023-03-30",
    "mes": 3,
    "pais": "Reino Unido",
    "ciudad": "Liverpool",
    "latitud": 53.4084,
    "longitud": -2.9916,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 2,
    "gasto_diario": 72.07,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-11-12",
    "mes": 11,
    "pais": "Reino Unido",
    "ciudad": "Liverpool",
    "latitud": 53.4084,
    "longitud": -2.9916,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 12,
    "gasto_diario": 83.23,
    "valoracion": 2,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-01-14",
    "mes": 1,
    "pais": "Francia",
    "ciudad": "Lyon",
    "latitud": 45.764,
    "longitud": 4.8357,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 4,
    "gasto_diario": 93.3,
    "valoracion": 2,
    "transporte": "Tren",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-08-30",
    "mes": 8,
    "pais": "España",
    "ciudad": "Barcelona",
    "latitud": 41.3851,
    "longitud": 2.1734,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 2,
    "gasto_diario": 176.82,
    "valoracion": 3,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-09-22",
    "mes": 9,
    "pais": "Alemania",
    "ciudad": "Hamburgo",
    "latitud": 53.5511,
    "longitud": 9.9937,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 14,
    "gasto_diario": 101.09,
    "valoracion": 1,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-12",
    "mes": 12,
    "pais": "Reino Unido",
    "ciudad": "Birmingham",
    "latitud": 52.4862,
    "longitud": -1.8904,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 14,
    "gasto_diario": 78.31,
    "valoracion": 2,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-02-22",
    "mes": 2,
    "pais": "Alemania",
    "ciudad": "Frankfurt",
    "latitud": 50.1109,
    "longitud": 8.6821,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 13,
    "gasto_diario": 154.09,
    "valoracion": 3,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-06",
    "mes": 12,
    "pais": "Francia",
    "ciudad": "París",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 1,
    "gasto_diario": 117.39,
    "valoracion": 5,
    "transporte": "Autobús",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-04-02",
    "mes": 4,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 10,
    "gasto_diario": 75.84,
    "valoracion": 5,
    "transporte": "Avión",
    "motivo_viaje": "Estudios"
  },
  {
    "fecha": "2023-09-21",
    "mes": 9,
    "pais": "Francia",
    "ciudad": "Niza",
    "latitud": 43.7102,
    "longitud": 7.262,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 1,
    "gasto_diario": 100.58,
    "valoracion": 5,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-02-04",
    "mes": 2,
    "pais": "España",
    "ciudad": "Sevilla",
    "latitud": 37.3891,
    "longitud": -5.9845,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 6,
    "gasto_diario": 94.25,
    "valoracion": 5,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-07-25",
    "mes": 7,
    "pais": "Francia",
    "ciudad": "Niza",
    "latitud": 43.7102,
    "longitud": 7.262,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 2,
    "gasto_diario": 116.46,
    "valoracion": 5,
    "transporte": "Tren",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-03-22",
    "mes": 3,
    "pais": "Francia",
    "ciudad": "Lyon",
    "latitud": 45.764,
    "longitud": 4.8357,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 3,
    "gasto_diario": 62.28,
    "valoracion": 3,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-02-19",
    "mes": 2,
    "pais": "Reino Unido",
    "ciudad": "Londres",
    "latitud": 51.5074,
    "longitud": -0.1278,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 5,
    "gasto_diario": 64.25,
    "valoracion": 1,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-26",
    "mes": 12,
    "pais": "Alemania",
    "ciudad": "Berlín",
    "latitud": 52.52,
    "longitud": 13.405,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 3,
    "gasto_diario": 92.28,
    "valoracion": 1,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-01-02",
    "mes": 1,
    "pais": "Reino Unido",
    "ciudad": "Manchester",
    "latitud": 53.4808,
    "longitud": -2.2426,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 6,
    "gasto_diario": 73.59,
    "valoracion": 3,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-02-23",
    "mes": 2,
    "pais": "Italia",
    "ciudad": "Nápoles",
    "latitud": 40.8518,
    "longitud": 14.2681,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 7,
    "gasto_diario": 130.52,
    "valoracion": 3,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-04-16",
    "mes": 4,
    "pais": "Francia",
    "ciudad": "Lyon",
    "latitud": 45.764,
    "longitud": 4.8357,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 10,
    "gasto_diario": 69.15,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-09-17",
    "mes": 9,
    "pais": "Italia",
    "ciudad": "Roma",
    "latitud": 41.9028,
    "longitud": 12.4964,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 6,
    "gasto_diario": 172.22,
    "valoracion": 2,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-11-06",
    "mes": 11,
    "pais": "Reino Unido",
    "ciudad": "Edimburgo",
    "latitud": 55.9533,
    "longitud": -3.1883,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 2,
    "gasto_diario": 95.45,
    "valoracion": 5,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-07-10",
    "mes": 7,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 9,
    "gasto_diario": 103.95,
    "valoracion": 2,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-08-06",
    "mes": 8,
    "pais": "Reino Unido",
    "ciudad": "Liverpool",
    "latitud": 53.4084,
    "longitud": -2.9916,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 2,
    "gasto_diario": 110.53,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-02-13",
    "mes": 2,
    "pais": "Alemania",
    "ciudad": "Hamburgo",
    "latitud": 53.5511,
    "longitud": 9.9937,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 6,
    "gasto_diario": 97.81,
    "valoracion": 1,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-06-11",
    "mes": 6,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 9,
    "gasto_diario": 135.39,
    "valoracion": 5,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-07-21",
    "mes": 7,
    "pais": "España",
    "ciudad": "Madrid",
    "latitud": 40.4168,
    "longitud": -3.7038,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 9,
    "gasto_diario": 104.37,
    "valoracion": 1,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-09-27",
    "mes": 9,
    "pais": "Francia",
    "ciudad": "París",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 2,
    "gasto_diario": 84.36,
    "valoracion": 3,
    "transporte": "Tren",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-12-17",
    "mes": 12,
    "pais": "Reino Unido",
    "ciudad": "Edimburgo",
    "latitud": 55.9533,
    "longitud": -3.1883,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 9,
    "gasto_diario": 59.05,
    "valoracion": 2,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-10-31",
    "mes": 10,
    "pais": "Alemania",
    "ciudad": "Colonia",
    "latitud": 50.9375,
    "longitud": 6.9603,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 8,
    "gasto_diario": 111.74,
    "valoracion": 1,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-09-28",
    "mes": 9,
    "pais": "Reino Unido",
    "ciudad": "Liverpool",
    "latitud": 53.4084,
    "longitud": -2.9916,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 14,
    "gasto_diario": 127.43,
    "valoracion": 4,
    "transporte": "Tren",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-08-03",
    "mes": 8,
    "pais": "Reino Unido",
    "ciudad": "Liverpool",
    "latitud": 53.4084,
    "longitud": -2.9916,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 7,
    "gasto_diario": 61.98,
    "valoracion": 1,
    "transporte": "Tren",
    "motivo_viaje": "Estudios"
  },
  {
    "fecha": "2023-09-09",
    "mes": 9,
    "pais": "Alemania",
    "ciudad": "Múnich",
    "latitud": 48.1351,
    "longitud": 11.582,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 13,
    "gasto_diario": 88.57,
    "valoracion": 5,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-07-09",
    "mes": 7,
    "pais": "Italia",
    "ciudad": "Venecia",
    "latitud": 45.4408,
    "longitud": 12.3155,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 11,
    "gasto_diario": 128.97,
    "valoracion": 5,
    "transporte": "Autobús",
    "motivo_viaje": "Estudios"
  },
  {
    "fecha": "2023-10-23",
    "mes": 10,
    "pais": "Francia",
    "ciudad": "Burdeos",
    "latitud": 44.8378,
    "longitud": -0.5792,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 8,
    "gasto_diario": 74.46,
    "valoracion": 2,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-08-01",
    "mes": 8,
    "pais": "Francia",
    "ciudad": "Marsella",
    "latitud": 43.2965,
    "longitud": 5.3698,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 10,
    "gasto_diario": 74.19,
    "valoracion": 3,
    "transporte": "Autobús",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-07-27",
    "mes": 7,
    "pais": "España",
    "ciudad": "Valencia",
    "latitud": 39.4699,
    "longitud": -0.3763,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 8,
    "gasto_diario": 95.45,
    "valoracion": 5,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-08-25",
    "mes": 8,
    "pais": "España",
    "ciudad": "Málaga",
    "latitud": 36.7213,
    "longitud": -4.4214,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 1,
    "gasto_diario": 139.46,
    "valoracion": 4,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-04",
    "mes": 12,
    "pais": "España",
    "ciudad": "Madrid",
    "latitud": 40.4168,
    "longitud": -3.7038,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 9,
    "gasto_diario": 127.56,
    "valoracion": 2,
    "transporte": "Tren",
    "motivo_viaje": "Negocios"
  },
  {
    "fecha": "2023-02-22",
    "mes": 2,
    "pais": "Francia",
    "ciudad": "París",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 6,
    "gasto_diario": 139.48,
    "valoracion": 5,
    "transporte": "Autobús",
    "motivo_viaje": "Estudios"
  },
  {
    "fecha": "2023-10-07",
    "mes": 10,
    "pais": "Italia",
    "ciudad": "Nápoles",
    "latitud": 40.8518,
    "longitud": 14.2681,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 1,
    "gasto_diario": 70.19,
    "valoracion": 4,
    "transporte": "Avión",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-08-05",
    "mes": 8,
    "pais": "Francia",
    "ciudad": "Marsella",
    "latitud": 43.2965,
    "longitud": 5.3698,
    "tipo_alojamiento": "Hostal",
    "duracion_estancia": 1,
    "gasto_diario": 80.21,
    "valoracion": 1,
    "transporte": "Coche",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-09-09",
    "mes": 9,
    "pais": "Francia",
    "ciudad": "Marsella",
    "latitud": 43.2965,
    "longitud": 5.3698,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 13,
    "gasto_diario": 94.65,
    "valoracion": 4,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-07-07",
    "mes": 7,
    "pais": "Francia",
    "ciudad": "París",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "tipo_alojamiento": "Casa rural",
    "duracion_estancia": 7,
    "gasto_diario": 90.8,
    "valoracion": 2,
    "transporte": "Avión",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-02-10",
    "mes": 2,
    "pais": "Francia",
    "ciudad": "París",
    "latitud": 48.8566,
    "longitud": 2.3522,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 10,
    "gasto_diario": 76.7,
    "valoracion": 5,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-06-06",
    "mes": 6,
    "pais": "Italia",
    "ciudad": "Florencia",
    "latitud": 43.7696,
    "longitud": 11.2558,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 2,
    "gasto_diario": 114.42,
    "valoracion": 3,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-01-15",
    "mes": 1,
    "pais": "España",
    "ciudad": "Málaga",
    "latitud": 36.7213,
    "longitud": -4.4214,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 6,
    "gasto_diario": 51.11,
    "valoracion": 3,
    "transporte": "Autobús",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-10-28",
    "mes": 10,
    "pais": "Reino Unido",
    "ciudad": "Edimburgo",
    "latitud": 55.9533,
    "longitud": -3.1883,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 13,
    "gasto_diario": 104.49,
    "valoracion": 4,
    "transporte": "Avión",
    "motivo_viaje": "Visita familiar"
  },
  {
    "fecha": "2023-03-06",
    "mes": 3,
    "pais": "España",
    "ciudad": "Valencia",
    "latitud": 39.4699,
    "longitud": -0.3763,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 5,
    "gasto_diario": 149.86,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-11",
    "mes": 12,
    "pais": "España",
    "ciudad": "Sevilla",
    "latitud": 37.3891,
    "longitud": -5.9845,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 5,
    "gasto_diario": 102.36,
    "valoracion": 4,
    "transporte": "Coche",
    "motivo_viaje": "Estudios"
  },
  {
    "fecha": "2023-11-23",
    "mes": 11,
    "pais": "Reino Unido",
    "ciudad": "Londres",
    "latitud": 51.5074,
    "longitud": -0.1278,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 10,
    "gasto_diario": 75.03,
    "valoracion": 5,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-01-09",
    "mes": 1,
    "pais": "Francia",
    "ciudad": "Burdeos",
    "latitud": 44.8378,
    "longitud": -0.5792,
    "tipo_alojamiento": "Hotel",
    "duracion_estancia": 12,
    "gasto_diario": 61.59,
    "valoracion": 3,
    "transporte": "Coche",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-12-10",
    "mes": 12,
    "pais": "Italia",
    "ciudad": "Milán",
    "latitud": 45.4642,
    "longitud": 9.19,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 6,
    "gasto_diario": 110.82,
    "valoracion": 3,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  },
  {
    "fecha": "2023-05-09",
    "mes": 5,
    "pais": "Italia",
    "ciudad": "Nápoles",
    "latitud": 40.8518,
    "longitud": 14.2681,
    "tipo_alojamiento": "Apartamento",
    "duracion_estancia": 14,
    "gasto_diario": 152.09,
    "valoracion": 2,
    "transporte": "Tren",
    "motivo_viaje": "Vacaciones"
  }
];
