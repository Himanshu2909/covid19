import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Form, Spinner } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function Footer() {
  const [validated, setValidated] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      setDisabled(true);
      setButtonLoading(true);
      axios
        .post("/api/contact", { email: email, message: message })
        .then(setButtonLoading(false))
        .then(setMessage(""))
        .then(setDisabled(false))
        .then(setValidated(false))
        .then(setEmail(""))
        .catch((e) => console.log(e.response));
    }
  };
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="" style={{ marginRight: "20px", marginLeft: "20px" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <Link href="/" style={{ cursor: "pointer" }}>
                  <h5 className="widget-title" style={{ cursor: "pointer" }}>
                    covidresources
                    <span></span>
                  </h5>
                </Link>
                <p>
                  COVID RESOURCES - AMMENDED FOR THE FOLLOWING DUE TO CURRENT
                  CIRCUMBSTANCES <br></br>covidresources offers an opportunity
                  to every blogger out there to display their thoughts in front
                  of everyone. ‘Better to write for yourself and have no public,
                  than to write for the public and have no self’. covidresources
                  is a website where you can write your thoughts and let people
                  live in a thousand worlds before they die.
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <Link href="/">&nbsp;Home</Link>
                  </li>
                  <li>
                    <Link href="/about">&nbsp;About</Link>
                  </li>

                  <li>
                    <Link href="/privacy-policy">&nbsp;Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/dashboard">&nbsp;Dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Follow up<span></span>
                </h5>
              </div>
            </div>
            <br />
            <br />
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>
                <p>Wanna ask something? Send a message here.</p>
                <br></br>
                <Form
                  className="emailfield"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <Form.Group md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email*"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="4" controlId="validationCustom02">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Message*"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    style={{ border: "none" }}
                    type="submit"
                    disabled={disabled}
                  >
                    {buttonLoading ? (
                      <Spinner size="sm" animation="border" />
                    ) : (
                      ""
                    )}{" "}
                    Send
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="white">
                Copyright{" "}
                <Link
                  className="white"
                  href="/"
                  style={{ color: "white !important" }}
                >
                  <span className="white" style={{ cursor: "pointer" }}>
                    covidresources
                  </span>
                </Link>{" "}
                @ 2021. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
