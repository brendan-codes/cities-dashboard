import React from 'react';

const NotFound = (props) => {
  console.log(props);

  return (
    <div>
      {props.location.href} not found ...
    </div>
  );
}

export default NotFound;