/* eslint-disable jsx-a11y/anchor-is-valid*/
import Card from "./Card";
import yellowRose from "../Images/anastasia-zhenina-3YiZ0B2W8c0-unsplash.jpg";
import lavenderRose from "../Images/muhammad-osama-YMDmfGxNgrQ-unsplash.jpg";
import apricotRose from "../Images/mel-pB-IJfg8jb8-unsplash.jpg";
// we use the  {} on import to DESTRUCTURE the object that is imported
// this happens when we have MULTIPLE EXPORTS from one file
import { detailsCard1, detailsCard2, detailsCard3 } from "../data";
// export default = one export => no brackets on import
export default function Restocked() {
  /* <!-- ************************** -->
    <!-- Set class container on outer div -->
    <!-- Set class display-4 on h3 -->
    <!-- Set class row on inner div -->
    <!-- ************************** --> 
    */
  // the definition of a React component is a function that returns JSX
  return (
    // container is a magic word for bootstrap - everything must be in a container 
    // for the styles to work
    <div className="container">
      <h3 className="display-4">Just Restocked</h3>
      <div className="row">
        {/*  props PASS DATA to the component */}
        <Card details={ detailsCard1 } image={ yellowRose } />
        <Card details={detailsCard2} image={lavenderRose} />
        <Card details={detailsCard3} image={apricotRose} />
      </div>
    </div>
  );
}
