import './header-block.css';

const HeaderBlock = ({employeesCount, increaseCount}) => {
    return (
        <div className="header-block">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {increaseCount.length}</h2>
        </div>
    ) 
}

export default HeaderBlock;