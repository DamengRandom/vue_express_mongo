FROM alpine:latest
RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4932

ENTRYPOINT ["node"]

CMD ["server/index.js"]
