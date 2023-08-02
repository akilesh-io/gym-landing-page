import { Button, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { TypeAnimation } from "react-type-animation";
import { Join } from "./join";

export const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(bw.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingLeft: "10%",
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
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
              We Sculpt Your{" "}
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
      </Flex>

      <a style={{ display: "flex", alignItems: "end" }} href="#trainers">
        <Join />
      </a>
    </div>
  );
};
