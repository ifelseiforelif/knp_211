import { useReducer } from 'react';
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios'
import { toPrev,toNext } from '../slices/pagination/pagination-slice';
import { next } from './pages/ListOfProducts';


export default function Pagination(props: any) {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: any) => { return state.pagination.currentPage; });
    return <>
      <div aria-label="..." className='pagination'>
      <ul className="pagination">
        <li className="page-item">
          <div className="page-link" onClick={()=>{{currentPage>1&&dispatch(toPrev(1))}}}>Previous</div>
        </li>
        <li className="page-item" aria-current="page">
          <div className="page-link" >{currentPage}</div>
        </li>
        <li className="page-item">
          <div className="page-link" onClick={()=>{{next!=null&&dispatch(toNext(1))}}}>Next</div>
        </li>
      </ul>
    </div>
    </>;
  }