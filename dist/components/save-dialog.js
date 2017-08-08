"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_dialog_1 = require("aurelia-dialog");
var SaveDialog = (function () {
    function SaveDialog(controller) {
        this.controller = controller;
    }
    SaveDialog.prototype.activate = function () {
        this.saveOptions = new SaveOptions();
    };
    Object.defineProperty(SaveDialog.prototype, "canSave", {
        get: function () {
            return this.saveOptions.name != null &&
                this.saveOptions.name != "" &&
                (this.saveOptions.includeAttack ||
                    this.saveOptions.includeDefense);
        },
        enumerable: true,
        configurable: true
    });
    return SaveDialog;
}());
SaveDialog = __decorate([
    __param(0, aurelia_dependency_injection_1.inject),
    __metadata("design:paramtypes", [aurelia_dialog_1.DialogController])
], SaveDialog);
exports.SaveDialog = SaveDialog;
var SaveOptions = (function () {
    function SaveOptions() {
    }
    return SaveOptions;
}());
exports.SaveOptions = SaveOptions;
