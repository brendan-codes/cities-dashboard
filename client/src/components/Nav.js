import React, { useState } from "react";

import { Link } from '@reach/router';


const Nav = () => {

  const [href, setHref] = useState(window.location.href);

  const handleClick = (e) => {
    setHref(e.target.href);
  }

  const makeLinks = () => {
    const linksAttrs = [
      {
        toAttr: '/cities',
        displayText: 'All Cities'
      },
      {
        toAttr: '/cities/new',
        displayText: 'New City'
      }
    ];

    const linkTags = [];

    linksAttrs.forEach((linkInfo, i) => {
      if (href !== 'http://localhost:3000' + linksAttrs[i].toAttr) {
        linkTags.push(
          <span key={i}>
            <Link
              to={linkInfo.toAttr}
              onClick={handleClick}
            >
              {linkInfo.displayText}
            </Link>{' '}
          </span>
        )
      }
    });

    return linkTags;
  }

  return (
    <div>
      {
        makeLinks()
      }
    </div>
  )
}

export default Nav;