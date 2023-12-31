import { CSSProperties, useState } from "react";
import styles from "./InteractiveProgressBar.module.scss";
import { DEFAULT_BLOCKS } from "./constants";
import { getColorByProgress } from "./utils";
import classNames from "classnames";

export interface InteractiveProgressBarProps {
  totalBlocks?: number;
  onProgressChange: (progress: number) => void;
  initialProgress?: number;
  size?: "small" | "medium" | "large";
  width?: CSSProperties["width"];
  gap?: CSSProperties["gap"];
}

export const InteractiveProgressBar = (props: InteractiveProgressBarProps) => {
  const {
    totalBlocks = DEFAULT_BLOCKS,
    onProgressChange,
    initialProgress,
    size = "medium",
    width,
    gap,
  } = props;
  const [checked, setChecked] = useState<number>(
    initialProgress ? Math.floor(initialProgress * totalBlocks) : 0
  );

  if (initialProgress && (initialProgress > 1 || initialProgress < 0)) {
    throw new Error("initialProgress must be between 0 and 1");
  }

  const color = getColorByProgress(checked / totalBlocks);

  const handleClickAtIndex = (index: number) => {
    const checkedBlocks = index < checked ? index : index + 1;
    setChecked(checkedBlocks);
    onProgressChange(checkedBlocks / totalBlocks);
  };

  const containerClass = classNames(
    {
      [styles.large]: size === "large",
      [styles.medium]: size === "medium",
      [styles.small]: size === "small",
    },
    styles.ipBarContainer
  );

  return (
    <div className={containerClass} style={{ width, gap }}>
      {Array.from({ length: totalBlocks }).map((_, index) => (
        <div
          key={index}
          className={styles.ipBlock}
          style={{ backgroundColor: index < checked ? color : undefined }}
          onClick={() => handleClickAtIndex(index)}
        />
      ))}
    </div>
  );
};
