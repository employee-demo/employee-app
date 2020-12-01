FROM node:latest as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install react-scripts -g
RUN npm install 
COPY . /app
RUN npm run build


FROM nginx:1.16.0-alpine

# copy from build to nginx root dir
COPY --from=build /app/build /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]