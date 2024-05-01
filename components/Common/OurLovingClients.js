import React, { Component } from "react";
import Link from "next/link";

const Clients = [
  {
    name: "Chatto",
    logo: "https://www.upwork.com/att/download/portfolio/persons/uid/1697294443237502976/profile/projects/files/62588a42-92df-4299-ae4b-d861f8a1b416",
  },
  {
    name: "on2cook",
    logo: "https://mms.businesswire.com/media/20221109005461/en/1630776/5/on2cooklogo.jpg",
  },

  {
    name: "einfochips",
    logo: "https://s3.amazonaws.com/info-mongodb-com/_com_assets/media/einfochips_logo.png",
  },
  {
    name: "Ourco",
    logo: "data:image/png;base64,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",
  },
  { name: "Vidon", logo: "https://vid-on.us/images/logo.png" },
  {
    name: "INFONET",
    logo: "https://images.squarespace-cdn.com/content/v1/63f75049a7445f5596bac55b/e64a2405-643a-45f5-a290-1c9afb9b16ba/infonet_logo.png?format=1500w",
  },
  {
    name: "OCR",
    logo: "https://ocr.alkurn.co.in/static/media/logo.50463c0a.png",
  },
  {
    name: "Safmical",
    logo: "https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/5e483324a87501581789988.jpg",
  },

  {
    name: "Ren Tech",
    logo: "/images/marketing-agency/Projectc.png",
  },
  { name: "Clonetto", logo: "/images/clients/clonetto.png" },
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
              <div
                className="single-client-logo"
                key={client.name}
                // style={{ borderRadius: 5 }}
              >
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
