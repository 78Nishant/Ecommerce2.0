export default function SignupPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form className="mt-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" />
          <button className="w-full bg-green-500 text-white p-2 rounded">Create Account</button>
        </form>
        <p className="mt-2 text-sm">
          Already have an account? <a href="/login" className="text-blue-500">Sign In</a>
        </p>
      </div>
    );
  }
  