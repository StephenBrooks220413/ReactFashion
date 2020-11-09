import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Styles</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Contact">Contact</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="https://facebook.com">Facebook</a>
                <a class="dropdown-item" href="https://linkedin.com">LinkedIn</a>
                <a class="dropdown-item" href="https://github.com/Stephen.Brooks220413">Github</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* jumbotron header */}
      <div className="top-content">
        <div className="container title">
          <h1 className="header display-4 text-center">Today's Fashion</h1>
          <h3 className="header text-center">MAde With React.js</h3>
        </div>
        <center>
          <button className="info btn btn-primary">More Info</button>
        </center>
      </div>
      {/* jumbotron */}
      <div className="jumbotron text-center">
        <h4>Making Reviews Our Priority</h4>
      </div>
      <div className="middle-content text-center">
        <div className="container">
          <h1 className="header display-4">Clothes for Now</h1>
        </div>
        <p>Making outstounding Lines for all backgrounds</p>
        <center>
          <button className="btn btn-primary">More Info</button>
        </center>
      </div>
      {/* jumbotron */}
      <div className="jumbotron text-center">
        <h4>Seasonal Lines Coming Soon</h4>
      </div>
      <div className="center-content text-center">
        <div className="container">
          <h1 className="display-4 header">New Trends</h1>
        </div>
        <p>Making outstounding Lines for all backgrounds</p>
        <center>
          <button className="btn btn-primary">More Info</button>
        </center>
      </div>
      {/* jumbotron */}
      <div className="jumbotron text-center">
        <h4>Now Hiring for Models</h4>
      </div>
      {/* bottom content */}
      <div className="bottom-content text-center">
        <div className="container">
          <h1 className="display-4 header">Have What it Takes?</h1>
        </div>
        <p>Models needed for the upcoming lines, contact us for more info</p>
        <center>
          <button className="btn btn-primary">More Info</button>
        </center>
      </div>
      <div className="contact-content text-center">
        <div className="container">
          <h1 className="display-4">Contact Us</h1>
        </div>
        <div className="contact-content container text-center">
          <form>
            <input type="text" placeholder="Full Name" class="form-control" id="inputName"></input>
            <br/>
            <input type="email" placeholder="Email" class="form-control" id="inputEmail"></input>
            <br/>
            <textarea type="text" placeholder="Your Message" rows="4" cols="25" spellcheck="true" class="form-control" id="inputName"></textarea>
            <br/>
            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
