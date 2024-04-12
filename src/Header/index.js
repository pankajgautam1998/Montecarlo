import {
  FavoriteBorder,
  LocalMall,
  LocalShipping,
  PermIdentity,
  Search,
} from "@mui/icons-material";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-[4rem] ">
        <div className="flex gap-5 *:items-center">
          <div className="flex gap-3">
            <div>
              <button>
                <img
                  className="w-[12rem] items-center"
                  src="https://www.montecarlo.in/cdn/shop/files/Vector_37_300x.png?v=1687289201"
                  alt=""
                />
              </button>
            </div>
            <div className="h-10 bg-black w-[1px]"></div>
          </div>
          <div className="flex gap-3">
            <div>
              <button>
                <img
                  className="w-[6rem]"
                  src="https://www.montecarlo.in/cdn/shop/files/Group_22604_160x.png?v=1687281354"
                  alt=""
                />
              </button>
            </div>
            <div className="h-10 bg-black w-[1px]"></div>
          </div>
          <div>
            <button>
              <img
                className="w-[5rem]"
                src="https://www.montecarlo.in/cdn/shop/files/Monte_Carlo_Home-01_160x.svg?v=1696509215"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <button>
              <p>
                {" "}
                <FavoriteBorder />
              </p>
              Wishlist
            </button>
          </div>
          <div>
            <button>
              <p>
                <PermIdentity />
              </p>
              Login/Signup
            </button>
          </div>
          <div>
            <button>
              <p>
                <LocalShipping />
              </p>
              Track Order
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[4rem] items-center bg-blue-900 text-white h-16 text-xl pl-[25rem] ">
        <div className=" flex gap-5">
          <div className=" relative group ">
            <div className="hover:underline">MEN</div>
            <div className=" top-16  absolute hidden group-hover:block hover:bg-white z-50">
              <p className="bg-white text-black">hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>
          </div>
          <div>WOMEN</div>
          <div>KIDS</div>
          <div>FOOTWEAR</div>
          <div>HOME FURNISHING</div>
          <div>ACTIVE WEAR</div>
          <div>GIFT CARD</div>
        </div>
        <div className="flex gap-5">
          <div>
            <Search />
            Search
          </div>

          <div>
            <LocalMall />
            Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
