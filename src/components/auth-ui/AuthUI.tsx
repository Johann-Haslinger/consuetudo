import styled from "@emotion/styled";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import tw from "twin.macro";
import { useSelectedTheme } from "../../hooks/useSelectedTheme";
import supabaseClient from "../../lib/supabase";

const StyledAuthUI = styled.div`
  ${tw` w-screen dark:bg-primary-dark bg-secondary h-screen`}
`;

const AuthUI = () => {
  const { isDarkModeActive } = useSelectedTheme();

  return (
    <StyledAuthUI>
      <div tw=" xl:w-1/4 md:w-1/3 h-full mx-auto flex items-center justify-center ">
        <div tw="w-full h-fit">
          <Auth
            supabaseClient={supabaseClient}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: isDarkModeActive ? "#232323" : "black",
                    brandAccent: isDarkModeActive ? "#232323" : "black",
                    inputLabelText: isDarkModeActive ? "#000000" : "#F6F6F6",
                    defaultButtonBackgroundHover: isDarkModeActive ? "#23232390" : "#00000090",
                  },
                  radii: {
                    borderRadiusButton: "1.5rem",
                    inputBorderRadius: "1.5rem",
                    buttonBorderRadius: "1.5rem",
                  },
                  space: {
                    emailInputSpacing: "0px",
                    labelBottomMargin: "0px",
                  },
                },
              },
            }}
            theme={isDarkModeActive ? "dark" : "light"}
            providers={[]}
          />
        </div>
      </div>
    </StyledAuthUI>
  );
};

export default AuthUI;
