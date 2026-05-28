# Big Bang Number Generator Case Study

This project creates a list of numbers from 1 to 100.

Numbers are replaced with words:

- Numbers divisible by 3 become `BIG`
- Numbers divisible by 5 become `BANG`
- Numbers divisible by both 3 and 5 become `BIG BANG`
- All other numbers stay as normal numbers

For example:

```json
["1", "2", "BIG", "4", "BANG"]
```

When the script finishes, it creates a file named `output.json` that contains the full result.

## How To Run

First, install the project dependencies:

```bash
npm install
```

Then run the script:

```bash
npm start
```

After running it, open `output.json` to see the generated list.

## What The Code Does

The script checks every number from 1 to 100 one by one.

For each number, it checks whether the number can be divided cleanly by 3, 5, or both. Based on that check, it adds either a word or the original number into the final list.

The final list is saved into `output.json`.

## Performance

The script uses one loop from 1 to 100, so its time complexity is `O(n)`.

This means the work grows in a straight line with the amount of numbers being generated. Since this project only generates 100 values, it runs very quickly.
