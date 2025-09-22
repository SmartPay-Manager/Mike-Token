import { ReactNode } from "react";
import { Layout } from "@src/layouts";
import { ComingSoonPage } from "@src/layouts/ComingSoonPage";
import { Meta } from "@src/containers/Meta";
import { Box } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";

const Nfts = () => {
  return (
    <>
      <Meta title="NFT: Welcome to the captivating world of Mike Token NFTs" description="" />
      <Box minHeight={"100vh"}>
        {/* <ComingSoonPage /> */}
      </Box>
    </>
  );
};

Nfts.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Nfts;
