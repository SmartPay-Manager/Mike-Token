/* eslint-disable react/no-unescaped-entities */
import { Flex, Image } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import React from "react";

const OurMission: React.FC = () => {
  return (
    <Flex
      id="mission"
      w="100%"
      maxW={"1200px"}
      mx="auto"
      px={{
        base: "16px",
        lg: "24px",
        "2xl": 0,
      }}
      mt={{
        base: "48px",
        md: "80px",
        lg: "112px",
      }}
    >
      <Flex
        w="100%"
        direction={{
          base: "column",
          xl: "row",
        }}
        justifyContent={"space-between"}
      >
        <Flex
          direction={"column"}
          w={{
            base: "100%",
            xl: "48%",
          }}
        >
          <Typography
            letterSpacing={"3.2px"}
            color="text.brand"
            type="body1-r"
            fontSize={"16px"}
            fontWeight={"400"}
          >
            [OUR MISSION]
          </Typography>
          <Typography type="headline2" color="text.primary">
            AI-Powered Innovation: Mike Token's Memecoin Revolution
          </Typography>
          <Typography mt="24px" type="paragraph1" color="text.read">
            Our mission is to democratize access to the most advanced blockchain
            technologies, making them user-friendly, efficient, and customizable
            for individuals from all walks of life.
          </Typography>
          <Image
            mt="64px"
            w={{
              base: "auto",
              sm: '350px',
              lg: "450px",
              xl: "auto",
            }}
            mx="auto"
            src="/our-mission.svg"
            alt="Our Mission"
          />
        </Flex>
        <Flex
          direction={"column"}
          w={{
            base: "100%",
            xl: "48%",
          }}
          pt={{
            base: "32px",
          }}
        >
          
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OurMission;
