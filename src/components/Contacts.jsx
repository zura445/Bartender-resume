import React from "react";

function Contacts() {
  return (
    <div>
      {" "}
      <div className="relative flex flex-col justify-center items-center text-white px-4 ">
        <div className="py-10 bg-black opacity-90 flex flex-col items-center px-10 mt-10 rounded-md">
          <h1 className="text-4xl font-bold mt-4">Contact details</h1>
          <p className="text-lg mt-4 underline underline-offset-4">
            Email address
          </p>
          <a href="mailto:zuratetra@gmail.com?subject=The%20subject%20of%20the%20mail mt-4">
            zuratetra@gmail.com
          </a>

          <p className="text-lg mt-4 underline underline-offset-4">
            Phone number
          </p>
          <a className="cursor-pointer mt-4" href="tel: +995597000540">
            597 000 540
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
