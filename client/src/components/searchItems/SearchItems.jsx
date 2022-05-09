const SearchItems = () => {
  return (
    <>
      <div className="searchItem">
        <img
          src="https://www.shilla.net/images/contents/accmo/ACCMO_INDEX/R000000013SJ_KR.jpg"
          alt="serch-item"
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Hotel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">search item's features</span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>6.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$100</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItems;
