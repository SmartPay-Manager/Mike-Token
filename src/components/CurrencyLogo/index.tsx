import type { Token } from "@pancakeswap/sdk";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface ICurrencyLogo {
  currency?: Token;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CurrencyLogo: React.FC<ICurrencyLogo> = ({
  className,
  currency,
  size = 24,
  style,
}) => {
  return (
    <></>
  );
};

export default CurrencyLogo;
