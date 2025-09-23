import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const features = [
  {
    name: "Home",
    path: "/",
    icons: "home-icons",
  },
  {
    name: "Liquidity",
    path: "/liquidity",
    icons: "liquidity",
  },
  {
    name: "Swap",
    path: "/swap",
    icons: "swap-icons",
  },
  {
    name: "Pools",
    path: "/pools",
    icons: "pool-icons",
  },
  {
    name: "Farms",
    path: "/farms",
    icons: "farm-icons",
  },
  {
    name: "NFTs",
    path: "/nfts",
    icons: "nft-icons",
  },
  {
    name: "Docs",
    path: "https://miketoken-io.gitbook.io/miketoken.io/",
    icons: "docs",
    isExternal: true,
  },
];

export const Features = () => {
  const router = useRouter();
  return (
    <SimpleGrid
      columns={7} // Use a number, not an array
      color="text.primary"
      fontWeight={500}
      display={{
        xs: "none",
        xl: "grid",
      }}
    >
      <Flex
        align="center"
        justify="center"
        className="gap-4"
      >
      {features.map((e) => (
        <Link href={e.path} key={e.name} target={e.isExternal ? "_blank" : ""}>
          <Text
            as="span"
            color={router?.asPath === e.path ? "green.500" : "white"}
            fontWeight={router?.asPath === e.path ? "bold" : "normal"}
            cursor="pointer"
            transition="color 0.2s"
            _hover={{ color: "green.400" }}
            textAlign="center"
          >
            {e.name}
          </Text>
        </Link>
      ))}
      </Flex>
    </SimpleGrid>
  );
};
