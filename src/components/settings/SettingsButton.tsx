/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/
import React, { useEffect } from "react";
import { useDisclosure, Box, BoxProps } from "@chakra-ui/react";
import { SettingsIcon } from "../../assets/icons";
import SettingsDrawer from "./SettingsDrawer";

interface MenuButtonProps extends BoxProps {}

const MenuButton: React.FC<MenuButtonProps> = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handlePopState = () => {
      onClose();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleClick = () => {
    window.history.pushState(null, "", "/");
    onOpen();
  };

  return (
    <>
      <Box
        {...props}
        w={{ base: "30px", lg: "40px" }}
        cursor="pointer"
        aria-label="Open Menu"
        onClick={handleClick}
        fontFamily="Syne"
      >
        <SettingsIcon />
      </Box>
      {/* Settings Page */}
      <SettingsDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default MenuButton;
