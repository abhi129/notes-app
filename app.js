import chalk from 'chalk';
//import notes from './notes.js';
import yargs from 'yargs';

//console.log(chalk.red('Hello') + ' World' + chalk.red('!'));

//console.log(process.argv);
console.log(yargs(process.argv.slice(2)).argv);

yargs(hideBin(process.argv)).command({
    command:'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log("Removing an note");
    }
})




