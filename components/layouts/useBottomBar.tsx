import { useContext } from "react";
import { useSession } from "next-auth/react";
import { valueScaleCorrection } from "framer-motion/types/render/dom/projection/scale-correction";

export default function useBottomBar() {
  const { isBottomBar, setBottomBarVisibility } = useContext(false, (val)=> return val;);
  const { data: session } = useSession();

  if (isImpersonate) {
    return clientRest;
  }
  return session?.restaurant;
}