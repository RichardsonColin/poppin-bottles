arg = Number(process.argv.slice(2));

function bottleReturn(num) {
  bottles = num / 2;
  emptyBottles = bottles;
  bottleCaps = bottles;
  totalBottles = bottles;

  while(bottleCaps > 3 || emptyBottles > 1) {

    if(emptyBottles >= 2) {
      emptyBottles -= 1;
      bottleCaps += 1;
      totalBottles += 1;
    }

    if(bottleCaps >= 4) {
      bottleCaps -= 3;
      emptyBottles += 1;
      totalBottles += 1;
    }
  }
  console.log(totalBottles);
}

bottleReturn(arg);