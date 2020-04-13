@echo off
Color 63
cls
echo.
echo Qual seu nome...
echo.
title name=%name%
cls
echo.
echo Olá %name%, bem vindo a IA Cidada!
echo.
pause
:start
cls
echo.
echo voce sabe o que é a Covid 19....
echo.
echo em caso de sintomas como:
echo.
echo febre, dor de cabeça, falta de ar e coriza, procure um medico!
echo.
set /p where=
echo
if %febre% equ 38º goto procure um medico
if %dor de cabeça% equ outros sintomas goto procure um medico
if %Sintomas leves e coriza% equ 37,9º goto fique em quarentena
:procure um medico
cls
echo ok! Procure um medico!
echo.
pause
exit
:procure um medico
cls
echo ok! Procure um medico!
echo.
pause
exit

