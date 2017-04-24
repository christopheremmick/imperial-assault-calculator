"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AttackProperty = (function () {
    function AttackProperty() {
        this.damage = 0;
        this.pierce = 0;
        this.accuracy = 0;
    }
    return AttackProperty;
}());
exports.AttackProperty = AttackProperty;
var SurgeAttackProperty = (function (_super) {
    __extends(SurgeAttackProperty, _super);
    function SurgeAttackProperty(surgeCost) {
        if (surgeCost === void 0) { surgeCost = 1; }
        var _this = _super.call(this) || this;
        _this.surgeCost = surgeCost;
        return _this;
    }
    return SurgeAttackProperty;
}(AttackProperty));
exports.SurgeAttackProperty = SurgeAttackProperty;
var FixedAttackProperty = (function (_super) {
    __extends(FixedAttackProperty, _super);
    function FixedAttackProperty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.surge = 0;
        return _this;
    }
    return FixedAttackProperty;
}(AttackProperty));
exports.FixedAttackProperty = FixedAttackProperty;
//# sourceMappingURL=AttackProperty.js.map