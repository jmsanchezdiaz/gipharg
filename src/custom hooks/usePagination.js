import { useEffect, useState } from "react";

export const usePagination = (initState, maxElements) => {
  const [curPage, setCurPage] = useState(0);
  const [nxtPage, setNxtPage] = useState(maxElements);
  const [pageNumber, setPageNumber] = useState(1);
  const [filtered, setFiltered] = useState(initState);
  const amountOfPages = Math.ceil(initState.length / maxElements);

  const resetPagination = () => {
    setCurPage(0);
    setNxtPage(maxElements);
    setPageNumber(1);
  };

  const goNextPage = () => {
    if (curPage + maxElements < initState.length) {
      window.scrollTo(0, 0);
      setCurPage(curPage + maxElements);
      setNxtPage(nxtPage + maxElements);
      setPageNumber(pageNumber + 1);
    }
  };

  const goPrevPage = () => {
    if (curPage > 0) {
      window.scrollTo(0, 0);
      setCurPage(curPage - maxElements);
      setNxtPage(nxtPage - maxElements);
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    const filtered = initState.slice(curPage, nxtPage);
    setFiltered(filtered);
  }, [initState, pageNumber, curPage, nxtPage, maxElements]);

  return {
    filtered,
    pageNumber,
    goNextPage,
    goPrevPage,
    amountOfPages,
    resetPagination,
  };
};
