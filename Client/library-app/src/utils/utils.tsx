import Swal from "sweetalert2";

const { REACT_APP_SERVER_ADDRESS } = process.env;

export const genericFetch = async (
  URL: string,
  TYPE: string,
  ISRETURN: boolean
) => {
  const response = await fetch(`${REACT_APP_SERVER_ADDRESS}${URL}`, {
    method: TYPE,
  });
  if (ISRETURN) {
    const data = await response.json();
    return data;
  }
};

export enum URL {
  HOME = "/HOME",
  MANAGE = "/MANAGEMENT",
  USERS = "/MANAGEMENT/USERS",
  BOOKS = "/MANAGEMENT/BOOKS",
  AUTHORS = "/MANAGEMENT/AUTHORS",
}

export const UNDIFNED_ID = -999;
export const UNDIFNED_NAME = "";

export const Toast = Swal.mixin({
  toast: true,
  position: "bottom-start",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

export enum ICON {
  WARNING = "warning",
}

export enum MASSAGES {
  CANT_DELETE_CONNECTED = "לא ניתן למחוק משתמש מחובר",
  BOOK_ALREADY_EXIST = "אופס הספר כבר קיים",
}
