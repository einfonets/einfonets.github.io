import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";
export default function SubscribeStyleOne() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  function registerEmail(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Email", email);

    fetch(
      "https://script.google.com/macros/s/AKfycbwytyO4WVGuyVGPb46ZIaiEiuXXDuBNKcOtYS9OMgDF3SbugFnuop_JHU6gmhPEvbOF-g/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        setOpen(true);

        if (data.statusCode === "200") {
          setEmail("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="subscribe-content border-radius-0">
      <h2>Stay ahead in tech. Subscribe for updates and exclusive tips!</h2>

      <form className="newsletter-form" onSubmit={(e) => registerEmail(e)}>
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <input
              type="email"
              className="input-newsletter"
              placeholder="hello@spacle.com"
              name="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="col-lg-4 col-md-4">
            <button type="submit">
              <i className="bx bxs-hot"></i> Subscribe Now
            </button>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Typography sx={{ color: "white", my: 2 }}>OR</Typography>
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7196024017433116672"
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                outline: "none",
                textDecoration: "none",
                color: "#ffffff",
                height: 50,
                width: "100%",
                borderRadius: 16,
                backgroundColor: "#0A66C2",
                gap: 4,
                maxWidth: 600,
              }}
            >
              <i className="bx bxl-linkedin"></i>
              Subscribe on LinkedIn
            </a>
          </div>
        </div>
      </form>

      {/* Shape Images */}
      <div className="shape14">
        <img src="/images/shape/shape13.png" alt="image" />
      </div>
      <div className="shape15">
        <img src="/images/shape/shape14.png" alt="image" />
      </div>
      <div className="shape16">
        <img src="/images/shape/shape15.png" alt="image" />
      </div>
      <div className="shape17">
        <img src="/images/shape/shape16.png" alt="image" />
      </div>
      <div className="shape18">
        <img src="/images/shape/shape17.png" alt="image" />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={response?.statusCode === "303" ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {response?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
