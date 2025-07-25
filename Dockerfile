# Use official Node.js image as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on (change if not 3000)
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/server.js"]
