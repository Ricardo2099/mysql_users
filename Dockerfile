# Imagen base con Node.js
FROM node:20

# Establecer directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 8080

# Comando para iniciar el servidor
CMD ["node", "server/index.js"]
