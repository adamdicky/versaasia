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

Follow these steps from the beginning.

### 1. Open Terminal

Open the Terminal app on your computer.

Terminal is the place where you type commands to download and run the project.

### 2. Download The Project

Copy and paste this command into Terminal, then press Enter:

```bash
git clone https://github.com/adamdicky/versaasia.git
```

This downloads the project from GitHub into a new folder named `versaasia`.

### 3. Go Into The Project Folder

Copy and paste this command, then press Enter:

```bash
cd versaasia
```

This moves Terminal into the project folder. This step is important because the next commands only work inside the `versaasia` folder.

### 4. Install The Project Requirements

Copy and paste this command, then press Enter:

```bash
npm install
```

This installs the tools needed to run the TypeScript file.

### 5. Run The Script

Copy and paste this command, then press Enter:

```bash
npm start
```

This runs the code in `function.ts`.

### 6. Check The Result

After running the script, a file named `output.json` will be created inside the `versaasia` folder.

Open `output.json` to see the generated list.

## What The Code Does

The script checks every number from 1 to 100 one by one.

For each number, it checks whether the number can be divided cleanly by 3, 5, or both. Based on that check, it adds either a word or the original number into the final list.

The final list is saved into `output.json`.

## Performance

The script uses one loop from 1 to 100, so its time complexity is `O(n)`.

This means the work grows in a straight line with the amount of numbers being generated. Since this project only generates 100 values, it runs very quickly.
