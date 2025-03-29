import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function Subscriptions() {
  const navigate = useNavigate();

  const handleSomething = (subscriptionId) => {
    navigate(`/subscriptions/${subscriptionId}`);
  };

  return (
    <div style={{ border: "1px solid blue", padding: "1rem" }}>
      <Typography variant="h4">Subscriptions</Typography>
      <Button variant="contained" onClick={() => handleSomething("basic")}>
        Basic
      </Button>
      <Button variant="contained" onClick={() => handleSomething("pro")} sx={{ ml: 2 }}>
        Pro
      </Button>
      <Button variant="contained" onClick={() => handleSomething("ultra")} sx={{ ml: 2 }}>
        Ultra
      </Button>
    </div>
  );
}

export { Subscriptions };