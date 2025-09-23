import HomePage from "@src/containers/HomePage";
import { Layout } from "@src/layouts";
import BackgroundLayout from "@src/layouts/BackgroundLayout";
import { ReactNode } from "react";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Index = () => {
  return (
    <Layout>
      {/* <div className={inter.className}>
        <HomePage />
        <BackgroundLayout />
      </div> */}
    </Layout>
  );
};

// Index.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Index;
