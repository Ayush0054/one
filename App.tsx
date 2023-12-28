import {SafeAreaView, ScrollView} from 'react-native';
import FlastCards from './components/FlastCards';
import ElevatedCards from './components/ElevatedCards';
import Fancycard from './components/Fancycard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlastCards />
        <ElevatedCards />
        <Fancycard />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
