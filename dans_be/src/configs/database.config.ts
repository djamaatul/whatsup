import { DataSource } from "typeorm";
import fs from 'fs/promises';

const database = new DataSource({
	type: 'sqlite',
	database: '../../../dans_SQL/database.db',
	synchronize: true,
	entities: [__dirname+'/../entities/*.ts'],
	// logging: true
})

database.initialize().then(async () => {
	const sql = await fs.readFile(__dirname + '/../../../dans_SQL/database.sql', {
		encoding: 'utf8'
	});
	await database.query(sql);
});

export default database;