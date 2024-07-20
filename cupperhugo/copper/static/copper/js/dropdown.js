
    document.addEventListener('DOMContentLoaded', function () {
      const dropdownButton = document.getElementById('dropdownNavbarLink');
      const dropdownMenu = document.getElementById('dropdownNavbar');

      dropdownButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('hidden');
      });

      // Close the dropdown when clicking outside of it
      document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.add('hidden');
        }
      });
    });
