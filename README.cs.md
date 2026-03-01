# 🚀 Dockerized Fastify & Prisma Boilerplate

Startovací šablona pro tvorbu **REST API** pomocí technologií **Fastify**, **TypeScript** a **Prisma ORM** s **PostgreSQL**. Vše je plně kontejnerizováno pro zajištění konzistentního vývojového prostředí.

## ✨ Vlastnosti

- **Fastify:** Extrémně rychlý webový framework pro Node.js s minimální režií.
- **Prisma 6:** Moderní ORM pro typově bezpečný přístup k databázi.
- **PostgreSQL:** Robustní relační databáze běžící v Docker kontejneru.
- **Docker Compose:** Orchestrace prostředí pro API i databázi.
- **TypeScript:** Striktní typování pro lepší udržovatelnost a vývojářský komfort.

## 🛠️ Požadavky

- [Docker](https://www.docker.com) & Docker Compose
- [Node.js](https://nodejs.org) (doporučena verze v20+ pro lokální vývoj)

## ⚡ Rychlý start

1. **Klonování repozitáře:**

    ```bash
    git clone <url-vaseho-repozitare>
    cd dockerized-ts-pg
    ```

2. **Nastavení proměnných prostředí:**
   Projekt obsahuje předkonfigurovaný soubor `.env`. Pro produkční nasazení nezapomeňte změnit přihlašovací údaje.

3. **Spuštění kontejnerů:**

    ```bash
    docker compose up -d
    ```

4. **Synchronizace databázového schématu:**

    ```bash
    npx prisma migrate dev --name init
    ```

API bude dostupné na adrese [http://localhost:3000](http://localhost:3000).

## 📑 API Reference

### Získat všechny úkoly (Todos)

`GET /todos`

### Vytvořit úkol (Todo)

`POST /todos`

- **Body:** `{ "title": "string" }`

#### Příklad použití pomocí cURL

```bash
curl -X POST http://localhost:3000/todos \
     -H "Content-Type: application/json" \
     -d '{"title": "Postavit úžasné věci 🚀"}'
```

## 📂 Struktura projektu

- `src/index.ts` - Vstupní bod a definice API cest.
- `prisma/schema.prisma` - Definice databázového schématu.
- `Dockerfile` - Vícefázový build pro optimalizované produkční obrazy.
- `compose.yml` - Orchestrace kontejnerů.

## 📜 Licence

Tento projekt je licencován pod MIT licencí.
