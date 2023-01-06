import { useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

//npm package: https://www.npmjs.com/package/react-paginate
function Images(props){
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPAge;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPAge));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
        <div className='images'>
            {currentItems.map(image => {
                return (
                    <div className='image'>
                        <img src={image.url} alt={image.title}/>
                    </div>
                )
            })}
        </div>
        <ReactPaginate
            breakLabel= "..."
            nextLabel= "next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel= "<previous"
            renderOnZeroPageCount={null}
        />
        </>
    )
}

export default Images;