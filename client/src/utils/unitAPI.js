import unitList from '../../../server/seeds/Characters.JSON'

const displayUnit = async (query) =>
  get(unitList.Example);

export default { displayUnit };

//What the hell does this do?