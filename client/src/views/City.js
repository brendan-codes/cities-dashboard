import React, { useState, useEffect } from "react";

import axios from "axios";

const City = ({ id }) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/cities/' + id)
      .then(response => setCity(response.data))
      .catch(console.log);
  }, []);

  if (city === null) {
    return 'Loading ...';
  }

  return (
    <div style={{
      textAlign: 'center'
    }}>
      <h1>
        {city.name}
      </h1>
      <p>
        Population: {city.population}
      </p>
      <img
        src={city.imgUrl}
        alt="city"
      />
      <div>
        <button>
          Edit
        </button>
        <button>
          Delete
        </button>
      </div>
    </div>
  )
}

export default City;