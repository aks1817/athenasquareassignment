import { VIDEO_URL } from "../actions/types";
const initialState = {};

const videoUrl = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case VIDEO_URL:
      return payload;
    default:
      return state;
  }
};

export default videoUrl;
