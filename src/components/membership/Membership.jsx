import React from 'react';
import styles from './Membership.module.css';

const Membership = () => {
  const plans = [
    {
      name: "Reader Pass",
      description: "For casual readers",
      features: [
        "Access to basic articles",
        "3 premium articles/month",
        "Weekly newsletter",
        "Community access"
      ],
      popular: false
    },
    {
      name: "Blog Enthusiast",
      description: "For regular readers",
      features: [
        "Unlimited articles",
        "Exclusive content",
        "Monthly webinars",
        "Early access to posts",
        "Commenting privileges"
      ],
      popular: true
    },
    {
      name: "Premium Member",
      description: "For dedicated followers",
      features: [
        "All enthusiast benefits",
        "Downloadable resources",
        "1-on-1 author chats",
        "VIP newsletter",
        "Ad-free experience",
        "Beta feature access"
      ],
      popular: false
    }
  ];

  return (
    <div className={styles.membership}>
      <h2>Choose Your Reading Experience</h2>
      <p>Select the membership that fits your reading habits</p>
      
      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div key={index} className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}>
            {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
            
            <h3>{plan.name}</h3>
            <p className={styles.planDescription}>{plan.description}</p>
            
            <ul className={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            
            <button className={styles.subscribeButton}>
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;