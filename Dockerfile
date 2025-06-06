FROM node:22 as builder

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

# Этап production
FROM nginx:1.21.4

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]