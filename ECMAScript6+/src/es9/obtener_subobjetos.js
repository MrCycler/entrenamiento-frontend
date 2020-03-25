const data = {
    'frontend': 'Juan',
    'backend': 'Hailo',
    'UX/UI':'Tony',
};

let {frontend, ...all} = obj;
console.log(all);