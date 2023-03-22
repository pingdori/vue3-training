<template>
  <div class="py-5" style="background-color: #343d4b">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"
      >
        <img src="../../public/Logo1.png" alt="" class="img-fluid" />
        <div class="container" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center"
          >
            <!-- <li class="nav-item mx-3">
              <router-link to="/" class="nav-link">寶可夢圖鑑</router-link>
            </li> -->
            <li class="nav-item mx-3">
              <router-link to="/products" class="nav-link">周邊</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/articles" class="nav-link">文章</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <p class="mb-0 text-center">
          © 2017-2021 Pokémonhubs | ALL RIGHTS RESERVED <br />
          Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company
          2001-2023 All images and names owned and trademarked by Nintendo,
          Niantic, The Pokémon Company, and Gamefreak are property of their
          respective owners.
        </p>
        <ul class="navbar-nav me-auto d-flex justify-content-between">
          <li class="nav-item mx-3 text-white">
            <router-link to="/login" class="nav-link"
              ><span class="bi bi-box-arrow-in-right fs-5"></span
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
