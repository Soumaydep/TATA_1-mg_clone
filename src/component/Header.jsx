const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img
            src="/1mglogo.png"
            alt="1mg Logo"
            style={{
              width: "60px",
              height: "50px",
            }}
          ></img>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "red" }}
                >
                  Medicine
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Lab Tests{" "}
                  <span
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "2px 5px",
                      borderRadius: "3px",
                      animation: "sparkle 1s infinite",
                    }}
                  >
                    Safe
                  </span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" >
                  Consult Doctors
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" >
                  Cancer Care
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" >
                  Partnerships{" "}
                  <span
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "2px 5px",
                      borderRadius: "3px",
                      animation: "sparkle 1s infinite",
                    }}
                  >
                    New
                  </span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" >
                  Care Plan{" "}
                  <span
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "2px 5px",
                      borderRadius: "3px",
                      animation: "sparkle 1s infinite",
                    }}
                  >
                    Save More
                  </span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" >
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"> | </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                  Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                  Offers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                  Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                  Need Help?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
