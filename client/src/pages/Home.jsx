import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { QUERY_PRODUCTS } from "../utils/queries";

import SplashBannerLg from "../components/SplashBannerLg";
import HomeCard from "../components/HomeCard";
import { useApp } from "../utils/app-context";

const features = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMFFkFoVErSg37XR_54LGWlYXGSoSe5yf0q7DWHCT-DWcKYBuIU0gfvbyrdEZZhS46KQPw0fHL4H5t4GC5ULHfP3bjaVw47gTdyoXSTAdfJ0B_u4AqrapWTY3A7uU3SAQKbKwjU7Cnis5COQ4ObkjIf=w1024-h1024-s-no-gm",
    title: "Browse Our Products",
    splash: "New products featured weekly",
    link: "/shop",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczM2IIPGF8Ss1sj6yhFQ5_1yHfmgMKe7NBiVGnC_UEmILWn5FemRDxbG-vnhX3BRxFYzQYWRD2vB9888XWitniYGuPLG4B2W7rJM8HateKhYDr7rzvs09xTcM5qsgOpsaLzkyFryxCp4YhRsdWu27hY9=w1508-h1508-s-no-gm",
    title: "Learn About The Fair",
    splash: "Who we are",
    link: "/about",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNSbsUmXSrfh1AMAFUdA1oh80F4qPYDlh8p_ZMvmoA8tqUbmC3p_xk1fpKBOJ1-KjcxL5k5hhCeKrT4wC6B6Goo2uatTEs9CwQkv7l0rHZpX8tJptAlhFEXKFLzHuzey7ZgAHJJUxx0wYlRXl9UFvkA=w1024-h1024-s-no-gm",
    title: "Meet The Artists!",
    splash: "Save your Favorites!",
    link: "/artists",
  },
];

const Home = () => {
  const { user } = useApp();
  console.log("USER HOME:", user);
  return (
    <div>
      <SplashBannerLg />
      <div className="w-screen flex justify-center mb-2">
        <div className="flex w-4/5 justify-center py-6 items-center border-black bg-transparent text-black">
          <h2 className="text-xl lg:text-xl">Hand made directly by the artists for you!</h2>
        </div>
      </div>
      <div className="w-screen flex justify-center mb-2">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <HomeCard key={index} feature={feature} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
