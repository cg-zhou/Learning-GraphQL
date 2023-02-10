const updateUserCache = (cache, { data: { addFakeUsers } }) => {
  let data = cache.readQuery({ query: ROOT_QUERY });
  data.totalUsers += addFakeUsers.length;
  data.allUsers = [...data.allUsers, ...addFakeUsers];
  cache.writeQuery({ query: ROOT_QUERY, data });
};
