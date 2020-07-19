import includes from 'lodash/includes';

const getUniqueId = (coll?: number[]): number => {
  const generatedId: number = Math.floor(Math.random() * 1000);
  if (!coll) {
    return generatedId;
  } else if (!includes(coll, generatedId)) {
    return generatedId;
  } else {
    return getUniqueId(coll);
  }
}

export default getUniqueId;