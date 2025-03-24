export const serviceReducer = (state = [], action) => {
  switch (action.type) {
    case "addService":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];
    case "deleteService":
      return state.filter((service) => service.id !== action.payload);
    default:
      return state;
  }
};
