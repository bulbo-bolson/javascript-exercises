

let size = 8;

for (col_counter = 1; col_counter <= size; col_counter++) {
   for (row_counter = 1; row_counter <= size; row_counter++)  {
        if (col_counter % 2) {
            if (row_counter % 2) {
                process.stdout.write(" ");
            } else  {
                process.stdout.write("#");
            }
        } else {
            if (! (row_counter % 2)) {
                process.stdout.write(" ");
            } else  {
                process.stdout.write("#");
            }
        }
    }
    process.stdout.write("\n");
}