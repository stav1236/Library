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
