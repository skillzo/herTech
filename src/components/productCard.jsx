import React from "react";


function ProductCard (props) {
    const avatar = require("./Assets/icons/avatar.png");
return (
    <div className="product-management">
    <div>
      <h3>{props.title}</h3>
      <div className="product-management-details">
        <div >
          <img
            className="product-management-details-image"
            src={avatar}
            alt=""
          />
        </div>
        <div className="product-management-details-number">
          {" "}
          <h3>{props.numbers}</h3>
        </div>
      </div>
    </div>

    <div>
      <button className="button4 see-all2">
        Join <span></span>
      </button>
    </div>
  </div>
);
}

export default ProductCard;