import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import tw from "twin.macro";

const StyledNavBarWrapper = styled.div`
  ${tw`flex fixed px-4 md:!bg-opacity-0  bg-primary dark:bg-primary-dark md:dark:bg-opacity-0   z-[100] transition-all    md:px-6 items-center top-0 dark:text-white text-primary-text left-0 w-full justify-between   h-14 `}
`;

const ToolIconWrapper = styled.div`
  ${tw`flex h-fit space-x-4 lg:space-x-8 items-center`}
`;

const StyledLeftSideWrapper = styled.div`
  ${tw`items-center flex`}
`;

const NavigationBar = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <StyledNavBarWrapper>
      <StyledLeftSideWrapper></StyledLeftSideWrapper>

      <ToolIconWrapper>{children}</ToolIconWrapper>
    </StyledNavBarWrapper>
  );
};

export default NavigationBar;
