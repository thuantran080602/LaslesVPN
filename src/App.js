import './CSS/App.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Illustration1 from './components/Illustration1/Illustration1';
import Rectangle from './components/Rectangle/Rectangle';
import Illustration2 from './components/Illustration2/Illustration2';
import Plan from './components/Plan/Plan';

function App() {
  return (
    <div className='container'> 
        <Header />
        <Illustration1 />
        <Rectangle />
        <Illustration2/>
        <Plan />
    </div>
  );
}

export default App;
