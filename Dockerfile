FROM node:22 as builder

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

COPY .htpasswd /etc/nginx/.htpasswd

RUN yarn

COPY . .

RUN yarn build

# Этап production
FROM nginx:1.27-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]