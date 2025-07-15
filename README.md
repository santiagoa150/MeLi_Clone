> ℹ️ Nota: No es necesario configurar variables de entorno, ya que el proyecto contiene los environments con variables que no contienen información sensible.


# 🐳 Cómo levantar MeLi_Clone con Docker

Este documento explica cómo levantar el entorno completo del proyecto usando Docker y Docker Compose.

---

## ✅ Requisitos previos

Asegúrate de tener instalado:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Levantar el proyecto

Desde la raíz del proyecto, ejecuta:

```bash
docker compose up -d --build
```

---

# 📦 Cómo levantar el proyecto con NodeJS

Este documento describe los pasos necesarios para instalar y ejecutar el proyecto localmente usando [NodeJS](https://nodejs.org/) y [Yarn](https://yarnpkg.com/).

---

## ✅ Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (Versión 22 o superior)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

---

## 📦 Instalación de dependencias

Dentro de la carpeta /backend ejecuta:

```bash
yarn install
yarn build shared

yarn start gateway
yarn start products
yarn start reviews
yarn start sellers
yarn start payments
```


Dentro de la carpeta /frontend ejecuta:

```bash
yarn install
yarn dev
```