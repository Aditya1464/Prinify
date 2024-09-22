import "./ondemand.css";
function OnDemand() {
  return (
    <div className="ondemand">
      <div className="ondemand-image">
        <img
          src="../../public/Print-on-Demand-an-Open-Opportunity.jpg"
          alt="ondemand-image"
        />
      </div>
      <div className="ondemandtext">
        <h1 className="ondemand-heading">
          Easily add your design to a wide range of products
        </h1>
        <p className="ondemand-paragraph">
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a href="" className="all-product-link">
          All products <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default OnDemand;
