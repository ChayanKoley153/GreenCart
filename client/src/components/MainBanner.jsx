import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Background images for different screen sizes */}
      <img src={assets.main_banner_bg} alt="banner" className="w-full hidden md:block" />
      <img src={assets.main_banner_bg_sm} alt="banner" className="w-full md:hidden" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center px-4 md:pl-20 lg:pl-28 pb-24 md:pb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-[18rem] md:max-w-md lg:max-w-3xl leading-tight lg:leading-tight">
          Freshness You Can Trust, Savings You Will Love!
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6 font-medium">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white"
          >
            Shop now
            <img
              className="md:hidden transition group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          <Link
            to="/products"
            className="group hidden md:flex items-center gap-2 px-9 py-3 text-black hover:underline transition"
          >
            Explore deals
            <img
              className="transition group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
