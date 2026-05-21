# =========================
# BUILD STAGE
# =========================
FROM node:22-alpine AS builder

WORKDIR /app

COPY ./app/package*.json ./

RUN npm install

COPY ./app .

RUN npm run build


# =========================
# PRODUCTION STAGE
# =========================
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/.output ./.output

EXPOSE 4000

ENV PORT=4000

CMD ["node", ".output/server/index.mjs"]
