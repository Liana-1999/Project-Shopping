
const subscriptions = [
    {
        id: '1',
        name: 'Premium Streaming Plan',
        price: '$12.99',
    },
    {
        id: '2',
        name: 'Deluxe Music Plan',
        price: '$19.99',
    },
    {
        id: '3',
        name: 'Fitness Plus Membership',
        price: '$49.99',
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