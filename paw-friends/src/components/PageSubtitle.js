// Componente que recebe um título e renderiza numa linha da página
function PageSubtitle(props) {
    return (
        <div class="row d-flex justify-content-center mt-4">
            <div class="col-lg-8 col-md-10 col-sm-12">
                <h4 class="text-center">{props.subtitle}</h4>
            </div>
        </div>
    )
}

export default PageSubtitle;