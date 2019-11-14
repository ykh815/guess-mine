(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n    <span class-\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n  ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCx3Q0FDd0JILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEM0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxJQUhaO0FBS0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJEOztBQVVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzdCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRjZCLE1BR3JCQyxLQUhxQixHQUdYRixLQUhXLENBR3JCRSxLQUhxQjtBQUk3Qiw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFaUIsSUFBQUEsT0FBTyxFQUFFSjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQVBEOztBQVNPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHRCxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZZCxRQUFaLFFBQVlBLFFBQVo7QUFBQSxTQUM5QkYsU0FBUyxDQUFDZ0IsT0FBRCxFQUFVZCxRQUFWLENBRHFCO0FBQUEsQ0FBekI7Ozs7QUFHUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDbUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBjbGFzcy1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7XG4gICAgbmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91XCJcbiAgfTo8L3NwYW4+ICR7dGV4dH1cbiAgYDtcbiAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xufTtcblxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+XG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XG5cbmlmIChzZW5kTXNnKSB7XG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcbn1cbiJdfQ==
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjdjMTdjY2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcbmltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG4iXX0=
},{"./chat":1,"./login":3,"./paint":5,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_IN = "loggedIn";
var LOGGED_OUT = "loggedOut";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX0lOIiwiTE9HR0VEX09VVCIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBSCxRQUFRLEVBQUk7QUFDeEIsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBLDRCQUFZSSxNQUFaO0FBQ0QsQ0FKRDs7QUFNQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFVBQWpCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xQLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxDQUFDLEVBQUk7QUFDNUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRjRCLE1BR3BCcUIsS0FIb0IsR0FHVkQsS0FIVSxDQUdwQkMsS0FIb0I7QUFJNUJELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQWQsRUFBQUEsWUFBWSxDQUFDZSxPQUFiLENBQXFCbkIsUUFBckIsRUFBK0JrQixLQUEvQjtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosU0FBakI7QUFDQUssRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDRCxDQVJEOztBQVVBLElBQUlwQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDc0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcblxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcblxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XG5cbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT4ge1xuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG4gIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG4gIGluaXRTb2NrZXRzKHNvY2tldCk7XG59O1xuXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xufSBlbHNlIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKG5pY2tuYW1lKTtcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 129, 0");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixrQkFBN0IsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQ2hDWCxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsaUJBQTNCLENBRGdCO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgMTI5LCAwXCIpO1xuIl19
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCanvas = exports.showControls = exports.hideControls = exports.enableCanvas = exports.disableCanvas = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var controls = document.getElementById("jsControls");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

var stopPainting = function stopPainting() {
  painting = false;
};

var startPainting = function startPainting() {
  painting = true;
};

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

var onMouseMove = function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
};

var handleColorClick = function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

var handleModeClick = function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentFill = ctx.fillStyle;

  if (color) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentFill;
};

var handleCanvasClick = function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
};

var handleCM = function handleCM(event) {
  event.preventDefault();
};

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;

var disableCanvas = function disableCanvas() {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

exports.disableCanvas = disableCanvas;

var enableCanvas = function enableCanvas() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

exports.enableCanvas = enableCanvas;

var hideControls = function hideControls() {
  return controls.style.opacity = 0;
};

exports.hideControls = hideControls;

var showControls = function showControls() {
  return controls.style.opacity = 1;
};

exports.showControls = showControls;

var resetCanvas = function resetCanvas() {
  return fill("#fff");
};

exports.resetCanvas = resetCanvas;

if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
  hideControls();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cm9scyIsImN0eCIsImdldENvbnRleHQiLCJjb2xvcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW9kZSIsIklOSVRJQUxfQ09MT1IiLCJDQU5WQVNfU0laRSIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInBhaW50aW5nIiwiZmlsbGluZyIsInN0b3BQYWludGluZyIsInN0YXJ0UGFpbnRpbmciLCJiZWdpblBhdGgiLCJ4IiwieSIsIm1vdmVUbyIsInN0cm9rZVBhdGgiLCJjb2xvciIsImN1cnJlbnRDb2xvciIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJoYW5kbGVDb2xvckNsaWNrIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVNb2RlQ2xpY2siLCJpbm5lclRleHQiLCJmaWxsIiwiY3VycmVudEZpbGwiLCJoYW5kbGVDYW52YXNDbGljayIsImhhbmRsZUNNIiwicHJldmVudERlZmF1bHQiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUJlZ2FuUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiaGFuZGxlRmlsbGVkIiwiZGlzYWJsZUNhbnZhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGVDYW52YXMiLCJoaWRlQ29udHJvbHMiLCJvcGFjaXR5Iiwic2hvd0NvbnRyb2xzIiwicmVzZXRDYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMs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QUNWQSxFQUFBQSxNQUFNLENBQUNtRCxnQkFBUCxDQUF3QixhQUF4QixFQUF1Q0wsUUFBdkM7QUFDQVksRUFBQUEsWUFBWTtBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzQ2FudmFzXCIpO1xuY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzQ29udHJvbHNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XG5jb25zdCBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01vZGVcIik7XG5cbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcbmNvbnN0IENBTlZBU19TSVpFID0gNzAwO1xuXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcblxuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbmN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xuY3R4LnN0cm9rZVN0eWxlID0gSU5JVElBTF9DT0xPUjtcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuY3R4LmxpbmVXaWR0aCA9IDIuNTtcblxubGV0IHBhaW50aW5nID0gZmFsc2U7XG5sZXQgZmlsbGluZyA9IGZhbHNlO1xuXG5jb25zdCBzdG9wUGFpbnRpbmcgPSAoKSA9PiB7XG4gIHBhaW50aW5nID0gZmFsc2U7XG59O1xuXG5jb25zdCBzdGFydFBhaW50aW5nID0gKCkgPT4ge1xuICBwYWludGluZyA9IHRydWU7XG59O1xuXG5jb25zdCBiZWdpblBhdGggPSAoeCwgeSkgPT4ge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeCwgeSk7XG59O1xuXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yID0gbnVsbCkgPT4ge1xuICBsZXQgY3VycmVudENvbG9yID0gY3R4LnN0cm9rZVN0eWxlO1xuICBpZiAoY29sb3IpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgfVxuICBjdHgubGluZVRvKHgsIHkpO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbn07XG5cbmNvbnN0IG9uTW91c2VNb3ZlID0gZXZlbnQgPT4ge1xuICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgY29uc3QgeSA9IGV2ZW50Lm9mZnNldFk7XG4gIGlmICghcGFpbnRpbmcpIHtcbiAgICBiZWdpblBhdGgoeCwgeSk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5IH0pO1xuICB9IGVsc2Uge1xuICAgIHN0cm9rZVBhdGgoeCwgeSk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgY29sb3I6IGN0eC5zdHJva2VTdHlsZVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVDb2xvckNsaWNrID0gZXZlbnQgPT4ge1xuICBjb25zdCBjb2xvciA9IGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG59O1xuXG5jb25zdCBoYW5kbGVNb2RlQ2xpY2sgPSAoKSA9PiB7XG4gIGlmIChmaWxsaW5nID09PSB0cnVlKSB7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gIH0gZWxzZSB7XG4gICAgZmlsbGluZyA9IHRydWU7XG4gICAgbW9kZS5pbm5lclRleHQgPSBcIlBhaW50XCI7XG4gIH1cbn07XG5cbmNvbnN0IGZpbGwgPSAoY29sb3IgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50RmlsbCA9IGN0eC5maWxsU3R5bGU7XG4gIGlmIChjb2xvcikge1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgfVxuICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRGaWxsO1xufTtcblxuY29uc3QgaGFuZGxlQ2FudmFzQ2xpY2sgPSAoKSA9PiB7XG4gIGlmIChmaWxsaW5nKSB7XG4gICAgZmlsbCgpO1xuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5maWxsLCB7IGNvbG9yOiBjdHguZmlsbFN0eWxlIH0pO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVDTSA9IGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbkFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+XG4gIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKVxuKTtcblxuaWYgKG1vZGUpIHtcbiAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTW9kZUNsaWNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IHgsIHkgfSkgPT4gYmVnaW5QYXRoKHgsIHkpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cm9rZWRQYXRoID0gKHsgeCwgeSwgY29sb3IgfSkgPT4gc3Ryb2tlUGF0aCh4LCB5LCBjb2xvcik7XG5leHBvcnQgY29uc3QgaGFuZGxlRmlsbGVkID0gKHsgY29sb3IgfSkgPT4gZmlsbChjb2xvcik7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlQ2FudmFzID0gKCkgPT4ge1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FudmFzQ2xpY2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZUNhbnZhcyA9ICgpID0+IHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoaWRlQ29udHJvbHMgPSAoKSA9PiAoY29udHJvbHMuc3R5bGUub3BhY2l0eSA9IDApO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbnRyb2xzID0gKCkgPT4gKGNvbnRyb2xzLnN0eWxlLm9wYWNpdHkgPSAxKTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FudmFzID0gKCkgPT4gZmlsbChcIiNmZmZcIik7XG5cbmlmIChjYW52YXMpIHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVDTSk7XG4gIGhpZGVDb250cm9scygpO1xufVxuIl19
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGameEnded = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _paint = require("./paint");

var board = document.getElementById("jsPBoard");
var notifs = document.getElementById("jsNotifs");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, ": ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var setNotifs = function setNotifs(text) {
  notifs.innerText = "";
  notifs.innerText = Text;
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  setNotifs("");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref2) {
  var word = _ref2.word;
  (0, _paint.enableCanvas)();
  (0, _paint.showControls)();
  setNotifs("You are the painter, paint : ".concat(word));
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleGameEnded = function handleGameEnded() {
  setNotifs("Game ended");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
  (0, _paint.resetCanvas)();
};

exports.handleGameEnded = handleGameEnded;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicGxheWVyIiwicGxheWVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJuaWNrbmFtZSIsInBvaW50cyIsImFwcGVuZENoaWxkIiwic2V0Tm90aWZzIiwidGV4dCIsIlRleHQiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJzb2NrZXRzIiwiaGFuZGxlR2FtZVN0YXJ0ZWQiLCJoYW5kbGVMZWFkZXJOb3RpZiIsIndvcmQiLCJoYW5kbGVHYW1lRW5kZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFRQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxPQUFPLEVBQUk7QUFDNUJMLEVBQUFBLEtBQUssQ0FBQ00sU0FBTixHQUFrQixFQUFsQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3hCLFFBQU1DLGFBQWEsR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLE1BQXZCLENBQXRCO0FBQ0FELElBQUFBLGFBQWEsQ0FBQ0UsU0FBZCxhQUE2QkgsTUFBTSxDQUFDSSxRQUFwQyxlQUFpREosTUFBTSxDQUFDSyxNQUF4RDtBQUNBYixJQUFBQSxLQUFLLENBQUNjLFdBQU4sQ0FBa0JMLGFBQWxCO0FBQ0QsR0FKRDtBQUtELENBUEQ7O0FBU0EsSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsSUFBSSxFQUFJO0FBQ3hCYixFQUFBQSxNQUFNLENBQUNRLFNBQVAsR0FBbUIsRUFBbkI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDUSxTQUFQLEdBQW1CTSxJQUFuQjtBQUNELENBSEQ7O0FBS08sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQWlCZixVQUFVLENBQUNlLE9BQUQsQ0FBM0I7QUFBQSxDQUEzQjs7OztBQUNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQ0wsRUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBO0FBQ0E7QUFDRCxDQUpNOzs7O0FBS0EsSUFBTU0saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixRQUFjO0FBQUEsTUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQzdDO0FBQ0E7QUFDQVAsRUFBQUEsU0FBUyx3Q0FBaUNPLElBQWpDLEVBQVQ7QUFDRCxDQUpNOzs7O0FBS0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ25DUixFQUFBQSxTQUFTLENBQUMsWUFBRCxDQUFUO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FMTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGRpc2FibGVDYW52YXMsXG4gIGhpZGVDb250cm9scyxcbiAgZW5hYmxlQ2FudmFzLFxuICBzaG93Q29udHJvbHMsXG4gIHJlc2V0Q2FudmFzXG59IGZyb20gXCIuL3BhaW50XCI7XG5cbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1BCb2FyZFwiKTtcbmNvbnN0IG5vdGlmcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNOb3RpZnNcIik7XG5cbmNvbnN0IGFkZFBsYXllcnMgPSBwbGF5ZXJzID0+IHtcbiAgYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHBsYXllckVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7cGxheWVyLm5pY2tuYW1lfTogJHtwbGF5ZXIucG9pbnRzfWA7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyRWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0Tm90aWZzID0gdGV4dCA9PiB7XG4gIG5vdGlmcy5pbm5lclRleHQgPSBcIlwiO1xuICBub3RpZnMuaW5uZXJUZXh0ID0gVGV4dDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVQbGF5ZXJVcGRhdGUgPSAoeyBzb2NrZXRzIH0pID0+IGFkZFBsYXllcnMoc29ja2V0cyk7XG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoKSA9PiB7XG4gIHNldE5vdGlmcyhcIlwiKTtcbiAgZGlzYWJsZUNhbnZhcygpO1xuICBoaWRlQ29udHJvbHMoKTtcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlTGVhZGVyTm90aWYgPSAoeyB3b3JkIH0pID0+IHtcbiAgZW5hYmxlQ2FudmFzKCk7XG4gIHNob3dDb250cm9scygpO1xuICBzZXROb3RpZnMoYFlvdSBhcmUgdGhlIHBhaW50ZXIsIHBhaW50IDogJHt3b3JkfWApO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lRW5kZWQgPSAoKSA9PiB7XG4gIHNldE5vdGlmcyhcIkdhbWUgZW5kZWRcIik7XG4gIGRpc2FibGVDYW52YXMoKTtcbiAgaGlkZUNvbnRyb2xzKCk7XG4gIHJlc2V0Q2FudmFzKCk7XG59O1xuIl19
},{"./paint":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
  socket.on(events.gameStarted, _players.handleGameStarted);
  socket.on(events.leaderNotif, _players.handleLeaderNotif);
  socket.on(events.gameEnded, _players.handleGameEnded);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwiZ2FtZVN0YXJ0ZWQiLCJoYW5kbGVHYW1lU3RhcnRlZCIsImxlYWRlck5vdGlmIiwiaGFuZGxlTGVhZGVyTm90aWYiLCJnYW1lRW5kZWQiLCJoYW5kbGVHYW1lRW5kZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLE9BQU8sRUFBSTtBQUFBLGdCQUNqQkMsTUFEaUI7QUFBQSxNQUM1QkMsTUFENEIsV0FDNUJBLE1BRDRCO0FBRXBDTCxFQUFBQSxNQUFNLEdBQUdHLE9BQVQ7QUFDQUgsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0UsT0FBakIsRUFBMEJDLDRCQUExQjtBQUNBUixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDSSxZQUFqQixFQUErQkMsaUNBQS9CO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNNLE1BQWpCLEVBQXlCQyxzQkFBekI7QUFDQVosRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1EsU0FBakIsRUFBNEJDLHNCQUE1QjtBQUNBZCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDVSxXQUFqQixFQUE4QkMsd0JBQTlCO0FBQ0FoQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDWSxNQUFqQixFQUF5QkMsbUJBQXpCO0FBQ0FsQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDYyxZQUFqQixFQUErQkMsMkJBQS9CO0FBQ0FwQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDZ0IsV0FBakIsRUFBOEJDLDBCQUE5QjtBQUNBdEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2tCLFdBQWpCLEVBQThCQywwQkFBOUI7QUFDQXhCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNvQixTQUFqQixFQUE0QkMsd0JBQTVCO0FBQ0QsQ0FiTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld1VzZXIsIGhhbmRsZURpc2Nvbm5lY3RlZCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IGhhbmRsZU5ld01lc3NhZ2UgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBoYW5kbGVCZWdhblBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoLCBoYW5kbGVGaWxsZWQgfSBmcm9tIFwiLi9wYWludFwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlUGxheWVyVXBkYXRlLFxuICBoYW5kbGVHYW1lU3RhcnRlZCxcbiAgaGFuZGxlTGVhZGVyTm90aWYsXG4gIGhhbmRsZUdhbWVFbmRlZFxufSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5cbmxldCBzb2NrZXQgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSBhU29ja2V0ID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gYVNvY2tldDtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XG4gIHNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNZXNzYWdlKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5maWxsZWQsIGhhbmRsZUZpbGxlZCk7XG4gIHNvY2tldC5vbihldmVudHMucGxheWVyVXBkYXRlLCBoYW5kbGVQbGF5ZXJVcGRhdGUpO1xuICBzb2NrZXQub24oZXZlbnRzLmdhbWVTdGFydGVkLCBoYW5kbGVHYW1lU3RhcnRlZCk7XG4gIHNvY2tldC5vbihldmVudHMubGVhZGVyTm90aWYsIGhhbmRsZUxlYWRlck5vdGlmKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lRW5kZWQsIGhhbmRsZUdhbWVFbmRlZCk7XG59O1xuIl19
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}]},{},[2])