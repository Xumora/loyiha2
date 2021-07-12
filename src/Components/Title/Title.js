function Title(props) {
    const state = props;

    return <div className="row mb-5">
        <div className="col-12 col-lg-6 offset-lg-3 text-white text-center">
            <h1 className={state.className}>
                {state.titleName}
            </h1>
            <p className={state.textClass}>
                {state.titleText}
            </p>
        </div>
    </div>
}

export default Title;
