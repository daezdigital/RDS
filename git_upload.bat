@echo off
echo ===================================================
echo   RDS.VZLA - COMMIT & PUSH DE CAMBIOS DE AUDITORIA
echo ===================================================
echo.

echo [1/3] Preparando cambios (git add)...
git add .

echo.
echo [2/3] Creando commit...
git commit -m "fix: resolve circular-gallery typescript error, refine action buttons spacing, and update under construction modal branding"

echo.
echo [3/3] Subiendo cambios a GitHub...
git push origin main

echo.
echo ===================================================
echo   PROCESO COMPLETADO
echo ===================================================
pause
