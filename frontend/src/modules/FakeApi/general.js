/**
 * 
*/

import { PROJECTS_LIST } from '../constants';

async function getProjectsList() {
  return {
    status: 200,
    data: PROJECTS_LIST
  }
}

const export_methods = {
  getProjectsList,
}

export default export_methods;
