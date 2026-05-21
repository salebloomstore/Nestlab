# =========================
# BASE
# =========================
FROM node:20-alpine

WORKDIR /app

# =========================
# COPY RUN SCRIPT
# =========================
COPY ./run.sh /run.sh

RUN chmod +x /run.sh

# =========================
# START SCRIPT
# =========================
CMD ["/run.sh"]
