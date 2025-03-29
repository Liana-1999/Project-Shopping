import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function Shorts() {
  const navigate = useNavigate();

  const handleShortClick = (shortId) => {
    navigate(`/shorts/${shortId}`);
  };

  return (
    <div style={{ border: "1px solid blue", padding: "1rem" }}>
      <Typography variant="h3">Shorts</Typography>
      <Button variant="contained" onClick={() => handleShortClick("mars")}>
        Mars
      </Button>
      <Button variant="contained" onClick={() => handleShortClick("moon")} sx={{ ml: 2 }}>
        Moon
      </Button>
    </div>
  );
}

export { Shorts };