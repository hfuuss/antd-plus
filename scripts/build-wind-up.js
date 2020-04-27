const del = require('del');

console.log('aaa')
del.sync(['./{es,lib}/*/__{test,tests}__','./{es,lib}/*/demo']);