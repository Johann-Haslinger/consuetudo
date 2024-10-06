import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Streak } from "../../types";
import {
  FlexBox,
  NavBarButton,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionRow,
  Sheet,
  Spacer,
  TextAreaInput,
  TextInput,
} from "../common";
import { v4 } from "uuid";

interface AddStreakButtonProps {
  addStreak: (streak: Streak) => void;
}

const AddStreakButton = (props: AddStreakButtonProps) => {
  const { addStreak } = props;
  const [isAddStreakSheetVisible, setIsAddStreakSheetVisible] = useState(false);
  const [newStreak, setNewStreak] = useState<Streak>({
    id: v4(),
    title: "",
    description: "",
    startDate: new Date().toISOString(),
  });

  const navigateBack = () => setIsAddStreakSheetVisible(false);

  const saveStreak = () => {
    addStreak(newStreak);
    navigateBack();
  };

  return (
    <div>
      <NavBarButton>
        <IoAdd onClick={() => setIsAddStreakSheetVisible(true)} />
      </NavBarButton>

      <Sheet visible={isAddStreakSheetVisible} navigateBack={navigateBack}>
        <FlexBox>
          <SecondaryButton onClick={navigateBack}>Cancel</SecondaryButton>
          {newStreak.title && <PrimaryButton onClick={saveStreak}>Save</PrimaryButton>}
        </FlexBox>
        <Spacer />
        <Section>
          <SectionRow>
            <TextInput
              value={newStreak.title}
              onChange={(e) => setNewStreak({ ...newStreak, title: e.target.value })}
              placeholder="Title"
            />
          </SectionRow>
          <SectionRow last>
            <TextAreaInput
              value={newStreak.description}
              onChange={(e) => setNewStreak({ ...newStreak, description: e.target.value })}
              placeholder="Description"
            />
          </SectionRow>
        </Section>
      </Sheet>
    </div>
  );
};

export default AddStreakButton;
