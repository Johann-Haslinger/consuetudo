import styled from "@emotion/styled";
import tw from "twin.macro";
import AuthUI from "./components/auth-ui/AuthUI";
import { AddChallengeButton, ChallengeCell } from "./components/challenges";
import { NavigationBar, Spacer, Title, View } from "./components/common";
import { useSession, useStreaks } from "./hooks";

const App = () => {
  const { streaks, addStreak } = useStreaks();
  const { isLoggedIn } = useSession();

  return isLoggedIn == false ? (
    <AuthUI />
  ) : (
    <div>
      <View viewType="baseView">
        <NavigationBar>
          <AddChallengeButton addStreak={addStreak} />
        </NavigationBar>
        <Spacer />
        <Title>Good morning!</Title>
        <Spacer />
        <StatsSection />
        <Spacer size={8} />
        {streaks.map((streak) => (
          <ChallengeCell key={streak.id} streak={streak} />
        ))}
      </View>
    </div>
  );
};

export default App;

const StyledSectionWrapper = styled.div`
  ${tw`flex space-x-2 w-full justify-between`}
`;

const StatsSection = () => {
  return (
    <StyledSectionWrapper>
      <div tw="w-full">
        <StatBox />
        <StatBox />
      </div>
      <div tw="w-full">
        <StatBox />
        <StatBox />
      </div>
    </StyledSectionWrapper>
  );
};

const StatBox = () => {
  return <div tw="w-full mt-2 h-40 bg-white bg-opacity-5 rounded-lg"></div>;
};
