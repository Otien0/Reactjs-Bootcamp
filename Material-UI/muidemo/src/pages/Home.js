import '../Home.css';

// import { logout } from '../redux/actions/userActions2';


function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                
                <a href="/" className="navbar-brand d-inline-flex px-4 py-3 px-lg-5">
                    <h2 className="m-0" style={{color: 'blue', display: 'inline-flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                      MUI DEMO
                    </h2>
                </a>
                
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                      <a href="/buttons" className="nav-item nav-link active" style={{color: 'blue'}}>Buttons</a>
                      <a href="/form" className="nav-item nav-link" style={{color: 'blue'}}>Form</a>
                      <a href="/textfield" className="nav-item nav-link" style={{color: 'blue'}}>Textfield</a>
                      <a href="/checkbox" className="nav-item nav-link" style={{color: 'blue'}}>Checkbox</a>
                      <a href="/register" className="nav-item nav-link" style={{color: 'blue'}}>SignUp</a>
                      <a href="/login" className="nav-item nav-link" style={{color: 'blue'}}>Login</a>
                    </div>
                </div>
            </nav>


            <main>
              <h2>REACT MUI DEMO</h2>
            </main>
        </div>
    );
}

export default Home;