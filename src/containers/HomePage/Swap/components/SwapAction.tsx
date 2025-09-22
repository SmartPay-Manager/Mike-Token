import { Button } from "@chakra-ui/react";
import { Currency, Trade, TradeType } from "@pancakeswap/sdk";
import ButtonConnectWallet from "@src/components/ButtonConnectWallet";
import { Typography } from "@src/components/Typography";
import { ButtonComponent } from "@src/containers/PoolPage";
import React, { useCallback, useState } from "react";
import { useProvider } from "wagmi";

export const SwapAction = ({
  trade,
  titleButton,
  swapInputError,
  allowedSlippage,
  recipient,
  approveCallback,
  needApproval,
}: any) => {
  const [
    { tradeToConfirm, swapErrorMessage, attemptingTxn, txHash },
    setSwapState,
  ] = useState<{
    tradeToConfirm: Trade<Currency, Currency, TradeType> | undefined;
    attemptingTxn: boolean;
    swapErrorMessage: string | undefined;
    txHash: string | undefined;
  }>({
    tradeToConfirm: undefined,
    attemptingTxn: false,
    swapErrorMessage: undefined,
    txHash: undefined,
  });
  const provider = useProvider();

  return (
    <ButtonConnectWallet h="48px" w="100%">
      <ButtonComponent
        className={"prose cursor-pointer w-full bg-brand px-3 py-2"}
        h="48px"
        borderRadius={"8px"}
        textAlign="center"
        justifyContent={"center"}
        sx={{
          bg: "bg-brand",
        }}
        isDisabled={swapInputError}
        _hover={{}}
        _active={{}}
        title={titleButton}
        loadingText={`${titleButton}...`}
      />
    </ButtonConnectWallet>
  );
};
