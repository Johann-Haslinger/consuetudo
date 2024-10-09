import styled from "@emotion/styled";
import tw from "twin.macro";
import { Streak } from "../../types";
import { formatStreakStartDate } from "../../utils";

interface SteakCellProps {
  streak: Streak;
}
const StyledTitle = styled.div`
  ${tw`mb-0.5`}
`;

const StreakCell = (props: SteakCellProps) => {
  const {
    streak: { title, startDate },
  } = props;
  const formattedStartDate = formatStreakStartDate(startDate);

  return (
    <div>
      <StyledTitle> {title}</StyledTitle>
      <p tw="text-sm text-secondary-text">{formattedStartDate}</p>
    </div>
  );
};

export default StreakCell;
