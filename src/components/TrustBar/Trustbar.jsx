import { Truck, LockKeyhole, Headphones, Leaf } from 'lucide-react';
import './Trustbar.css';

function TrustBar() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping'
    },
    {
      icon: LockKeyhole,
      title: 'Secure Pay'
    },
    {
      icon: Headphones,
      title: '24/7 Support'
    },
    {
      icon: Leaf,
      title: 'Sustainable'
    }
  ];

  return (
    <section className="trust-bar">
      <div className="trust-container">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div className="trust-item" key={index}>
              <Icon className="trust-icon" size={30} strokeWidth={2} />
              <span>{feature.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrustBar;
