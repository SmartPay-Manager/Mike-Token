import { Flex, Spinner, Text, Tooltip } from "@chakra-ui/react";
import type { Currency, CurrencyAmount, Token } from "@pancakeswap/sdk";
import type { MutableRefObject } from "react";
import React, { useCallback, useMemo } from "react";
import { FixedSizeList } from "react-window";
import CurrencyLogo from "@src/components/CurrencyLogo";
import { Typography } from "@src/components/Typography";


interface IListCurrency {
  currencies: Currency[];
  showNative: boolean;
  inactiveCurrencies: Currency[];
  breakIndex: number | undefined;
  fixedListRef?: MutableRefObject<FixedSizeList | undefined>;
  onCurrencySelect: (currency: Currency) => void;
  selectedCurrency?: Currency | null;
  otherCurrency?: Currency | null;
}

const ListCurrency: React.FC<IListCurrency> = ({
  currencies,
  showNative,
  inactiveCurrencies,
  breakIndex,
  fixedListRef,
  selectedCurrency,
  otherCurrency,
  onCurrencySelect,
}) => {
  return (
    <Flex>
    </Flex>
  );
}

function Balance({ balance }: { balance: CurrencyAmount<Currency> }) {
  return (
    <Typography type="body1" color="#768597">
      { balance ? balance.toSignificant(4) : '0'}
    </Typography>
  );
}

function currencyKey(currency: Currency): string {
  // eslint-disable-next-line no-nested-ternary
  return currency?.isToken
    ? currency.address
    : currency?.isNative
    ? currency.symbol
    : "";
}

export default ListCurrency;
