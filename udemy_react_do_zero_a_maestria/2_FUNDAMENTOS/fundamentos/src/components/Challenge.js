const Challenge = () => {
    const a = 1;
    const b = 2;
    let soma;
    const handleClick = (a, b) => {
        console.log("A + B", a + b)
        return (
            soma = a + b
        )

    };

    return (
        <div>
            <p>Valor A = {a}</p>
            <p>Valor B = {b}</p>
            <button onClick = {() => handleClick(a, b)}>
                Somar A + B
            </button>
            {/* <h1>Soma: {soma}</h1>  PQ não atualizou?*/}
        </div>
    );
};

export default Challenge;

