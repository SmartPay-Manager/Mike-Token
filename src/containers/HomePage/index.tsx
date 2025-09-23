import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Community from "./Community";
import HowToBuy from "./HowToBuy";
import IncomeSolution from "./IncomeSolution";
import OurMission from "./OurMission";
import Roadmap from "./Roadmap";
import TeamMember from "./TeamMember";
import Tokenomics from "./Tokenomics";
import OurPartner from "./OutPartner";
console.log("Homepage => out")
const HomePage: React.FC = () => {
  console.log("Homepage => in");
  return (
    <Flex direction={"column"} position={"relative"}>
      <IncomeSolution />
      <OurPartner/>
      <OurMission />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <TeamMember />
      <Community />
    </Flex>
  );
};

export default HomePage;
