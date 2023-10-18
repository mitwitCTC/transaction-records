<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          type: "折抵",
          station: "西園1",
          seller: "56632513",
          plate: "XXX-111",
          account: "ABC111",
          balance: 450,
          invoice: "QW123456789",
          amount: 50,
          randonCode: "111",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 2,
          type: "儲值",
          station: "西園2",
          seller: "56632513",
          plate: "XXX-222",
          account: "ABC222",
          balance: 1550,
          invoice: "QW123456789",
          amount: 1000,
          randonCode: "222",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 3,
          type: "折抵",
          station: "西園3",
          seller: "56632513",
          plate: "XXX-333",
          account: "ABC333",
          balance: 450,
          invoice: "QW123456789",
          amount: 50,
          randonCode: "333",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 4,
          type: "儲值",
          station: "西園4",
          seller: "56632513",
          plate: "XXX-444",
          account: "ABC444",
          balance: 550,
          invoice: "QW123456789",
          amount: 500,
          randonCode: "444",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 5,
          type: "折抵",
          station: "西園3",
          seller: "56632513",
          plate: "XXX-555",
          account: "ABC555",
          balance: 450,
          invoice: "QW123456789",
          amount: 50,
          randonCode: "555",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 6,
          type: "儲值",
          station: "西園2",
          seller: "56632513",
          plate: "XXX-666",
          account: "ABC666",
          balance: 550,
          invoice: "QW123456789",
          amount: 500,
          randonCode: "666",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 7,
          type: "折抵",
          station: "西園3",
          seller: "56632513",
          plate: "XXX-777",
          account: "ABC777",
          balance: 450,
          invoice: "QW123456789",
          amount: 50,
          randonCode: "777",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 8,
          type: "儲值",
          station: "西園2",
          seller: "56632513",
          plate: "XXX-888",
          account: "ABC888",
          balance: 550,
          invoice: "QW123456789",
          amount: 500,
          randonCode: "888",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 9,
          type: "折抵",
          station: "西園3",
          seller: "56632513",
          plate: "XXX-999",
          account: "ABC999",
          balance: 450,
          invoice: "QW123456789",
          amount: 50,
          randonCode: "999",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 10,
          type: "儲值",
          station: "西園2",
          seller: "56632513",
          plate: "XXX-1010",
          account: "ABC1010",
          balance: 550,
          invoice: "QW123456789",
          amount: 500,
          randonCode: "000",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
        {
          id: 11,
          type: "折抵",
          station: "西園3",
          seller: "56632513",
          plate: "XXX-1111",
          account: "ABC1111",
          balance: 450,
          invoice: "QW123456789",
          amount: 50,
          randonCode: "1111",
          issueDate: "2023-10-04",
          entryTime: "2023-10-04 11:11:11",
          departTime: "2023-10-04 11:11:11",
          buyer: "12345678"
        },
      ],
      paginatedData: [],
      pageSize: 10,
      currentPage: 1,
      hasPrevious: null,
      hasNext: null,
      pageTotal: "",
      searchFrom: "",
      searchTo: "",
    }
  },
  methods: {
    pageCount() {
      const pageSize = 10; // 每頁資料量
      this.pageTotal = Math.ceil(this.transactions.length / this.pageSize);
    },
    pagination(transactions) {
      this.paginatedData = []
      for (let i = 0; i < this.pageTotal; i++) {
        const startIndex = i * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const pageData = this.transactions.slice(startIndex, endIndex);
        this.paginatedData.push(pageData);
      }
    },
    gotoPage(page) {
      if (page >= 0 && page < this.pageTotal) {
        this.currentPage = page;
      }
    },
  },
  mounted() {
    this.pageCount();
    this.pagination();
  }
}
</script>

<template>
  <div class="header">
    <p class="text-center text-white fs-3 bg-primary py-3">
      儲值明細
    </p>
  </div>
  <div class="container">
    <div class="search d-flex justify-content-between align-items-center mt-3">
      <section>
        <p class="me-3">請選擇區間搜尋</p>
        <input type="date" class="pe-3 me-2" v-model="searchFrom">
        <span>～ </span>
        <input type="date" class="pe-3 me-2" v-model="searchTo">
        <button class="btn btn-primary text-white">搜尋</button>
        <p class="text-danger">僅顯示近三個月的資料</p>
      </section>
      <section>
        <button class="btn btn-primary text-white">匯出</button>
      </section>
    </div>
  </div>
  <div class="container mt-3 ">
    <div style="overflow-x: scroll;">
      <table class="table  table-striped text-nowrap text-center">
        <thead>
          <tr class="fs-6">
            <th scope="col" class="fw-bold">儲值種類</th>
            <th scope="col" class="fw-bold">場站</th>
            <th scope="col" class="fw-bold">賣方統編</th>
            <th scope="col" class="fw-bold">車號</th>
            <th scope="col" class="fw-bold">帳號</th>
            <th scope="col" class="fw-bold">帳戶餘額</th>
            <th scope="col" class="fw-bold">發票號碼</th>
            <th scope="col" class="fw-bold">金額</th>
            <th scope="col" class="fw-bold">隨機碼</th>
            <th scope="col" class="fw-bold">發票日期</th>
            <th scope="col" class="fw-bold">入場時間</th>
            <th scope="col" class="fw-bold">變動時間</th>
            <th scope="col" class="fw-bold">買方統編</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in transactions" :key="item.id" class="fs-6 py-1">
            <th scope="row">{{ item.type }}</th>
            <td>{{ item.station }}</td>
            <td>{{ item.seller }}</td>
            <td>{{ item.plate }}</td>
            <td>{{ item.account }}</td>
            <td>$
              {{ item.balance.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') }}
            </td>
            <td>{{ item.invoice }}</td>
            <td>$
              {{ item.amount.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') }}
            </td>
            <td>{{ item.randonCode }}</td>
            <td>{{ item.issueDate }}</td>
            <td>{{ item.entryTime }}</td>
            <td>{{ item.departTime }}</td>
            <td>{{ item.buyer }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav class="mt-3 d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pageTotal">
          <a class="page-link" @click="gotoPage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
table {
  max-width: 1200px;
}
</style>
