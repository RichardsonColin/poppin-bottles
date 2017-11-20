arg = Number(process.argv.slice(2));

function bottleReturn(num) {
  let bottles      = num / 2;
  let emptyBottles = bottles;
  let bottleCaps   = bottles;
  let totalBottles = bottles;

  // Bottles through recycling
  let capRecyclingBottles    = 0;
  let bottleRecyclingBottles = 0;

  while(bottleCaps > 3 || emptyBottles > 1) {

    if(emptyBottles >= 2) {
      emptyBottles -= 1;
      bottleCaps += 1;
      totalBottles += 1;
      bottleRecyclingBottles += 1;
    }

    if(bottleCaps >= 4) {
      bottleCaps -= 3;
      emptyBottles += 1;
      totalBottles += 1;
      capRecyclingBottles += 1;
    }
  }
  console.log(`TOTAL BOTTLES: ${totalBottles}`);
  console.log('\n--TOTAL EARNED THROUGH RECYCLING--');
  console.log(`  BOTTLES: ${bottleRecyclingBottles}`);
  console.log(`     CAPS: ${capRecyclingBottles}`);
  console.log(`\n--REMAINING ITEMS--`);
  console.log(`  BOTTLES: ${emptyBottles}`);
  console.log(`     CAPS: ${bottleCaps}`);

}

bottleReturn(arg);