import { IoAdd } from "react-icons/io5";
import AuthUI from "./components/auth-ui/AuthUI";
import { NavBarButton, NavigationBar, Spacer, Title, View } from "./components/common";
import StreakCell from "./components/streaks/StreakCell";
import { useSession } from "./hooks";
import { useStreaks } from "./hooks/useStreaks";

const App = () => {
  const streaks = useStreaks();
  const { isLoggedIn } = useSession();

  return !isLoggedIn ? (
    <AuthUI />
  ) : (
    <div>
      <View>
        <NavigationBar>
          <NavBarButton>
            <IoAdd />
          </NavBarButton>
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
