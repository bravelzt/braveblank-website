import React from "react";
import Link from "next/link";

const DirectTelegram: React.FC = () => {
  return (
    <Link
      className="direct-telegram"
      target="_blank"
      href="https://t.me/bravelzt"
    >
      Made by Brave with 💕
    </Link>
  );
};

export default DirectTelegram;
