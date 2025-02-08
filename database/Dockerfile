FROM mysql:8.0

# Copy initialization scripts
COPY init.sql /docker-entrypoint-initdb.d/

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=shopping_db

# Expose the default MySQL port
EXPOSE 3306
