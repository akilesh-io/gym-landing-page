import Image from "next/image";
import icon from "../../public/logo.png";
import { Card } from "@nextui-org/react";

export const Pko = () => {
  return (
    //hide on mobile screen
    <Card
      css={{
        bgColor: "$gray50",
        "@media screen and (max-width: 600px)": {
          display: "none",
        },
        borderRadius: "5px",
      }}
      variant="flat"
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image src="logo.png" alt="logo" width={113} />
      </Card.Body>
    </Card>
  );
};
