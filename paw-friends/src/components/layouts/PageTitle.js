// Componente que recebe um título e renderiza numa linha da página
function PageTitle(props) {
    return (
        <div className="row d-flex justify-content-center mt-4">
            <div className="col-lg-8 col-md-10 col-sm-12">
                <p className="text-center text-capitalize display-1">{props.title}</p>
            </div>
        </div>
    )
}

export default PageTitle;