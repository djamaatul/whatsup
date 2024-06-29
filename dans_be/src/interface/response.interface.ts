export default interface Response {
	message: string,
	data: unknown
}

export enum Message {
	Exist = 'Data Sudah Ada',
	Success = 'Sukses',
	NotFound = 'Data Tidak Ditemukan',
	RouteNotFound = 'Rute Tidak Ditemukan',
	WrongPassword = 'Password Salah',
	NoSession = 'Tidak Ada Sesi',
	InternalServerError = 'Kesalahan Internal'
}

export enum Code {
	OK = 200,
	Created = 201,
	Accepted = 202,
	TemporaryRedirect = 307,
	PermanentRedirect = 308,
	BadRequest = 400,
	Unauthorized = 401,
	PaymentRequired = 402,
	Forbidden = 403,
	NotFound = 404,
	MethodNotAllowed = 405,
	RequestTimeout = 408,
	Conflict = 409,
	TooManyRequests = 429,
	InternalServerError = 500,
	NotImplemented = 501,
	BadGateway = 502,
	ServiceUnavailable = 503,
}