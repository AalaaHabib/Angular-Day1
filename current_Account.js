"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Account_1 = require("./Account");
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(account_no, blance, data_of_oppening) {
        var _this = _super.call(this, account_no, blance) || this;
        _this.account_no = account_no;
        _this.blance = blance;
        _this.data_of_oppening = data_of_oppening;
        return _this;
    }
    Current_Account.prototype.debitAmount = function (number) {
        return this.blance - number;
    };
    Current_Account.prototype.creaditAmount = function (number) {
        return this.blance + number;
    };
    Current_Account.prototype.getBlance = function () {
        return this.blance;
    };
    Current_Account.prototype.addCustomer = function (num) {
        return "customer added ";
    };
    Current_Account.prototype.removeCustomer = function (num) {
        return "customer deleted";
    };
    return Current_Account;
}(Account_1.Account));
