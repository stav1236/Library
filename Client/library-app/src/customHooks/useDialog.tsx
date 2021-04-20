import { useState } from "react";

const useDialog = () => {
  const [open, setOpen] = useState(false);
  const changeMod = () => {
    setOpen(!open);
  };
  return {open, changeMod};
};

export default useDialog;
