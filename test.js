const assert = require('assert');
const { getCssSnippet } = require('./app.js');
console.log('🧪 Testing CSS GlassMesh Studio...');
assert(getCssSnippet() === true, 'Snippet helper verified');
console.log('✅ CSS GlassMesh test passed!');