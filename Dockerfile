# for now.sh deploys
FROM node:alpine
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm install
COPY . .
RUN export NOW=true
RUN npm run build
RUN mv .vuepress/dist/ /public