# Desafio Latam: REST API Design

A jewelry store needs to develop a REST API of a client application. 

In this challenge, a REST API is created that allows: 
1. Limit resources
2. Filter resources by fields
3. Paginate
4. HATEOAS data structure

The server provides the following routes:

- `GET: api/joyas` : Returns data with HATEOAS data structure and allows sorting, limiting and pagination of information.
- `GET: api/joyas/:id` :  Returns a specific jewel from the database
- `GET: api/joyas/filtros` : Filter the information by price_max, price_min, category and metal

<br>


Environment variables
-------
Connects node.js to the PostgreSQL server. To specify which database to connect to, create an `.env` file with the following structure, also available in the `.env.example` file.

To create the database follow the instruction of the `query.sql ` file.

```
.env

PGUSER=postgres 
PGHOST=localhost
PGPASSWORD=
PGDATABASE=joyas
PGPORT=5432
```

<br>


Using [Thunder Client for VS Code](https://www.thunderclient.com/) or [Postman](https://www.postman.com/) as a client application
-------
<br>

To get the complete inventory:
```html
METHOD: GET 
ENDPOINT: localhost:3000/api/joyas/
```
<br>

To sort (asc/desc), limit and pagination:

- sort[id]
- sort[nombre]
- sort[categoria]
- sort[metal]
- sort[stock]
- sort[precio]
- limit
- page

```html
METHOD: GET 
ENDPOINT: localhost:3000/api/joyas/
```

Example:
```
localhost:3000/api/joyas/?limit=5&sort[metal]=asc&page=2
```
```
localhost:3000/api/joyas/?sort[id]=desc
```

```
localhost:3000/api/joyas/?limit=6
```
```
localhost:3000/api/joyas/?limit=6&page=4
```
<br>
To get a specific jewel:

```
METHOD: GET
ENDPOINT: localhost:3000/api/joyas/{id}
```
<br>

To filter by:

- precio_min
- precio_max
- categoria
- metal


```
METHOD: GET
ENDPOINT: localhost:3000/api/joyas/filtros
```

Examples:
```
localhost:3000/api/joyas/filtros?precio_max=20000
```
```
localhost:3000/api/joyas/filtros?precio_max=20000&metal=plata
```

```
localhost:3000/api/joyas/filtros?precio_max=20000&metal=plata&categoria=collar
```


<br>

Database
-------
- [PostgreSQL](https://www.postgresql.org/)


Backend
-------

- [Node.js](https://nodejs.dev/)


Dependencies
-------

- Framework [Express](https://expressjs.com/es/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html) : For providing a Connect/Express middleware that can be used to enable CORS with various options 
- [node-postgres: pg](https://node-postgres.com/) : Collection of node.js modules to interact with PostgreSQL database 
- To safely create dynamic SQL queries: [pg-format](https://www.npmjs.com/package/pg-format)
- Environment variables [dotenv](https://www.npmjs.com/package/dotenv)
- To install dependencies run: `npm install`
- devDependencies [Nodemon](https://www.npmjs.com/package/nodemon) for run server and automatically restarting the node application when file changes, in the terminal run: `npm run dev`

<br>



