# Portfolio Docker targets
.PHONY: docker-build docker-run docker-up docker-down docker-logs

docker-build:
	docker build -t portfolio2:latest .

docker-run:
	docker run -p 8080:8080 --rm portfolio2:latest

docker-up:
	docker compose up --build -d

docker-down:
	docker compose down

docker-logs:
	docker compose logs -f portfolio
