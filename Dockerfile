FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

### make an image
# docker build -t web-portfolio-3-image .

### check all images
# docker image ls

### run container with image. -d means don't attach the container, run in background. -p 3000:3000 means
### what?
# docker run -d -p 3000:3000 --name web-portfolio-3-app web-portfolio-3-image

### go into bash terminal of the container (then do ls to look at files)
# docker exec -it web-portfolio-3-app bash