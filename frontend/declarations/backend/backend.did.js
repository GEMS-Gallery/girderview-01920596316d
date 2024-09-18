export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'getImageUrl' : IDL.Func([], [IDL.Text], ['query']) });
};
export const init = ({ IDL }) => { return []; };
