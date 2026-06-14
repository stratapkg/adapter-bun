# @stratapkg/adapter-bun

Prisma driver adapter for [Bun](https://bun.sh) — connects Prisma Client to `Bun.sql` (PostgreSQL) and `bun:sqlite`.

## Installation

```sh
bun add @stratapkg/adapter-bun
```

## Usage

### PostgreSQL via Bun.sql

```ts
import { PrismaClient } from './generated/client'
import { PrismaBunAdapter } from '@stratapkg/adapter-bun'

const sql = new Bun.SQL({ url: process.env.DATABASE_URL })
const adapter = new PrismaBunAdapter(sql)
const prisma = new PrismaClient({ adapter })
```

### SQLite via bun:sqlite

```ts
import { Database } from 'bun:sqlite'
import { PrismaClient } from './generated/client'
import { PrismaBunSQLiteAdapter } from '@stratapkg/adapter-bun/sqlite'

const db = new Database('dev.db')
const adapter = new PrismaBunSQLiteAdapter(db)
const prisma = new PrismaClient({ adapter })
```

## Requirements

- Bun >= 1.1
- Prisma >= 7.0

## Part of StrataPkg

`@stratapkg/adapter-bun` is the foundation of the [StrataPkg](https://github.com/stratapkg) ecosystem — a collection of Prisma extensions and adapters built for Bun and beyond.

```ts
const prisma = new PrismaClient({ adapter })
  .$extends(withSpatial())
  .$extends(withCache({ driver: redisDriver }))
  .$extends(withBlob({ driver: s3Driver }))
  .$extends(withChronicle({ driver: sqliteDriver }))
```

## License

MIT
