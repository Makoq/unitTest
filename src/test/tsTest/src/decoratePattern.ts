function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(true)
    greet() {
        return "Hello, " + this.greeting;
    }
}
const t =new Greeter("xiaoming")
console.log(t.greet())
