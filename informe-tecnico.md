# Informe Técnico: Análisis de la Arquitectura del Sistema

## 1. Tecnologías Base
- **Framework Frontend**: React 18.3.1 con TypeScript
- **Build Tool**: Vite 6.0.5
- **Estilización**: Tailwind CSS 3.1.8, Material-UI 5.10.16
- **Backend as a Service**: Supabase
- **Gráficos**: Chart.js 3.9.1 con react-chartjs-2 4.3.1

## 2. Arquitectura del Sistema

### 2.1 Estructura de Autenticación y Manejo de Usuarios

#### 2.1.1 Configuración del Cliente
```typescript
// supabaseClient.ts - Cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);
```
La autenticación se maneja a través de Supabase, utilizando variables de entorno para la configuración:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

#### 2.1.2 Estructura de Usuarios en Supabase
El sistema utiliza dos tablas principales para el manejo de usuarios:

1. **auth.users**: Tabla del sistema de autenticación
   - Contiene información básica del usuario
   - Almacena `app_metadata.role` para roles
   - No contiene información específica del negocio

2. **public.users**: Tabla personalizada de usuarios
   - Contiene campos adicionales como `inmobiliaria_id`
   - Se relaciona con `auth.users` mediante el ID del usuario
   - Almacena datos específicos del dominio de la aplicación

#### 2.1.3 Flujo Correcto de Autenticación
```typescript
// Ejemplo de implementación correcta
const fetchUserData = async () => {
  // 1. Obtener usuario autenticado
  const { data: { user: authUser } } = await supabase.auth.getUser();
  
  if (!authUser) return null;

  // 2. Obtener datos extendidos del usuario
  const { data: publicUser } = await supabase
    .from('users')
    .select('*')
    .eq('id', authUser.id)
    .single();

  return {
    ...authUser,
    ...publicUser
  };
};
```

### 2.2 Sistema de Roles
La aplicación implementa un sistema de roles con tres niveles principales:
- `admin`
- `user`
- `dev`

Los roles se gestionan a través de los metadatos de la aplicación en Supabase (`app_metadata.role`).

### 2.3 Enrutamiento y Navegación
La aplicación utiliza React Router para la gestión de rutas con redirección basada en roles:

Rutas principales:
- `/` → Redirección basada en rol
- `/admin` → Panel de Administrador
- `/dev` → Panel de Desarrollador
- `/user` → Panel de Usuario
- `/inmobiliarias` → Panel de Inmobiliarias
- `/login` → Página de inicio de sesión
- `/test` → Panel de Pruebas

### 2.4 Integración con Backend

#### API Layer
La capa de API está centralizada en `src/api/index.ts`, implementando interfaces TypeScript para type safety:

```typescript
interface User {
  id: string;
  email: string;
  role: string;
  created_at: string;
  inmobiliaria_id: string;
}
```

Las operaciones de base de datos se realizan a través de Supabase Client:
```typescript
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('inmobiliaria_id', inmobiliariaId);
```

### 2.5 Componentes Principales

#### Paneles Específicos por Rol
- `AdminPanel`: Panel de administración con lista de usuarios
- `DevPanel`: Panel para desarrolladores
- `UserPanel`: Panel de usuario estándar
- `InmobiliariasPanel`: Panel específico para gestión inmobiliaria

#### Componentes Reutilizables
- `UserList`: Componente para mostrar listas de usuarios con diseño responsivo
- `Header`: Componente de encabezado global
- `Sidebar`: Barra lateral de navegación
- `Chart` y `PieChart`: Componentes para visualización de datos

## 3. Flujo de Datos

### 3.1 Autenticación
1. El usuario ingresa credenciales
2. `auth.ts` maneja la autenticación mediante Supabase
3. Se verifica el rol del usuario mediante `getUserRole()`
4. `RoleBasedRedirect` redirige al panel correspondiente

### 3.2 Paneles de Usuario
1. El componente principal (ej: `AdminPanel`) inicializa el estado
2. Se realiza una llamada a la API para obtener datos
3. Los datos se pasan a componentes hijo para su renderización
4. Se implementa manejo de estados de carga y error

## 4. Aspectos Técnicos Destacables

### 4.1 Seguridad
- Autenticación manejada por Supabase
- Redirecciones basadas en roles
- Variables de entorno para configuración sensible

### 4.2 Performance
- Lazy loading de componentes
- Estado local gestionado eficientemente
- Manejo de caché automático por Supabase

### 4.3 Mantenibilidad
- TypeScript para type safety
- Componentes modulares y reutilizables
- Estructura de archivos organizada y clara

## 5. Dependencias Críticas
- `@supabase/supabase-js`: Cliente de Supabase
- `@mui/material` y `@mui/icons-material`: Componentes de UI
- `chart.js` y `react-chartjs-2`: Visualización de datos
- `tailwindcss`: Utilidades CSS

## 6. Estructura de Base de Datos
### Tabla: users
- id (UUID)
- email (string)
- role (string)
- created_at (timestamp)
- inmobiliaria_id (UUID, foreign key)

## 7. Recomendaciones Técnicas
1. Implementar manejo de caché más robusto para datos frecuentes
2. Agregar interceptores para manejo global de errores
3. Implementar pruebas unitarias y de integración
4. Considerar implementar un sistema de logs centralizado
5. Evaluar la implementación de un estado global (Redux/Context) si la aplicación crece