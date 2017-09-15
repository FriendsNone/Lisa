@echo OFF
echo You will install the requirements for S-Bot!
PAUSE
echo Installing following Packages: discord.js, discord.js-commando, path, sequelize, moment, util
echo Note that you can ignore Warnings! Also, make sure you have installed npm (Node Package Manager)
TIMEOUT 10
echo [1] Installing / Updating discord.js
call npm install --save discord.js@11.2.0
echo [2] Installing / Updating discord.js-commando
call npm install --save discord.js-commando
echo [3] Installing / Updating path
call npm install --save path
echo [4] Installing / Updating sequelize
call npm install --save sequelize
echo [5] Installing / Updating moment
call npm install --save moment
echo [6] Installing / Updating util
call npm install --save util
echo [Done] Installed Packages (Except there were errors)
echo You can try to run the Bot now!
PAUSE