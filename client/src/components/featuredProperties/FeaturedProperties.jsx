import useFetch from './../../hooks/useFetch';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');

  return (
    <>
      <div className="fp">
        {loading ? (
          'Now Loading, Please Wait'
        ) : (
          <>
            {data.map((item, i) => (
              <div key={item._id} className="fpItem">
                <img className="fpImg" src={item.photos[0]} alt="homes" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Staring from ${item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default FeaturedProperties;
