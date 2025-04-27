# Dockerfile

# 1. Usa la imagen oficial de Node 20
FROM node:20

# 2. Crea y sitúa en /app
WORKDIR /app

# 3. Copia package.json y lockfile e instala deps
COPY package*.json ./
RUN npm install

# 4. Copia el resto del código
COPY . .

# 5. Expón el puerto que usará tu app
EXPOSE 8080

# 6. Al arrancar, primero corre migraciones en producción y luego el servidor
CMD ["sh", "-c", "npx sequelize-cli db:migrate --env production && node server/index.js"]
