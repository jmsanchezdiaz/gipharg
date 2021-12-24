import { useEffect, useState } from "react";

interface PageState {
  curIndex: number;
  nxtIndex: number;
  pageNumber: number;
}

export const usePagination = <T>(initState: T[] = [], maxElements: number) => {
  const [pageState, setPageState] = useState<PageState>({
    curIndex: 0,
    nxtIndex: maxElements,
    pageNumber: 1,
  });
  const [filtered, setFiltered] = useState<T[]>(initState);

  const { curIndex, nxtIndex, pageNumber } = pageState;

  const amountOfPages = Math.ceil(initState.length / maxElements);
  const amountOfElements =
    pageNumber * maxElements > initState.length
      ? initState.length
      : pageNumber * maxElements;

  useEffect(() => {
    const resetPagination = () => {
      setPageState({
        curIndex: 0,
        nxtIndex: maxElements,
        pageNumber: 1,
      });
    };
    resetPagination();
  }, [initState, maxElements]);

  const goNextPage = () => {
    if (curIndex + maxElements < initState.length) {
      setPageState({
        curIndex: curIndex + maxElements,
        nxtIndex: nxtIndex + maxElements,
        pageNumber: pageNumber + 1,
      });
      window.scroll(0, 0);
    }
  };

  const goPrevPage = () => {
    if (curIndex > 0) {
      setPageState({
        curIndex: curIndex - maxElements,
        nxtIndex: nxtIndex - maxElements,
        pageNumber: pageNumber - 1,
      });
      window.scroll(0, 0);
    }
  };

  useEffect(() => {
    const filtered = initState.slice(curIndex, nxtIndex);
    setFiltered(filtered);
  }, [initState, pageNumber, curIndex, nxtIndex, maxElements]);

  return {
    filtered,
    amountOfElements,
    pageNumber,
    goNextPage,
    goPrevPage,
    amountOfPages,
  };
};
