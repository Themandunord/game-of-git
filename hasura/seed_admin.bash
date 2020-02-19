export SQL_INSERT_ADMIN_SQL_QUERY="INSERT into public.users(email, git_login, name, role, password) VALUES ('${ADMIN_EMAIL}','${ADMIN_GIT_LOGIN}', '${ADMIN_NAME}', 'ADMIN', '${ADMIN_PASSWORD}');"

echo $SQL_INSERT_ADMIN_SQL_QUERY | docker-compose exec -T postgres psql -U ${DB_USER}