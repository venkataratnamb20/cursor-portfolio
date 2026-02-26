# Portfolio Docker targets
.PHONY: docker-build docker-run docker-up docker-down docker-logs docker-scale

docker-build:
	docker build -t portfolio2-app:latest .
	cd nginx && docker build -t portfolio2-nginx:latest .

docker-run:
	docker run -p 8080:8080 --rm portfolio2-app:latest

docker-up:
	docker compose up --build -d

docker-down:
	docker compose down

docker-scale:
	docker compose up --build -d --scale app=2

docker-logs:
	docker compose logs -f nginx
