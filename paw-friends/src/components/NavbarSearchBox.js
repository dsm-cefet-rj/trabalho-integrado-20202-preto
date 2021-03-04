function NavbarSearchBox() {
    return(    
        <div id="SearchBox" className="input-group">
            <div className="form-outline">
                <input type="search" id="search-box-form" className="form-control" placeholder="Buscar" />
            </div>
            <button type="button" className="btn btn-primary">
                <i className="bi bi-search"/>
            </button>
        </div>
    )
}

export default NavbarSearchBox;