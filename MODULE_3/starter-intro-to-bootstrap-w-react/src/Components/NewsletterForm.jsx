// <!-- ************************** -->
// <!-- Newsletter Form -->
// <!-- Set class container on div -->
// <!-- ************************** -->
export default function NewsletterForm() {
  return (
    // < Form />
    <div className="container">
      <h4>Sign up for our newsletter</h4>
      <form>
        {/* <!-- ************************** -->
            <!-- divs for text inputs -->
            <!-- Set class mb-3 on outer div -->
            <!-- Set class mb-3 on inner div div -->
            <!-- ************************** --> */}

        <div className="mb-3">
          <div className="mb-3">
            {/* <!-- ************************** -->
                <!-- Labels & for Text inputs -->
                <!-- Set class form-label on label -->
                <!-- Set class form-control on input -->
                <!-- ************************** --> */}
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          {/* <!-- ************************** -->
              <!-- Labels & for Text inputs -->
              <!-- Set class form-label on label -->
              <!-- Set class form-control on div -->
              <!-- ************************** --> */}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="">
            No trees will be harmed in delivering our newsletters
          </div>
        </div>

        {/* <!-- ************************** -->
            <!-- Checkbox 1 -->
            <!-- Set classes mb-3 form-check on div -->
            <!-- Set class form-check-input on input -->
            <!-- Set class form-check-label on label -->
            <!-- ************************** --> */}

        <div className="mb-3">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Send me promo codes daily!
          </label>
        </div>
        {/*     
            <!-- ************************** -->
            <!-- Select/Options/dropdown menu -->
            <!-- Set class form-select on select tag-->
            <!-- ************************** --> */}

        <p>Select frequency of newsletters</p>
        <select className="form-select" aria-label="Default weekly">
          <option defaultValue>Weekly</option>
          <option value="1">Daily</option>
          <option value="2">Hourly</option>
          <option value="3">Monthly</option>
          <option value="3">Annually</option>
        </select>
        {/* <!-- ************************** -->
            <!-- Checkbox 2 (make into a switch w. Bootstrap) -->
            <!-- Set classes mb-3 form-check form-switch on div -->
            <!-- Set class form-check-input on input -->
            <!-- Set class form-check-label on label -->
            <!-- ************************** --> */}

        <div className="mb-3 form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            readOnly
            
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Send my info to affiliates
          </label>
        </div>
        {/* <!-- Se classes btn btn-pritmary --> */}
        <button type="button" class="btn btn-info">Submit</button>
      </form>
    </div>
  );
}


// React Bootstrap is a library of react componnets with the CSS already built in