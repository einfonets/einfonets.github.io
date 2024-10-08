import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/images/logo.svg" alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/about" activeClassName="active">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/portfolio" activeClassName="active">
                        <a className="nav-link">Portfolio</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog" activeClassName="active">
                        <a className="nav-link">
                          Blogs
                          {/* Blog <i className='bx bx-chevron-down'></i> */}
                        </a>
                      </Link>
                    </li>
                    {/* <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link">Blog Grid</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog2" activeClassName="active">
                                                        <a className="nav-link">Blog Right Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-details" activeClassName="active">
                                                        <a className="nav-link">Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul> */}

                    <li className="nav-item">
                      <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd_BQVnILiFfWChrafoydvbVwxHwmMFPf8oj5w2hMAQSyFeyg/viewform?usp=sf_link"
                        activeClassName="active"
                      >
                        <a target="_blank" className="nav-link">
                          Careers
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* <div className="others-options ms-auto">
                                    <Link href="/login">
                                        <a className="optional-btn">
                                            <i className="bx bx-log-in"></i> Log In <span></span>
                                        </a>
                                    </Link>
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            <i className="bx bxs-hot"></i> Get Started <span></span>
                                        </a>
                                    </Link>
                                </div> */}
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
