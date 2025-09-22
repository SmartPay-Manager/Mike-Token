import {
  Box,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { Currency, Pair, Token } from "@pancakeswap/sdk";
import ButtonConnectWallet from "@src/components/ButtonConnectWallet";
import { SwitchIcon, WalletIcon } from "@src/components/Icon";
import SelectTokens from "@src/components/SelectToken";
import { Typography } from "@src/components/Typography";
import { BigNumber as BigNumberEther } from "@ethersproject/bignumber";


import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useSigner } from "wagmi";
import useSWR from "swr";
import BigNumber from "bignumber.js";
import { ButtonComponent } from "../PoolPage";

const AddMoreLiquidity: React.FC<{ data: Pair }> = ({ data }) => {
  const { data: signer } = useSigner();
  const [isApprovedTokenA, setIsApprovedTokenA] = useState(false);
  const [isApprovedTokenB, setIsApprovedTokenB] = useState(false);
  const [isPendingApprover, setIsPendingApprover] = useState(false);
  const [isPendingAddLiquidity, setIsPendingAddLiquidity] = useState(false);

  return (
    <>
      <ButtonComponent
        background={"transparent"}
        border="1px solid"
        borderColor="text.brand"
        color="text.brand"
        _hover={{
          color: "text.primary",
          bg: "bg.brand",
        }}
        w="48%"
        mt="0px"
        title="Add more"
      />
        <ModalOverlay />
        <ModalContent bg="bg.secondary" borderRadius={"8px"}>
          <ModalCloseButton
            mt="6px"
            color="text.secondary"
            _hover={{
              color: "text.primary",
            }}
          />
          <ModalBody p="0">
            <Flex direction={"column"}>
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
                <Typography
                  textAlign={"center"}
                  type="headline5"
                  py="16px"
                  className="text-primary"
                >
                  Add Liquidity
                </Typography>

                <Flex flexDirection="column">
                  <Flex
                    borderTopRadius={"12px"}
                    p="24px 16px 16px 16px"
                    className="bg-default"
                    flexDirection={"column"}
                    position={"relative"}
                  >
                    <Flex align={"center"} justifyContent={"space-between"}>
                      <Typography
                        type="headline3"
                        w="70%"
                        className="text-secondary"
                      >
                        <Input
                          sx={{ direction: "rtl", fontSize: "28px" }}
                          variant="unstyled"
                          placeholder="0.0"
                          color="text.primary"
                          textAlign={"right"}
                        />
                      </Typography>
                    </Flex>
                    <Flex
                      justifyContent={"space-between"}
                      align={"center"}
                      mt="9px"
                    >
                      <Flex align={"center"}>
                        <WalletIcon boxSize={"20px"} />{" "}
                        <Typography
                          type="caption1-r"
                          className="text-primary ml-2 mr-2"
                        >
                        </Typography>
                        <Typography
                          cursor={"pointer"}
                          type="paragraph2"
                          className="text-brand"
                        >
                          MAX{" "}
                        </Typography>
                      </Flex>
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
                      <Typography
                        type="headline3"
                        w="70%"
                        className="text-secondary"
                      >
                        <Input
                          sx={{ direction: "rtl", fontSize: "28px" }}
                          variant="unstyled"
                          placeholder="0.0"
                          textAlign={"right"}
                          color="text.primary"
                        />
                      </Typography>
                    </Flex>
                    <Flex
                      justifyContent={"space-between"}
                      align={"center"}
                      mt="9px"
                    >
                      <Flex align={"center"}>
                        <WalletIcon boxSize={"20px"} />{" "}
                        <Typography
                          type="caption1-r"
                          className="text-primary ml-2 mr-2"
                        >
                        </Typography>
                        <Typography
                          cursor={"pointer"}
                          type="paragraph2"
                          className="text-brand"
                        >
                          MAX{" "}
                        </Typography>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Typography
                  mb="8px"
                  type="body1"
                  color="text.primary"
                  mt="24px"
                >
                  Prices and pool share
                </Typography>
                <Flex
                  border="1px solid"
                  borderColor="#3E454B"
                  borderRadius={"8px"}
                  py="12px"
                  px="16px"
                >
                  <SimpleGrid columns={3} spacing={2} w="100%">
                    <Box>
                      <Typography
                        textAlign={"center"}
                        type="body1"
                        color="text.primary"
                      >
                      </Typography>
                      <Typography
                        mt="4px"
                        textAlign={"center"}
                        type="body1"
                        color="text.secondary"
                      >
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        textAlign={"center"}
                        type="body1"
                        color="text.primary"
                      >
                      </Typography>
                      <Typography
                        mt="4px"
                        textAlign={"center"}
                        type="body1"
                        color="text.secondary"
                      >
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        textAlign={"center"}
                        type="body1"
                        color="text.primary"
                      >
                        
                      </Typography>
                      <Typography
                        mt="4px"
                        textAlign={"center"}
                        type="body1"
                        color="text.secondary"
                      >
                        Share of Pool
                      </Typography>
                    </Box>
                  </SimpleGrid>
                </Flex>
                <Flex my="24px">
                    <ButtonConnectWallet h="48px" w="100%">
                    </ButtonConnectWallet>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
    </>
  );
};

export default AddMoreLiquidity;
