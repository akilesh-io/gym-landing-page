import { Button, Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { QuotesIcon } from "../icons/QuotesIcon";
import { Flex } from "../styles/flex";

export const Testimonials = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          py: "$20",
          flexDirection: "column-reverse",
          "@sm": {
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row-reverse",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column" css={{ gap: "1.5rem" }}>
          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$5",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    I find the staff to be very friendly and helpful. The gym is
                    always clean and the equipment is well-maintained. I would
                    highly recommend this gym.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$yellow600",
                    }}
                  >
                    Sanjay{" "}
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$5",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    My experience with this gym has been great. I have reduced
                    my weight by 10 kgs in 3 months.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$yellow600",
                    }}
                  >
                    Arun{" "}
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$5",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    They helped me to achieve my fitness goals. I am very happy
                    with the results.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$yellow600",
                    }}
                  >
                    Jeeva{" "}
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"start"}
          direction={"column"}
          css={{
            alignItems: "center",
            "@sm": {
              alignItems: "start",
            },
          }}
        >
          <Text span css={{ color: "$yellow600" }}></Text>
          <Text h2 css={{ color: "$yellow600" }}>
            Testimonials
          </Text>
          <Text span css={{ color: "$accents8", maxW: "600px", pb: "$8" }}>
            Our clients love us. Read what they have to say about us.
          </Text>
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
