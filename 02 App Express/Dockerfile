FROM node:18.15.0-alpine

RUN apk add --no-cache tini
ENV NODE_ENV production
USER node
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm ci --only=production
COPY --chown=node:node . .

EXPOSE 8080

ENTRYPOINT [ "tini", "--" ]
CMD ["node", "src/index.js"]
