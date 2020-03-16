import React, { useState, useEffect } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const EditCity = ({ id }) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/cities/' + id)
      .then(response => setCity(response.data))
      .catch(console.log)
  }, []);

  function onChangeHandler(event) {
    const { name, value } = event.target;

    setCity({
      ...city,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.put('http://localhost:8000/api/cities/' + id, city)
      .then((res) => {
        console.log(res);
        navigate('/cities/' + id);
      })
      .catch(console.log)
  }

  if (city === null) {
    return 'Loading ...';
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:{' '}
        </label>
        <input type="text"
          name="name"
          value={city.name}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>
          Population:{' '}
        </label>
        <input type="number"
          name="population"
          value={city.population}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>
          Image Url:{' '}
        </label>
        <input type="text"
          name="imgUrl"
          value={city.imgUrl}
          onChange={onChangeHandler}
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default EditCity;