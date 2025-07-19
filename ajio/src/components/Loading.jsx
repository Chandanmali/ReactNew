import { useState } from "react";
import { ClipLoader, BounceLoader } from "react-spinners";

function Loading() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#026501");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
  };

  return (
    <div className="sweet-loading mt-28 flex justify-center items-center">
      <BounceLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
