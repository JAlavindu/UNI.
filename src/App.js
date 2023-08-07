
import './App.css';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      {/* <h1>First ever Sri Lankan University Students Digital Community Hub Our Mission is to connect you with other fellow students who are are studying in Sri Lanka, and to help you grow your network rapidly while making solid friendships.</h1> */}
      <div className="container">
      <div className="d-flex justify-content-center">

      <p class="d-inline-flex gap-1">
      <SignIn/>
      <SignUp/>
      {/* hi */}
      </p>
      <br/><br/><Contact/>
      </div>
      </div>
    </div>
  );
}

export default App;
