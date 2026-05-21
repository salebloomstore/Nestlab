# =========================
# BUILD STAGE
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

COPY ./app/package.json ./

RUN npm install

COPY ./app .

RUN npm run build


# =========================
# PRODUCTION STAGE
# =========================
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.output ./.output

ENV HOST=0.0.0.0
ENV PORT=4000

EXPOSE 4000

CMD ["node", ".output/server/index.mjs"]
