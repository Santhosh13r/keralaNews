# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite uses by default
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]



