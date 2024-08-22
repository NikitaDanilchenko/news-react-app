import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const hendler = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(hendler);
    }, [value, delay]);

    return debounce;
};
