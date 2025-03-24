import { getNextDays } from "./getNextDays";

test("should be return next five dasy", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
});