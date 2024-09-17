import './filters.css';

const Filters = () => {
    return (
        <div className="filters">
            <button type='button' className='btn btn-light'>Все сотрудники</button>
            <button type='button' className='btn btn-outline-light'>На повышение</button>
            <button type='button' className='btn btn-outline-light'>З/П больше 1000$</button>
        </div>
    )
}

export default Filters;