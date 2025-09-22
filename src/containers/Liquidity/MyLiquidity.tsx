import { Flex } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import React, { useMemo } from "react";
import { ButtonComponent } from "../PoolPage";
import { AddIcon } from "@chakra-ui/icons";
import { CurrencyAmount, ERC20Token, Pair, Token } from "@pancakeswap/sdk";

import CurrencyLogo from "@src/components/CurrencyLogo";
import Image from "next/image";
import ButtonConnectWallet from "@src/components/ButtonConnectWallet";
import RemoveLiquidity from "./RemoveLiquidity";
import Link from "next/link";
import AddMoreLiquidity from "./ModalAddMore";

export enum PairState {
  LOADING,
  NOT_EXISTS,
  EXISTS,
  INVALID,
}

const MyLiquidity: React.FC = () => {

  return (
    <Flex p="1px" maxW="378px" mt="24px" w="100%" borderRadius="16px">
      <Flex
        borderRadius="16px"
        direction={"column"}
        w="100%"
        p="8px"
        bg="radial-gradient(141.40% 131.74% at 91.77% -7.16%, rgba(10, 89, 61, 0.66) 0%, rgba(17, 58, 51, 0.54) 22.33%, #151616 45.48%)"
      >
        <Flex direction={"column"} p="16px">
          <Flex align={"center"}>
            <Typography
              pl="12px"
              color="text.primary"
              type="body1"
              fontSize={"20px"}
              fontWeight={700}
              lineHeight={"28px"}
            >
            </Typography>
          </Flex>
          <Flex w="100%" mt="34px" justifyContent={"space-between"}>
            <Flex direction={"column"}>
              <Typography type="paragraph1" color="text.secondary">
                LP token amount
              </Typography>
              <Typography type="headline3" color="text.primary">
              </Typography>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          p="16px"
          bg="rgba(255, 255, 255, 0.05)"
          borderRadius={"12px"}
        >
          <Flex align="center" w="100%" justifyContent={"space-between"}>
            <Flex direction={"column"}>
              <Typography type="body1" color="text.primary">
              </Typography>
            </Flex>
          </Flex>
          <Flex
            mt="16px"
            align="center"
            w="100%"
            justifyContent={"space-between"}
          >

            <Flex direction={"column"}>
              <Typography type="body1" color="text.primary">
              </Typography>
            </Flex>
          </Flex>
          <Flex mt="24px" w="100%" justifyContent={"space-between"}>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

interface DoubleLogoProps {
  tokenB: Token;
  tokenA: Token;
}

const DoubleLogo: React.FC<DoubleLogoProps> = ({ tokenA, tokenB }) => {
  return (
    <Flex>
      <CurrencyLogo currency={tokenA} />
      <CurrencyLogo
        style={{
          marginLeft: "-4px",
        }}
        currency={tokenB}
      />
    </Flex>
  );
};
