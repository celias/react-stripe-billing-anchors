import { useState } from 'react';


const SubscriptionPlans = () => {
  const [loading, setLoading] = useState(false);

  const plans = {
    monthlyBasic: {
      name: 'Basic Plan',
      price: '$15/month',
      link: 'https://buy.stripe.com/test_dR6cQP0k18bb28o6oG'
    },
    monthlyPremium: {
      name: 'Premium Bundle',
      price: '$25/month',
      link: 'https://buy.stripe.com/test_9AQ4kj1o5ezz5kAdR9'
    },
    yearlyBasic: {
      name: 'Basic Plan',
      price: '$144/year',
      link: 'https://buy.stripe.com/test_eVa6sr6Ip0IJ00gdRa'
    },
    yearlyPremium: {
      name: 'Premium Bundle',
      price: '$240/year',
      link: 'https://buy.stripe.com/test_fZeaIH3wdezz6oE3cx'
    }
  };

  const handleSubscribe = async (planLink) => {
    setLoading(true);
    try {
      window.location.href = planLink;
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Monthly Plans</h3>
        <div className="space-y-4">
          {Object.entries(plans)
            .filter(([key]) => key.startsWith('monthly'))
            .map(([key, plan]) => (
              <button
                key={key}
                onClick={() => handleSubscribe(plan.link)}
                disabled={loading}
                className="w-full p-4 text-left border rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium">{plan.name} - {plan.price}</div>
              </button>
            ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Annual Plans (20% savings)</h3>
        <div className="space-y-4">
          {Object.entries(plans)
            .filter(([key]) => key.startsWith('yearly'))
            .map(([key, plan]) => (
              <button
                key={key}
                onClick={() => handleSubscribe(plan.link)}
                disabled={loading}
                className="w-full p-4 text-left border rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium">{plan.name} - {plan.price}</div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;