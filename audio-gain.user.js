// ==UserScript==
// @name         Audio Gain
// @namespace    https://github.com/TheReVeaLz
// @version      2026-05-17
// @description  A lightweight userscript that adds audio gain control and volume boosting to web video players for a better listening experience.
// @author       TheReVeaLz
// @match        https://reanime.to/*
// @include      https://flixcloud.*
// @require      https://cdn.jsdelivr.net/npm/toastify-js
// @resource     ToastifyCSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW11c2ljLWljb24gbHVjaWRlLW11c2ljIj48cGF0aCBkPSJNOSAxOFY1bDEyLTJ2MTMiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMTgiIHI9IjMiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE2IiByPSIzIi8+PC9zdmc+
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
/* global Toastify */

GM_addStyle(GM_getResourceText("ToastifyCSS"));

const ToastSingleton = (() => {
    let activeToast = null;

    return (options) => {
        if (activeToast) {
            activeToast.hideToast();
        }

        activeToast = Toastify({
            text: "",
            duration: 2000,
            gravity: "top",
            position: "left",
            style: {
                background: "#333",
                borderRadius: "9999px",
            },
            selector: document.fullscreenElement || document.body,
            onClose: () => {
                activeToast = null;
            },
            ...options
        });

        activeToast.showToast();
    };
})();

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

            // Notification
            if (!connectVideo.called) {
                connectVideo.called = true;
                ToastSingleton({ text: `Audio gain injected.` });
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
            ToastSingleton({ text: `Current gain: ${vol}` });
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