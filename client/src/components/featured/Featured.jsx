import useFetch from './../../hooks/useFetch';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=busan,tokyo,new-york'
  );

  return (
    <>
      <div className="featured">
        {loading ? (
          'Now Loading, Please Wait'
        ) : (
          <>
            <div className="featuredItem">
              <img
                className="featuredImg"
                src="https://content.r9cdn.net/rimg/dimg/c4/0f/9c37219a-city-41830-1658658324c.jpg?crop=true&width=1366&height=768&xhint=2264&yhint=1814"
                alt="Busan"
              />
              <div className="featuredTitles">
                <h1>Busan</h1>
                <h2>{data[0]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                className="featuredImg"
                src="https://cms.finnair.com/resource/blob/720178/0511bb2bc91953d4ef3506d00933819b/tokyo-main-data.jpg"
                alt="Tokyo"
              />
              <div className="featuredTitles">
                <h1>Tokyo</h1>
                <h2>{data[1]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                className="featuredImg"
                src="http://www.uhaknet.co.kr/data/cheditor4/1507/H6MDVQlw.jpg"
                alt="New York"
              />
              <div className="featuredTitles">
                <h1>New York</h1>
                <h2>{data[2]} Properties</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Featured;
