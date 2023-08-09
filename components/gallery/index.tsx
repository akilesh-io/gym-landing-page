import { Container, Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { AcmeLogo } from "../navbar/logo";
import { Flex } from "../styles/flex";
import PhotoGallery from "./PhotoGallery";
import TransGallery from "./trans";
import { Insta } from "./insta";

export const Gallery = () => {
  return (
    <>
      <Flex
        id="gallery"
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center", color: "$yellow600" }}>
          Equipment
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          In our gallery you can see some of the equipment we have in our gym.
        </Text>
      </Flex>

      <Container
        css={{
          pt: "$15",
          px: "$6",
          "@lg": {
            px: "$64",
          },
        }}
      >
        <PhotoGallery />
      </Container>

      <Flex
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text
          id="trainers"
          h2
          css={{ textAlign: "center", color: "$yellow600" }}
        >
          Our Trainers
        </Text>
        <Grid.Container
          gap={6}
          alignItems="center"
          justify="center"
          css={{
            width: "100%",
            "@sm": {
              width: "100%",
            },
            "&  span": {
              whiteSpace: "pre",
            },
          }}
        >
          <Grid sm={3} justify="center">
            <Flex align={"center"} justify={"center"}>
              <AcmeLogo />
              <Text weight={"semibold"} span size={"$lg"}>
                Trainer 1
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <AcmeLogo />{" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Trainer 2
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <AcmeLogo />{" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Trainer 3
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <AcmeLogo />{" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Trainer 4
              </Text>
            </Flex>
          </Grid>
        </Grid.Container>
      </Flex>

      <div
        style={{
          margin: "8px",
          maxWidth: "700px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Insta />
      </div>

      <Flex
        id="gallery"
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center", color: "$yellow600" }}>
          Transformations
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          People who have transformed their bodies with us.
        </Text>
      </Flex>

      <Container
        css={{
          pt: "$15",
          px: "$6",
          "@lg": {
            px: "$64",
          },
        }}
      >
        <TransGallery />
      </Container>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
