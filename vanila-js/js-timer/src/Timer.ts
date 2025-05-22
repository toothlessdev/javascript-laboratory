export class Timer {
    private interval: number;
    private onTick: () => void;
    private generator: Generator<Promise<number>>;
    private isRunning: boolean;
    private timeoutId: NodeJS.Timeout | null;
    private lastStartTime: number | null;
    private remainingTime: number;

    constructor(interval: number, onTick: () => void) {
        this.interval = interval;
        this.onTick = onTick;
        this.generator = this.createGenerator();
        this.isRunning = false;
        this.timeoutId = null;
        this.lastStartTime = null;
        this.remainingTime = interval;
    }

    private *createGenerator(): Generator<Promise<number>> {
        let count = 0;
        while (true) {
            yield new Promise((resolve) => {
                this.lastStartTime = Date.now();
                this.timeoutId = setTimeout(() => {
                    resolve(count++);
                }, this.remainingTime);
            });
        }
    }

    public async start() {
        if (this.isRunning) return;
        this.isRunning = true;
        while (this.isRunning) {
            const result = await this.generator.next().value;
            this.remainingTime = this.interval;
            this.onTick();
        }
    }

    public pause() {
        if (!this.isRunning || this.timeoutId === null || this.lastStartTime === null) return;
        clearTimeout(this.timeoutId);
        const elapsed = Date.now() - this.lastStartTime;
        this.remainingTime -= elapsed;
        this.isRunning = false;
    }

    public resume() {
        if (this.isRunning) return;
        this.generator = this.createGenerator(); // 새 generator 시작
        this.start();
    }

    public stop() {
        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
        }
        this.isRunning = false;
        this.remainingTime = this.interval;
        this.timeoutId = null;
        this.lastStartTime = null;
    }

    public getRemainingTime(): number {
        if (!this.isRunning || this.lastStartTime === null) {
            return this.remainingTime;
        }
        const elapsed = Date.now() - this.lastStartTime;
        return Math.max(this.remainingTime - elapsed, 0);
    }
}
