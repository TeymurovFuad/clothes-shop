import SectionsData from "../../data/sections.data";

const initialState = {
  sections: SectionsData,
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
