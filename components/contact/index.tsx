import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
import { AddressMap } from "./map";

export const Contact = () => {
  return (
    <>
      <Flex
        id="contact"
        css={{
          py: "$20",
          px: "$6",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text h3>Contact</Text>
        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl
        </Text>

        <Button>Button</Button>
      </Flex>

      <div style={{margin:'8px', maxWidth: '700px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
        <AddressMap />
      </div>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
