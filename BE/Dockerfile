FROM node:20

WORKDIR /var/www

RUN apt-get update && apt-get install -y bash

COPY run.sh /run.sh
COPY .env /cache/.env
RUN chmod +x /run.sh

EXPOSE 3000

CMD ["/run.sh"]
