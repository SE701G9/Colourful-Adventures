export const getPage = (screens, page) => {
  return screens.find((s) => s.page === page);
};
