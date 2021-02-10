(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <img src=\"\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\r\n    &nbsp;Tunacoin\r\n  </a>\r\n\r\n  <div>\r\n    <button routerLink=\"/new/transaction/pending\" class=\"btn btn-outline-light\" *ngIf=\"thereArePendingTransactions()\">\r\n      Pending \r\n      <span class=\"badge badge-light\">{{blockchain.pendingTransactions.length}}</span>\r\n    </button>\r\n    &nbsp;\r\n    <button routerLink=\"/settings\" class=\"btn btn-outline-light\">\r\n      Setting\r\n    </button>\r\n    &nbsp;\r\n    <button routerLink=\"/new/transaction\" class=\"btn btn-outline-light\">\r\n      Buat Transaksi\r\n    </button>\r\n  </div>\r\n</nav>\r\n\r\n<br>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"text-muted text-center\" style=\"margin-top: 150px;\">\r\n  <small>.<br></small>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/block-view/block-view.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/block-view/block-view.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [class.border-primary]=\"isSelectedBlock()\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Block {{ getBlockNumber() }} <small class=\"text-muted\" *ngIf=\"block.previousHash == 0\">(Genesis block)</small></h5>\r\n    </div>\r\n\r\n     <ul class=\"list-group list-group-flush\">\r\n\t    <li class=\"list-group-item\">\r\n\t    \t<span class=\"\">Hash</span>\r\n\t    \t<br>\r\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.hash.substring(0,6)\">\r\n\t    \t\t<small>{{ block.hash }}</small>\r\n\t    \t</div>\r\n\r\n\t\t\t<br>\r\n\t\t\t<span class=\"\">Hash dari block sebelumnya</span>\r\n\t    \t<br>\r\n\r\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.previousHash.substring(0,6)\">\r\n\t    \t\t<small>{{ block.previousHash }}</small>\r\n\t    \t</div>\r\n\t    </li>\r\n\r\n\t    <li class=\"list-group-item\">\r\n\t    \t<span class=\"\">Nonce</span><br>\r\n\t    \t<div class=\"text-truncate text-muted\">\r\n\t    \t\t<small>{{ block.nonce }}</small>\r\n\t    \t</div>\r\n\t    </li>\r\n\r\n\t    <li class=\"list-group-item\">\r\n\t    \t<span class=\"\">Timestamp</span><br>\r\n\t    \t<div class=\"text-truncate text-muted\">\r\n\t    \t\t<small>{{ block.timestamp }}</small>\r\n\t    \t</div>\r\n\t    </li>\r\n\r\n\t\t<li class=\"list-group-item\">\r\n\t    \t<span class=\"\">dari</span><br>\r\n\t    \t<div class=\"text-truncate text-muted\">\r\n\t    \t\t<small>{{ block.from }}</small>\r\n\t    \t</div>\r\n\t    </li>\r\n\t  </ul>\r\n\r\n\t  <!-- <div class=\"card-body\"> -->\r\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"!blockHasTx()\">Block has no transactions</span> -->\r\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"blockHasTx()\">Contains {{block.transactions.length}} transactions</span> -->\r\n\t  <!-- </div> -->\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transactions-table/transactions-table.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transactions-table/transactions-table.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"transactions.length === 0\">Block ini tidak ada Transaksi</p>\r\n\r\n<table class=\"table table-hover table-striped\" *ngIf=\"transactions.length > 0\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Dari</th>\r\n      <th scope=\"col\">Ke</th>\r\n      <th scope=\"col\">Jumlah</th>\r\n      <th scope=\"col\">Timestamp</th>\r\n      <th scope=\"col\">Valid?</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let tx of transactions; index as index\">\r\n      <td>{{index}}</td>\r\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\r\n\r\n        <a [routerLink]=\"['/wallet', tx.fromAddress]\" *ngIf=\"tx.fromAddress !== null\">{{tx.fromAddress}}</a>\r\n\r\n        <span *ngIf=\"tx.fromAddress === null\">System</span>\r\n\r\n        <span class=\"text-muted\" *ngIf=\"blockchainService.addressIsFromCurrentUser(tx.fromAddress)\">\r\n          <br><small>(Itu Anda!)</small>\r\n        </span>\r\n      </td>\r\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\r\n          <a [routerLink]=\"['/wallet', tx.toAddress]\">{{tx.toAddress}}</a>\r\n\r\n          <span class=\"text-muted\" *ngIf=\"blockchainService.addressIsFromCurrentUser(tx.toAddress)\">\r\n            <br><small>(Itu Anda!)</small>\r\n          </span>\r\n      </td>\r\n      <td>\r\n        {{tx.amount}}\r\n        <span *ngIf=\"tx.fromAddress === null\" class=\"text-muted\"><br><small>(Block reward)</small></span>\r\n      </td>\r\n      <td>\r\n        {{tx.timestamp}}<br>\r\n        <span class=\"text-muted\"><small>{{tx.timestamp |date:'MMM d, y, HH:mm'}}</small></span>\r\n      </td>\r\n      <td style=\"max-width: 40px;\">\r\n        <span *ngIf=\"tx.isValid()\">✓</span>\r\n        <span *ngIf=\"!tx.isValid()\">✗</span>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blockchain-viewer/blockchain-viewer.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blockchain-viewer/blockchain-viewer.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\t<h1>Blocks</h1>\r\n\t<p>Setiap Blocks menampilkan isi, klik untuk melihatnya</p>\r\n</div>\r\n\r\n<div class=\"container\" style=\"overflow-x: scroll;white-space: nowrap;\">\r\n\t<app-block-view \r\n\t\t*ngFor=\"let block of blocks\" \r\n\t\t[block]=\"block\" \r\n\t\t[selectedBlock]=\"selectedBlock\"\r\n\t\t(click)=\"showTransactions(block)\"\r\n\t></app-block-view>\r\n</div>\r\n\r\n<br><br>\r\n\r\n<div class=\"container\">\r\n\t<h1>Transaksi dalam block {{ getBlockNumber(selectedBlock) }}</h1>\r\n\r\n\t<app-transactions-table\r\n\t\t[transactions]=\"selectedBlock.transactions\"\r\n\t></app-transactions-table>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-transaction/create-transaction.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-transaction/create-transaction.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\t<h1>Buat Transaksi</h1>\r\n\t<p></p>\r\n\r\n\t<br>\r\n\r\n\t<div class=\"form-group\">\r\n\t    <label for=\"fromAddress\">Hash</label>\r\n\t    <input type=\"text\" class=\"form-control\" id=\"fromAddress\" aria-describedby=\"fromAddressHelp\" [(ngModel)]=\"ownWalletKey.publicKey\" disabled>\r\n\t    <small id=\"fromAddressHelp\" class=\"form-text text-muted\">\r\n\t    \tMasukan Hash Sebelumnya\r\n\t    </small>\r\n  \t</div>\r\n\r\n  \t<div class=\"form-group\">\r\n\t    <label for=\"toAddress\">Alamat Pengirim</label>\r\n\t    <input type=\"text\" class=\"form-control\" id=\"toAddress\" aria-describedby=\"toAddressHelp\" [(ngModel)]=\"newTx.toAddress\">\r\n\t    <small id=\"toAddressHelp\" class=\"form-text text-muted\">\r\n\t    Masukan Alamat Pengirim\r\n\t    </small>\r\n  \t</div>\r\n\r\n  \t<div class=\"form-group\">\r\n\t    <label for=\"amount\">Jumlah</label>\r\n\t    <input type=\"number\" class=\"form-control\" id=\"amount\" aria-describedby=\"amountHelp\" [(ngModel)]=\"newTx.amount\">\r\n\t    <small id=\"amountHelp\" class=\"form-text text-muted\">\r\n\t    \tMasukan Jumlah\r\n\t    </small>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"toAddress\">Dari</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"toAddress\" aria-describedby=\"toAddressHelp\" [(ngModel)]=\"newTx.toAddress\">\r\n\t\t\t<small id=\"toAddressHelp\" class=\"form-text text-muted\">\r\n\t\t\tMasukan Asal barang\r\n\t    </small>\r\n  \t</div>\r\n\r\n\t  <div class=\"form-group\">\r\n\t\t<label for=\"toAddress\">Masukan Gambar </label>\r\n\t\t<input type=\"file\"(change)=\"onselecFile($event)\">\r\n  </div>\r\n  \t<button (click)=\"createTransaction()\" type=\"submit\" class=\"btn btn-primary\">Sign & create transaction</button>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-transactions/pending-transactions.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-transactions/pending-transactions.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n\t<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"justAddedTx\">\r\n\t\tTransaction created successfully!\r\n\t</div>\r\n\r\n\t<h1>Pending transactions</h1>\r\n\t<p>These transactions are waiting to be included in the next block. Next block is created when you start the mining process.</p>\r\n\r\n\t<app-transactions-table\r\n\t\t[transactions]=\"pendingTransactions\">\r\n\t</app-transactions-table>\r\n\r\n\t <button class=\"btn btn-primary\" *ngIf=\"pendingTransactions.length > 0 && miningInProgress === false\" (click)=\"minePendingTransactions()\">\r\n     \tStart mining\r\n    </button>\r\n\r\n    <div *ngIf=\"miningInProgress === true\">\r\n    \tMining block.. Hang on...\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h1>settings</h1>\r\n  <br>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Kesulitan</label>\r\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"blockchain.difficulty\">\r\n  </div>\r\n  <br>\r\n\r\n  <div class=\"form-group\">\r\n    <label> Jumlah Awal</label>\r\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"blockchain.miningReward\">\r\n  </div> \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-balance/wallet-balance.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-balance/wallet-balance.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\t<h1>Wallet details</h1>\r\n\r\n\t<p style=\"word-wrap:break-word;\">\r\n\t\t<strong>Address:</strong>\r\n\t\t<br>\r\n\t\t{{walletAddress}}\r\n\t</p>\r\n\r\n\t<p>\r\n\t\t<strong>Balance:</strong>\r\n\t\t<br>\r\n\t\t{{ balance }}\r\n\t</p>\r\n\r\n\t<hr>\r\n\r\n\t<h1>Transactions</h1>\r\n\t<p *ngIf=\"transactions.length === 0\">This wallet has made no transactions (yet)</p>\r\n\t<app-transactions-table\r\n\t\t[transactions]=\"transactions\"\r\n\t\t*ngIf=\"transactions.length > 0\"\r\n\t></app-transactions-table>\r\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/create-transaction/create-transaction.component */ "./src/app/pages/create-transaction/create-transaction.component.ts");
/* harmony import */ var _pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pending-transactions/pending-transactions.component */ "./src/app/pages/pending-transactions/pending-transactions.component.ts");
/* harmony import */ var _pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/wallet-balance/wallet-balance.component */ "./src/app/pages/wallet-balance/wallet-balance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    { path: '', component: _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_2__["BlockchainViewerComponent"] },
    { path: 'settings', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
    { path: 'new/transaction', component: _pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_4__["CreateTransactionComponent"] },
    { path: 'new/transaction/pending', component: _pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_5__["PendingTransactionsComponent"] },
    { path: 'wallet/:address', component: _pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_6__["WalletBalanceComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/blockchain.service */ "./src/app/services/blockchain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.showInfoMessage = true;
        this.blockchain = blockchainService.blockchainInstance;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.thereArePendingTransactions = function () {
        return this.blockchain.pendingTransactions.length > 0;
    };
    AppComponent.prototype.dismissInfoMessage = function () {
        this.showInfoMessage = false;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/block-view/block-view.component */ "./src/app/components/block-view/block-view.component.ts");
/* harmony import */ var _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/blockchain.service */ "./src/app/services/blockchain.service.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _components_transactions_table_transactions_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/transactions-table/transactions-table.component */ "./src/app/components/transactions-table/transactions-table.component.ts");
/* harmony import */ var _pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/create-transaction/create-transaction.component */ "./src/app/pages/create-transaction/create-transaction.component.ts");
/* harmony import */ var _pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/pending-transactions/pending-transactions.component */ "./src/app/pages/pending-transactions/pending-transactions.component.ts");
/* harmony import */ var _pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/wallet-balance/wallet-balance.component */ "./src/app/pages/wallet-balance/wallet-balance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_6__["BlockViewComponent"],
                _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_7__["BlockchainViewerComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                _components_transactions_table_transactions_table_component__WEBPACK_IMPORTED_MODULE_10__["TransactionsTableComponent"],
                _pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_11__["CreateTransactionComponent"],
                _pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_12__["PendingTransactionsComponent"],
                _pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_13__["WalletBalanceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _services_blockchain_service__WEBPACK_IMPORTED_MODULE_8__["BlockchainService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/block-view/block-view.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/block-view/block-view.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  width: 18rem;\n  display: inline-block;\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9jay12aWV3L0M6XFxVc2Vyc1xccmFtYXdcXHR1bmFjb2lucy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmxvY2stdmlld1xcYmxvY2stdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ibG9jay12aWV3L2Jsb2NrLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ibG9jay12aWV3L2Jsb2NrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuXHR3aWR0aDogMThyZW07IFxyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrOyBcclxuXHRtYXJnaW46IDAgMTBweCAwIDA7XHJcbn0iLCIuY2FyZCB7XG4gIHdpZHRoOiAxOHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/block-view/block-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/block-view/block-view.component.ts ***!
  \***************************************************************/
/*! exports provided: BlockViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockViewComponent", function() { return BlockViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var BlockViewComponent = /** @class */ (function () {
    function BlockViewComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocksInChain = blockchainService.blockchainInstance.chain;
    }
    BlockViewComponent.prototype.ngOnInit = function () {
    };
    BlockViewComponent.prototype.blockHasTx = function () {
        return this.block.transactions.length > 0;
    };
    BlockViewComponent.prototype.isSelectedBlock = function () {
        return this.block === this.selectedBlock;
    };
    BlockViewComponent.prototype.getBlockNumber = function () {
        return this.blocksInChain.indexOf(this.block) + 1;
    };
    BlockViewComponent.ctorParameters = function () { return [
        { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BlockViewComponent.prototype, "block", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BlockViewComponent.prototype, "selectedBlock", void 0);
    BlockViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-view',
            template: __importDefault(__webpack_require__(/*! raw-loader!./block-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/block-view/block-view.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./block-view.component.scss */ "./src/app/components/block-view/block-view.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"]])
    ], BlockViewComponent);
    return BlockViewComponent;
}());



/***/ }),

/***/ "./src/app/components/transactions-table/transactions-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/transactions-table/transactions-table.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zLXRhYmxlL3RyYW5zYWN0aW9ucy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/transactions-table/transactions-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/transactions-table/transactions-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TransactionsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsTableComponent", function() { return TransactionsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TransactionsTableComponent = /** @class */ (function () {
    function TransactionsTableComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.transactions = [];
    }
    TransactionsTableComponent.prototype.ngOnInit = function () {
    };
    TransactionsTableComponent.ctorParameters = function () { return [
        { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionsTableComponent.prototype, "transactions", void 0);
    TransactionsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions-table',
            template: __importDefault(__webpack_require__(/*! raw-loader!./transactions-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transactions-table/transactions-table.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./transactions-table.component.scss */ "./src/app/components/transactions-table/transactions-table.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"]])
    ], TransactionsTableComponent);
    return TransactionsTableComponent;
}());



/***/ }),

/***/ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2NrY2hhaW4tdmlld2VyL2Jsb2NrY2hhaW4tdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts ***!
  \************************************************************************/
/*! exports provided: BlockchainViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainViewerComponent", function() { return BlockchainViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var BlockchainViewerComponent = /** @class */ (function () {
    function BlockchainViewerComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocks = [];
        this.selectedBlock = null;
        this.blocks = blockchainService.blockchainInstance.chain;
        this.selectedBlock = this.blocks[0];
        console.log(this.blocks);
    }
    BlockchainViewerComponent.prototype.ngOnInit = function () {
    };
    BlockchainViewerComponent.prototype.showTransactions = function (block) {
        console.log(block);
        this.selectedBlock = block;
        return false;
    };
    BlockchainViewerComponent.prototype.blockHasTx = function (block) {
        return block.transactions.length > 0;
    };
    BlockchainViewerComponent.prototype.selectedBlockHasTx = function () {
        return this.blockHasTx(this.selectedBlock);
    };
    BlockchainViewerComponent.prototype.isSelectedBlock = function (block) {
        return this.selectedBlock === block;
    };
    BlockchainViewerComponent.prototype.getBlockNumber = function (block) {
        return this.blocks.indexOf(block) + 1;
    };
    BlockchainViewerComponent.ctorParameters = function () { return [
        { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"] }
    ]; };
    BlockchainViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blockchain-viewer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blockchain-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blockchain-viewer/blockchain-viewer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blockchain-viewer.component.scss */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"]])
    ], BlockchainViewerComponent);
    return BlockchainViewerComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-transaction/create-transaction.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/create-transaction/create-transaction.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS10cmFuc2FjdGlvbi9jcmVhdGUtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/create-transaction/create-transaction.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/create-transaction/create-transaction.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransactionComponent", function() { return CreateTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
/* harmony import */ var SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SavjeeCoin/src/blockchain */ "./node_modules/SavjeeCoin/src/blockchain.js");
/* harmony import */ var SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CreateTransactionComponent = /** @class */ (function () {
    function CreateTransactionComponent(blockchainService, router) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.newTx = new SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
        this.selectedFile = null;
        this.url = "";
        this.newTx = new SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
        this.ownWalletKey = blockchainService.walletKeys[0];
    }
    CreateTransactionComponent.prototype.ngOnInit = function () {
    };
    CreateTransactionComponent.prototype.onselectFile = function (e) {
        var _this = this;
        if (e.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
        }
    };
    CreateTransactionComponent.prototype.createTransaction = function () {
        var newTx = this.newTx;
        // Set the FROM address and sign the transaction
        newTx.fromAddress = this.ownWalletKey.publicKey;
        newTx.signTransaction(this.ownWalletKey.keyObj);
        try {
            this.blockchainService.addTransaction(this.newTx);
        }
        catch (e) {
            alert(e);
            return;
        }
        this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
        this.newTx = new SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
    };
    CreateTransactionComponent.ctorParameters = function () { return [
        { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    CreateTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-transaction',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-transaction/create-transaction.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-transaction.component.scss */ "./src/app/pages/create-transaction/create-transaction.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateTransactionComponent);
    return CreateTransactionComponent;
}());



/***/ }),

/***/ "./src/app/pages/pending-transactions/pending-transactions.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/pending-transactions/pending-transactions.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctdHJhbnNhY3Rpb25zL3BlbmRpbmctdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/pending-transactions/pending-transactions.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/pending-transactions/pending-transactions.component.ts ***!
  \******************************************************************************/
/*! exports provided: PendingTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingTransactionsComponent", function() { return PendingTransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PendingTransactionsComponent = /** @class */ (function () {
    function PendingTransactionsComponent(blockchainService, router, route) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.route = route;
        this.pendingTransactions = [];
        this.miningInProgress = false;
        this.justAddedTx = false;
        this.pendingTransactions = blockchainService.getPendingTransactions();
    }
    PendingTransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.paramMap.get('addedTx')) {
            this.justAddedTx = true;
            setTimeout(function () {
                _this.justAddedTx = false;
            }, 4000);
        }
    };
    PendingTransactionsComponent.prototype.minePendingTransactions = function () {
        this.miningInProgress = true;
        this.blockchainService.minePendingTransactions();
        this.miningInProgress = false;
        this.router.navigate(['/']);
    };
    PendingTransactionsComponent.ctorParameters = function () { return [
        { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    PendingTransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-transactions',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pending-transactions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-transactions/pending-transactions.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pending-transactions.component.scss */ "./src/app/pages/pending-transactions/pending-transactions.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PendingTransactionsComponent);
    return PendingTransactionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.blockchain = blockchainService.blockchainInstance;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"] }
    ]; };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./settings.component.scss */ "./src/app/pages/settings/settings.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_1__["BlockchainService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/wallet-balance/wallet-balance.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/wallet-balance/wallet-balance.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhbGxldC1iYWxhbmNlL3dhbGxldC1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/wallet-balance/wallet-balance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/wallet-balance/wallet-balance.component.ts ***!
  \******************************************************************/
/*! exports provided: WalletBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletBalanceComponent", function() { return WalletBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var WalletBalanceComponent = /** @class */ (function () {
    function WalletBalanceComponent(route, blockchainService) {
        this.route = route;
        this.blockchainService = blockchainService;
        this.walletAddress = '';
        this.balance = 0;
        this.transactions = [];
    }
    WalletBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.walletAddress = params['address'];
            var blockchain = _this.blockchainService.blockchainInstance;
            _this.balance = blockchain.getBalanceOfAddress(_this.walletAddress);
            _this.transactions = blockchain.getAllTransactionsForWallet(_this.walletAddress);
        });
    };
    WalletBalanceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
    ]; };
    WalletBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-balance',
            template: __importDefault(__webpack_require__(/*! raw-loader!./wallet-balance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-balance/wallet-balance.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./wallet-balance.component.scss */ "./src/app/pages/wallet-balance/wallet-balance.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
    ], WalletBalanceComponent);
    return WalletBalanceComponent;
}());



/***/ }),

/***/ "./src/app/services/blockchain.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/blockchain.service.ts ***!
  \************************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SavjeeCoin/src/blockchain */ "./node_modules/SavjeeCoin/src/blockchain.js");
/* harmony import */ var SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BlockchainService = /** @class */ (function () {
    function BlockchainService() {
        this.blockchainInstance = new SavjeeCoin_src_blockchain__WEBPACK_IMPORTED_MODULE_1__["Blockchain"]();
        this.walletKeys = [];
        this.blockchainInstance.difficulty = 1;
        this.blockchainInstance.minePendingTransactions('hi');
        this.generateWalletKeys();
    }
    BlockchainService.prototype.minePendingTransactions = function () {
        this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey);
    };
    BlockchainService.prototype.addressIsFromCurrentUser = function (address) {
        return address === this.walletKeys[0].publicKey;
    };
    BlockchainService.prototype.generateWalletKeys = function () {
        var ec = new elliptic__WEBPACK_IMPORTED_MODULE_2___default.a.ec('secp256k1');
        var key = ec.genKeyPair();
        this.walletKeys.push({
            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPrivate('hex'),
        });
        console.log(this.walletKeys);
    };
    BlockchainService.prototype.getPendingTransactions = function () {
        return this.blockchainInstance.pendingTransactions;
    };
    BlockchainService.prototype.addTransaction = function (tx) {
        this.blockchainInstance.addTransaction(tx);
    };
    BlockchainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlockchainService);
    return BlockchainService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ramaw\tunacoins\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map