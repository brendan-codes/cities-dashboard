import React, { useState, useEffect } from "react";

import { Link, navigate } from "@reach/router";
import axios from "axios";

const Cities = () => {
  const [cities, setCities] = useState([]);

  // arg2 empty array so this runs only on initial load of component
  useEffect(() => {
    axios.get('http://localhost:8000/api/cities')
      .then(res => {
        setCities(res.data)
      })
      .catch(console.log);
  }, []);

  function handleDelete(id) {
    axios.delete('http://localhost:8000/api/cities/' + id)
      .then((res) => {
        const filteredCities = cities.filter((city) => city._id !== res.data._id);

        setCities(filteredCities);
      })
      .catch(console.log);
  }

  return (
    <table>
      <thead>
        <th>
          Name
            </th>
        <th>
          Actions
            </th>
      </thead>
      <tbody>
        {
          cities.map((city) => {
            return (
              <tr key={city._id}>
                <td>
                  <Link to={'/cities/' + city._id}>
                    {city.name}
                  </Link>
                </td>
                <td>
                  <button onClick={() => navigate('/cities/' + city._id + '/edit')}>
                    Edit
                  </button>{' '}
                  <button onClick={() => handleDelete(city._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default Cities;