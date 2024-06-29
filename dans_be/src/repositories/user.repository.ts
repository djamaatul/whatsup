import { Like, Repository } from 'typeorm'
import database from "../configs/database.config";
import { User } from "../entities/user.entity";
import { Pagination } from '../interface/pagination.interface';

export default class UserRepository {
	public static repository: Repository<User> = database.getRepository(User);
	static async getUsers({ limit = 5, offset = 0, name = '' }: Partial<Pagination> & { name?: string }) {
		return this.repository.find({
			where: {
				name: Like(`%${name}%`)
			},
			skip: offset,
			take: limit
		})
	}
	static async getUser({ user_id, email }: { name?: string, user_id?: number, email?: string }) {
		return this.repository.findOne({
			where: {
				user_id,
				email
			},
		})
	}
	static async saveUser(user: User) {
		return this.repository.save(user);
	}
}