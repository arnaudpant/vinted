const checkUserId: (userId: string | undefined) => void = (userId) => {
  const MIN_USER_ID = 1;
  const MAX_USER_ID = 71;

  if (!userId) throw new Error('Pas de userId saisi');

  if (Number.isNaN(Number(userId))) {
    throw new Error("Le user Id n'est pas un nombre");
  }
  if (Number(userId) > MAX_USER_ID || Number(userId) < MIN_USER_ID) {
    throw new Error("L'utilisateur n'existe pas");
  }
};

export default checkUserId;
