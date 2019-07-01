import React from "react";

const CompetitionCard = () => {
  return (
    <div className="competition_card">
      <div className="competition_card_header">
        <div className="competition_card_title">
          <h2>Sprint Challenge</h2>
          <p>$2,000</p>
        </div>
        <div className="competition_card_title_bottom">
          <div>
            <span>Icon</span>
            <span>7 Participants</span>
          </div>
          <button>OPEN</button>
        </div>
      </div>
      <div className="competition_card_body">
        <p>June 1, 2019 to June 30, 2019</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet.
        </p>
      </div>
    </div>
  );
};

export default CompetitionCard;
