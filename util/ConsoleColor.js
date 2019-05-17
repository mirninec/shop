class ConsoleColor {
    // pale(яркость) 1 = ярко, 0 = тускло;
    // dim (тускло), есло dim = true, сообщение будет тусклым
    //static

    static choice(background) {        
        let bc;
        switch (background) {
            case 'black' : bc = 40 ; break;
            case 'red' : bc = 41 ; break;
            case 'green' : bc = 42 ; break;
            case 'yellow' : bc = 43 ; break;
            case 'dark_blue' : bc = 44 ; break;
            case 'purple' : bc = 45 ; break;
            case 'blue'  : bc = 46 ; break;
            case 'white'  : bc = 47 ; break;
            case 'черный': bc = 40 ; break;
            case 'красный' : bc = 41 ; break;
            case 'зеленый' : bc = 42 ; break;
            case 'желтый' : bc = 43 ; break;
            case 'синий' : bc = 44 ; break;
            case 'пурпурный' : bc = 45 ; break;
            case 'голубой' : bc = 46 ; break;
            case 'белый' : bc = 47 ; break;
            default: bc = 40;
        }
        return bc;
    }

    static red(text, background, dim) {
        let color = 31;
        let pale = 1;
        if (dim) pale =0;
        console.log('\x1b[' + pale + ';' + color +';' + this.choice(background) + 'm ' + text + '\x1b[0m');
    }

    static green(text, background, dim) {
        let color = 32;
        let pale = 1;
        if (dim) pale =0;
        console.log('\x1b[' + pale + ';' + color +';' + this.choice(background) + 'm ' + text + '\x1b[0m');
    }

    static yellow(text, background, dim) {
        let color = 33;
        let pale = 1;
        if (dim) pale =0;
        console.log('\x1b[' + pale + ';' + color +';' + this.choice(background) + 'm ' + text + '\x1b[0m');
    }

    static dark_blue(text, background, dim) {
        let color = 34;
        let pale = 1;
        if (dim) pale =0;
        console.log('\x1b[' + pale + ';' + color +';' + this.choice(background) + 'm ' + text + '\x1b[0m');
    }

    static purple(text, background, dim) {
        let color = 35;
        let pale = 1;
        if (dim) pale =0;
        console.log('\x1b[' + pale + ';' + color +';' + this.choice(background) + 'm ' + text + '\x1b[0m');
    }

    static blue(text, background, dim) {
        let color = 36;
        let pale = 1;
        if (dim) pale =0;
        console.log('\x1b[' + pale + ';' + color +';' + this.choice(background) + 'm ' + text + '\x1b[0m');
    }

    
    static white(text, background, dim) {
        let color = 37;
        let pale = 1;
        if (dim) pale =0;
        console.log('\x1b[' + pale + ';' + color +';' + this.choice(background) + 'm ' + text + '\x1b[0m');
    }
    
    static black(text, background, dim) {
        let color = 30;
        let pale = 1;
        if (dim) pale =0;
        console.log('\x1b[' + pale + ';' + color +';' + this.choice(background) + 'm ' + text + '\x1b[0m');
    }

    static test(color) {
        switch(color) {
            case 'red': {
                this.red('    Какое-то сообщение!   ', 'red');
                this.red('    Какое-то сообщение!   ', 'black');
                this.red('    Какое-то сообщение!   ', 'green');
                this.red('    Какое-то сообщение!   ', 'yellow');
                this.red('    Какое-то сообщение!   ', 'dark_blue');
                this.red('    Какое-то сообщение!   ', 'purple');
                this.red('    Какое-то сообщение!   ', 'blue');
                this.red('    Какое-то сообщение!   ', 'white');
            } break;
            case 'green': {
                this.green('    Какое-то сообщение!   ', 'red');
                this.green('    Какое-то сообщение!   ', 'black');
                this.green('    Какое-то сообщение!   ', 'green');
                this.green('    Какое-то сообщение!   ', 'yellow');
                this.green('    Какое-то сообщение!   ', 'dark_blue');
                this.green('    Какое-то сообщение!   ', 'purple');
                this.green('    Какое-то сообщение!   ', 'blue');
                this.green('    Какое-то сообщение!   ', 'white');
            } break;
            case 'yellow': {
                this.yellow('    Какое-то сообщение!   ', 'red');
                this.yellow('    Какое-то сообщение!   ', 'black');
                this.yellow('    Какое-то сообщение!   ', 'green');
                this.yellow('    Какое-то сообщение!   ', 'yellow');
                this.yellow('    Какое-то сообщение!   ', 'dark_blue');
                this.yellow('    Какое-то сообщение!   ', 'purple');
                this.yellow('    Какое-то сообщение!   ', 'blue');
                this.yellow('    Какое-то сообщение!   ', 'white');
            } break;
            case 'dark_blue': {
                this.dark_blue('    Какое-то сообщение!   ', 'red');
                this.dark_blue('    Какое-то сообщение!   ', 'black');
                this.dark_blue('    Какое-то сообщение!   ', 'green');
                this.dark_blue('    Какое-то сообщение!   ', 'yellow');
                this.dark_blue('    Какое-то сообщение!   ', 'dark_blue');
                this.dark_blue('    Какое-то сообщение!   ', 'purple');
                this.dark_blue('    Какое-то сообщение!   ', 'blue');
                this.dark_blue('    Какое-то сообщение!   ', 'white');
            } break;
            case 'purple': {
                this.purple('    Какое-то сообщение!   ', 'red');
                this.purple('    Какое-то сообщение!   ', 'black');
                this.purple('    Какое-то сообщение!   ', 'green');
                this.purple('    Какое-то сообщение!   ', 'yellow');
                this.purple('    Какое-то сообщение!   ', 'dark_blue');
                this.purple('    Какое-то сообщение!   ', 'purple');
                this.purple('    Какое-то сообщение!   ', 'blue');
                this.purple('    Какое-то сообщение!   ', 'white');
            } break;
            case 'blue': {
                this.blue('    Какое-то сообщение!   ', 'red');
                this.blue('    Какое-то сообщение!   ', 'black');
                this.blue('    Какое-то сообщение!   ', 'green');
                this.blue('    Какое-то сообщение!   ', 'yellow');
                this.blue('    Какое-то сообщение!   ', 'dark_blue');
                this.blue('    Какое-то сообщение!   ', 'purple');
                this.blue('    Какое-то сообщение!   ', 'blue');
                this.blue('    Какое-то сообщение!   ', 'white');
            } break;
            case 'white': {
                this.white('    Какое-то сообщение!   ', 'red');
                this.white('    Какое-то сообщение!   ', 'black');
                this.white('    Какое-то сообщение!   ', 'green');
                this.white('    Какое-то сообщение!   ', 'yellow');
                this.white('    Какое-то сообщение!   ', 'dark_blue');
                this.white('    Какое-то сообщение!   ', 'purple');
                this.white('    Какое-то сообщение!   ', 'blue');
                this.white('    Какое-то сообщение!   ', 'white');
            } break;
            default: {
                this.black('    Какое-то сообщение!   ', 'black');
                this.red('    Какое-то сообщение!   ', 'black');
                this.green('    Какое-то сообщение!   ', 'black');
                this.yellow('    Какое-то сообщение!   ', 'black');
                this.dark_blue('    Какое-то сообщение!   ', 'black');
                this.purple('    Какое-то сообщение!   ', 'black');
                this.blue('    Какое-то сообщение!   ', 'black');
                this.white('    Какое-то сообщение!   ', 'black');
            } break;
        }
    }
}

module.exports = ConsoleColor;
