window.loadLoginModal = function () {
  const existing = document.getElementById('memberModal');
  if (existing) {
    const modal = new bootstrap.Modal(existing);
    modal.show();
    return;
  }

  const modalHtml = `
  <div class="modal fade loginForm" id="memberModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content p-3">
      <div class="modal-header border-0">
        <h5 class="modal-title fw-bold" id="memberModalLabel">
          <span id="tabLogin" class="text-danger tab-switch" role="button">登入Login</span>
          <span id="tabRegister" class="tab-switch" role="button">註冊Register</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <!-- 登入區塊 -->
        <div id="loginForm">
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="使用者帳號">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" placeholder="密碼">
          </div>
          <div class="mb-3 d-flex align-items-center gap-2">
            <input type="text" class="form-control w-50" placeholder="驗證碼">
            <span class="fw-bold text-warning fs-5">4205</span>
            <button type="button" class="btn btn-outline-secondary btn-change">在換一個 <i class="fas fa-redo"></i></button>
          </div>
          <div class="text-end mb-3">
            <a href="#" class="text-decoration-none text-primary small">忘記密碼？</a>
          </div>
          <div class="d-grid mb-3">
            <button class="btn btn-primary">登入</button>
          </div>
          <hr>
          <div class="text-center text-muted mb-2 small">或使用其他系統登入</div>
          <div class="d-flex gap-2 justify-content-center">
            <button class="btn btn-outline-secondary">
              <i class="fab fa-facebook-f me-1"></i> 登入
            </button>
            <button class="btn btn-outline-secondary">
              <i class="fab fa-google me-1"></i> 登入
            </button>
            <button class="btn btn-outline-secondary">
              <i class="fab fa-line me-1"></i> 登入
            </button>
          </div>
        </div>

        <!-- 註冊區塊 -->
        <div id="registerForm" class="d-none">
          <div class="mb-2"><input type="text" class="form-control" placeholder="暱稱"></div>
          <div class="mb-2"><input type="email" class="form-control" placeholder="Email"></div>
          <div class="mb-2"><input type="password" class="form-control" placeholder="密碼"></div>
          <div class="mb-2"><input type="password" class="form-control" placeholder="確認密碼"></div>
          <div class="mb-2">
            <select class="form-select">
              <option selected>請選擇自設問題...</option>
              <option>您母親的名字？</option>
              <option>您第一隻寵物名？</option>
            </select>
          </div>
          <div class="mb-2"><input type="text" class="form-control" placeholder="自設問題回答"></div>
          <div class="mb-2 row">
            <label class="col-3 mb-1">生日</label>
            <div class="col-3">
              <select class="form-select"><option>年</option></select>
            </div>
            <div class="col-3">
              <select class="form-select"><option>月</option></select>
            </div>
            <div class="col-3">
              <select class="form-select"><option>日</option></select>
            </div>
          </div>
          <div class="small text-muted my-3">
            當您要繼續註冊，請先閱讀並同意特思得大飯店的
            <a href="#">服務條款</a> 與 <a href="#">隱私權政策</a>
          </div>
          <div class="d-grid">
            <button class="btn btn-success">註冊</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `;
  const div = document.createElement("div");
  div.innerHTML = modalHtml.trim();
  document.body.appendChild(div.firstChild);

  const modal = new bootstrap.Modal(document.getElementById("memberModal"));
  modal.show();

  document.getElementById("tabLogin").addEventListener("click", function () {
  this.classList.add("text-danger");
  this.classList.remove("text-muted");
  document.getElementById("tabRegister").classList.remove("text-danger");
  document.getElementById("tabRegister").classList.add("text-muted");
  document.getElementById("loginForm").classList.remove("d-none");
  document.getElementById("registerForm").classList.add("d-none");
});

document.getElementById("tabRegister").addEventListener("click", function () {
  this.classList.add("text-danger");
  this.classList.remove("text-muted");
  document.getElementById("tabLogin").classList.remove("text-danger");
  document.getElementById("tabLogin").classList.add("text-muted");
  document.getElementById("loginForm").classList.add("d-none");
  document.getElementById("registerForm").classList.remove("d-none");
});

};
