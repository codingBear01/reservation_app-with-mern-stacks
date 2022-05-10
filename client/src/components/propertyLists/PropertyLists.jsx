import useFetch from './../../hooks/useFetch';

const PropertyLists = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');
  const imgs = [
    'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768',
    'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
    'https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg',
    'https://www.ahstatic.com/photos/b501_ho_00_p_1024x768.jpg',
    'https://www.p-city.com/mobilePub/static/images/hotelParadise/img_main_visual.jpg',
  ];

  return (
    <>
      <div className="pLists">
        {loading ? (
          'Now Loading, Please Wait'
        ) : (
          <>
            {data &&
              imgs.map((img, i) => (
                <div key={i} className="pListsItem">
                  <img className="pListsImg" src={img} alt="hotel" />
                  <div className="pListsTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>
                      {data[i]?.count} {data[i]?.type}
                    </h2>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default PropertyLists;
