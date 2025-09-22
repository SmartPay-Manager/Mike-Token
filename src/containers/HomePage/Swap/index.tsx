import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure,
  Switch,
  Button,
} from "@chakra-ui/react";
import ButtonConnectWallet from "@src/components/ButtonConnectWallet";
import { Typography } from "@src/components/Typography";
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import BigNumber from "bignumber.js";
import useSWR from "swr";
import { useAccount } from "wagmi";
import {
  SwitchIcon,
  RotateSwitchIcon,
  WalletIcon,
  GasFeeIcon,
  SettingIcon,
} from "@src/components/Icon";
import ItemSwap from "./components/ItemSwap";

import { Currency, CurrencyAmount } from "@pancakeswap/sdk";

import { escapeRegExp } from "lodash";
import SelectTokens from "@src/components/SelectToken";
import { SwapAction } from "./components/SwapAction";

export enum Field {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

const listOptionsAmount = [
  { value: 25, label: "25%" },
  { value: 50, label: "50%" },
  // { value: 75, label: "75%" },
  { value: 100, label: "Max" },
];
const SwapPage: React.FC = () => {
  const [isApproved, setIsPendingApproved] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  // let tokenContract = account;
  // const { data: allowance, error } = useSWR(
  //   ["allowance", account],
  //   async () => {
  //     const res = await tokenContract.allowance(
  //       account,
  //       0xce5bacb6f5f93724e59f5d8362df2c249d55b293
  //     );
  //     return res;
  //   }
  // );
  // useEffect(() => {
  //   setIsPendingApproved(new BigNumber(allowance?._hex).isGreaterThan(0));
  // }, [allowance?._hex]);
  
  const [percent, setPercent] = useState<number | string>("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const tabSetting = [0.1, 0.2, 0.8, 1, 2];

  return (
    <>
      <Flex
        className="max-w-[1200px] w-full mx-auto h-full item-center"
        align={"center"}
      >
        <Flex
          borderRadius={"12px"}
          className="bg-secondary "
          flexDirection={"column"}
          h="fit-content"
          px="16px"
          w="100%"
          maxWidth="480px"
          mx="auto"
        >
          <Flex justifyContent={"space-between"} align={"center"} my="16px">
            <Typography type="headline5" className="text-primary">
              Swap
            </Typography>
            <Flex>
              <SettingIcon
                onClick={onOpen}
                cursor={"pointer"}
                boxSize={"24px"}
              />
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Flex
              borderTopRadius={"12px"}
              p="24px 16px 28px 16px"
              className="bg-default"
              flexDirection={"column"}
              position={"relative"}
            >
              <Flex align={"center"} justifyContent={"space-between"}>
                
                <Typography type="headline3" w="70%" className="text-secondary">
                  <Input
                    sx={{
                      fontSize: {
                        xs: "24px",
                        md: "26px",
                        lg: "28px",
                      },
                    }}
                    variant="unstyled"
                    placeholder="0.0"
                    color="text.primary"
                    textAlign={"right"}
                    type="number"
                  />
                </Typography>
              </Flex>
              <Flex justifyContent={"space-between"} align={"center"} mt="16px">
                <Flex align={"center"}>
                  <Typography type="caption1-r" className="text-primary mr-2">
                    <WalletIcon boxSize={"20px"} /> {" "}
                  </Typography>
                  {/* <Typography
                    type="paragraph2"
                    className="text-brand"
                    cursor={"pointer"}
                    onClick={handleMaxInput}
                  >
                    MAX{" "}
                  </Typography> */}
                </Flex>
                <Flex
                  sx={{
                    // width:"100%"
                    gap: "10px",
                  }}
                >
                  {listOptionsAmount.map((item) => (
                    <Button
                      variant={"unstyled"}
                      key={item.value}
                      sx={{
                        h: "24px",
                        borderRadius: "10px",
                        width: "60px",
                        fontSize: "12px",
                        fontWeight: "medium",
                      }}
                      border="1px solid"
                      borderColor={
                        item.value === percent ? "text.brand" : "text.secondary"
                      }
                      color={
                        item.value === percent ? "text.brand" : "text.secondary"
                      }
                      fontSize={"sm"}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Flex>
                {/* <Typography type="body2" className="text-secondary">
                  $.00
                </Typography> */}
              </Flex>
              <SwitchIcon
                position={"absolute"}
                boxSize={"36px"}
                bottom={"-18px"}
                left={"46%"}
              />
            </Flex>
            <Flex
              borderBottomRadius={"12px"}
              p="24px 16px 16px 16px"
              className="bg-default"
              flexDirection={"column"}
              mt="4px"
            >
              <Flex align={"center"} justifyContent={"space-between"}>
                
                <Input
                  sx={{
                    fontSize: {
                      xs: "24px",
                      md: "26px",
                      lg: "28px",
                    },
                  }}
                  variant="unstyled"
                  placeholder="0.0"
                  color="text.primary"
                  textAlign={"right"}
                />
              </Flex>
              <Flex justifyContent={"space-between"} align={"center"} mt="9px">
                <Flex>
                  <Typography type="caption1-r" className="text-primary mr-2">
                    <WalletIcon boxSize={"20px"} />{" "}
                    "0.000"
                  </Typography>
                  {/* <Typography
                    type="paragraph2"
                    className="text-brand"
                    cursor={"pointer"}
                    onClick={handleMaxOutput}
                  >
                    MAX{" "}
                  </Typography> */}
                </Flex>
                {/* <Typography type="body2" className="text-secondary">
                  $.00
                </Typography> */}
              </Flex>
            </Flex>
          </Flex>
          <Flex my="24px">
            
          </Flex>
            <Flex w="100%" mb="24px">
              <Accordion w="100%" allowMultiple>
                <AccordionItem border="0">
                  <h2>
                    <AccordionButton
                      p="0"
                      _expanded={{
                        borderBottom: "1px solid #36414B",
                        p: "0 0 16px 0",
                      }}
                    >
                      <Flex
                        as="span"
                        flex="1"
                        textAlign="left"
                        justifyContent={"space-between"}
                      >
                        <Typography type="body2">
                          <Flex className="text-primary">
                            1 {" "}
                            <RotateSwitchIcon boxSize={"20px"} mx="8px" />{" "}
                           {" "}
                            {" "}
                            {/* <Text ml="12px" className="text-secondary">
                              ($620.22)
                            </Text> */}
                          </Flex>
                        </Typography>
                        <Typography type="body2" className="text-secondary">
                          <GasFeeIcon boxSize={"20px"} /> $0.5
                        </Typography>
                      </Flex>
                      <AccordionIcon boxSize={"24px"} color="#778092" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="text-primary" p="0" mt="16px">
                    <ItemSwap
                      title="Price Impact"
                      content={`%`}
                    />
                    <ItemSwap
                      title="Minimum Output"
                      content={
                        "---"
                      }
                    />
                    <ItemSwap
                      title="Expect Output"
                      content={`{""
                      }`}
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="#232325" p="16px">
          <ModalCloseButton />
          <Typography type="headline5" className="text-primary">
            Settings
          </Typography>
          <Flex p="8px" flexDirection={"column"}>
            <Typography type="paragraph1" pb="16px" className="text-secondary">
              Slippage Tolerance
            </Typography>
            <Tabs variant="soft-rounded" mb="12px" w="100%">
              <TabList w="100%">
                {tabSetting.map((item, index) => {
                  return (
                    <Tab
                      h="32px"
                      border="1px solid #414E5A"
                      color="#F6F6FF"
                      borderRadius={"6px"}
                      _selected={{
                        border: "1px solid #1ED760",
                        color: "#1ED760",
                      }}
                      p="6px 12px"
                      w={"inherit"}
                      key={`${item}-${index}`}
                      mr={index === tabSetting.length - 1 ? "" : "8px"}
                    >
                      {item}%
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs>
            <InputGroup size="md">
              <Input
                className="text-primary"
                _placeholder={{ color: "#555C6D" }}
                borderColor={"#414E5A"}
                pr="4.5rem"
                placeholder="Default"
              />
              <InputRightElement width="2.5rem" className="text-secondary">
                %
              </InputRightElement>
            </InputGroup>
            <Typography
              type="paragraph1"
              pt="24px"
              pb="8px"
              className="text-secondary"
            >
              Transaction Deadline
            </Typography>
            <InputGroup size="md">
              <Input
                className="text-primary"
                pr="4.5rem"
                _placeholder={{ color: "#555C6D" }}
                placeholder="Minutes"
                borderColor={"#414E5A"}
              />
              <InputRightElement width="5rem" className="text-secondary">
                Minutes
              </InputRightElement>
            </InputGroup>
            <Flex
              align={"center"}
              pt="24px"
              pb="8px"
              justifyContent={"space-between"}
            >
              <Typography type="paragraph1" className="text-secondary">
                Transaction Deadline
              </Typography>
              <Switch />
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SwapPage;
