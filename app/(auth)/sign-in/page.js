import Link from "next/link";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <form className="text-center flex flex-col justify-between items-center bg-slate-900 w-full max-w-md rounded-[6px] p-10 shadow shadow-indigo-900">
        <h1 className="font-medium text-3xl mb-6">Login</h1>
        <input
          type="text"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="User Name"
        />
        <input
          type="password"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="Password"
        />
        <p className="mb-6">
          Don't have an account?{" "}
          <Link href="/sign-up">
            <span className="cursor-pointer text-blue-400">signup</span>
          </Link>
        </p>
        <button className="bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
