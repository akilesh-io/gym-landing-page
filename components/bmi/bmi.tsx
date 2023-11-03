import { Card, Text, } from "@nextui-org/react";

export default function Bmi() {
  return (
    <>
      <Card
        css={{
          mw: "330px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Card.Header>
          <Text
            b
            css={{
              color: "$yellow600",
              textAlign: "center",
            }}
          >
            Coming Soon
          </Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          {/* short breif about BMI */}
          <Text>BMI is a measure of body fat based on height and weight.</Text>
        </Card.Body>
      </Card>
    </>
  );
}
