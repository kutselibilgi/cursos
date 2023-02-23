const TemplateExpressions = () => {

    const name = "Thiago";
    const data = {
        age: 37,
        job: "Garoto de programa"
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Voce atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("Jsx React")}</p>
        </div>
    );
};

export default TemplateExpressions;