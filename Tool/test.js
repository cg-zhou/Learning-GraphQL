async fakeUserAuth (parent, { githubLogin }, { db }) {
  var user = await db.collection('users').findOne({ githubLogin })
  if (!user) {
  throw new Error(`Cannot find user with githubLogin "${githubLogin}"`)
  }
  return {
  token: user.githubToken,
  user
  }
  }