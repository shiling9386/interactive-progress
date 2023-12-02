import { PROGRESS_COLORS } from "./constants";

export const getColorByProgress = (progress: number): string => {
  if (progress < 0.25) {
    return PROGRESS_COLORS.DEFECIENT;
  }
  if (progress < 0.5) {
    return PROGRESS_COLORS.AVERAGE;
  }
  if (progress < 0.75) {
    return PROGRESS_COLORS.GOOD;
  }
  if (progress < 1) {
    return PROGRESS_COLORS.EXCELLENT;
  }
  return PROGRESS_COLORS.COMPLETE;
};
