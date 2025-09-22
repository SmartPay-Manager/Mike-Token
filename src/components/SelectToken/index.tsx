import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Typography } from "../Typography";
import { AutoSizer, List, AutoSizerProps, ListProps } from "react-virtualized";
import { Currency, Token } from "@pancakeswap/sdk";
import CurrencyLogo from "../CurrencyLogo";
import { WrappedTokenInfo, createFilterToken } from "@pancakeswap/token-lists";
import ListCurrency from "./ListCurrency";
import type { FixedSizeList } from "react-window";

interface SelectTokensProps {
  onSelectToken?: (token: Currency) => void;
  currency: Currency;
  isAddMore?: boolean;
}

const SelectTokens: React.FC<SelectTokensProps> = ({
  onSelectToken,
  currency,
  isAddMore,
}) => {

  return (
    <>
    </>
  );
};

export default SelectTokens;

const ModalSelectTokens: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSelectToken?: (val: Currency) => void;
}> = ({ isOpen, onClose, onSelectToken }) => {
  
  return (
    <></>
  );
};

const Balance: React.FC<{ tokenAddress: string }> = ({ tokenAddress }) => {

  return (
    <></>
  );
};

const ListTokenCommon: React.FC<{
  onSelectToken?: (val: Currency) => void;
  onClose: () => void;
}> = ({ onSelectToken, onClose }) => {

  return (
    <></>
  );
};

const TokenItemListCommon: React.FC<{
  token: any;
  isLastItem: boolean;
  onClose: () => void;
  onCurrencySelect?: (cur: Currency) => void;
}> = ({ token, isLastItem, onCurrencySelect, onClose }) => {
  
  return (
    <>
     
    </>
  );
};
