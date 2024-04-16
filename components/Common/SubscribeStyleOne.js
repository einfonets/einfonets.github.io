import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
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
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
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
