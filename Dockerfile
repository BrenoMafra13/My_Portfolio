# Use Node.js 22
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm install

# Copy source
COPY . .

# Build the project
RUN npm run build

# Expose the port
EXPOSE 4173

# Start the preview server
CMD ["npm", "run", "preview", "--", "--host", "--port", "4173"]

