import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
    } catch (err) {
    } finally {
      navigate("/contact");
    }
  };
  return (
    <>
      <div className="px-4 by-5 my-5 text-center">
        <h2 className="display-5 fw-bold">Contact Us</h2>
        <div className="col-6-lg mx-auto">
          <p className="load">Send Your message to our support</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-8">
          <form autoComplete="on" onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
