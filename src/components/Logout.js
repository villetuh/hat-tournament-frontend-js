import React from 'react';

const Logout = ({ name, logoutUser }) => (
  <div>
    User: {name}
    <button onClick={logoutUser}>
      Logout
    </button>
  </div>
);

export default Logout;