import { Card } from "@nextui-org/react";
import { INSTAGRAM } from "../../constant/constants";
import React, { useRef } from 'react';

export function Insta() {

  const embed = `https://www.instagram.com/${INSTAGRAM}/embed`

  return (
    <div>
      <Card>
        <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '95%' }}>
          <iframe
            src={embed}
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}
            scrolling="no"
          ></iframe>
        </div>
      </Card>
    </div>
  );
}