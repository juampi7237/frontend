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
    case "updateService":
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return {
            ...action.payload,
            password: u.password,
          };
        }
        return u;
      });
    default:
      return state;
  }
};
