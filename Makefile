start:
	docker compose up -d

kill:
	docker ps -a -q | xargs -n 1 -P 8 -I {} docker stop {}

bash-backend:
	docker exec -it btx_backend sh