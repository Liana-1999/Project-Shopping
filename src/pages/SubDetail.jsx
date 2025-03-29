import React from "react";
import { useParams } from "react-router-dom";
import { getSubscriptionById } from "../data/subscriptions"; // Make sure this file exists

function SubDetail() {
  const { subId } = useParams();
  const sub = getSubscriptionById(subId);

  if (!sub) {
    return <h2>Subscription not found</h2>;
  }

  const handleBuy = () => {
    alert(`Bought subscription: ${subId}`);
  };

  return (
    <div style={{ border: "1px solid blue", padding: "1rem" }}>
      <h2>{sub.name}</h2>
      <p>Price: {sub.price}</p>
      <p>Description: {sub.description}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default SubDetail;