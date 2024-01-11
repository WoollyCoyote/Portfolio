const contact = () => {
    return (
        <div className="contactDiv center card">
            <h2 className="title">Contact Me</h2>
            <p>CellPhone 1(810)-965-8916</p>
            <p>Email@ PFCOKelly@gmail.com</p>
            <form className="contactForm center">
                <label className="contactInput">
                    Name:
                    <input type="text" name="name" />
                </label>
                <label className="contactInput">
                    Email:
                    <input type="text" name="email" />
                </label>
                <label className="contactInput">
                    Message:
                    <input type="text" name="message" />
                </label >
                <button className="contactBtn">Submit</button>
            </form>
        </div>
    );
};

export default contact;
