import './filters.css';

const Filters = ({favoriteFilter, salaryFilter, noFilter, filter}) => {
    const filterBtns = [
        {name: '', label: 'Все сотрудники', click: noFilter, id: 0},
        {name: 'favorite', label: 'На повышение', click: favoriteFilter, id: 1},
        {name: 'moreThen1000', label: 'З/П больше 1000$', click: salaryFilter, id: 2}
    ]

    const buttons = filterBtns.map(item => {        
        const active = item.name === filter;
        const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';
        return (
            <button
                key={item.id}
                type='button'
                name={item.name}
                className={clazz}
                onClick={item.click}>
                {item.label}
            </button>
        )
    })
    return (
        <div className="filters">
            {buttons}
        </div>
    )
}

export default Filters;