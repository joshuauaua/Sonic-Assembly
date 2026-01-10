import shankarSelect from '../assets/shankarselect.png';
import shankarProj1 from '../assets/shankarproj1.png';
import shankarProj2 from '../assets/shankarproj2.png';
import shankarProj3 from '../assets/shankarproj3.png';
import shankarProj4 from '../assets/shankarproj4.png';

import clickSelect from '../assets/clickselect.png';
import clickProj1 from '../assets/clickproj1.jpg';
import clickProj2 from '../assets/clickproj2.jpg';
import clickProj3 from '../assets/clickproj3.jpg';
import clickProj4 from '../assets/clickproj4.jpg';

import tantparkourSelect from '../assets/tantparkourselect.png';
import collierSelect from '../assets/collierselect.png';
import goetheSelect from '../assets/goetheselect.png';

export const imageMap = {
  // Project Selection / Banners
  'shankarselect': shankarSelect,
  'clickselect': clickSelect,
  'tantparkourselect': tantparkourSelect,
  'collierselect': collierSelect,
  'goetheselect': goetheSelect,

  // Gallery Images - Shankar
  'shankarproj1': shankarProj1,
  'shankarproj2': shankarProj2,
  'shankarproj3': shankarProj3,
  'shankarproj4': shankarProj4,

  // Gallery Images - Click
  'clickproj1': clickProj1,
  'clickproj2': clickProj2,
  'clickproj3': clickProj3,
  'clickproj4': clickProj4
};

export const getImage = (id) => {
  if (!id) return null;
  return imageMap[id] || null;
};
