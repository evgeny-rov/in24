import { uniqueId, includes } from 'lodash';

const getUniqueId = (coll?: number[]): number => {
  const generatedId: number = Number(uniqueId());
  if (!coll) {
    return generatedId;
  } else if (!includes(coll, generatedId)) {
    return generatedId;
  } else {
    return getUniqueId(coll);
  }
}

export default getUniqueId;