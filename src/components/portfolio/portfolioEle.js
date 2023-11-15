import Picturegallery from '../picturegallery';

const portfolioEle = (props) => {
    return ( 
            <div >
        <div>

            <h2 className="portTitle">{props.title} in {props.show}</h2>
            <div>
            <h3>{props.title}</h3>
            <div>
            <Picturegallery/>
<h2>{props.show}</h2>
            </div>
            <p>{props.discription}</p>
            </div>
            </div>
        </div>
     );
}
 
export default portfolioEle;