import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HomeView from './components/HomeView/HomeView';
import Footer from './components/Footer/Footer';

export default function App() {
   return (
      <div className="App">
         <Header />
         <Main />
         <hr />
         <HomeView />
         <Footer />
      </div>
   );
}
