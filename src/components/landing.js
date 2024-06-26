import Image from "next/image";

const Landing = () => {
    return ( 
        <div>
          <div className="center">

          <Image
        className="profilePic"
        src="/meAtPark.jpg"
        width={155}
        height={155}
        alt="Project screen shot"
        />
        </div>
          <div className="card">
          <div className="title-box">
          <h1 className="name title">Cody O'Kelly </h1>
          <h2 className="title">
            Front-End Developer
          </h2>
          </div>
          </div>
          <h3 className="scroll-title">scroll down to see my projects</h3>
        </div>
     );
}
 
export default Landing;