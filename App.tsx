import {SafeAreaView, ScrollView} from 'react-native';
import FlastCards from './components/FlastCards';
import ElevatedCards from './components/ElevatedCards';
import Fancycard from './components/Fancycard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlastCards />
        <ElevatedCards />
        <Fancycard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
