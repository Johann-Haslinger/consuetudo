import AuthUI from "./components/auth-ui/AuthUI";
import { NavigationBar, Spacer, Title, View } from "./components/common";
import { AddStreakButton, StreakCell } from "./components/streaks";
import { useSession, useStreaks } from "./hooks";

const App = () => {
  const {streaks, addStreak} = useStreaks();
  const { isLoggedIn } = useSession();

  return isLoggedIn == false ? (
    <AuthUI />
  ) : (
    <div>
      <View viewType="baseView">
        <NavigationBar>
          <AddStreakButton addStreak={addStreak} />
        </NavigationBar>
        <Spacer />
        <Title>Streaks</Title>
        <Spacer />
        {streaks.map((streak) => (
          <StreakCell key={streak.id} streak={streak} />
        ))}
      </View>
    </div>
  );
};

export default App;
