FROM node:18.16.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.25.0-alpine
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/apps/chat-app /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
