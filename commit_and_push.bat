@echo off
echo ===================================================
echo   RDS.VZLA - COMMIT & PUSH DE CAMBIOS DE FOOTER
echo ===================================================
echo.

echo [1/3] Preparando cambios (git add)...
git add .

echo.
echo [2/3] Creando commit...
git commit -m "design: update copyright notice to RDS Agencia Audiovisual and add Web por Daez credit link next to Audio Sync"

echo.
echo [3/3] Subiendo cambios a GitHub...
git push origin main

echo.
echo ===================================================
echo   PROCESO COMPLETADO
echo ===================================================
pause
