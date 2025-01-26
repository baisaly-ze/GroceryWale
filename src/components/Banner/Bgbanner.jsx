import React from "react";
import '../../assets/css/bgbanner.css'
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const Bgbanner = () => {
  return (
    <div className="grids">
      {/* Left Banner */}
      <div
        className="left_bg"
        style={{
          backgroundImage: `url(${banner1})`,
        }}
      >
        <div className="imgtxt">
          <h2 className="bgtxt">Items on SALE</h2>
          <p className="txt2">Discounts up to 30%</p>
          <button className="btn1">SHOP NOW</button>
        </div>
      </div>

      {/* Right Banners */}
      <div className="grid3">
        {/* Combo Offers */}
        <div
          className="bg2"
          style={{
            backgroundImage: `url(${banner2})`,
          }}
        >
          <div className="imgtxt2">
            <h2 className="bgtxt2">Combo offers</h2>
            <p className="txt3">Discounts up to 50%</p>
            <button className="btn2">SHOP NOW</button>
          </div>
        </div>

        {/* Discount Coupons */}
        <div
          className="bg3"
          style={{
            backgroundImage: `url(${banner3})`,
          }}
        >
          <div className="imgtxt3">
            <h2 className="bgtxt3">Discount Coupons</h2>
            <p className="txt4">Discounts up to 40%</p>
            <button className="btn3">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgbanner;