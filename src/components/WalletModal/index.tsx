import {
  Flex,
  Grid,
  GridItem,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { isMobile } from "react-device-detect";



interface IWalletModal {
  isOpen?: boolean;
  onDismiss?: () => void;
}

const WalletModal: React.FC<IWalletModal> = ({
  isOpen = true,
  onDismiss = () => null,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <></>
  );
};

export default WalletModal;
