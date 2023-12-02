import { InteractiveProgressBar } from "./lib";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <InteractiveProgressBar totalBlocks={10} onProgressChange={() => {}} />
    </div>
  );
}

export default App;
