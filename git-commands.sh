# Inicializar repositorio git
git init

# Agregar todos los archivos excepto los ignorados
git add .

# Commit inicial
git commit -m "feat: implementación inicial del panel de administración"

# Reemplazar rama master con main
git branch -M main

# Agregar remoto
git remote add origin https://github.com/qtoexdj/NV-1.git

# Forzar push al remoto (para reemplazar el contenido existente)
git push -f origin main