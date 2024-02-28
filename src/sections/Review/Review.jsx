export default function Review() {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="bg-[#BFAFF2] w-9/12 rounded-xl py-20 px-40 ">
          <h1 className="text-[#2B2B2B] font-bold text-3xl pb-16 leading-loose">
            “Wallet is a great product! All of my most important 
            information is there - credit cards, transit cards, boarding 
            passes, tickets, and more. And I don't need to worry because 
            it's all in one place! thanks!”
          </h1>
          <div className="flex items-center">
            <img src="/person.svg" alt="person" />
            <div className="flex flex-col items-center justify-center gap-3 pl-5">
              <h1 className="text-[#2B2B2B] opacity-40 text-xl">Johnny Owens</h1>
              <div className="flex gap-2">
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}