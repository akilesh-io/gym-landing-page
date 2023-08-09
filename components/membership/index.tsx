import { Button, Card, Divider, Grid, Link, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { Switch } from "@nextui-org/react";

export const Membership = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
      <Flex
        id="membership"
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex direction={"column"} align={"center"}>
          <Text h2 css={{ color: "$yellow600" }}>
            Membership
          </Text>

          {/* aligh content in center */}
          <Flex css={{ gap: "$9", mt: "$4" }} align={"center"}>
            <Text span css={{ color: "$accents8" }}>
              Monthly
            </Text>
            <Switch shadow color="warning" onChange={handleChange} />
            <Text span css={{ color: "$accents8" }}>
              Yearly
            </Text>
          </Flex>
        </Flex>

        <Flex
          css={{ gap: "2rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h3 css={{ lineHeight: "$xs" }}>
                    New Member
                  </Text>
                </Grid>

                <Grid xs={12}>
                  <Text h6 css={{ display: "contents" }}>
                    ₹500{" "}
                  </Text>
                  <Text css={{ display: "contents", color: "$accents8" }}>
                    Registration Fee
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text css={{ display: "contents" }} h2>
                {isMonthly ? "₹700" :  "₹6800"}{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                {isMonthly ? "/mo" : "/yr"}
              </Text>
              <br />

              <Button color={"secondary"} css={{ mt: "$7", mb: "$12" }}>
                Join Us{" "}
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    {isMonthly
                      ? "No free membership"
                      : "Free 3 months membership"}
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    {isMonthly ? "Personal Training" : "Personal Training"}
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Strength Training
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Cardio Training
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h3 css={{ lineHeight: "$xs" }}>
                    Existing Member
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ display: "contents", color: "$accents8" }}>
                    No Registration Fee
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text css={{ display: "contents" }} h2>
                {isMonthly ? "₹700" : "₹6800"}{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                {isMonthly ? "/mo" : "/yr"}{" "}
              </Text>

              <Button color={"secondary"} css={{ mt: "$7", mb: "$12" }}>
                Join Us
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    {isMonthly
                      ? "No free membership"
                      : "Free 3 months membership"}
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Personal Training
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Strength Training
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Cardio Training
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
