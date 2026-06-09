@echo off
echo Running local build test...
npm run build > build_log.txt 2>&1
echo Done! Build log saved to build_log.txt
