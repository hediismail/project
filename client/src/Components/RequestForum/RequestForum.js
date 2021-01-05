import React from "react";

const RequestForum = () => {
  return (
    <div>
      <div>
        <span>FirstName:</span> <input />
      </div>
      <div>
        <span>LastName:</span> <input />
      </div>
      <span>Type of Request:</span>
      <select>
        <option value="Party">Party</option>
        <option value="wedding">Wedding</option>
        <option value="birthday">Birthday</option>
      </select>
      <br />
      <div>
        <span>choose date:</span> <input />
      </div>
      <button>Send</button>
    </div>
  );
};

export default RequestForum;
