"use strict";
/*!
* mmcollapse - v0.0.2
* another collapse plugin
* https://github.com/onokumus/mmcollapse#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/
var MMCollapse = /** @class */ (function () {
    function MMCollapse(element) {
        this.root = element;
    }
    MMCollapse.prototype.toggle = function () {
        if (this.root.classList.contains('mm-show')) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    MMCollapse.prototype.show = function () {
        var _this = this;
        if (this.isTransitioning || this.root.classList.contains('mm-show')) {
            return;
        }
        this.root.style.height = '0px';
        this.root.classList.remove('mm-collapse');
        this.root.classList.remove('mm-show');
        this.root.classList.add('mm-collapsing');
        this.isTransitioning = true;
        this.root.classList.add('mm-collapse');
        this.root.classList.add('mm-show');
        this.root.style.height = this.root.scrollHeight + "px";
        var handleShowTransitionEnd = function () {
            _this.root.classList.remove('mm-collapsing');
            _this.root.style.height = '';
            _this.root.removeEventListener('transitionend', handleShowTransitionEnd);
            _this.isTransitioning = false;
        };
        this.root.addEventListener('transitionend', handleShowTransitionEnd);
    };
    MMCollapse.prototype.hide = function () {
        var _this = this;
        if (this.isTransitioning || !this.root.classList.contains('mm-show')) {
            return;
        }
        this.root.style.height = this.root.getBoundingClientRect().height + "px";
        this.root.style.height = this.root.offsetHeight + "px";
        this.root.classList.add('mm-collapsing');
        this.root.classList.remove('mm-collapse');
        this.root.classList.remove('mm-show');
        this.isTransitioning = true;
        var handleHideTransitionEnd = function () {
            _this.root.classList.remove('mm-collapsing');
            _this.root.classList.add('mm-collapse');
            _this.root.style.height = '';
            _this.root.removeEventListener('transitionend', handleHideTransitionEnd);
            _this.isTransitioning = false;
        };
        this.root.addEventListener('transitionend', handleHideTransitionEnd);
        this.root.style.height = '0px';
    };
    return MMCollapse;
}());
module.exports = MMCollapse;
// export default MMCollapse;
