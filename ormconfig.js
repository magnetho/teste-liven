module.exports = {
   "type": "postgres",
   "host": process.env.CONN_TYPEORM_HOST,
   "port": process.env.CONN_TYPEORM_PORT,
   "username": process.env.CONN_TYPEORM_USERNAME,
   "password": process.env.CONN_TYPEORM_PASSWORD,
   "database": process.env.CONN_TYPEORM_DATABASE,
   "entities": [
      "dist/**/*.entity.js"
   ],
   "migrations": [
      "dist/migrations/**/*.js"
   ],   
   "migrationsTableName": "migrations",
   "migrationsRun": true
}