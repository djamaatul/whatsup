import Link from "next/link";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-4xl font-bold hover:text-primary">MASUK</h1>
      <LoginForm />
      <p>Belum punya akun ? daftar <Link href='/register' className="text-primary">disini</Link></p>
    </main>
  );
}
