# =====================================================
# DOCKER IMAGE - NESTJS APPLICATION
# =====================================================

FROM node:22-bookworm-slim@sha256:7af03b14a13c8cdd38e45058fd957bf00a72bbe17feac43b1c15a689c029c732
WORKDIR /var/www
RUN apt-get update && apt-get install -y bash
COPY run.sh /run.sh
COPY .env /var/www/cache/.env
RUN chmod +x /run.sh
EXPOSE ${PORT_OF_NESTJS}
CMD ["/run.sh"]
