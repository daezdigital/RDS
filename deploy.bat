@echo off
echo ===================================================
echo   RDS.VZLA - SCRIPT DE DESPLIEGUE A GITHUB
echo ===================================================
echo.

REM Verificar si Git está inicializado
if not exist .git (
    echo [1/4] Inicializando repositorio Git...
    git init
) else (
    echo [1/4] Repositorio Git ya inicializado.
)

echo.
echo [2/4] Vinculando repositorio remoto...
REM Remover si ya existe para evitar errores y agregar el nuevo
git remote remove origin 2>nul
git remote add origin https://github.com/daezdigital/RDS.git

echo.
echo [3/4] Creando commit con cambios...
git add .
git commit -m "feat: add under construction page with cinematic video background and vercel config"

echo.
echo [4/4] Subiendo cambios a la rama principal (main)...
git branch -M main
git push -u origin main

echo.
echo ===================================================
echo   PROCESO COMPLETADO
echo ===================================================
pause
