import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

function ShortDetail() {
  const { shortId } = useParams();

  return (
    <div style={{ border: "1px solid blue", padding: "1rem" }}>
      <Typography variant="h3">Short Detail</Typography>
      <Typography variant="body1">Detail for short: {shortId}</Typography>
    </div>
  );
}

export default ShortDetail;