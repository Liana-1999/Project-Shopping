import { useNavigate } from 'react-router-dom';


export const Subscriptions = () => {
    const navigate = useNavigate();

    const handleSomething = (subscriptionId) => {
        //...
        navigate(`/subscriptions/${subscriptionId}`);
    };

    const mouseMove = () => {};


    return (
        <section>
            <p>This is Subscriptions Page</p>

            <button
                onClick={
                    () => handleSomething('subID') // subscription.id
                }
            >
                More
            </button>
        </section>
    );
};