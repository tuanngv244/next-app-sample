import { LayoutProps } from "@/models";
import React, { FC } from "react";
import Link from "next/link";
import { PATHNAME } from "@/configs";
import AuthContainer from "./AuthContainer";
import { Stack, Box, Container } from "@mui/material";
import { Header, Footer } from "@/components/common";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    // <AuthContainer>
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container>
        <Box
          sx={{
            padding: 2,
            flexGrow: 1,
          }}
        >
          Container
        </Box>
      </Container>
      <Footer />
    </Stack>
    // </AuthContainer>
  );
};

export default MainLayout;
