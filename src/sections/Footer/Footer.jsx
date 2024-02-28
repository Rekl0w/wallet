export default function Footer() {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="border-t-2 w-11/12 border-[#555555]"></div>
      </div>
      <div className="bg-[#2B2B2B] py-20 flex justify-between px-20">
        <div className="flex-col flex justify-between">
          <h1 className="text-white font-semibold text-3xl">Wallet</h1>
          <ul className="flex text-white gap-5 text-xl font-semibold">
            <li>
              <button>© Wallet 2024</button>
            </li>
            <li>
              <button>Privacy policy</button>
            </li>
            <li>
              <button>Cookies policy</button>
            </li>
            <li>
              <button>Terms of use</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-white">Updates right to your Inbox</p>
          <div className="flex gap-5">
            <input
              type="email"
              placeholder="Email Adress"
              className="rounded-lg bg-[#333333] py-4 pl-8 pr-32 w-full text-white opacity-40"
            />
            <button className="ml-4 bg-[#BFAFF2] text-[#2B2B2B] text-lg px-16 py-4 rounded-xl hover:bg-[#A89CE6] transition duration-300 ease-in-out">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
