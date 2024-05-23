import { items, loading, page } from './store';

export async function fetchItems() {
  try {
    loading.set(true);

    // page 값을 구독하여 사용
    let currentPage;
    page.subscribe(value => {
      currentPage = value;
    })();

    const response = [{
      name : 'TEST ' + 1 * currentPage
    },{
      name : 'TEST ' + 2 * currentPage
    },{
      name : 'TEST ' + 3 * currentPage
    },{
      name : 'TEST ' + 4 * currentPage
    },{
      name : 'TEST ' + 5 * currentPage
    },{
      name : 'TEST ' + 6 * currentPage
    },{
      name : 'TEST ' + 7 * currentPage
    },{
      name : 'TEST ' + 8 * currentPage
    },{
      name : 'TEST ' + 9 * currentPage
    },{
      name : 'TEST ' + 10 * currentPage
    },{
      name : 'TEST ' + 11 * currentPage
    },{
      name : 'TEST ' + 12 * currentPage
    },{
      name : 'TEST ' + 13 * currentPage
    },{
      name : 'TEST ' + 14 * currentPage
    },{
      name : 'TEST ' + 15 * currentPage
    },{
      name : 'TEST ' + 16 * currentPage
    },{
      name : 'TEST ' + 17 * currentPage
    },{
      name : 'TEST ' + 18 * currentPage
    },{
      name : 'TEST ' + 19 * currentPage
    },{
      name : 'TEST ' + 20 * currentPage
    },{
      name : 'TEST ' + 21 * currentPage
    },{
      name : 'TEST ' + 22 * currentPage
    },{
      name : 'TEST ' + 23 * currentPage
    },{
      name : 'TEST ' + 24 * currentPage
    },{
      name : 'TEST ' + 25 * currentPage
    },{
      name : 'TEST ' + 26 * currentPage
    },{
      name : 'TEST ' + 27 * currentPage
    },{
      name : 'TEST ' + 28 * currentPage
    },{
      name : 'TEST ' + 29 * currentPage
    },{
      name : 'TEST ' + 30 * currentPage
    },{
      name : 'TEST ' + 31 * currentPage
    },{
      name : 'TEST ' + 32 * currentPage
    },{
      name : 'TEST ' + 33 * currentPage
    },{
      name : 'TEST ' + 34 * currentPage
    },{
      name : 'TEST ' + 35 * currentPage
    },{
      name : 'TEST ' + 36 * currentPage
    },{
      name : 'TEST ' + 37 * currentPage
    },{
      name : 'TEST ' + 38 * currentPage
    },{
      name : 'TEST ' + 39 * currentPage
    },{
      name : 'TEST ' + 40 * currentPage
    }];
    // DB 연결 및 백엔드 개발 후 해당 코드 주석 사용
    // 실제 fetch 요청 주석 처리
    // const response = await fetch(`https://api.example.com/items?page=${currentPage}`);

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // const newItems = await response.json();  // JSON 응답 처리

    // 하드코딩된 데이터로 items 업데이트
    items.update(currentItems => [...currentItems, ...response]);
    loading.set(false);
    page.update(n => n + 1);

  } catch (error) {
    console.error('Error fetching items:', error);
    loading.set(false);
  }
}