import Header from './Components/Header';
import { details, menus } from './utils/const';

const App = () => {
  return (
    <div>
      <Header details={details} menus={menus} />
    </div>
  );
};

export default App;
