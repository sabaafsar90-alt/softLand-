import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'features', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setDeepDropdownOpen(false);
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    closeMobileMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(20, 46, 108, 0.95)' : 'transparent',
        boxShadow: isScrolled ? '0px 2px 20px rgba(0, 0, 0, 0.15)' : 'none',
        transition: 'all 0.4s ease'
      }}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="logo d-flex align-items-center text-decoration-none">
          <h1 className="sitename m-0 text-white fw-bold">SoftLand</h1>
        </a>

        <nav id="navmenu" className={`navmenu ${mobileMenuOpen ? 'mobile-nav-active' : ''}`}>
          {mobileMenuOpen && (
            <i
              className="bi bi-x mobile-nav-close d-xl-none"
              onClick={closeMobileMenu}
            ></i>
          )}

          <ul>
            <li>
              <a
                href="#hero"
                onClick={(e) => scrollTo(e, 'hero')}
                className={activeSection === 'hero' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => scrollTo(e, 'about')}
                className={activeSection === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => scrollTo(e, 'features')}
                className={activeSection === 'features' ? 'active' : ''}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={(e) => scrollTo(e, 'pricing')}
                className={activeSection === 'pricing' ? 'active' : ''}
              >
                Pricing
              </a>
            </li>

            {/* Dropdown */}
            <li
              className={`dropdown ${dropdownOpen ? 'show' : ''}`}
              onMouseEnter={() => window.innerWidth >= 1200 && setDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth >= 1200 && setDropdownOpen(false)}
            >
              <a
                href="#dropdown"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                <span>Dropdown</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown ms-1"></i>
              </a>
              <ul className={dropdownOpen ? 'd-block' : ''}>
                <li><a href="#dropdown1" onClick={(e) => e.preventDefault()}>Dropdown 1</a></li>
                <li
                  className="dropdown"
                  onMouseEnter={() => window.innerWidth >= 1200 && setDeepDropdownOpen(true)}
                  onMouseLeave={() => window.innerWidth >= 1200 && setDeepDropdownOpen(false)}
                >
                  <a
                    href="#deep"
                    onClick={(e) => {
                      e.preventDefault();
                      setDeepDropdownOpen(!deepDropdownOpen);
                    }}
                  >
                    <span>Deep Dropdown</span>{' '}
                    <i className="bi bi-chevron-down toggle-dropdown ms-1"></i>
                  </a>
                  <ul className={deepDropdownOpen ? 'd-block' : ''}>
                    <li><a href="#deep1" onClick={(e) => e.preventDefault()}>Deep Dropdown 1</a></li>
                    <li><a href="#deep2" onClick={(e) => e.preventDefault()}>Deep Dropdown 2</a></li>
                    <li><a href="#deep3" onClick={(e) => e.preventDefault()}>Deep Dropdown 3</a></li>
                    <li><a href="#deep4" onClick={(e) => e.preventDefault()}>Deep Dropdown 4</a></li>
                    <li><a href="#deep5" onClick={(e) => e.preventDefault()}>Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#dropdown2" onClick={(e) => e.preventDefault()}>Dropdown 2</a></li>
                <li><a href="#dropdown3" onClick={(e) => e.preventDefault()}>Dropdown 3</a></li>
                <li><a href="#dropdown4" onClick={(e) => e.preventDefault()}>Dropdown 4</a></li>
              </ul>
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>

          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
