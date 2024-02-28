export default function Example() {
    return (
      <div className="pb-20">
        <div className="py-20 h-full w-full flex justify-center items-center">
          <img src="/example.svg" className="w-9/12" alt="example" />
        </div>
        <div className="flex justify-around gap-5 items-center px-40">
          <div className="flex-col flex items-center justify-center text-center gap-5">
            <img src="/creditCard.svg" alt="creditCard" />
            <h1 className="text-xl font-bold text-white text-center">
              Customizable card
            </h1>
            <p className="text-[#555555] text-xl leading-relaxed">
              Custom your own card for <br /> your exact incomes and <br />{" "}
              expenses needs.
            </p>
          </div>
          <div className="flex-col flex items-center justify-center text-center gap-5 ">
            <img src="/coin.svg" alt="creditCard" />
            <h1 className="text-xl font-bold text-white text-center">
              No payment fee
            </h1>
            <p className="text-[#555555] text-xl leading-relaxed">
              Transfer your payment all <br /> over the world with no <br />{" "}
              payment fee.
            </p>
          </div>
          <div className="flex-col flex items-center justify-center text-center gap-5">
            <img src="/wallet.svg" alt="creditCard" />
            <h1 className="text-xl font-bold text-white text-center">
              All in one place
            </h1>
            <p className="text-[#555555] text-xl leading-relaxed">
              The right place to keep your <br /> credit and debit cards, <br />{" "}
              boarding passes & more.
            </p>
          </div>
        </div>
      </div>
    );
    }