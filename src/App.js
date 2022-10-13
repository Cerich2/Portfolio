import Header from './Components/Header';
import { details, menus } from './utils/const';
import styles from "./App.css"
import Card from './Components/Card';

const App = () => {
  return (
    <div className={styles['body-pane']}>
      <Card/>
    </div>
  );
};

export default App;
