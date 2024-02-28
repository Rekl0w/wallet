export default function Topbar() {
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="text-4xl font-bold text-white">
              Wallet
            </a>
          </div>
          <div className="flex items-center gap-10">
            <button href="/" className="text-white text-lg">
              Sign Up
            </button>
            <button
              href="/"
              className="ml-4 bg-[#BFAFF2] text-[#2B2B2B] text-lg px-16 py-4 rounded-xl hover:bg-[#A89CE6] transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
