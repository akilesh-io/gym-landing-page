import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

import Bmi from "./bmi";

export const Faq = () => {
  return (
    <>
      {/* <Bmi />  */}
      <Flex
        css={{
          py: "$20",
          gap: "$18",
          px: "$6",
        }}
        direction={"column"}
      >
        <Flex align={"center"} direction={"column"}>
          <Text span css={{ color: "$yellow600" }}>
            BMI
          </Text>
          <Text h2>BMI Calculator</Text>
          <Text
            span
            css={{
              maxWidth: "700px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            Body Mass Index calculator, also known as BMI, computes and
            classifies BMI for children and adults using data obtained from WHO
            and CDC.
          </Text>
        </Flex>

        <Flex
          css={{
            gap: "$10",
            "@lg": {
              px: "$64",
            },
          }}
          direction={"column"}
        >
          <Bmi />

        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
