import Link from "next/link";
import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class FaqContent extends Component {
  render() {
    return (
      <section className="faq-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="faq-accordion">
                <h2>
                  Get to know about <span>einfonets</span>
                </h2>

                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can you handle projects of all sizes?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Absolutely! Whether you're a small startup or a large
                        enterprise, we have the expertise and resources to
                        handle projects of any size and complexity. We treat
                        each project with equal importance and deliver results
                        that exceed expectations.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How experienced is your team?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our team consists of highly skilled professionals with
                        3+ years of experience in various IT domains and 2 x
                        Netty Awards nominee in Design category. Our developers,
                        designers, marketers, and consultants are dedicated to
                        delivering top-notch solutions that meet your business
                        goals.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What services does einfonets offer?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our services include but are not limited to:
                        <br />
                        <ul>
                          <li>
                            Custom Software and Product Development: Tailored
                            solutions designed to address your unique
                            requirements and propel your business forward.
                          </li>
                          <li>
                            Web & Mobile App Development: We create dynamic and
                            user-friendly websites tailored to your business
                            needs and our team develops custom mobile apps for
                            various platforms, enhancing your reach and
                            engagement.
                          </li>
                          <li>
                            Graphics, UI/UX, and Web Designing: Elevate your
                            brand with captivating graphics, intuitive user
                            interfaces, and stunning web designs that leave a
                            lasting impression.
                          </li>
                          <li>
                            Digital Marketing: We offer digital marketing
                            strategies to improve your online presence, increase
                            traffic, and boost conversions.
                          </li>
                          <li>
                            Application Modernization: Transform outdated
                            systems into agile, scalable platforms, leveraging
                            the latest technologies to enhance performance and
                            efficiency.
                          </li>
                          <li>
                            IT Consulting, Support & Services: Our experts
                            provide valuable insights and guidance to optimize
                            your IT infrastructure and operations. We ensure
                            reliable support and services to optimize your IT
                            infrastructure, ensuring seamless operations and
                            maximum productivity.
                          </li>
                        </ul>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is your approach to customer satisfaction?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Customer satisfaction is at the core of our business. We
                        collaborate closely with our clients, ensuring a clear
                        understanding of their requirements and goals. Regular
                        communication, transparent processes, and a commitment
                        to quality allow us to deliver solutions that align with
                        your vision.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I request a quote for my project?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Getting a quote is easy! Simply visit our{" "}
                        <Link href="/contact">
                          <a>Contact Us</a>
                        </Link>{" "}
                        page on our website and fill out the form with your
                        project details. Our team will review your requirements
                        and get back to you with a customized quote promptly or
                        you can directly get in touch with us via{" "}
                        <a href="mailto:info@einfonets.com">
                          info@einfonets.com
                        </a>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you offer ongoing support after project completion?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, we provide ongoing support and maintenance services
                        to ensure that your website, app, or software continues
                        to function smoothly. Our dedicated support team is
                        available to address any issues that may arise.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I stay updated with einfonets latest news and
                        insights?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can stay informed about our latest developments,
                        industry insights, and company news by visiting our{" "}
                        <Link href="/blog">
                          <a>Blogs</a>
                        </Link>{" "}
                        section. We regularly update it with valuable content to
                        keep you in the loop. Also subscribe to our newsletter
                        to get updates on all the new hot topics in tech.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="faq-image">
                <img src="/images/faq-img1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqContent;
