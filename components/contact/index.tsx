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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="16px"
            fill="#fbbf24"
          >
            <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z" />
          </svg>{" "}
          Head office: Prasad Complex, 3/92, Railway Station Rd, Mahadevapuram,
          Mettupalayam, Tamil Nadu 641301
        </Text>

        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="17px"
            fill="#fbbf24"
          >
            <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
          </svg>{" "}
          <a href="tel:+91 9659587467">+91 9659587467</a>
        </Text>

        <Button>Button</Button>
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
        <AddressMap />
      </div>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
