FROM node:4.6
WORKDIR /git-report-file-upload
ADD . /git-report-file-upload
RUN npm install
EXPOSE 3000
CMD npm start