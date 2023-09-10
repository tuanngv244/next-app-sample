import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FordLogo from "public/images/ford-logo.png";
import { EDevice, useDevice } from "@/hooks/useDevice";
import { Box, Container, Stack, Link as MuiLink } from "@mui/material";
import { useRouter } from "next/router";
import clsx from "clsx";

type HeaderProps = {};

type HeaderDeviceProps = {
  links: NavLinks;
};

type NavLinks = Array<{
  label: string;
  path: string;
  subChildren?: Array<{
    label: string;
    path: string;
    img?: string;
    price?: string;
  }>;
}>;

export const navLinks: NavLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Works",
    path: "/works",
  },
  {
    label: "Blog",
    path: "/blogs",
  },
];
export const Header: FC<HeaderProps> = () => {
  const { device } = useDevice();

  return device === EDevice.Mobile ? (
    <HeaderMobile links={navLinks} />
  ) : (
    <HeaderDesktop links={navLinks} />
  );
};

const HeaderDesktop: FC<HeaderDeviceProps> = ({ links }) => {
  const router = useRouter();

  return (
    <Container>
      <Stack
        direction={"row"}
        paddingY={2}
        gap={[0, 2]}
        justifyContent={"flex-end"}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.path} passHref>
            <MuiLink className={clsx({ active: router.pathname == link.path })}>
              {link.label}
            </MuiLink>
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

const HeaderMobile: FC<HeaderDeviceProps> = ({ links }) => {
  return <Box></Box>;
};
