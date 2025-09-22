import {
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { Pair } from "@pancakeswap/sdk";
import CurrencyLogo from "@src/components/CurrencyLogo";
import { Typography } from "@src/components/Typography";
import BigNumber from "bignumber.js";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ButtonComponent } from "../PoolPage";
import useSWR from "swr";
import { useSigner } from "wagmi";

const RemoveLiquidity: React.FC<{ data: Pair; avail: string }> = ({
  data,
  avail,
}) => {

  return (
    <>
      <ButtonComponent
        background={"transparent"}
        border="1px solid"
        borderColor="bg.tertiary"
        color="text.primary"
        _hover={{
          bg: "bg.tertiary",
        }}
        mt="0px"
        w="48%"
        title="Remove"
      />
    </>
  );
};

export default RemoveLiquidity;
