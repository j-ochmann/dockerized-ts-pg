# 🚀 Dockerized Fastify & Prisma Boilerplate

Starter template for building **REST APIs** using **Fastify**, **TypeScript**, and **Prisma ORM** with **PostgreSQL**. Everything is fully containerized for a consistent development experience.

## ✨ Features

- **Fastify:** Extremely low overhead and the fastest web framework for Node.js.
- **Prisma 6:** Next-generation ORM for Type-safe database access.
- **PostgreSQL:** Robust relational database running in a Docker container.
- **Docker Compose:** Orchestrated environment for both the API and the Database.
- **TypeScript:** Strict typing for better maintainability and developer experience.

## 🛠️ Prerequisites

- [Docker](https://www.docker.com) & Docker Compose
- [Node.js](https://nodejs.org) (v20+ recommended for local development)

## ⚡ Quick Start

1. Clone the repository:

    ```bash
    git clone <your-repo-url>
    cd dockerized-ts-pg
    ```

2. Setup environment variables:
The project includes a pre-configured .env file. For production, make sure to change the credentials.

3. Spin up the containers:

    ```bash
    docker compose up -d
    ```

4. Run database migrations:
Since the DB is running in Docker, run this command to sync your Prisma schema:

```bash
npx prisma migrate dev --name init
```

The API will be live at [http://localhost:3000](http://localhost:3000).

## 📑 API Reference

### Get all Todos

`GET /todos`

### Create a Todo

`POST /todos`

- **Body:** `{ "title": "string" }`

#### Example usage with cURL

```bash
curl -X POST http://localhost:3000/todos \
     -H "Content-Type: application/json" \
     -d '{"title": "Build amazing things 🚀"}'
```

## 📂 Project Structure

- `src/index.ts` - Entry point and API routes.
- `prisma/schema.prisma` - Database schema definition.
- `Dockerfile` - Multi-stage build for optimized production images.
- `compose.yml` - Container orchestration.

## 📜 License

This project is licensed under the MIT License.
