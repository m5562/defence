import React from "react";
import errorSVG from "./../assets/error.gif";

const Error = () => {
  return (
    <div className="h-dvh grid place-items-center">
      <div className="text-center">
        <img src={errorSVG} alt="" />
        <div className="font-thin">
          It seems like something did not go well. <br />
          Hang on, we will surely working on that.
        </div>
        <div className="mt-4 text-bae-600 font-bold">Wait, did you typed that write?</div>
      </div>
    </div>
  );
};

export default Error;
