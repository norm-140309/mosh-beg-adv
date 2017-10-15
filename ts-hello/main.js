"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("\n    likesCount: " + component.likesCount + ",\n    isSelected: " + component.isSelected + "\n    ");
