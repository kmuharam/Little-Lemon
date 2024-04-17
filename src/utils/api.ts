const seededRandom = (seed: number) => {
    const m: number = 2 ** 35 - 31;
    const a: number = 185852;

    let s: number = seed % m;

    return function () {
        return (s = (s * a) % m) / m;
    };
};

const fetchAPI = (date: Date) => {
    let result: Array<string> = [];
    const dt = new Date(date);
    const seed: number = dt.getDate();

    let random = seededRandom(seed);

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }

        if (random() < 0.5) {
            result.push(i + ":30");
        }
    }

    return result;
};

const submitAPI = () => {
    return true;
};

// ----------------------------------------------------------------------

export { fetchAPI, submitAPI };
