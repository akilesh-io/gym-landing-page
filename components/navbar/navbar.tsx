import {
  Dropdown,
  Link,
  Navbar,
  Text,
} from "@nextui-org/react";
import React from "react";
import { icons } from "./icons";
import { APP_NAME } from "../../constant/constants";
import Image from "next/image";

export const Nav = () => {

  const collapseItems = ["Home", "Gallery", "Membership", "Contact"];
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translate(-50%, 0%)",
          zIndex: 1000,
        }}
      >
      </div>
      <Navbar
        isBordered
        css={{
          overflow: "hidden",
          "& .nextui-navbar-container": {
            background: "$background",
            borderBottom: "none",
          },
        }}
      >
        <Navbar.Brand>
          <Image
            src="https://img.icons8.com/material-outlined/96/FAB005/shield.png"
            alt="shield"
            width={30}
            height={30}
            style={{
              marginRight: "0.5rem",
            }}
          />
          {/* Capitalize APP_NAME */}
          <Text b color="warning">
            {APP_NAME}
          </Text>
          <Navbar.Content
            hideIn="sm"
            css={{
              pl: "6rem",
              position: "absolute",
              right: "2rem",
            }}
          >
            <Dropdown isBordered>
              <Navbar.Item>
                <Dropdown.Button
                  auto
                  light
                  css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                  }}
                  iconRight={icons.chevron}
                  ripple={false}
                >
                  Home
                </Dropdown.Button>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="ACME features"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
                onAction={(item) => {
                  window.location.href = `#${item}`;
                }}
              >
                {/* navigate to id #gallery */}

                <Dropdown.Item
                  key="trainers"
                  showFullDescription
                  //description="ACME scales apps to meet user demand, automagically, based on load."
                  // navigate to id gallery
                  icon={icons.scale}
                >
                  Trainers
                </Dropdown.Item>
                <Dropdown.Item
                  key="shedules"
                  showFullDescription
                  //description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                  icon={icons.activity}
                >
                  Shedules
                </Dropdown.Item>
                <Dropdown.Item
                  key="courses"
                  showFullDescription
                  //description="ACME runs on ACME, join us and others serving requests at web scale."
                  icon={icons.flash}
                >
                  Courses
                </Dropdown.Item>
                <Dropdown.Item
                  key="testimonials"
                  showFullDescription
                  //description="Overcome any challenge with a supporting team ready to respond."
                  icon={icons.user}
                >
                  Testimonials
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Link href="#gallery">Gallery</Navbar.Link>
            <Navbar.Link href="#membership">Membership</Navbar.Link>
            <Navbar.Link href="#contact">Contact</Navbar.Link>
          </Navbar.Content>

          {/* Align Navbar.Toggle right corner  */}
          <Navbar.Toggle
            aria-label="toggle navigation"
            showIn="xs"
            css={{
              position: "absolute",
              right: "1rem",
            }}
          />
        </Navbar.Brand>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                  justifyContent: "center",
                }}
                href={`#${item.toLowerCase()}`}
                // close nav bar
                onClick={() => {
                  const toggle = document.querySelector(
                    ".nextui-navbar-toggle"
                  ) as HTMLButtonElement;
                  toggle.click();
                }}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
