import { InteractiveProgressBar } from "./lib";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <InteractiveProgressBar totalBlocks={10} onProgressChange={() => {}} />
      <InteractiveProgressBar gap={24} width={"100%"} totalBlocks={4} onProgressChange={() => {}} />
    </div>
  );
}

export default App;
