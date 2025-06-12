const toggleBtn = document.querySelector('.toggle-btn');
const policyBox = document.querySelector('.policy-box');

toggleBtn.addEventListener('click', () => {
  const isExpanded = policyBox.classList.contains('expanded');

  if (isExpanded) {
    policyBox.style.maxHeight = policyBox.scrollHeight + 'px';
    requestAnimationFrame(() => {
      policyBox.style.maxHeight = '7.5em';
    });
    policyBox.classList.remove('expanded');
    toggleBtn.textContent = '＋ 展開';
  } else {
    policyBox.style.maxHeight = policyBox.scrollHeight + 'px';
    policyBox.classList.add('expanded');
    toggleBtn.textContent = '－ 收起';
  }
});
