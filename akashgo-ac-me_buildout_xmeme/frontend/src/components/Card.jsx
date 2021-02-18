import axios from "axios";
import React, { useEffect, useState } from "react";

function Card() {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    axios
      .get("https://xmemenode.herokuapp.com/memes")
      .then((res) => {
        const result = res.data;
        setInitialState(result);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, []);

  return (
    <div className="section">
      <div className="columns is-multiline">
        {initialState.length > 0 &&
          initialState.map((e, i) => (
            <div className="column is-one-third" key={i}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={e.url} alt="" loading="lazy" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{e.name}</p>
                      <p className="subtitle is-6">{e.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
