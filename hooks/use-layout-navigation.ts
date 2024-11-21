import { useRouter } from "next/navigation";
import { useLayoutStore } from "@/store/layout-store";
import { NAVIGATION_DURATION } from "@/constants/animation";

export const useLayoutNavigation = () => {
  const router = useRouter();
  const { isOpen, setIsOpen, setShouldClose, shouldClose } = useLayoutStore();

  const push = (name: string) => {
    router.push(`/planets/${name}`);
  };

  const open = () => {
    setIsOpen(true);
    setShouldClose(true);
  };

  const close = () => {
    if (shouldClose) {
      setIsOpen(false);
      setTimeout(() => {
        router.back();
      }, NAVIGATION_DURATION);
    }
  };

  return { isOpen, open, close, push, setIsOpen, shouldClose };
};
