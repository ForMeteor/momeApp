"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('../config/router.js');
exports.NAV_TO = function (routerKey, params) {
    if (params === void 0) { params = null; }
    if (params) {
        var querystring = '?';
        Object.keys(params).forEach(function (key) {
            querystring = querystring + key + '=' + params[key] + '&';
        });
        wx.navigateTo({
            url: router[routerKey.toUpperCase()] + querystring.slice(0, -1)
        });
    }
    else {
        wx.navigateTo({
            url: router[routerKey.toUpperCase()]
        });
    }
};
exports.NAV_RED = function (routerKey, params) {
    if (params === void 0) { params = null; }
    if (params) {
        var querystring = '?';
        Object.keys(params).forEach(function (key) {
            querystring = querystring + key + '=' + params[key] + '&';
        });
        wx.redirectTo({
            url: router[routerKey.toUpperCase()] + querystring.slice(0, -1)
        });
    }
    else {
        wx.redirectTo({
            url: router[routerKey.toUpperCase()]
        });
    }
};
exports.NAV_LAUNCH = function (routerKey, params) {
    if (params === void 0) { params = null; }
    if (params) {
        var querystring = '?';
        Object.keys(params).forEach(function (key) {
            querystring = querystring + key + '=' + params[key] + '&';
        });
        wx.reLaunch({
            url: router[routerKey.toUpperCase()] + querystring.slice(0, -1)
        });
    }
    else {
        wx.reLaunch({
            url: router[routerKey.toUpperCase()]
        });
    }
};
exports.NAV_TAB = function (routerKey) {
    wx.switchTab({
        url: router[routerKey]
    });
};
exports.NAV_BACK = function (num) {
    wx.navigateBack({
        delta: num || 1,
    });
};
exports.NAV_NOTI = function (funcName, params) {
    var pages = getCurrentPages();
    if (pages.length > 1) {
        var beforePage = pages[pages.length - 2];
        beforePage[funcName](params);
    }
};
var isLoading = false;
var loadingCount = 0;
var callback = null;
var delayTime = 0;
if (wx.getSystemInfoSync().platform == "android") {
    delayTime = 0;
}
else {
    delayTime = 200;
}
exports.HUD_SHOW = function () {
    loadingCount++;
    if (!isLoading) {
        isLoading = true;
        wx.showLoading({
            title: '加载中...',
            mask: true
        });
    }
};
exports.HUD_DISMISS = function () {
    loadingCount--;
    setTimeout(function () {
        if (loadingCount == 0) {
            isLoading = false;
            wx.hideLoading({
                success: function () {
                    callback && callback();
                    callback = null;
                }
            });
        }
    }, delayTime);
};
exports.TOAST_SHOW_SUCCESS = function (str, time) {
    if (time === void 0) { time = 2000; }
    if (isLoading) {
        callback = function () {
            wx.showToast({
                icon: 'success',
                title: str || '操作成功',
                duration: time,
            });
        };
    }
    else {
        wx.showToast({
            icon: 'success',
            title: str || '操作成功',
            duration: time,
        });
    }
};
exports.TOAST_SHOW_INFO = function (str) {
    if (isLoading) {
        callback = function () {
            wx.showToast({
                icon: 'none',
                title: str,
                duration: 2000,
            });
        };
    }
    else {
        wx.showToast({
            icon: 'none',
            title: str,
            duration: 2000,
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXdfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUdqQyxRQUFBLE1BQU0sR0FBRyxVQUFDLFNBQWdCLEVBQUUsTUFBYTtJQUFiLHVCQUFBLEVBQUEsYUFBYTtJQUNwRCxJQUFJLE1BQU0sRUFBRTtRQUNWLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDN0IsV0FBVyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7UUFDM0QsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRSxDQUFDLENBQUE7S0FDSDtTQUFNO1FBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JDLENBQUMsQ0FBQTtLQUNIO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxPQUFPLEdBQUcsVUFBQyxTQUFTLEVBQUUsTUFBYTtJQUFiLHVCQUFBLEVBQUEsYUFBYTtJQUM5QyxJQUFJLE1BQU0sRUFBRTtRQUNWLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDN0IsV0FBVyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcs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SyxFQUFFLEdBQUc7WUFDVixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnLi4vY29uZmlnL3JvdXRlci5qcycpO1xyXG5cclxuLy/miZPlvIDnm67moIfpobXpnaJcclxuZXhwb3J0IGNvbnN0IE5BVl9UTyA9IChyb3V0ZXJLZXk6c3RyaW5nLCBwYXJhbXMgPSBudWxsKSA9PiB7XHJcbiAgaWYgKHBhcmFtcykge1xyXG4gICAgdmFyIHF1ZXJ5c3RyaW5nID0gJz8nO1xyXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIHF1ZXJ5c3RyaW5nID0gcXVlcnlzdHJpbmcgKyBrZXkgKyAnPScgKyBwYXJhbXNba2V5XSArICcmJ1xyXG4gICAgfSlcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IHJvdXRlcltyb3V0ZXJLZXkudG9VcHBlckNhc2UoKV0gKyBxdWVyeXN0cmluZy5zbGljZSgwLCAtMSlcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IHJvdXRlcltyb3V0ZXJLZXkudG9VcHBlckNhc2UoKV1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbi8v5omT5byA55uu5qCH6aG16Z2i77yM5ZCM5pe25YWz6Zet5b2T5YmN6aG1XHJcbmV4cG9ydCBjb25zdCBOQVZfUkVEID0gKHJvdXRlcktleSwgcGFyYW1zID0gbnVsbCkgPT4ge1xyXG4gIGlmIChwYXJhbXMpIHtcclxuICAgIHZhciBxdWVyeXN0cmluZyA9ICc/JztcclxuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBxdWVyeXN0cmluZyA9IHF1ZXJ5c3RyaW5nICsga2V5ICsgJz0nICsgcGFyYW1zW2tleV0gKyAnJidcclxuICAgIH0pXHJcbiAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgdXJsOiByb3V0ZXJbcm91dGVyS2V5LnRvVXBwZXJDYXNlKCldICsgcXVlcnlzdHJpbmcuc2xpY2UoMCwgLTEpXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgdXJsOiByb3V0ZXJbcm91dGVyS2V5LnRvVXBwZXJDYXNlKCldXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4vL+WFs+mXreaJgOaciemhtemdou+8jOaJk+W8gOWIsOW6lOeUqOWGheeahOafkOS4qumhtemdouOAglxyXG5leHBvcnQgY29uc3QgTkFWX0xBVU5DSCA9IChyb3V0ZXJLZXksIHBhcmFtcyA9IG51bGwpID0+IHtcclxuICBpZiAocGFyYW1zKSB7XHJcbiAgICB2YXIgcXVlcnlzdHJpbmcgPSAnPyc7XHJcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgcXVlcnlzdHJpbmcgPSBxdWVyeXN0cmluZyArIGtleSArICc9JyArIHBhcmFtc1trZXldICsgJyYnXHJcbiAgICB9KVxyXG4gICAgd3gucmVMYXVuY2goe1xyXG4gICAgICB1cmw6IHJvdXRlcltyb3V0ZXJLZXkudG9VcHBlckNhc2UoKV0gKyBxdWVyeXN0cmluZy5zbGljZSgwLCAtMSlcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgdXJsOiByb3V0ZXJbcm91dGVyS2V5LnRvVXBwZXJDYXNlKCldXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4vL+i3s+i9rOiHs+afkOS4qnRhYumhtVxyXG5leHBvcnQgY29uc3QgTkFWX1RBQiA9IChyb3V0ZXJLZXkpID0+IHtcclxuXHR3eC5zd2l0Y2hUYWIoe1xyXG5cdFx0dXJsOiByb3V0ZXJbcm91dGVyS2V5XVxyXG5cdH0pXHJcbn1cclxuLy/lhbPpl63pobXpnaIsIOWPguaVsOmdnuW/heWhq1xyXG4vL+m7mOiupOWFs+mXreS4gOS4qumhtemdou+8jOWPr+mAmui/h+WPguaVsOWGs+WumuWFs+mXreWkmuWwkemhtemdolxyXG5leHBvcnQgY29uc3QgTkFWX0JBQ0sgPSAobnVtKSA9PiB7XHJcblx0d3gubmF2aWdhdGVCYWNrKHtcclxuXHRcdGRlbHRhOiBudW0gfHwgMSxcclxuXHR9KVxyXG59XHJcbi8v5omn6KGM5LiK5LiA5Liq6aG16Z2i55qE5Ye95pWw5ZCN56ewXHJcbmV4cG9ydCBjb25zdCBOQVZfTk9USSA9IChmdW5jTmFtZSwgcGFyYW1zKSA9PiB7XHJcblx0bGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7IC8v6aG16Z2i5qCIXHJcblx0aWYgKHBhZ2VzLmxlbmd0aCA+IDEpIHtcclxuXHRcdGxldCBiZWZvcmVQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07XHJcblx0XHRiZWZvcmVQYWdlW2Z1bmNOYW1lXShwYXJhbXMpO1xyXG5cdH1cclxufVxyXG5cclxuLy/lsZXnpLpIVUQg5Yqg6L295LitLi4uIOemgeatouS6pOS6kiDpnIDkuI5IVURfRElTTUlTU+aQremFjeS9v+eUqFxyXG5sZXQgaXNMb2FkaW5nID0gZmFsc2U7XHJcbmxldCBsb2FkaW5nQ291bnQgPSAwO1xyXG5sZXQgY2FsbGJhY2sgPSBudWxsO1xyXG5sZXQgZGVsYXlUaW1lID0gMDtcclxuaWYgKHd4LmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJhbmRyb2lkXCIpIHtcclxuICBkZWxheVRpbWUgPSAwXHJcbn0gZWxzZSB7XHJcbiAgZGVsYXlUaW1lID0gMjAwXHJcbn1cclxuZXhwb3J0IGNvbnN0IEhVRF9TSE9XID0gKCkgPT4ge1xyXG4gIGxvYWRpbmdDb3VudCsrO1xyXG5cdGlmKCFpc0xvYWRpbmcpe1xyXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdHd4LnNob3dMb2FkaW5nKHtcclxuXHRcdFx0dGl0bGU6ICfliqDovb3kuK0uLi4nLFxyXG5cdFx0XHRtYXNrOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuLy/lhbPpl61IVURcclxuZXhwb3J0IGNvbnN0IEhVRF9ESVNNSVNTID0gKCkgPT4ge1xyXG4gIGxvYWRpbmdDb3VudC0tO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmdDb3VudCA9PSAwKSB7XHJcbiAgICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB3eC5oaWRlTG9hZGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgZGVsYXlUaW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRPQVNUX1NIT1dfU1VDQ0VTUyA9IChzdHIsIHRpbWU9MjAwMCkgPT4ge1xyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIHRpdGxlOiBzdHIgfHwgJ+aTjeS9nOaIkOWKnycsXHJcbiAgICAgICAgZHVyYXRpb246IHRpbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgIHRpdGxlOiBzdHIgfHwgJ+aTjeS9nOaIkOWKnycsXHJcbiAgICAgIGR1cmF0aW9uOiB0aW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBUT0FTVF9TSE9XX0lORk8gPSAoc3RyKSA9PiB7XHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgdGl0bGU6IHN0cixcclxuICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIGljb246ICdub25lJyxcclxuICAgICAgdGl0bGU6IHN0cixcclxuICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19