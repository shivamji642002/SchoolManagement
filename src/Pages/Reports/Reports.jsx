import React from 'react'
import Header from '../../component/Header/Header'
function Reports() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>  
      <Header />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="logo navbar-brand">MyWebsite</div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className={`nav-link dropdown-toggle ${dropdownOpen ? 'collapsed' : ''}`}
                            href="#"
                            id="servicesDropdown"
                            role="button"
                            onClick={toggleDropdown}
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                        >
                            Services
                        </a>
                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="servicesDropdown">
                            <a className="dropdown-item" href="#web-development">Web Development</a>
                            <a className="dropdown-item" href="#app-development">App Development</a>
                            <a className="dropdown-item" href="#seo">SEO</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    
    
    
    </div>
  )
}

export default Reports