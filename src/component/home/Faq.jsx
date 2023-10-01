import React from "react";
import { Button, Collapse } from "antd";


export default function AppFaq(props) {
  const items = [
    {
      key: "1",
      label: "How to setup the theme?",
      children: (
        <p>
          Get your website up and running in no time with our user-friendly
          setup theme. Experience seamless customization options and enjoy a
          stress-free launch with our step-by-step guide. Upgrade your online
          presence with a professional look that's tailored to your brand.
        </p>
      ),
    },
    {
      key: "2",
      label: "Can I change plan or cancel at any time?",
      children: (
        <p>
          We understand that plans can change, and that's why we offer a
          flexible cancelation policy for our customers. If you need to cancel
          your plan, please contact our support team for assistance. We'll do
          our best to make the process as smooth and hassle-free as possible.
        </p>
      ),
    },
    {
      key: "3",
      label: "How to access through cloud?",
      children: (
        <p>
          Access your data anytime, anywhere with our cloud-based solution. No
          more limitations, enjoy seamless access to your information from any
          device with internet connection. Say goodbye to traditional setup,
          embrace the future of tech with us.
        </p>
      ),
    },
    {
      key: "4",
      label: "Can I manage multiple task?",
      children: (
        <p>
          Maximize your productivity and efficiency with our app's ability to
          handle multiple tasks seamlessly. Say goodbye to juggling between
          multiple windows and programs and hello to effortless multitasking.
        </p>
      ),
    },
    {
      key: "5",
      label: "How can I change my password?",
      children: (
        <p>
          Simplify your life with our easy-to-use password change feature.
          Securely update your password in just a few clicks, ensuring maximum
          protection for your data and peace of mind for you. Try it now!
        </p>
      ),
    },
    {
      key: "6",
      label: "How to manage my account?",
      children: (
        <p>
          Manage all your accounts in one place with our streamlined and secure
          account management system. Easily update personal information, change
          passwords, and track account activity. Simplify your life and stay in
          control with our user-friendly platform.
        </p>
      ),
    },
  ];
  return (
    <div id="FAQ" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
        </div>
        <Collapse items={items} defaultActiveKey={["1"]} />
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Get quick support 24/7 with our dedicated customer service team.
            We're here to help you manage your account, answer any questions,
            and resolve any issues. Trust us to make your experience stress-free
            and enjoyable.
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i>Email your question
          </Button>
        </div>
      </div>
    </div>
  );
}
