// PASOS PARA INICIAR ESTE PROYECTO
// 1) npm init -y
// 2) npm install webpack webpack-cli --save-dev
// 3) crear carpeta "src" y dentro un archivo "index.js"
// 4) ejecutar npx webpack (por defecto busca src/index.js), se crea una carpeta "dist" con un  archivo "main.js"
// 5) ejecutar aplicación con "node ./dist/main.js"

// Instalar dependencias para WEB
// 1) npm install -D html-webpack-plugin
// 2) npm install -D webpack-dev-server
// 3) crear archivo en raíz "webpack.config.js"

//Configurar scripts en package.json
// 1) Agregar en la sección de scripts lo siguiente: "build": "webpack",
// 2) Ejecutar "npm run build" - Con esto se crean dentro de la carpeta dist los archivos "index.html y app.bundle.js"
// 3) agregar en la sección de scripts: "dev": "webpack serve --mode development",
// 4) Ejecutar "npm run dev" para compilar y ejecutar servidor en http://localhost:8080


console.log('Mi proyecto con REACT Avanzado');