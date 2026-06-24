import React from "react";

const page = () => {
  return (
    <div>
      <form>
        <input name="name" placeholder="Enter Name" />

        <input name="email" placeholder="Enter Email" />

        <button>Add User</button>
      </form>
    </div>
  );
};

export default page;
