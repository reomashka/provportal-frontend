FROM node:22 as builder
WORKDIR /app

COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

# Этап production
FROM nginx:1.27-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]