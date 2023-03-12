export default {
  props: ["pages", "getProducts"],
  //要將外層的方法傳入
  //----Props寫法----
  // template: `<nav aria-label="Page navigation example">
  //   {{pages}}
  //   <ul class="pagination">
  //     <li class="page-item" :class="{disabled:!pages.has_pre}">
  //       <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProducts(pages.current_page -1)">
  //         <span aria-hidden="true">&laquo;</span>
  //       </a>
  //     </li>

  //     <li class="page-item"
  //     :class="{active:page===pages.current_page}"
  //     v-for="page in pages.total_pages" :key="page+'page'">
  //     <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
  //     </li>

  //     <li class="page-item" :class="{disabled:!pages.has_next}">
  //       <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pages.current_page +1)">
  //         <span aria-hidden="true">&raquo;</span>
  //       </a>
  //     </li>
  //   </ul>
  // </nav>`,
  //----emit寫法------
  //點擊@click.prevent跳頁時，透過emit觸發外層事件，過程中會透過pagination元件，觸發外層getProducts
  template: `<nav aria-label="Page navigation example">
  {{pages}}
  <ul class="pagination">
    <li class="page-item"
    :class="{disabled:!pages.has_pre}">

      <a class="page-link"
      href="#" aria-label="Previous"
      @click.prevent="getProducts(pages.current_page - 1)">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

    <li class="page-item"
    :class="{active:page===pages.current_page}"
    v-for="page in pages.total_pages"
    :key="page+'page'">

    <a class="page-link" href="#"
    @click.prevent="$emit('change-page',page)">
    {{page}}</a>
    </li>

    <li class="page-item"
    :class="{disabled:!pages.has_next}">
      <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pages.current_page +1)">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
  </nav>`,
};
