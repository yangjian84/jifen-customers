/**
 * 节流函数 特定场景下触发一次，后续一定时间内不再触发
 * @param fn callback
 * @param interval default 800
 */
export function throttle(
    fn: (...args: Array<unknown>) => void,
    interval = 800,
): (...args2: Array<unknown>) => unknown {
    let timer: number,
        free = true;
    return (...arg: Array<unknown>) => {
        if (!timer) {
            timer = (setTimeout(() => {
                clearTimeout(timer);
                (timer = 0), (free = true);
            }, interval) as unknown) as number;
        }
        if (free) {
            fn(...arg);
            free = false;
        }
    };
}