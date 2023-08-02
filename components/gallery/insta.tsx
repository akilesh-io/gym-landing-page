import { Card } from "@nextui-org/react";

export function Insta() {
  return (
    <div>
      <Card>
        <iframe
          src="https://www.instagram.com/the_boss_gym_/embed"
          height={400}
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
      </Card>
    </div>
  );
}
