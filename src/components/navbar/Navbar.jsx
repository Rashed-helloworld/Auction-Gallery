import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm h-28 flex flex-between">
      <div className="flex-1">
        <a className="text-4xl font-bold ml-16">
          <span className="text-yellow-700 font-bold">Auction</span>
          <span className="text-blue-700 font-bold">Gallery</span>
        </a>
      </div>
      <div className="text-xl text-black flex-1 flex gap-6 justify-end mr-20">
        <p className="btn bg-blue-700 text-yellow-200 border-none">Home</p>
        <p className="btn bg-blue-700 text-yellow-200 border-none">Products</p>
        <p className="btn bg-blue-700 text-yellow-200 border-none">Contact Us</p>
        <p className="btn bg-blue-700 text-yellow-200 border-none">About</p>
      </div>
      <div className="flex gap-12 mr-8">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#f0be00"
              >
                {" "}
                <path
                  strokeLinecap="square"
                  strokeLinejoin="square"
                  strokeWidth="3"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-md indicator-item">0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 border-b-2 shadow"
          ></div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar w-16"
          >
            <div className="rounded-full">
              <img
                className="w-24"
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
