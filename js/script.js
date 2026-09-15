$(document).ready(function () {
    function toggleDrawer() {
      const isOpen = $('#mobileDrawer').hasClass('open');

      if (!isOpen) {
        $('#mobileDrawer').addClass('open');
        $('#drawerOverlay').addClass('active');
        $('.icon-hamburger').addClass('d-none');
        $('.icon-arrow').removeClass('d-none');
        $('body').css('overflow', 'hidden'); // Locks background scroll
      } else {
        $('#mobileDrawer').removeClass('open');
        $('#drawerOverlay').removeClass('active');
        $('.icon-hamburger').removeClass('d-none');
        $('.icon-arrow').addClass('d-none');
        $('body').css('overflow', '');
      }
    }

    $('#menuToggle, #drawerOverlay').on('click', function () {
      toggleDrawer();
    });
  });