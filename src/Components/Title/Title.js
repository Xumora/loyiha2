function Title(props) {
    const state = props;

    return <div className="row">
        <div className="col-12 col-md-6 offset-md-3 text-white text-center">
            <h1>
                {state.titleName}
            </h1>
            <p>
                {state.titleText}
            </p>
        </div>
    </div>
}

export default Title;
