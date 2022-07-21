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

// Configurar scripts en package.json
// 1) Agregar en la sección de scripts lo siguiente: "build": "webpack",
// 2) Ejecutar "npm run build" - Con esto se crean dentro de la carpeta dist los archivos "index.html y app.bundle.js"
// 3) agregar en la sección de scripts: "dev": "webpack serve --mode development",
// 4) Ejecutar "npm run dev" para compilar y ejecutar servidor en http://localhost:8080

// Instalar dependencias de React
// 1) npm i react react-dom

// Instalar BABEL para trabajar con sintaxis JSX
// 1) npm i -D @babel/core @babel/preset-env babel-loader @babel/preset-react
// 2) agregar la siguiente configuración en webpack.config.js
/*
,
    module: {
        rules: [
            {   test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
*/

// Instalar StandardJS, nos servirá de Linter para una mejor escritura de JavaScript/react
// 1) npm i -D standard

// Instalar Styled-Components
// 1) npm i styled-components

// Instalar React Apollo para conectarnos a un servidor GraphQL
// 1) npm install @apollo/client graphql

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from './Context';

const client = new ApolloClient({
    uri: 'https://petgram-server-mgoscar2018.vercel.app/graphql',
    cache: new InMemoryCache(),
})

console.log('Mi proyecto con REACT Avanzado');
// ReactDOM.render('Hola Platzi!',document.body); //Versión antigua
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>
);
