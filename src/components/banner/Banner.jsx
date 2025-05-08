import React from "react";

const Banner = () => {
  return (
    <div className="mb-32 p-8 h-180 bg-[url('C:\Projects\Auction-Gallery\public\images\Banner-min.jpg')] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-multiply">
      <div className="w-1/3 h-full ml-[10%] text-center flex flex-col justify-center gap-y-12 ">
        <h1 className="font-bold text-5xl">
          Chase Your Dream To Be the <span className="text-[#a05200]">ONE</span>
        </h1>
        <p className="text-xl">
          <span className="text-[#a05200] text-2xl font-bold">Auction</span>
          <span className="text-[#002cdd] text-2xl font-bold">Gallery</span> is
          the best option for your{" "}
          <span className="font-bold text-2xl text-[#1dee1d] bg-[#192b2db9]">
            Assets Growth
          </span>
          . It's <span>High Time ! </span>
          We are here to make your life Easier and Risk-free. Invest on things
          and get profit upto 500x .
        </p>
        <div className="text-xl">
          <button className="btn btn-info text-xl bg-white text-[#002cdd] hover:bg-[#a0520033] hover:text-[#1edd1e] border-b-4">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
