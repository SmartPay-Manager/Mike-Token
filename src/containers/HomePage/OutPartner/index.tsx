import React from "react";
import Marquee from "react-fast-marquee";
import { Typography } from "@src/components/Typography";
import { Box, Flex, Image } from "@chakra-ui/react";
const OurPartner: React.FC = () => {
  return (
    <Flex
      borderTop={"2px solid"}
      borderBottom={"6px solid"}
      //   py="54px"
      borderColor={"bg.secondary"}
      position={"relative"}
      overflow={"hidden"}
      h="140px"
      align={"center"}
    >
      <Flex
        color="text.brand"
        opacity="0.05000000074505806"
        fontWeight={700}
        textAlign={"center"}
        fontSize={"100px"}
        justify={"center"}
        mx="auto"
        whiteSpace={"nowrap"}
        align={"center"}
        justifyContent={"center"}
        position={"absolute"}
        left={{
          base: 0,
          lg: "10%",
          xl: "20%",
        }}
      >
        OUR PARTNERS
      </Flex>

      <Marquee
        speed={30}
        gradient={false} // Tắt hiệu ứng gradient
        direction={"left"} // Thiết lập hướng di chuyển
        delay={0}
        autoFill={true}
      >
        
      </Marquee>
    </Flex>
  );
};

export default OurPartner;
