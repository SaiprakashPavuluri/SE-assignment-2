import React from 'react';
import { useSelector } from 'react-redux';

const LiveNews = () => {
  const datastore = useSelector((state) => state.bookReducer);
 console.log(datastore)
  return (
    <div className="container-fluid text-center bg-grey">
      <h2>Live News</h2>

      <div className="row text-center">
        {datastore.map((element) => (
          <div className="col-sm-4 p-2" key={element.id}>
            <div className="card w-75">
              <a href={element.url}>
              <img src={element.img} className="card-img-top" alt="..." />
              </a>

              <div className="card-body">
                <h5 className="card-title"><a href={element.url}>{element.title}</a></h5>
                <p className="card-text">{element.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveNews;
