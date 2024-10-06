import { Streak } from "../../types";

interface SteakCellProps {
  streak: Streak;
}

const StreakCell = (props: SteakCellProps) => {
  const {
    streak: { title },
  } = props;

  return <div>{title}</div>;
};

export default StreakCell;
