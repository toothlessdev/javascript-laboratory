// function jsx<T>(strings: TemplateStringsArray, ...interpolations: ((props: T) => any)[]): (props: T) => string {
//     console.log(
//         "str : ",
//         strings.reduce((prev, curr) => prev + curr, ""),
//     );
//     console.log(
//         "interpolations : ",
//         interpolations.forEach((f) => console.log(f)),
//     );

//     return (props: T) => {
//         return strings.reduce((result, stringPart, i) => {
//             const interp = interpolations[i];
//             const value = interp ? interp(props) : "";
//             return result + stringPart + value;
//         }, "");
//     };
// }

interface JSXElement {
    strings: TemplateStringsArray;
    props: unknown[];
}

function jsx(strings: TemplateStringsArray, ...interpolations: unknown[]): JSXElement {
    console.log(strings);
    console.log(interpolations);

    return {
        strings,
        props: interpolations,
    };
}

class Component<Props extends Record<string, unknown>> {
    props: Props;

    constructor(props: Props) {
        this.props = props;
    }

    get state() {
        return this.state;
    }
    set state(newState: Record<string, unknown>) {
        this.state = newState;
        this.render();
    }

    injectProps() {
        console.log(this.render());
    }
    render(): JSXElement | null {
        return null;
    }
}

type MyProps = {
    count: number;
    name: string;
};

class MyComponent extends Component<MyProps> {
    constructor() {
        super({
            count: 0,
            name: "kimdaegeon",
        });
    }

    render() {
        return jsx`
            <div>
                <h1>${this.props.name} counter</h1>
                <p>${this.props.count}</p>
            </div>
        `;
    }
}

const mycomponent = new MyComponent();
console.log(mycomponent.render());
