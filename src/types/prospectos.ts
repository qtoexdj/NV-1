export interface Etapa {
  id: string;
  nombre: string;
  orden: number;
  color: string;
  inmobiliaria_id: string;
}

export interface Proyecto {
  id: string;
  nombre: string;
  ubicacion: string;
  caracteristicas: Record<string, any>;
}

export interface Prospecto {
  id: string;
  nombre: string;
  whatsapp: string;
  etapa_id: string;
  proyecto_id: string;
  vendedor_id: string;
  inmobiliaria_id: string;
  requisitos_calificacion: Record<string, any>;
  fecha_seguimiento: string | null;
  cantidad_seguimientos: number;
  etapa?: Etapa;
  proyecto?: Proyecto;
  created_at: string;
  updated_at: string;
}