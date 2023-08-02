import { Card } from "@nextui-org/react";

const AddressMap = () => {
  return (
    <div>
      <Card>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.4316710874764!2d76.93265217366337!3d11.30312594926068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ef5879e2ed95%3A0xd9296af423656666!2sThe%20Boss%20Gym!5e0!3m2!1sen!2sin!4v1690962803612!5m2!1sen!2sin"
          height="350"
          loading="lazy"
          style={{ border: 0 }}
          aria-hidden="false"
        ></iframe>
      </Card>
    </div>
  );
};
export { AddressMap };
