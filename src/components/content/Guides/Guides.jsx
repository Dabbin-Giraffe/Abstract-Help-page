import React from 'react'
import abstract from "../../../assets/images/abstract.svg";
import account from "../../../assets/images/account.svg";
import authenticate from "../../../assets/images/authenticate.svg";
import billing from "../../../assets/images/billing.svg";
import chat from "../../../assets/images/chat.svg";
import manage from "../../../assets/images/manage.svg";
import "./Guides.css";

const Guides = () => {

  const logos = [abstract, manage, authenticate, account, billing, chat];

  return (
    <div className="guides-wrapper">
      <div className="guides-container">
        {
          logos.map((item, index) => (
            <div className={`items item-${index + 1}`}>
              <img src={item} alt="" />
              <div className="guide-content">
                <p className="med-text med-title">Lorem, ipsum.</p>
                <p className="med-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam tempore neque quia!</p>
                  <a href="" className='med-text no-underline'>Learn more →</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Guides
