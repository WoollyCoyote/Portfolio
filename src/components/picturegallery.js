import Image from "next/image";
import { useState } from "react";

const picturegallery = () => {
let picSelection = ["person1","person2","person3",'person4','person5']
let [picNum,setPicNum] = useState(0)
function prevClickHandler() {
  if(picNum == 0){
   return setPicNum(4)
}
 return setPicNum(picNum -1)
}
function nextClickHandler() {
   if(picNum == 4){
    return setPicNum(0)
   }
   setPicNum(picNum+1)
}
    return ( 
<div>
    <button onClick={prevClickHandler}>PREV</button>
<Image alt="actors in costume" src={`/pics/${picSelection[picNum]}.jpg`} width={55} height={55} ></Image>
<button onClick={nextClickHandler}>NEXT</button>
</div>
     );
}
 
export default picturegallery;