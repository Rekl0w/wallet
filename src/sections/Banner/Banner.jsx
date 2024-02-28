export default function Banner() {
  return (
    <div className="py-20">
      <div className="flex justify-around pb-20 items-center px-16">
        <div className="flex-col flex justify-center">
          <h1 className="text-8xl font-semibold text-white leading-snug">
            Wallet, the <br /> future of money
          </h1>
          <p className="text-2xl text-white mt-5 leading-loose opacity-40">
            Make anything possible with Wallet. The world’s most powerful <br />{" "}
            and easy to use app.
          </p>
          <button className="bg-[#F8D57E] text-[#2B2B2B] text-lg px-16 py-4 mt-8 rounded-xl hover:bg-[#f7ce65] transition duration-300 ease-in-out  flex-shrink-0 w-60">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="/1000x892.gif"
            className="w-[600px] h-[592px] rounded-3xl"
            alt="banner"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mx-40 py-16 border-b-2 border-t-2 border-[#555555]">
        <img src="/brands.svg" className=" w-8/12" alt="brands" />
      </div>
    </div>
  );
}
