let config = {};
function Add(key, name) {
    let handler = require('./block/' + name);
    config[key] = handler;
}

Add('1000', 'verify');
Add('1001', 'publish__works');
Add('1002', 'handler__works__mine');
Add('1003', 'handler__home__recommend');
Add('1004', 'handler__delele__photo');
Add('1005', 'handler__chat__list');
Add('1006', 'handler__chat__receive__msg');
Add('1007', 'handler__user');

export default config;