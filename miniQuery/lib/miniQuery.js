

var SweetSelector = function() {
  return {
    select: function(selector) {
      return document.querySelector(selector);
    }
  }

}();

var DOM = function(){
  return {
    hide: function(selector){
      document.querySelector(selector).style.visibility = "hidden";
    },
    show: function(selector){
      document.querySelector(selector).style.visibility = "visible";
    },
    addClass: function(class_name, add_class){
      document.querySelector(class_name).className += (" " + add_class)
    },
    removeClass: function(class_name, classToRemove){
      var name = document.querySelector(class_name).className
      var element = document.querySelector(class_name)
      element.className = element.className.replace(" "+classToRemove, "")
    }
  }
}();

var EventDispatcher = function() {
  return {
    on: function(className, event, callback) {
      console.log(event);
      document.querySelector(className).addEventListener(event, callback);
    },
    trigger: function(className, event) {
      createdEvent = document.createEvent(event);
      var elem = document.querySelector(className);
      elem.dispatchEvent(createdEvent);
    }
  }
}();

var AjaxWrapper = function() {
  return {
    request: function(xhrObj) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.withCredentials = true;
      xmlHttp.open( xhrObj['method'], xhrObj['url'], false ); // false for synchronous request
      xmlHttp.setRequestHeader("Content-type","text/html");
      xmlHttp.send();

      debugger
      return xmlHttp.responseText;
    },
      then: function(data, textStatus, xhr){
        console.log(data)
      }
  }
}();
