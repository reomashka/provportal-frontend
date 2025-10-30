FROM node:22 as builder
WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

RUN ls -la /app/dist

# Этап production
FROM nginx:1.27-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]