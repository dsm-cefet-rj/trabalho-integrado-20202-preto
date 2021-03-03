
function PageTitle(props) {
    return (
        <div class="row d-flex justify-content-center mt-4">
            <div class="col-lg-8 col-md-10 col-sm-12">
                <p class="text-center text-capitalize display-1">{props.title}</p>
            </div>
        </div>
    )
}

export default PageTitle;