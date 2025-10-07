document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page reload
    const task = input.value.trim();
    if (task !== '') {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
      input.value = ''; // optional: clear input
    }
  });
});
