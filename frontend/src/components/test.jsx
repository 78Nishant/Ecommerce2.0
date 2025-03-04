import { getUser } from '@/lib/auth';

export default async function ProfilePage() {
  const user = await getUser();

  if (!user) {
    return <p>Please <a href="/api/auth/login">Login</a></p>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <img src={user.picture} alt={user.name} />
      <p>Email: {user.email}</p>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}
