import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonProps,
  Flex,
  Image,
} from "@chakra-ui/react";
import ButtonConnectWallet from "@src/components/ButtonConnectWallet";

import { Typography } from "@src/components/Typography";
import BigNumber from "bignumber.js";
import Link from "next/link";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
// import {
//   getRemoteConfig,
//   fetchAndActivate,
//   getValue,
// } from "@firebase/remote-config";
// import contracts from "@src/constants/contracts";

import moment from "moment";

// import Calculator from "./Calculator";
const Pools: React.FC = () => {
  const [idxFilter, setIdxFilter] = useState(0);
  // console.log("listPool :>> ", listPool);
  // useEffect(() => {
  //   const firebaseApp = getFirebaseApp();
  //   // console.log("firebaseApp :>> ", firebaseApp);
  //   const remoteConfigData = getRemoteConfig(firebaseApp);
  //   remoteConfigData.settings = {
  //     fetchTimeoutMillis: 60000,
  //     minimumFetchIntervalMillis: 60000 * 5,
  //   };
  //   fetchAndActivate(remoteConfigData)
  //     .then(() => {
  //       const data = getValue(remoteConfigData, "poolConfig");
  //       const jsonData = JSON.parse(data.asString());
  //       setListPool(jsonData);
  //     })
  //     .catch(() => {
  //       console.log("firebase err");
  //     });
  // }, []);
  const listFilter = ["Active", "Finished"];

  return (
    <Flex
      w="100%"
      direction={"column"}
      pb="100px"
      px={{
        base: "16px",
        lg: "24px",
        "2xl": 0,
      }}
      pt={{
        base: "32px",
        md: "48px",
        xl: "80px",
      }}
    >
      <Flex maxWidth={"1200px"} w={"100%"} mx="auto" justifyContent={"left"}>
        <Typography textAlign={"left"} type="headline2" color={"text.primary"}>
          Pools
        </Typography>
      </Flex>

      <Flex
        w="100%"
        direction={{
          base: "column",
          lg: "row",
        }}
        maxWidth={"1200px"}
        mx="auto"
        justifyContent={"space-between"}
      >
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Typography as="span" type="body1-r" color="text.read">
            Stake USDT and MKT tokens to earn USDT
          </Typography>

          <Flex cursor={"pointer"}>
            <Typography
              pl={{
                base: 0,
                md: "12px",
              }}
              as="span"
              type="body1-r"
              color="text.brand"
            >
              Learn more
            </Typography>

            <Image
              ml="4px"
              boxSize="20px"
              src="arrow-expand.svg"
              alt="arrow expand"
            />
          </Flex>
        </Flex>
        <Flex
          mt={{
            base: "24px",
            lg: 0,
          }}
          borderRadius={"6px"}
          bg="bg.primary"
          w="fit-content"
        >
          {listFilter.map((e, idx) => {
            return (
              <Flex
                h="32px"
                justify={"center"}
                align={"center"}
                bg={idx === idxFilter ? "bg.brand" : "bg.secondary"}
                key={`item-filter-${idx}`}
                w="107px"
                borderRadius={"6px"}
                onClick={() => setIdxFilter(idx)}
                cursor={"pointer"}
              >
                <Typography
                  type="button3"
                  color={idx === idxFilter ? "bg.secondary" : "text.secondary"}
                >
                  {e}
                </Typography>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Pools;

interface ButtonComponentProps extends ButtonProps {
  title: string | ReactNode | any;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  ...rest
}) => {
  return (
    <Button
      background={"bg.brand !important"}
      borderRadius={"6px"}
      _hover={{
        bg: "bg.brand-active !important",
      }}
      _active={{
        bg: "bg.brand-active !important",
      }}
      color={"bg.default"}
      {...rest}
    >
      {typeof title === "string" ? (
        <Typography type="button1">{title}</Typography>
      ) : (
        title
      )}
    </Button>
  );
};