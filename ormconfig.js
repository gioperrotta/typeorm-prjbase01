module.exports = {
  "type": "postgres",
  "url":process.env.DATABASE_URL,
  "entities": [
  //  "src/database/models/**/*.ts"
    "dist/database/models/**/*.js"
 ],
 "migrations": [
 // "src/database/migrations/**/*.ts"
  "dist/database/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/database/models"
  }
}
