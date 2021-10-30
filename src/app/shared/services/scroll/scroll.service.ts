import { Injectable } from '@angular/core';

// Modified from https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

const keyCodes = ['Space', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'];

const preventDefault = (event: any) => {
    event.preventDefault();
};

const preventDefaultForScrollKeys = (event: KeyboardEvent) => {
    if (keyCodes.includes(event.code)) {
        preventDefault(event);
        return false;
    } else {
        return true;
    }
};

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    private readonly wheelEvent =
        'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    private supportsPassive = false;
    private wheelOpt: false | { passive: false } = false;

    setWheelOpt() {
        try {
            window.addEventListener(
                'test',
                () => {},
                Object.defineProperty({}, 'passive', {
                    get: () => {
                        this.supportsPassive = true;
                    }
                })
            );
        } catch (event: any) {}
        this.wheelOpt = this.supportsPassive ? { passive: false } : false;
    }

    disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.addEventListener(this.wheelEvent, preventDefault, this.wheelOpt);
        window.addEventListener('touchmove', preventDefault, this.wheelOpt);
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(this.wheelEvent, preventDefault);
        window.removeEventListener('touchmove', preventDefault);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
}
