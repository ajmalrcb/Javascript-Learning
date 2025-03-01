// Encapsulation 
const counter = (() => {
    let count = 0;
    return {
        increment: () => count++,
        getCount: () => count
    };
})();

console.log(counter.getCount()); // 0
counter.increment();
console.log(counter.getCount()); // 1


//  Module Pattern

const userModule = (() => {
    const users = [];

    return {
        addUser: (user) => users.push(user),
        getUsers: () => users
    };
})();

userModule.addUser({ name: 'John Doe' });
console.log(userModule.getUsers()); // [{ name: 'John Doe' }]


//  Factory Function

const createUser = (name, age) => {
    let privateVariable = 'private';

    return {
        getName: () => name,
        getAge: () => age,
        getPrivateVariable: () => privateVariable
    };
};

const user = createUser('Jane Doe', 30);
console.log(user.getName()); // Jane Doe
console.log(user.getPrivateVariable()); // private


//  Event Handling

const button = document.getElementById('button');

const handleClick = ((count) => {
    return () => {
        console.log(`Button clicked ${count} times`);
        count++;
    };
})(0);

button.addEventListener('click', handleClick);


//  Memoization 

const memoize = (fn) => {
    const cache = {};

    return ((...args) => {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;
    });
};

const addition = (a, b) => a + b;
const memoizedAdd = memoize(addition);

console.log(memoizedAdd(2, 3)); // 5
console.log(memoizedAdd(2, 3)); // 5 (cached result)


// Higher-Order Functions

const twice = (fn) => {
    return (...args) => {
        fn(...args);
        fn(...args);
    };
};

const sayHello = (name) => console.log(`Hello, ${name}!`);
const sayHelloTwice = twice(sayHello);

sayHelloTwice('Alice'); // Hello, Alice! Hello, Alice!


//  Private Variables and Functions

const bankAccount = (() => {
    let balance = 0;

    const deposit = (amount) => {
        balance += amount;
    };

    const getBalance = () => balance;

    return {
        deposit,
        getBalance
    };
})();

bankAccount.deposit(100);
console.log(bankAccount.getBalance()); // 100


// Currying

const curry = (fn) => {
    return (...args) => {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        return (...nextArgs) => curry(fn)(...args, ...nextArgs);
    };
};

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6


// Async Programming

const asyncOperation = ((callback) => {
    return (data) => {
        setTimeout(() => {
            callback(data);
        }, 2000);
    };
})(console.log);

asyncOperation('Hello, World!');


//  Debugging

const logger = (() => {
    let logs = [];

    return {
        log: (message) => logs.push(message),
        getLogs: () => logs
    };
})();

logger.log('Application started');
console.log(logger.getLogs()); // ['Application started']