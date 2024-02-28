export default function Questions() {
  return (
    <div className="py-20">
      <div className="flex justify-around pb-20 items-center">
        <div className="flex-col flex justify-center">
          <h1 className="text-8xl font-semibold text-white leading-snug">
            Questions? <br /> Let’s talk
          </h1>
          <p className="text-2xl text-white mt-5 leading-loose opacity-40">
            Contact us through our 24/7 live chat. <br /> We’re always happy to help!
          </p>
          <button className="bg-[#F8D57E] text-[#2B2B2B] text-lg px-16 py-4 mt-8 rounded-xl hover:bg-[#f7ce65] transition duration-300 ease-in-out  flex-shrink-0 w-60">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="/1000x800.gif"
            className="w-[600px] h-[500px] rounded-3xl"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}
