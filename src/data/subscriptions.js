
const subscriptions = [
    {
        id: "basic",
        name: "Basic Plan",
        price: "$25",
    },
    {
        id: "pro",
        name: "Pro Plan",
        price: "$75",
    },
    {
        id: "ultra",
        name: "Ultra Plan",
        price: "$100",
    }
];

export const getSubscriptions = () => {
    return subscriptions;
}

export const getSubscriptionById = (subscriptionId) => {
    return subscriptions.find(
        (subscription) => subscription.id === subscriptionId
    )
};