import MainLayout from "@/components/layout/main";
import { NextPageLayout } from "@/models";
import PageSEO from "@/seo/Seo";
import { Box } from "@mui/material";
import fsPromises from "fs/promises";
import path from "path";
import React from "react";

// export async function getStaticProps() {
//   const serviceFilePath = path.join(
//     process.cwd(),
//     "src/pages/api/services.json"
//   );
//   const serviceJsonData = await fsPromises.readFile(serviceFilePath);

//   const serviceData = JSON.parse(serviceJsonData as any);

//   return {
//     props: {},
//     revalidate: 60,
//   };
// }

const Home: NextPageLayout = (props: any) => {
  return (
    <div>
      <PageSEO
        title="Trang chủ - Gia Xe Ford VN"
        description="Trang chủ giá xe Ford VN"
      />
      <Box></Box>
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
