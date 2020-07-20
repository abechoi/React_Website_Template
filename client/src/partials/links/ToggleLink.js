import React, { useState } from "react";

const links = [
  {id: 1, name: 'Github', icon: 'fab fa-github fa-3x', link: 'https://github.com/abechoi'},
  {id: 1, name: 'Codepen', icon: 'fab fa-codepen fa-3x', link: 'https://github.com/abechoi'},
  {id: 1, name: 'LinkedIn', icon: 'fab fa-linkedin fa-3x', link: 'https://github.com/abechoi'},
];

const ToggleLink = () => {

  const [ dropdown, setDropdown ] = useState(true);

  const handleClick = () => setDropdown(!dropdown);

  return (
    <div>
      <button onClick={handleClick}>

        { dropdown ? 'YES' : 'NO' }

      </button>
    </div>
  );
}

export default ToggleLink;