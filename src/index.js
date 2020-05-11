import fetchData from 'graphql';
import mapData from 'map';

const gitWorld = async (user) => {
  const data = await fetchData(user);
  const map = mapData(data);

  return map;
};


export default gitWorld;
