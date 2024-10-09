import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import tw from "twin.macro";
import { useOutsideClick } from "../../hooks";
import { Streak } from "../../types";

const StyledAddChallengeButton = styled(motion.div)`
  ${tw`bg-white text-white absolute text-xl  h-10 flex justify-center items-center bg-opacity-5 backdrop-blur-2xl`}
`;

interface AddStreakButtonProps {
  addStreak: (streak: Streak) => void;
}

// TODO: Implement Challenge adding

const AddChallengeButton = (props: AddStreakButtonProps) => {
  console.log(props);
  // const { addStreak } = props;
  const [isAddStreakSheetVisible, setIsAddStreakSheetVisible] = useState(false);
  // const [newStreak, setNewStreak] = useState<Streak>({
  //   id: v4(),
  //   title: "",
  //   description: "",
  //   startDate: new Date().toISOString(),
  // });
  const addStreakSheetRef = useRef<HTMLDivElement>(null);

  const navigateBack = () => setIsAddStreakSheetVisible(false);

  useOutsideClick(addStreakSheetRef, navigateBack, isAddStreakSheetVisible);

  return (
    <div>
      <StyledAddChallengeButton
        ref={addStreakSheetRef}
        initial={{ scale: 0, width: "10%", height: "2.5rem", borderRadius: "50%", right: "4%", top: "1rem" }}
        animate={{
          scale: 1,
          width: isAddStreakSheetVisible ? "90%" : "10%",
          height: isAddStreakSheetVisible ? "20rem" : "2.5rem",
          borderRadius: isAddStreakSheetVisible ? "5%" : "50%",
          right: isAddStreakSheetVisible ? "5%" : "4%",
          top: isAddStreakSheetVisible ? "2rem" : "1rem",
        }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <IoCreateOutline onClick={() => setIsAddStreakSheetVisible(true)} />
      </StyledAddChallengeButton>
    </div>
  );
};

export default AddChallengeButton;

// <Section>
// <SectionRow>
//   <TextInput
//     value={newStreak.title}
//     onChange={(e) => setNewStreak({ ...newStreak, title: e.target.value })}
//     placeholder="Title"
//   />
// </SectionRow>
// <SectionRow last>
//   <TextAreaInput
//     value={newStreak.description}
//     onChange={(e) => setNewStreak({ ...newStreak, description: e.target.value })}
//     placeholder="Description"
//   />
// </SectionRow>
// </Section>
