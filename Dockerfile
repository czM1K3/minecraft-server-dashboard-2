FROM node:18-alpine as builder

ENV SERVER_NAME="My Minecraft Server"
ENV SERVER_ADDRESS=localhost
ENV SERVERTAP_ADDRESS=http://localhost:4567
ENV SERVERTAP_KEY=secret
ENV MAP_ADDRESS=http://localhost:8100

WORKDIR /app
COPY package.json yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM lukechannings/deno:v1.29.1

WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN deno cache ./dist/server/entry.mjs

EXPOSE 8080

CMD ["run", "-A", "./dist/server/entry.mjs"]
