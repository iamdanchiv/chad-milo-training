import { getLibs } from '../../scripts/utils.js';

export default async function init(element) {
  const { decorateButtons } = await import(`${getLibs()}/utils/decorate.js`);
  decorateButtons(element);
}
