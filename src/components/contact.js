const contact = () => {
  return (
    <div className="contactDiv center card">
      <div>

      <h2 className="title">Contact Me</h2>
      <p>CellPhone 1(810)-965-8916</p>
      <p>Email@ PFCOKelly@gmail.com</p>
      <form
        className="contactForm center"
        action="https://formspree.io/f/myyrzwqd"
        method="POST"
        >
        <label className="contactInput">
          Email:
          <input type="email" name="email" />
        </label>
        <label className="contactInput">
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">
          Send
        </button>
      </form>

        </div>
      <div>
      <h4>
       Image credits
      </h4>
      <p>
        beard cartoon image by pngtree.com
      </p>
      </div>
    </div>
  );
};

export default contact;
