"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const userName = _readlineSync.default.question('May I have your name?');

  console.log(`Hello, ${userName}`);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2UsTUFBTTtBQUNuQixRQUFNQSxRQUFRLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLHVCQUF0QixDQUFqQjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0osUUFBUyxFQUEvQjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/Jyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHt1c2VyTmFtZX1gKTtcbn07XG4iXX0=