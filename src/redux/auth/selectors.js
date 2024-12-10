const selectUser = (state) => state.auth.user;
const selectToken = (state) => state.auth.token;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectIsRefreshing = (state) => state.auth.isRefreshing;

const AuthSelectors = {
  selectUser,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
};

export default AuthSelectors;
