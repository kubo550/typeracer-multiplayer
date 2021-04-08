export const getPlayableArray = (text: string): string[] =>
    text
        .split(/\s+/)
        .map((word, i, arr) => (i === arr.length - 1 ? word : word + " "));

const decimal = (num: number): string => {
    return num.toString().padStart(2, "0");
};

export const displayTime = (time: number | null): string => {
    time = Number(time)
    if (time < 0) {
        return `00:00`
    }
    const mn = Math.floor(time / 60);
    const sc = time % 60;
    return `${decimal(mn)}:${decimal(sc)}`;
};

export const countWordsPerSec = (time: number | null, allWords: string[]): number => {
    const chars = [...allWords].map(word => [...word]).flat(); // array of singe chars
    const aVGLettersInWord = 5; // average number of letters in word in english
    const wps = ((chars.length / (Number(time) + 0.5)) * 60) / aVGLettersInWord;
    return wps;
};

