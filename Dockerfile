FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/
COPY /build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
