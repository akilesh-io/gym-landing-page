import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Lottie from "lottie-react";
import lift from "./lift.json";
import run from "./run.json";

export const Features3 = () => {
  return (
    <>
      <Box
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          <Text h2 css={{ color: "$yellow600" }}>
            Our Programs
          </Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            We offer a variety of classes and programs to help you reach your
            fitness goals.
          </Text>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$18",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <Flex direction={"column"}>
                  <Text h3 css={{ color: "$yellow600" }}>
                    Cardio
                  </Text>
                  <Text span>
                    Cardio is a great way to burn calories and lose weight. We
                    offer a variety of cardio classes.
                  </Text>

                  <Flex css={{ justifyContent: "center", width: "82%" }}>
                    <Lottie animationData={run} />
                  </Flex>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <Flex direction={"column"}>
                  <Text h3 css={{ color: "$yellow600" }}>
                    Strength Training
                  </Text>
                  <Text span>
                    Strength training is a great way to build muscle and burn
                    fat.
                  </Text>
                  <Flex css={{ justifyContent: "center", width: "100%" }}>
                    <Lottie animationData={lift} />
                  </Flex>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
