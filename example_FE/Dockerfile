FROM nginx:alpine

# Xóa config mặc định
RUN rm -rf /usr/share/nginx/html/*

# Copy source web
COPY src/ /usr/share/nginx/html/

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Script chạy (optional)
COPY run.sh /run.sh
RUN chmod +x /run.sh

EXPOSE 80

CMD ["/run.sh"]
