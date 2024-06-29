'use client'
import Button from '@/components/Button'
import Form from '@/components/Form'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { z } from 'zod'

function LoginForm() {
	const router = useRouter();
	const fields = useMemo(() => [{ name: 'email', type: 'email', label: 'Email' }, { name: 'password', type: 'password', label: 'Password' }], []);

	const schema = z.object({
		email: z.string().email(),
		password: z.string().min(3),
	});

	const handleSubmit = async (f: z.infer<typeof schema>) => {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/v1/auth/login`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			credentials: 'same-origin',
			body: JSON.stringify({
				email: f.email,
				password: f.password
			}),
		}).catch(() => null);

		if (!response) return alert('Masuk Gagal');

		if (!response.ok) {
			alert(await response.json().then(e => e.message))
			return;
		}

		router.push('/')
	}
	return (
		<Form className='flex flex-col gap-4' fields={fields} schema={schema} onSubmit={handleSubmit}>
			<Button type='submit'>Login</Button>
		</Form>
	)
}

export default LoginForm