@echo off
echo ===================================================
echo   RDS.VZLA - LIMPIEZA DE NODE_MODULES EN GIT
echo ===================================================
echo.
echo [1/3] Removiendo node_modules del indice de Git (sin borrarlo localmente)...
git rm -r --cached node_modules 2>nul
git rm -r --cached dist 2>nul
git rm -r --cached .vscode 2>nul

echo.
echo [2/3] Creando commit para aplicar el .gitignore...
git add .gitignore
git commit -m "chore: remove node_modules and dist from git index, add gitignore"

echo.
echo [3/3] Subiendo cambios limpios a GitHub...
git push origin main

echo.
echo ===================================================
echo   LIMPIEZA COMPLETADA CON EXITO
echo ===================================================
pause
