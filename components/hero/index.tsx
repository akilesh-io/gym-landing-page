import { Button, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { TypeAnimation } from "react-type-animation";
import { LearnUs, Arrow } from "./learn";
export const Hero = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          width: "10rem",
          height: "10rem",
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "300ms",
          borderRadius: "9999px",
        }}
      >
        <style>
          {`
            #circle {
               animation: circle 15s infinite linear;

            }
            @keyframes circle {
               0% {
                  transform: rotate(0deg);
               }
               100% {
                  transform: rotate(360deg);
               }
               }
            `}
        </style>
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "10rem",
            height: "10rem",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "300ms",
            borderRadius: "9999px",
          }}
          id="circle"
        >
          <LearnUs />
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "10rem",
            height: "10rem",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "300ms",
            borderRadius: "9999px",
          }}
        >
          <Arrow />
        </div>
      </div>
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "@sm": {
            flexDirection: "row",
            mt: "$20",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            pt: "$13",

            display: "flex",
            flexDirection: "column",
            gap: "$5",
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              We Sculpt{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Your{" "}
            </Text>
            <br />
            <Text
              h1
              css={{
                display: "inline",
              }}
              color="warning"
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Body",
                  1000,
                  "Mind",
                  1000,
                  "Health",
                  1000,
                  "Vitality",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </Text>
          </Box>

          <Text
            css={{
              color: "$accents8",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            Sweat like a boss live like a boss.
          </Text>

          {/* <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Input placeholder="Enter your email address" size="lg" />
                  <Button>Start Free Trial</Button>
               </Flex> */}
          <Flex
            wrap={"wrap"}
            css={{
              gap: "$8",
              py: "$7",
              "@sm": {
                py: "$4",
              },
            }}
          >
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Fitness Training.
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Cardio Program.
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Personal Trainer.
            </Flex>
          </Flex>
        </Box>
        <Box
          css={{
            "& img": {
              width: "775px",
              objectFit: "contain",
            },
          }}
        >
          <img src="mock.jpg" />
        </Box>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
      />
    </>
  );
};
