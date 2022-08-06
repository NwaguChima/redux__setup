import { getContentsHook } from "../api/axios";

export const getContents = () => async (dispatch) => {
  try {
    const data = await getContentsHook();
    dispatch({ type: "GET_CONTENTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
