# =====================================================
# DOCKER IMAGE - NESTJS APPLICATION
# =====================================================

FROM node:20@sha256:8f693eaa7e0a8e71560c9a82b55fd54c2ae920a2ba5d2cde28bac7d1c01c9ba5
WORKDIR /var/www
RUN apt-get update && apt-get install -y bash
COPY run.sh /run.sh
COPY .env /var/www/cache/.env
RUN chmod +x /run.sh
EXPOSE 3000
CMD ["/run.sh"]
