import React, { Component } from "react";
import Link from "next/link";

const Clients = [
  {
    name: "on2cook",
    logo: "https://mms.businesswire.com/media/20221109005461/en/1630776/5/on2cooklogo.jpg",
  },
  {
    name: "Gophr",
    logo: "https://uk.gophr.com/wp-content/uploads/2019/10/Gophr_Logo_Landscape_1.png",
  },
  {
    name: "einfochips",
    logo: "https://s3.amazonaws.com/info-mongodb-com/_com_assets/media/einfochips_logo.png",
  },
  { name: "Vidon", logo: "https://vid-on.us/images/logo.png" },
  {
    name: "INFONET",
    logo: "https://images.squarespace-cdn.com/content/v1/63f75049a7445f5596bac55b/e64a2405-643a-45f5-a290-1c9afb9b16ba/infonet_logo.png?format=1500w",
  },
  {
    name: "Safmical",
    logo: "https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/5e483324a87501581789988.jpg",
  },

  {
    name: "Social Sloths",
    logo: "https://media.licdn.com/dms/image/C560BAQGWP_gt6S7ijA/company-logo_200_200/0/1590951258845?e=2147483647&v=beta&t=cFaaCWxrOA3YBIcIVMW8HO01FpVPU3S5rG2KskdBMSE",
  },
  {
    name: "Ren Tech",
    logo: "/images/marketing-agency/Projectc.png",
  },
];
class OurLovingClients extends Component {
  render() {
    return (
      <section className="our-loving-clients bg-f4f5fe">
        <div className="container">
          <div className="section-title">
            <h2>Our Loving Clients and Partners</h2>
          </div>

          <div className="clients-logo-grid">
            {Clients.map((client, index) => (
              <div className="single-client-logo" key={client.name}>
                <Link href="/portfolio">
                  <a>
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{
                        aspectRatio: "16 / 9",
                        objectFit: "contain",
                        filter: "drop-shadow(0.5px 0.5px 1px black)",
                      }}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default OurLovingClients;
