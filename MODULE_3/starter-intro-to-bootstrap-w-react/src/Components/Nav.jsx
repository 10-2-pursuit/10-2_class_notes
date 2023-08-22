/* eslint-disable jsx-a11y/anchor-is-valid*/
// <!-- ************************** -->
// <!-- Bonus! Use documentation to style the nav -->
// <!-- ************************** -->

export default function Nav() {
  return (
    <nav className="">
      <div className="">
        <a className="">Rosier</a>
        <button
          className=""
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""></span>
        </button>
        <div className="" id="navbarSupportedContent">
          <ul className="">
            <li className="">
              <a className="" aria-current="page">
                Home
              </a>
            </li>
            <li className="">
              <a className="">Featured</a>
            </li>
            <li className="">
              <a
                className=""
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn More
              </a>
              <ul className="" aria-labelledby="navbarDropdown">
                <li>
                  <a className="">About</a>
                </li>
                <li>
                  <a className="">Contact</a>
                </li>
                <li>
                  <hr className="" />
                </li>
                <li>
                  <a className="">Surprise me!</a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="">
            <input
              className=""
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
