import './Flashsale.css';
import { useEffect, useState } from 'react';

function CountDown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeleft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    if (difference > 0) {
      timeleft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / (1000 * 60)) % 60),
        sec: Math.floor((difference / 1000) % 60)
      };
    }

    return timeleft;
  };

  const [timeleft, setTimeleft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeleft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div className="time-box">
        <span>{timeleft.days}</span>
        <small>DAYS</small>
      </div>

      <span className="separator">:</span>

      <div className="time-box">
        <span>{timeleft.hours}</span>
        <small>HRS</small>
      </div>

      <span className="separator">:</span>

      <div className="time-box">
        <span>{timeleft.min}</span>
        <small>MIN</small>
      </div>

      <span className="separator">:</span>

      <div className="time-box">
        <span>{timeleft.sec}</span>
        <small>SEC</small>
      </div>

      <button className="claim-btn">
        Claim Discount
      </button>
    </div>
  );
}

function Flashsale() {
  const targetDate = '2026-09-01T23:59:59';

  return (
    <section className="flashsale">
      <div className="main-cont">
        <div className="flbox">
          <div className="flalert">
            <span className="sale-label">FLASH SALE</span>
            <h2>Up to 40% Off Everything</h2>
            <p>
              Ends soon. Don't miss out on our biggest drop of the season.
            </p>
          </div>

          <CountDown targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
}

export default Flashsale;