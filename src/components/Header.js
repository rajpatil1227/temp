import { logoURL } from "../Constants";

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img src={logoURL} alt="Shopify" />
        </a>
      </div>

      <div className="nav-item right-align">
        <ul className="services">
          <li className="items">Home</li>
          <li className="items">About</li>
          <li className="items">Contact</li>
          <li className="items dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="items">Cart</li>
        </ul>
      </div>

      <style jsx>{`
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f5f5f5;
          padding: 10px;
        }

        .services {
          list-style-type: none;
          display: flex;
        }

        .services li {
          margin-right: 20px;
        }

        .services li.dropdown {
          position: relative;
        }

        .services li.dropdown .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          min-width: 160px;
          padding: 5px 0;
          margin: 2px 0 0;
          font-size: 14px;
          text-align: left;
          list-style: none;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 4px;
        }

        .services li.dropdown:hover .dropdown-menu {
          display: block;
        }

        .services li.dropdown .dropdown-item {
          display: block;
          width: 100%;
          padding: 3px 20px;
          clear: both;
          font-weight: normal;
          color: #333;
          text-align: inherit;
          white-space: nowrap;
          background: none;
          border: 0;
        }

        .services li.dropdown .dropdown-item:hover {
          background-color: #f5f5f5;
        }

        .logo {
          flex: 0 0 auto; /* Prevent the logo from growing or shrinking */
        }

        .logo img {
          width: 100px;
          height: auto;
        }

        .nav-item {
          display: flex;
        }

        .right-align {
          margin-left: auto; /* Pushes the component to the right end */
        }

        .items {
          cursor: pointer;
          color: #333;
          font-weight: bold;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .nav {
            flex-wrap: wrap;
          }

          .services {
            margin-bottom: 10px;
          }

          .logo {
            flex-basis: 100%;
            display: flex;
            justify-content: center;
          }

          .nav-item {
            flex-basis: 100%;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
