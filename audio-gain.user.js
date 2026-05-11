// ==UserScript==
// @name         Audio Gain
// @namespace    https://github.com/TheReVeaLz
// @version      2026-05-12
// @description  A lightweight userscript that adds audio gain control and volume boosting to web video players for a better listening experience.
// @author       TheReVeaLz
// @match        https://reanime.to/*
// @include      https://flixcloud.*
// @require      https://cdn.jsdelivr.net/npm/toastify-js
// @resource     ToastifyCSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @icon         data:image/x-icon;base64,AAABAAMAMDAAAAEAIACoJQAANgAAACAgAAABACAAqBAAAN4lAAAQEAAAAQAgAGgEAACGNgAAKAAAADAAAABgAAAAAQAgAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG49QBVuPUBSbj1AmG49QM1uPUDsbj1A+249QP9uPUD/bj1A/249QP9uPUD/bj1A/249QP9uPUD/bj1A/249QP9uPUD/bj1A/249QP9uPUD/bj1A/249QP9uPUD/bj1A/249QPtuPUDsbj1AzW49QJhuPUBSbT1AFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtPUAXbT1AbW09QMhtPUD1bT1A/209QP9tPUD/bT1A/209QP9tPUD/bT1A/209QP9tPUD/bT1A/209QP9tPUD/bT1A/209QP9tPUD/bT1A/209QP9tPUD/bT1A/209QP9tPUD/bT1A/209QP9tPUD/bT1A/209QP9tPUD1bT1Ax209QGxtPUAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbD0/A2w9P0tsPT/HbT0//G09P/9tPT//bD0//209P/9tPT//bD0//209P/9tPT//bD0//209P/9tPT//bD0//209P/9tPT//bD0//209P/9tPT//bD0//209P/9tPT//bT0//209P/9tPT//bD0//209P/9tPT//bD0//209P/9tPT//bD0//209P/xsPT/HbDw/S2w8PwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrPD8JbDw/eGw8P+5sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw/7mw8P3hsPD8JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGs8PglrPD+Hazw/+Gs8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/9rPD//azw//2s8P/hrPD+Hazw+CQAAAAAAAAAAAAAAAAAAAAAAAAAAajs+A2o8PnhqPD75azw+/2s8Pv9qPD7/azw+/2s8Pv9qPD7/azw+/2s8Pv9qPD7/azw+/2s8Pv9qPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9qPD7/azw+/2s8Pv9qPD7/azw+/2s8Pv9qPD7/azw+/2s8Pv9qPD7/azw+/2s8Pv9qPD7/azw+/2s8Pv9rPD75ajw+eGo7PgMAAAAAAAAAAAAAAAAAAAAAajs+TGo7Pu5qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+7mo7PkwAAAAAAAAAAAAAAABpOz0XaTs+xmk7Pv9pOz7/aTs+/2k7Pv9pOz3/aTs+/2k7Pv9pOz3/aTs+/2k7Pv9pOz3/aTs+/2k7Pv9pOz7/aTs+/2k7Pv9pOz3/aTs+/2k7Pv9pOz3/aTs+/2k7Pv9pOz7/aTs+/2k7Pv9pOz7/aTs+/2k7Pv9pOz3/aTs+/2k7Pv9pOz3/aTs+/2k7Pv9pOz3/aTs+/2k7Pv9pOz7/aTs+/2k7Pv9pOz3/aTs+/2k7PsZpOz0XAAAAAAAAAABpOz1saTs9/Wg7Pf9pOz3/aTs9/2g7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9oOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9oOz3/aTs9/2k7Pf9pOz3/aTs9/2g7Pf9pOz3/aTs9/2g7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9oOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf1oOz1tAAAAAGg6PRVoOj3HaDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3HaDo9FWc6PFJnOjz0Zzo8/2c6PP9nOj3/Zzo8/2c6PP9nOjz/Zzo9/2c6PP9nOj3/Zzo9/2c6PP9nOjz/Zzo9/2c6PP9nOjz/Zzo9/2c6PP9nOjz/Zzo9/2c6PP9nOjz/Zzo8/2c6PP9nOjz/Zzo8/2c6PP9nOj3/Zzo8/2c6PP9nOjz/Zzo9/2c6PP9nOj3/Zzo9/2c6PP9nOjz/Zzo9/2c6PP9nOjz/Zzo9/2c6PP9nOjz/Zzo9/2c6PP9nOjz0Zzo8UmY6PJdnOjz/Zzo8/2c6PP9nOjz/Zzo8/2c6PP9nOjz/Zzo8/2c6PP9nOjz/Zjk8/2Y5PP9mOTz/Zjk8/2Y5PP9nOjz/Zzo8/2Y6PP9nOjz/Zzo8/2Y6PP9mOTz/Zjk8/2Y5PP9mOTz/Zjk8/2c6PP9nOjz/Zzo8/2c6PP9nOjz/Zjk7/2Y5O/9mOTv/Zzo8/2c6PP9nOjz/Zzo8/2c6PP9nOjz/Zzo8/2Y6PP9nOjz/Zzo8/2c6PP9nOjz/Zzo8mGY5PM1mOTz/Zjk8/2Y5PP9mOTz/Zjk8/2Y5PP9mOTz/Zjk8/2Y5PP9nOz7/aT1A/2k9QP9pPUD/aT1A/2c7Pv9mOTz/Zjk8/2Y5PP9mOTz/Zjk8/2c6Pf9pPT//aT1A/2k9QP9pPUD/aDw+/2Y5PP9mOTz/Zjk8/2U5O/9lODv/bEBG/3JGT/9tQUj/Zjk7/2U4O/9mOTz/Zjk8/2Y5PP9mOTz/Zjk8/2Y5PP9mOTz/Zjk8/2Y5PP9mOTz/Zjk8zWU5O+xlOTv/ZTk7/2U5O/9lOTv/ZTk7/2U5O/9lOTv/ZTk7/2Q3Of+bfoD/08bG/9HExP/RxMT/0sbG/5x/gP9kNzr/ZTk7/2U5O/9lOTv/Yzc5/4RhY//PwcH/0cTF/9HExP/Txsf/r5ia/2c7Pf9lOTv/ZTg6/21BSP+edZf/w53U/82o4//GoNf/pHug/3FFTv9kODr/ZTk7/2U5O/9lOTv/ZTk7/2U5O/9lOTv/ZTk7/2U5O/9lOTv/ZTk77GU5O/tlOTv/ZTk7/2U5O/9lOTv/ZTk7/2U5O/9lOTv/ZTk7/2I2OP+ynJ3//////////////////////7Kdnv9jNjj/ZTk7/2U5O/9lOTv/YjU4/5Fyc//8+/v/////////////////z8HC/2c8Pv9kODr/aT5D/6+Hs//euv7/4Lz//9+7///gvP//37v//7eQv/9tQUj/ZDg6/2U5O/9lOTv/ZTk7/2U5O/9lOTv/ZTk7/2Q5O/9lOTv/ZTk7+2Q4O/9kODv/ZDg7/2Q4O/9kODv/ZDg7/2Q4O/9kODv/ZDg7/2I1OP+xnJ3//////////////////////7Kcnv9iNjj/ZDg7/2Q4O/9kODv/YTU4/5Bxc//8+/v/////////////////z8HC/2Y7Pv9iNjj/hVtv/9q29//eu///3rr//966///euv//3rr//925+/+NZH3/YjY4/2Q4O/9kODv/ZDg7/2Q4O/9kODv/ZDg7/2Q4O/9kODv/ZDg7/2M4Ov9jODr/Yzg6/2M4Ov9jODr/Yzg6/2M4Ov9jODr/Yzg6/2E1OP+xnJ3//////////////////////7Kcnf9hNTj/Yzg6/2M4Ov9jODr/YTU3/5Bxc//8+/v/////////////////zsHC/2Y7Pf9hNjf/kmmE/966///euv//3rr//966///euv//3rr//9+8//+cdJT/YTY3/2M4Ov9jODr/Yzg6/2M4Ov9jODr/Yzg6/2M4Ov9jODr/Yzg6/2M4Ov9jODr/Yzg6/2M4Ov9jODr/Yjg6/2M4Ov9jODr/Yzg6/2A1N/+xm53//////////////////////7Gcnf9gNTf/Yjg6/2M4Ov9jODr/YDQ3/49xc//8+/v/////////////////zsHC/2U7Pf9hNTf/hl1y/9u3+f/euv//3rr//966///euv//3rr//925/f+PZ4H/YDU3/2M4Ov9jODr/Yjg6/2M4Ov9jODr/Yzg6/2M4Ov9jODr/Yzg6/2I3Ov9iNzr/Yjc6/2I3Ov9iNzr/Yjc6/2I3Ov9iNzr/Yjc6/2A0N/+wm5z//////////////////////7Gcnf9gNTf/Yjc6/2I3Ov9iNzr/XzQ2/49xcv/8+/v/////////////////zsHC/2Q6Pf9hNjn/akBH/7yWyP/gvf//37v//966///fu///4L3//8Oe1P9vRU7/YTY4/2I3Ov9iNzr/Yjc6/2I3Ov9iNzr/Yjc6/2I3Ov9iNzr/Yjc6/2E3Of9hNzn/YTc5/2E3Of9hNzn/YTc5/2E3Of9hNzn/YTc5/180Nv+wm5z//////////////////////7Gcnf9fNDf/YTc5/2E3Of9hNzn/XzQ2/45wcv/8+/v/////////////////zsHB/2Q6PP9hNzn/YDY4/3RLV/+0jrz/1K/v/9m1+P/VsfH/uZPE/3lQX/9gNjj/YTc5/2E3Of9hNzn/YTc5/2E3Of9hNzn/YTc5/2E3Of9hNzn/YTc5/2E3Of9hNzn/YTc5/2E3Of9gNzn/YTc5/2E3Of9hNzn/YTc5/140Nv+wm5z//////////////////////7Ccnf9eNDb/YDc5/2E3Of9hNzn/XjM2/45wcv/8+/v/////////////////zsHB/2M6PP9gNjn/YTc5/2A2N/9kOz//dk1b/4BXav94T17/ZjxB/181N/9hNzn/YTc5/2E3Of9hNzn/YDc5/2E3Of9hNzn/YTc5/2E3Of9hNzn/YTc5/2A2Of9gNjn/YDY5/2A2Of9gNjn/YDY5/2A2Of9gNjn/YDY5/14zNv+vm5z//////////////////////7CbnP9eNDb/YDY5/2A2Of9gNjn/XTM1/41wcf/7+/v/////////////////zcHB/2I5O/9gNjj/YDY5/182OP9eNDb/XTM0/10zM/9dMzT/XjQ2/2A2OP9gNjn/YDY5/2A2Of9gNjn/YDY5/2A2Of9gNjn/YDY5/2A2Of9gNjn/YDY5/182OP9fNjj/XzY4/182OP9fNjj/XzY4/182OP9fNjj/XzY4/10zNf+vm5z//////////////////////7OfoP9dMzb/XzY4/182OP9fNjj/XDM1/5BzdP/8/Pz/////////////////zcDB/2I5O/9fNjj/XzY4/2c+Rf91TVv/dU1b/3VNW/91TVv/dU1a/2Y9Q/9fNjj/XzY4/182OP9fNjj/XzY4/182OP9fNjj/XzY4/182OP9fNjj/XzY4/182OP9fNjj/XzY4/182OP9fNjj/XzY4/182OP9fNjj/XzY4/1wzNf+vmpv//////////////////////8y/wP9hOTv/XjU3/182OP9fNjj/XDI0/6mTlP//////////////////////yry9/2A4Ov9eNTj/XTQ1/4tjff/UsO//1LDw/9Sw7//UsPD/06/v/4hhef9dNDX/XzY4/182OP9fNjj/XzY4/182OP9fNjj/XzY4/182OP9fNjj/XzY4/141OP9eNTj/XjU3/141OP9eNTj/XjU3/141OP9eNTj/XjU3/1wyNf+vmpv///////////////////////Xz8/+UeXv/XjU4/1syNP9cMzX/fFtd/+Td3f//////////////////////uqip/100Nv9eNTf/XDM0/5Nsif/fu///37v//9+7///fu///4Lz//5Zvj/9cMzT/XjU3/141OP9eNTj/XjU3/141OP9eNTj/XjU3/141N/9eNTj/XjU4/101N/9dNTf/XTU3/101N/9dNTf/XTU3/101N/9dNTf/XTU3/1syNP+umpv////////////////////////////y7+//wbGy/6eSk/+2pKX/5+Hh///////////////////////9/f3/mH+A/1syNP9dNTf/WzM0/5dwkP/fu///3rr//966///euv//4Lz//6F7oP9cMzX/XTU3/101N/9dNTf/XTU3/101N/9dNTf/XTU3/101N/9dNTf/XTU3/101N/9dNTf/XTU3/101N/9dNTf/XTU3/101N/9dNTf/XTU3/1oyNP+umpv////////////////////////////////////////////////////////////////////////////j3N3/b0tN/1szNf9dNTf/WzM0/5t1l//gvP//3rr//966///euv//4Lz//6yGsf9cNDf/XTU3/101N/9dNTf/XTU3/101N/9dNTf/XTU3/101N/9dNTf/XTU3/1w0Nv9cNDb/XDQ2/1w0Nv9cNDb/XDQ2/1w0Nv9cNDb/XDQ2/1oxNP+tmpv//////////////////////+fh4v/39PX///////////////////////////////////////f19f+Yf4H/WzM1/1w0Nv9cNDb/WjM0/6B6n//gvP//3rr//966///euv//4Lz//7aRwv9eNzr/XDQ2/1w0Nv9cNDb/XDQ2/1w0Nv9cNDf/XDQ2/1w0Nv9cNDb/XDQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WzQ2/1kxM/+tmpv//////////////////////7KfoP+eh4j/6+fn////////////////////////////6+fn/5yFhv9dNjj/WzQ2/1s0Nv9bNDb/WjM0/6R/pv/gvP//3rr//966///euv//4Lz//8Cb0f9hOj//WzM1/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WzQ2/1gxM/+tmZr//////////////////////62Zm/9YMDP/dVRW/6SPkP/Dtbb/zcHB/8S2t/+lkJH/dVVX/1ozNf9aMzX/WzQ2/1s0Nv9aNDb/WjM1/6mDrf/gvP//3rr//966///euv//37v//8mk3v9mP0f/WjM1/1s0Nv9aNDb/WzQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WzQ2/1ozNf9aMzX/WjM1/1ozNf9aMzX/WjM1/1ozNf9aMzX/WjM1/1gwM/+smZr//////////////////////62am/9YMDP/WDEz/1gwM/9bNDb/XTY5/1s0Nv9YMDP/WDEz/1ozNf9aMzX/WjM1/1ozNf9aMzX/WjM2/62ItP/gvP//3rr//966///euv//37v//9Cs6f9sRlH/WTI0/1ozNf9aMzX/WjM1/1ozNf9aMzX/WjM1/1ozNf9aMzX/WjM1/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1cwMv+smZr//////////////////////62am/9XMDL/WTM1/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WjQ3/7GNu//gvP//3rr//966///euv//37v//9ay8v90Tl3/WDEz/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1kyNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1YwMv+smZr//////////////////////6yZm/9WMDL/WTM1/1kzNf9ZMjX/WTM1/1kzNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1kyNf9YMjT/WzU4/7aRwv/gvP//3rr//966///euv//3rr//9q2+f99V2v/VzEy/1kzNf9ZMzX/WTM1/1kzNf9ZMjX/WTM1/1kzNf9ZMzX/WTM1/1gyNPtYMjT/WDI0/1gyNP9YMjT/WDI0/1gyNP9YMjT/WDI0/1YvMf+rmZr//////////////////////6yZmv9WLzL/WDI0/1gyNP9YMjT/WDI0/1gyNP9YMjT/WDI0/1gyNP9YMjT/WDI0/1gyNP9YMjT/XDY6/7uXyP/ivv//4Lz//+C8///gvP//4Lz//9+7/v+IY3z/VjAx/1gyNP9YMjT/WDI0/1gyNP9YMjT/WDI0/1gyNP9YMjT/WDI0+1cyNOxXMjT/VzI0/1cyNP9XMjT/VzI0/1cyNP9XMjT/VzI0/1UwMv+bhIb/4Nna/97X1//e19f/4Nna/5uFhv9VMDL/VzI0/1cyNP9XMjT/VzI0/1cyNP9XMjT/VzI0/1cyNP9XMjT/VzI0/1cyNP9XMjT/XDY6/6mFsP/Fodr/xJ/X/8Sf1//En9f/xJ/X/8Sg2P+FYHn/VjAx/1cyNP9XMjT/VzI0/1cyNP9XMjT/VzI0/1cyNP9XMjT/VzI07FcyNMxXMjT/VzI0/1cyNP9XMjT/VzI0/1cxNP9XMjT/VzI0/1YxM/9cODr/YT9B/2E+QP9hPkD/YT9A/1w4Ov9WMTP/VzI0/1cxNP9XMTT/VzI0/1cyNP9XMjT/VzI0/1cyNP9XMjT/VzI0/1cyNP9XMjT/VzI0/104Pf9fOkD/XzpA/186QP9fOkD/XzpA/186QP9bNjr/VjEz/1cxNP9XMjT/VzI0/1cxNP9XMTT/VzI0/1cyNP9XMjT/VzI0zVYxM5dWMTP/VjEz/1YxM/9WMTP/VjEz/1YxM/9WMTP/VjEz/1YxM/9WMTP/VTAy/1UwMv9VMDL/VTAy/1YxM/9WMTP/VjEz/1YxM/9WMTP/VjEz/1YxM/9WMTP/VjEz/1YxM/9WMTP/VjEz/1YxM/9WMTP/VjEz/1YxM/9VMTL/VTEy/1UxMv9VMTL/VTEy/1UxMv9WMTP/VjEz/1YxM/9WMTP/VjEz/1YxM/9WMTP/VjEz/1YxM/9WMTP/VjEzl1UxM1JVMTP0VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP0VTEzUlUxMxVVMTPHVTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTAy/1UxM/9VMTP/VTEz/1UxMv9VMTP/VTAy/1UxMv9VMTP/VTEz/1UxM/9VMTP/VTAy/1UwMv9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTEz/1UxM/9VMTP/VTAy/1UxM/9VMTP/VTEz/1UxMv9VMTP/VTAy/1UxMv9VMTP/VTEz/1UxM/9VMTP/VTAy/1UwMv9VMTPHVTEzFQAAAABUMDJtVDAy/VQwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv9UMDL/VDAy/1QwMv1UMDJsAAAAAAAAAABTMDIXUzAyxlMwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMv9TMDL/UzAy/1MwMsZTMDIXAAAAAAAAAAAAAAAAUzAyTFMwMe5TLzH/Uy8x/1MwMf9TMDH/Uy8x/1MwMv9TMDH/Uy8x/1MwMv9TLzH/Uy8x/1MwMf9TMDH/Uy8x/1MwMv9TMDL/Uy8x/1MwMf9TMDH/Uy8x/1MwMf9TLzH/UzAx/1MwMf9TMDH/Uy8x/1MwMf9TMDH/Uy8x/1MwMv9TMDH/Uy8x/1MwMv9TLzH/Uy8x/1MwMf9TMDH/Uy8x/1MwMv9TMDL/UzAx7lMwMksAAAAAAAAAAAAAAAAAAAAAUzAyA1IvMXhSLzH5Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH/Ui8x/1IvMf9SLzH5Ui8xeFMvMQMAAAAAAAAAAAAAAAAAAAAAAAAAAFIvMQlRLzGHUS8x+FEvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMf9RLzH/US8x/1EvMfhRLzGHUi8xCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRLzAJUS8weFEvMO5RLjD/US4w/1EuMP9RLzD/US8w/1EvMP9RLjD/US4w/1EvMP9RLzD/US4w/1EvMP9RLjD/US8w/1EvMP9RLzD/US8w/1EvMP9RLjD/US8w/1EuMP9RLjD/US8w/1EvMP9RLjD/US4w/1EuMP9RLzD/US8w/1EvMP9RLjD/US4w/1EvMP9RLzD/US4w7lEvMXhRLzEJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUC4wA1AuMEtQLjDHUC4w/FAuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMP9QLjD/UC4w/1AuMPxQLjDHUC4wS1EuMAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQLjAWTy4wbE8uMMdPLjD1Ty4w/08uMP9PLjD/Ty4w/08uMP9PLjD/Ty4w/08uMP9PLjD/Ty4w/08uMP9PLjD/Ty4w/08uMP9PLjD/Ty4w/08uMP9PLjD/Ty4w/08uMP9PLjD/Ty4w/08uMP9PLjD/Ty4w/08uMP9PLjD1Ty4wx1AuMG1QLjAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE8uMBVPLi9STy4vmE8uL81PLi/sTy4v+08uL/9PLi//Ty4v/08uL/9PLi//Ty4v/08uL/9PLi//Ty4v/08uL/9PLi//Ty4v/08uL/9PLi//Ty4v/08uL/9PLi//Ty4v/08uL/tPLi/sTy4vzU8uL5hPLjBSTy4wFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAH/wAA/4AAAAH/AAD+AAAAAH8AAPwAAAAAPwAA8AAAAAAPAADwAAAAAA8AAOAAAAAABwAAwAAAAAADAADAAAAAAAMAAIAAAAAAAQAAgAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAABAACAAAAAAAEAAMAAAAAAAwAAwAAAAAADAADgAAAAAAcAAPAAAAAADwAA8AAAAAAPAAD8AAAAAD8AAP4AAAAAfwAA/4AAAAH/AAD/4AAAB/8AACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG09QBZtPUBibT1As249QOVuPUD6bj1A/249QP9uPUD/bj1A/249QP9uPUD/bj1A/249QP9uPUD/bj1A/249QP9uPUD/bj1A+m49QOVtPUCzbT1AYm09QBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGw8PwVsPT9QbT0/xG09P/htPT//bT0//209P/9tPT//bT0//209P/9tPT//bT0//209P/9tPT//bT0//209P/9tPT//bT0//209P/9tPT//bT0//209P/9tPT/4bT0/w2w8P1BsPD8FAAAAAAAAAAAAAAAAAAAAAAAAAABrPD8Jazw/fWw8P/FsPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw//2w8P/9sPD//bDw/8Ww8P31rPD8JAAAAAAAAAAAAAAAAajs+BGo8Pn1rPD75azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw+/2s8Pv9rPD7/azw++Ws8Pn1qOz4EAAAAAAAAAABqOz5Qajs+8Wo7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+/2o7Pv9qOz7/ajs+8Wo7PlEAAAAAaDs9Fmk7PcJpOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9/2k7Pf9pOz3/aTs9w2g7PRZoOj1iaDo9+Gg6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj3/aDo9/2g6Pf9oOj34aDo9Ymc6PLJnOjz/Zzo8/2c6PP9nOjz/Zzo8/2Y5PP9lNzr/ZTc6/2U3Ov9mOTv/Zzo8/2c6PP9nOjz/Zjg7/2U3Ov9lNzr/ZTg6/2c6PP9nOjz/Zjk8/2U4Ov9lODn/Zjg6/2c6PP9nOjz/Zzo8/2c6PP9nOjz/Zzo8/2c6PP9nOjyzZjk85GY5PP9mOTz/Zjk8/2Y5PP9lOTv/aj5B/4NfYf+IZWf/h2Rm/3JJS/9lODv/Zjk8/2U5O/92T1H/iGVn/4hlZ/9/Wlz/Zzs9/2U5O/9pPUL/gldp/41je/97UF7/Zjo9/2Y5O/9mOTz/Zjk8/2Y5PP9mOTz/Zjk8/2Y5PORlOTv6ZTk7/2U5O/9lOTv/ZTk7/2Q3Ov92T1L/5d7f//j29v/29PT/mXx+/2I1OP9lOTv/YzY5/66XmP/59/j/+fj4/9TIyP9qQEL/aT1C/6mBqf/YtPX/3bn9/9Kt7P+TaoX/ZTk7/2U5O/9lOTv/ZTk7/2U5O/9lOTv/ZTk7+mQ4O/9kODv/ZDg7/2Q4O/9kODv/Yjc5/3ZQUv/s5+f///////7+/v+bf4H/YTU3/2Q4O/9iNTj/sZyd////////////2s/Q/2g+QP9/VWf/2LT0/9+7///euv//4Lz//8ii2v9tQkn/Yzg6/2Q4O/9kODv/ZDg7/2Q4O/9kODv/Yzg6/2M4Ov9jODr/Yzg6/2M4Ov9hNjj/dlBS/+zn5////////v7+/5t/gP9gNDf/Yzg6/2E1N/+xm53////////////az9D/Zz4//4BWaf/Ztfb/37v//966///gvP//yaTc/21CSv9iNzn/Yzg6/2M4Ov9jODr/Yzg6/2M4Ov9iNzr/Yjc6/2I3Ov9iNzr/Yjc6/2A2OP91T1H/7Ofn///////+/v7/mn+A/180Nv9iNzr/YDQ3/7CbnP///////////9nP0P9oP0H/aD5E/7OMuv/duf3/4Lz//9m19/+bc5T/Yjc6/2I3Of9iNzr/Yjc6/2I3Ov9iNzr/Yjc6/2E3Of9hNzn/YTc5/2E3Of9hNzn/XzU3/3RPUf/s5+f///////7+/v+ZfoD/XjM2/2E3Of9fNDb/sJuc////////////2c/Q/2c/Qf9gNTf/akBH/41lf/+ac5T/hFxx/2Q6Pv9gNjj/YTc5/2E3Of9hNzn/YTc5/2E3Of9hNzn/YDY5/2A2OP9gNjj/YDY5/2A2OP9eNTf/c05Q/+zn5////////v7+/5l+f/9dMzX/YDY4/10zNv+vm5z////////////Zz8//Zj5A/182OP9gNzn/YDY5/2A2Of9gNjn/YDY5/2A2OP9gNjn/YDY4/2A2OP9gNjj/YDY4/2A2OP9fNjj/XzY4/182OP9fNjj/XzY4/100Nv9yTlD/7Ofn////////////qJGS/1sxM/9dNDb/XTQ2/76trv///////////9fNzf9lPT//XjQ2/5Fphv+5k8X/t5LC/7WPvv92Tl3/XTQ2/182OP9fNjj/XzY4/182OP9fNjj/XzY4/141N/9eNTf/XjU3/141N/9eNTf/XDQ2/3FNT//s5+f////////////j3Nz/h2lr/29KTP+TeHn/7urq////////////x7m6/183Of9dNDb/q4Wu/+K////gvP//37v9/4hhef9cMzT/XjU3/141N/9eNTf/XjU3/141N/9eNTf/XTU3/101N/9dNTf/XTU3/101N/9bMzX/cE1P/+vn5//////////////////18/P/6uXl//j29v////////////38/P+bg4T/WzI0/101N/+uibX/4Lz//966///fu///kmyK/1syM/9dNTf/XTU3/101N/9dNTf/XTU3/101N/9cNDb/XDQ2/1w0Nv9cNDb/XDQ2/1ozNf9vTU//6+fn///////9/f3/2tHS//Xz8//////////////////+/v7/x7m6/2ZBQ/9bMzX/XTU4/7KNu//gvP//3rr//+C8//+dd5v/WjI0/1w0Nv9cNDb/XDQ2/1w0Nv9cNDb/XDQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WTI0/29MTv/r5+f///////7+/v+ZgIL/im5w/8S2t//Xzs7/z8PE/6ONjv9nQkX/WjI0/1s0Nv9dNjn/tpHC/+C8///euv//4Lz//6iDrP9aMzX/WzQ2/1s0Nv9bNDb/WzQ2/1s0Nv9bNDb/WjM1/1ozNf9aMzX/WjM1/1ozNf9YMjT/bkxO/+vm5////////v7+/5R8ff9VLS//WzU3/2A7Pf9dODr/WDEz/1kyNP9aMzX/WTM1/103O/+6lsj/4Lz//966///gvP//s469/1s1OP9aMzX/WjM1/1ozNf9aMzX/WjM1/1ozNf9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1cxM/9tS03/6+bn///////+/v7/lHx9/1YvMf9ZMjX/WDI0/1kyNP9ZMzX/WTM1/1kzNf9YMjT/Xjg9/76az//gvP//3rr//+C8//+9mc3/Xjg8/1gyNP9ZMzX/WTM1/1kzNf9ZMzX/WTM1/1gyNPpYMjT/WDI0/1gyNP9YMjT/VzEz/2tKTP/o4uP//fz8//v6+v+Senv/VS8x/1gy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
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
GM_addStyle(GM_getResourceText("ToastifyCSS"));

(function () {
    'use strict';
    const wiredVideos = new WeakSet();
    let audioCtx = null;
    let gainNode = null;

    function ensureAudio() {
        if (!audioCtx) {
            audioCtx = new AudioContext();
        }

        if (!gainNode) {
            gainNode = audioCtx.createGain();
            gainNode.gain.value = 1;
            gainNode.connect(audioCtx.destination);
        }
    }
    ensureAudio();

    function isIframe() {
        return window.top !== window.self;
    }

    function hotkey(e) {
        let value = gainNode.gain.value;
        switch (e.key) {
            case "PageUp":
                e.preventDefault();
                value++;
            break;
            case "PageDown":
                e.preventDefault();
                value--;
            break;
        }

        window.parent.postMessage({ event: "SetVolume", value }, "*");
    }
    document.addEventListener("keydown", hotkey, true);

    document.addEventListener("pointerdown", async () => {
        audioCtx.resume();
    }, { once: true });

    function connectVideo(video) {
        if (!video || wiredVideos.has(video))
            return;

        ensureAudio();

        try {
            wiredVideos.add(video);
            const source = audioCtx.createMediaElementSource(video);
            source.connect(gainNode);

            // Beep
            if (!connectVideo.called) {
                const snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
                snd.play()
                    .then(() => connectVideo.called = true)
                    .catch(() => {});
            }
        } catch (err) {
            console.error(err);
        }
    }

    window.SetVolume = function SetVolume(vol) {
        ensureAudio();

        vol = (vol != null) ? Number(vol) : parseFloat(prompt(`Current gain: ${gainNode.gain.value}\nSet the audio gain (Maximum 5):`));

        if (!Number.isFinite(vol) || vol < 1) {
            vol = gainNode.gain.value;
        } else if (vol > 5) {
            vol = 5;
        }

        if (document.hasFocus() && vol !== gainNode.gain.value && document.activeElement.tagName !== "IFRAME") {
            Toastify({
                text: `Current gain: ${vol}`,
                duration: 1000,
                gravity: "top",
                position: "left",
                style: {
                    background: "#333",
                },
                selector: document.fullscreenElement || document.body
            }).showToast();
        }

        gainNode.gain.value = vol;

        // Update across window
        if (!isIframe()) {
            for (let i = 0; i < frames.length; i++) {
                frames[i].postMessage({ event: "SetVolume", value: vol }, "*");
            }
        }

        return vol;
    };

    window.addEventListener("message", (e) => {
        if (e.data.event === "SetVolume")
            SetVolume(e.data.value);
        if (e.data.event === "GetVolume")
            e.source.postMessage({ event: "SetVolume", value: gainNode.gain?.value }, "*");
    });

    if (isIframe()) {
        window.parent.postMessage({ event: "GetVolume" }, "*");
    }

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1)
                    continue;

                // Direct video node
                if (node.tagName === "VIDEO") {
                    connectVideo(node);
                    continue;
                }

                // Nested video node
                const nestedVideo = node.querySelector?.("video");
                if (nestedVideo) {
                    connectVideo(nestedVideo);
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();