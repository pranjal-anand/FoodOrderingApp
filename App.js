const Header = () => {
  // Logo
  // Nav Items
  return (
    <div className="app-header">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#services">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      {/* Header Component */ <Header />}
      {/* Body Component */ }
      {/* Footer Component */ }
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
