# NV-1

## Descripción
Panel de administración para gestión de inmobiliarias y vendedores.

## Tecnologías
- React
- TypeScript
- Supabase
- TailwindCSS
- Vite

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/yourusername/NV-1.git
cd NV-1
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env.local` y configura las variables de entorno necesarias:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto
```
src/
├── components/     # Componentes reutilizables
├── panels/        # Paneles específicos por rol
├── context/       # Contextos de React (Auth, etc.)
├── api/          # Funciones de API y tipos
└── types/        # Definiciones de tipos TypeScript
```

## Características
- Autenticación con Supabase
- Control de acceso basado en roles (RBAC)
- Gestión de inmobiliarias
- Gestión de vendedores
- Dashboard con métricas

## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Vista previa de la versión de producción
