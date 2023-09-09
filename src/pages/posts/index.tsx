import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import MainLayout from "@/components/layout/main";
import { NextPageLayout } from "@/models";
import { Box } from "@mui/material";

const Posts: NextPageLayout = (props: any) => {
  const { data } = props || {};
  return (
    <Box sx={{
      padding:'50px'
    }} >
      <div className="flex flex-col gap-[20px]">
      {data?.map((post: any) => (
        <Link href={`posts/${post?.id}`} className="text-3xl" key={post.id}>
          {post.title}
        </Link>
      ))}
    </div>
    </Box>
  );
};

interface PostProps {
  data: any[];
}

export const getStaticProps: GetStaticProps<PostProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const { data } = await response.json();
  return {
    props: {
      data: data,
    },
    revalidate: 60,
  };
};

Posts.Layout = MainLayout;

export default Posts;
