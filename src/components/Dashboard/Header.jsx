import React from "react";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <a href="dashboard" className="text-3xl text-green-700 font-bold">
          Dashboard
        </a>
      </header>
    </>
  );
}

export default Header;
