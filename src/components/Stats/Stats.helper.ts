type StatsArray = [string, string, string, string];

const getSumOFVals = (numArr: number[]): number =>
    numArr.reduce((prev, curr) => prev + curr, 0);

export const countStats = (arr: number[]): StatsArray => {
    if (arr.length === 0) {
        return ["0", "0", "0", "0"];
    }

    const max = Math.max(...arr)
    const last = arr[arr.length - 1];
    const avg = getSumOFVals(arr) / arr.length;
    const last10 = [...arr].slice(-10)
    const avgLast10 = getSumOFVals(last10) / last10.length;

    return [max.toFixed(2), last.toFixed(2), avg.toFixed(2), avgLast10.toFixed(2)];
};