<script>
  import { onMount, onDestroy } from 'svelte';
  import { items, loading } from './store';
  import { fetchItems } from './fetchData';

  let itemList = [];
  let loadingStatus = false;

  onMount(async () => {
    await fetchItems(); // 초기 데이터 로드

    const unsubscribeItems = items.subscribe(value => {
      itemList = value;
    });

    const unsubscribeLoading = loading.subscribe(value => {
      loadingStatus = value;
    });

    // 컴포넌트가 언마운트될 때 구독 해제
    return () => {
      unsubscribeItems();
      unsubscribeLoading();
    };
  });

  function handleScroll() {
    const innerHeight = Number(window.innerHeight);
    const scrollY = Number(window.scrollY);
    // const offsetHeight = Number(document.body.offsetHeight);
    const offsetHeight = Number(document.documentElement.scrollHeight);
    if ((innerHeight + scrollY) >= offsetHeight - 100 && !loadingStatus) {
      fetchItems();
    }

    console.log("innerHeight + scrollY :: " + (innerHeight + scrollY));
    console.log("offsetHeight :: " + offsetHeight);
  }

  window.addEventListener('scroll', handleScroll);

  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  
</script>

<ul>
  {#each itemList as item}
    <li>{item.name}</li>
  {/each}
</ul>

{#if loadingStatus}
  <p>Loading...</p>
{/if}
