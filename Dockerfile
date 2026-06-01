# =====================================================
# DOCKER IMAGE - NESTJS APPLICATION
# =====================================================

FROM node:24@sha256:8530f76a96d88820d288761f022e318970dda93d01536919fbc16076b7983e63
WORKDIR /var/www
RUN apt-get update && apt-get install -y bash
COPY run.sh /run.sh
COPY .env /var/www/cache/.env
RUN chmod +x /run.sh
EXPOSE ${PORT_OF_NESTJS}
CMD ["/run.sh"]
