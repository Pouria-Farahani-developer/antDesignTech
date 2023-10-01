import { useState } from "react";

import { Anchor, Menu, Button, Drawer } from "antd";

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = (e) => {
    setOpen(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="#">Tech</a>
        </div>
        <div className="mobileHidden">
          <Anchor
            targetOffset={65}
            items={[
              {
                href: "#home",
                title: "Home",
                key: "home",
              },
              {
                href: "#about",
                title: "About",
                key: "about",
              },
              {
                href: "#feature",
                title: "Features",
                key: "feature",
              },
              {
                href: "#works",
                title: "How it works",
                key: "howitworks",
              },
              {
                href: "#FAQ",
                title: "FAQ",
                key: "faq",
              },
              {
                href: "#pricing",
                title: "Pricing",
                key: "pricing",
              },
              {
                href: "#contact",
                title: "Contact",
                key: "contact",
              },
            ]}
          />
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer placement="right" onClose={(e) => onClose(e)} open={open}>
            <Anchor
              targetOffset={65}
              items={[
                {
                  href: "#home",
                  title: "Home",
                  key: "home",
                },
                {
                  href: "#about",
                  title: "About",
                  key: "about",
                },
                {
                  href: "#feature",
                  title: "Features",
                  key: "feature",
                },
                {
                  href: "#works",
                  title: "How it works",
                  key: "howitworks",
                },
                {
                  href: "#FAQ",
                  title: "FAQ",
                  key: "faq",
                },
                {
                  href: "#pricing",
                  title: "Pricing",
                  key: "pricing",
                },
                {
                  href: "#contact",
                  title: "Contact",
                  key: "contact",
                },
              ]}
            />
          </Drawer>
        </div>
      </div>
    </div>
  );
}
