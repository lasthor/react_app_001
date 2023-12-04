import './App.scss';
import Header from './components/Header';
import Section_01 from './components/Section_01';
import Section_02 from './components/Section_02';
import Section_03 from './components/Section_03';
import Section_04 from './components/Section_04';
import Section_05 from './components/Section_5';
import Section_06 from './components/Section_06';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      
      <Header titile='inscriptions'/>
      <Section_01/>
      <Section_02/>
      <Section_03/>
      <Section_04/>
      <Section_05/>
      <Section_06 />
      <Footer />
      
      

      
    </div>
  );
}

export default App;
