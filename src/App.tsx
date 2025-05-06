import { Divider } from '@mui/material';
import Layout from './Layout';
import Footer from './Layout/Footer';
import Calendar from './components/Calendar';
import NewCollection from './components/Collection';
import Services from './components/Service';

function App() {
  return (
    <div className="App">
     <Layout/>
     <Services/>
     <NewCollection/>
     <Calendar/>
     <Divider sx={{ borderColor: '#383A42', borderWidth: 0.2 }} />
     <Footer/>
    </div>
  );
}

export default App;
