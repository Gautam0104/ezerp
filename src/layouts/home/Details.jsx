import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fdfcf9" }}>
      <div className="container">
        <hr style={{ borderColor: "#000" }} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-transparent border-0">
            App availability varies by device/language. Features vary by
            platform. Minimum age limits may apply to use of AI features.
            Details.
          </li>
          <li className="list-group-item bg-transparent border-0">
            <strong>[1]</strong> <br /> Documents must be saved in and shared
            from Pharmascan.
          </li>
          <li className="list-group-item bg-transparent border-0">
            <strong>[2]</strong> <br /> Pharmascan in Excel requires AutoSave to be
            enabled, meaning the file must be saved to Pharmascan; it doesn't
            function with unsaved files.
          </li>
          <li className="list-group-item bg-transparent border-0">
            <strong>[3]</strong> <br /> Pharmascan features in Thunderbees apply to
            accounts with @Thunderbees.com, @hotmail.com, @live.com, or @msn.com
            email addresses and are available in Thunderbees.com, Thunderbees built into
            Pharmascans, Thunderbees on Mac, and iOS and Android apps.
          </li>
          <li className="list-group-item bg-transparent border-0">
            <strong>[4]</strong> <br /> Thunderbees  Personal or Family
            subscription required; AI features only available to subscription
            owner and cannot be shared; usage limits apply.{" "}
            <Link to="">Learn more</Link>.
          </li>
          <li className="list-group-item bg-transparent border-0">
            <strong>[5]</strong> <br /> Once your paid subscription begins,
            cancelation policies vary based on your status as a new customer,
            product, and domain selections on Thunderbees.{" "}
            <Link to="">Learn more</Link>. Cancel your Thunderbees 
            subscription any time by going to the Thunderbees  admin center.
            When a subscription is canceled, all associated data will be
            deleted. <br />
            <Link to="">Learn more</Link> about data retention, deletion, and
            destruction in Thunderbees .
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Details;
